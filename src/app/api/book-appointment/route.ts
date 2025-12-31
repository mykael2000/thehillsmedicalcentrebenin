import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const form = await req.json();

    const required = ['firstName', 'lastName', 'email', 'phone', 'dateOfBirth', 'service', 'doctor', 'appointmentDate', 'appointmentTime', 'reason', 'emergencyContact', 'emergencyPhone', 'medicalHistory'];
    const missing = required.filter((k) => !String(form[k] ?? '').trim());
    if (missing.length) {
      return NextResponse.json({ error: `Missing required fields: ${missing.join(', ')}` }, { status: 400 });
    }

    const mgApiKey = process.env.MAILGUN_API_KEY;
    const mgDomain = process.env.MAILGUN_DOMAIN;
    const fromEmail = process.env.MAILGUN_FROM || `Hills Medical Center <info@${mgDomain}>`;
    const toInternal = process.env.MAILGUN_TO;
    const apiBase = process.env.MAILGUN_API_BASE || 'https://api.mailgun.net';
    const endpoint = `${apiBase}/v3/${mgDomain}/messages`;

    if (!mgApiKey || !mgDomain || !toInternal) {
      return NextResponse.json({ error: 'Server email configuration missing' }, { status: 500 });
    }

    const auth = 'Basic ' + Buffer.from(`api:${mgApiKey}`).toString('base64');

    // Acknowledgement email to patient
    const patientName = `${form.firstName} ${form.lastName}`.trim();
    const ackSubject = 'Your appointment request has been received';
    const ackText = `Hi ${patientName},

Thanks for booking an appointment at Hills Medical Center. We have received your request and will reach out to confirm your appointment.

Summary:
• Service: ${form.service}
• Doctor: ${form.doctor}
• Preferred Date: ${form.appointmentDate}
• Preferred Time: ${form.appointmentTime}

If you need to make changes, reply to this email.

Best regards,
Hills Medical Center`;
    const ackHtml = `
      <p>Hi ${patientName},</p>
      <p>Thanks for booking an appointment at Hills Medical Center. We have received your request and will reach out to confirm your appointment.</p>
      <p><b>Summary:</b><br/>
      • Service: ${form.service}<br/>
      • Doctor: ${form.doctor}<br/>
      • Preferred Date: ${form.appointmentDate}<br/>
      • Preferred Time: ${form.appointmentTime}</p>
      <p>If you need to make changes, reply to this email.</p>
      <p>Best regards,<br/>Hills Medical Center</p>
    `;

    const userParams = new URLSearchParams({
      from: fromEmail,
      to: form.email,
      subject: ackSubject,
      text: ackText,
      html: ackHtml,
      'h:Reply-To': 'info@thehillsmedicalcentrebenin.org'
    });

    // Internal notification email
    const internalSubject = `New Appointment Request: ${patientName} (${form.email})`;
    const internalText = `Patient: ${patientName}
Email: ${form.email}
Phone: ${form.phone}
Date of Birth: ${form.dateOfBirth}

Service: ${form.service}
Doctor: ${form.doctor}
Preferred Date: ${form.appointmentDate}
Preferred Time: ${form.appointmentTime}

Reason:
${form.reason}

Emergency Contact: ${form.emergencyContact}
Emergency Phone: ${form.emergencyPhone}

Medical History:
${form.medicalHistory}

Insurance Provider: ${form.insuranceProvider || 'N/A'}

Submitted: ${new Date().toISOString()}`;
    const internalHtml = `
      <h3>New Appointment Request</h3>
      <p><b>Patient:</b> ${patientName}</p>
      <p><b>Email:</b> ${form.email}</p>
      <p><b>Phone:</b> ${form.phone}</p>
      <p><b>Date of Birth:</b> ${form.dateOfBirth}</p>
      <p><b>Service:</b> ${form.service}</p>
      <p><b>Doctor:</b> ${form.doctor}</p>
      <p><b>Preferred Date:</b> ${form.appointmentDate}</p>
      <p><b>Preferred Time:</b> ${form.appointmentTime}</p>
      <p><b>Reason:</b><br/>${String(form.reason).replace(/\n/g, '<br/>')}</p>
      <p><b>Emergency Contact:</b> ${form.emergencyContact}</p>
      <p><b>Emergency Phone:</b> ${form.emergencyPhone}</p>
      <p><b>Medical History:</b><br/>${String(form.medicalHistory).replace(/\n/g, '<br/>')}</p>
      <p><b>Insurance Provider:</b> ${form.insuranceProvider || 'N/A'}</p>
      <p><i>Submitted: ${new Date().toLocaleString()}</i></p>
    `;

    const internalParams = new URLSearchParams({
      from: fromEmail,
      to: toInternal, // will be info@thehillsmedicalcentrebenin.org
      subject: internalSubject,
      text: internalText,
      html: internalHtml,
      'h:Reply-To': form.email
    });

    const sendUser = await fetch(endpoint, {
      method: 'POST',
      headers: { Authorization: auth, 'Content-Type': 'application/x-www-form-urlencoded' },
      body: userParams
    });

    const sendInternal = await fetch(endpoint, {
      method: 'POST',
      headers: { Authorization: auth, 'Content-Type': 'application/x-www-form-urlencoded' },
      body: internalParams
    });

    if (!sendUser.ok || !sendInternal.ok) {
      const bodyUser = await sendUser.text();
      const bodyInternal = await sendInternal.text();
      const details = {
        user: { status: sendUser.status, statusText: sendUser.statusText, body: bodyUser },
        internal: { status: sendInternal.status, statusText: sendInternal.statusText, body: bodyInternal },
      };
      const statusCode = (sendUser.status >= 500 || sendInternal.status >= 500) ? 502 : 400;
      return NextResponse.json({ error: 'Email provider rejected request', details }, { status: statusCode });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('book-appointment route error', err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}