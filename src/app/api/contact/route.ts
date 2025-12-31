import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
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

    // Acknowledgement email to user
    const ackSubject = 'We received your contact request';
    const ackText = `Hi ${name},

Thanks for reaching out to Hills Medical Center. We have received your message and will get back to you within 24 hours.

Best regards,
Hills Medical Center`;
    const ackHtml = `<p>Hi ${name},</p><p>Thanks for reaching out to Hills Medical Center. We have received your message and will get back to you within 24 hours.</p><p>Best regards,<br/>Hills Medical Center</p>`;

    const userParams = new URLSearchParams({
      from: fromEmail,
      to: email,
      subject: ackSubject,
      text: ackText,
      html: ackHtml,
      'h:Reply-To': 'info@thehillsmedicalcentrebenin.org'
    });

    // Internal notification email
    const internalSubject = `New Contact Request: ${name} (${email})`;
    const internalText = `Name: ${name}
Email: ${email}
Phone: ${phone || 'N/A'}
Message:
${message}

Submitted: ${new Date().toISOString()}`;
    const internalHtml = `
      <h3>New Contact Request</h3>
      <p><b>Name:</b> ${name}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Phone:</b> ${phone || 'N/A'}</p>
      <p><b>Message:</b><br/>${message.replace(/\n/g, '<br/>')}</p>
      <p><i>Submitted: ${new Date().toLocaleString()}</i></p>
    `;

    const internalParams = new URLSearchParams({
      from: fromEmail,
      to: toInternal, // will be info@thehillsmedicalcentrebenin.org
      subject: internalSubject,
      text: internalText,
      html: internalHtml,
      'h:Reply-To': email
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
    console.error('contact route error', err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}