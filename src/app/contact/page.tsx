'use client';

import { useState } from 'react';
import CTA from '@/components/sections/CTA';
import { toast } from 'react-hot-toast';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
  const isPhone = (v: string) => v === '' || /^\+?[0-9()\s-]{7,20}$/.test(v);
  const validate = () => {
    const e: Record<string, string> = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) e.name = 'Name must be at least 2 characters';
    if (!isEmail(formData.email.trim())) e.email = 'Enter a valid email';
    if (!isPhone(formData.phone.trim())) e.phone = 'Enter a valid phone number';
    if (!formData.message.trim() || formData.message.trim().length < 10) e.message = 'Message must be at least 10 characters';
    return e;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const eMap = validate();
    if (Object.keys(eMap).length) {
      setErrors(eMap);
      setStatus('error');
      toast.error('Please fix validation errors and try again.');
      return;
    }
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus('success');
        toast.success('Message sent! We’ve received your contact request.');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        const data = await res.json().catch(() => ({}));
        setStatus('error');
        toast.error(`Failed to send message${data?.error ? `: ${data.error}` : ''}`);
      }
    } catch {
      setStatus('error');
      toast.error('Network error. Please try again.');
    }
  };

  return (
    <div>
      {/* Contact Section */}
      <section className="relative bg-white pt-32 pb-24 sm:pt-40 sm:pb-32">
        <div className="mx-auto px-6 lg:px-8" style={{ maxWidth: '1428px' }}>
          <div className="text-center mb-16">
            {/* Contact Label */}
            <p className="text-sm font-semibold text-gray-600 mb-8">• CONTACT</p>
            
            {/* Main Heading */}
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl mb-8">
              Get in Touch
            </h1>
            
            {/* Description */}
            <p className="text-lg leading-8 text-gray-600 mb-12 max-w-2xl mx-auto">
              We&rsquo;d love to hear from you. Fill out the form and we&rsquo;ll respond within 24 hours
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Form */}
            <div className="bg-white">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    aria-invalid={!!errors.name}
                    className="w-full px-0 py-4 text-gray-900 placeholder-gray-500 border-0 border-b border-gray-300 bg-transparent focus:border-gray-900 focus:outline-none focus:ring-0 text-lg"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    aria-invalid={!!errors.email}
                    className="w-full px-0 py-4 text-gray-900 placeholder-gray-500 border-0 border-b border-gray-300 bg-transparent focus:border-gray-900 focus:outline-none focus:ring-0 text-lg"
                  />
                </div>

                {/* Phone Field */}
                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone (optional)"
                    value={formData.phone}
                    onChange={handleInputChange}
                    aria-invalid={!!errors.phone}
                    className="w-full px-0 py-4 text-gray-900 placeholder-gray-500 border-0 border-b border-gray-300 bg-transparent focus:border-gray-900 focus:outline-none focus:ring-0 text-lg"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <textarea
                    name="message"
                    placeholder="Message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    aria-invalid={!!errors.message}
                    className="w-full px-0 py-4 text-gray-900 placeholder-gray-500 border-0 border-b border-gray-300 bg-transparent focus:border-gray-900 focus:outline-none focus:ring-0 text-lg resize-none"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-8">
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full bg-[#094635] text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-[#052B20] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[#094635] focus:ring-offset-2"
                  >
                    {status === 'loading' ? 'Sending...' : 'Submit'}
                  </button>
                  {status === 'success' && (
                    <p className="mt-4 text-green-700">Message sent! Please check your email for confirmation.</p>
                  )}
                  {status === 'error' && (
                    <p className="mt-4 text-red-600">Something went wrong. Please try again.</p>
                  )}
                </div>
              </form>
            </div>

            {/* Contact Information Cards */}
            <div className="space-y-0">
              <div className="bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl p-8 text-white">
                {/* Make grid single column on mobile to prevent overflow */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 h-full">
                  {/* General Enquiries */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 flex flex-col justify-center">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-white mb-2">General enquiries</h3>
                    <p className="text-white/80 text-sm break-words">hello@hillsmedical.com</p>
                  </div>

                  {/* Customer Support */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 flex flex-col justify-center">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-white mb-2">Customer support</h3>
                    <p className="text-white/80 text-sm break-words">support@hillsmedical.com</p>
                  </div>

                  {/* Phone */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 flex flex-col justify-center">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-white mb-2">Phone</h3>
                    <p className="text-white/80 text-sm break-words">+1 (800) 123-4567</p>
                  </div>

                  {/* Socials */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 flex flex-col justify-center">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-white mb-2">Socials</h3>
                    <div className="flex space-x-3">
                      <a href="#" className="text-white/80 hover:text-white transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </a>
                      <a href="#" className="text-white/80 hover:text-white transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA />
    </div>
  );
}