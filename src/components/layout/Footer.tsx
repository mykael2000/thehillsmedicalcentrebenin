'use client';

import Link from 'next/link';
// import { useState } from 'react';

const navigation = {
  company: [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
     { name: 'Contact', href: '/contact' },
     { name: 'News & Articles', href: '/news' },
  ],
  services: [
    { name: 'Outpatient Care', href: '/services/outpatient-care' },
    { name: 'Radiology', href: '/services/radiology' },
    { name: 'Critical and Emergency Care', href: '/cservices/ritical-emergency-care' },
    { name: 'Laboratory', href: '/services/laboratory' },
  ],
  services2: [
    { name: 'Nephrology & Dialysis', href: '/services/nephrology' },
    { name: 'Cardiology', href: '/services/cardiology' },
    { name: 'Paediatrics', href: '/services/paediatrics' },
    { name: 'Orthopedics and Trauma', href: '/services/orthopedics' },
    { name: 'General Surgery', href: '/services/surgery' },
  ],
};

export default function Footer() {
  // const [email, setEmail] = useState('');

  // Removed unused handleSubmit to fix lint warning:
  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   // Handle newsletter subscription
  //   console.log('Newsletter subscription:', email);
  //   setEmail('');
  // };

  return (
    <footer className="bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        {/* Testimonial Section */}
        <div className="mb-16 rounded-2xl bg-gradient-to-r from-teal-800 to-green-900 p-8 text-white">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="flex-1">
              <p className="text-lg font-medium mb-6">
                &ldquo;Compassionate, high-quality healthcare with modern facilities and trusted specialists.&rdquo;
              </p>
              {/* <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-gray-300 overflow-hidden">
                  <img 
                    src="/api/placeholder/48/48" 
                    alt="Maya Chen" 
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold">Maya Chen</p>
                  <p className="text-sm text-teal-200">Founder & CEO</p>
                </div>
              </div> */}
            </div>
            <div className="flex-shrink-0">
              <Link href="/book-appointment" className="rounded-lg bg-white px-6 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-100 transition-colors">
                Book Appointment
              </Link>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8 mb-12">
          {/* COMPANY */}
          <div>
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">
              COMPANY
            </h3>
            <ul className="space-y-3">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-gray-700 hover:text-gray-900">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">
              SERVICES
            </h3>
            <ul className="space-y-3">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-gray-700 hover:text-gray-900">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">
              MORE SERVICES
            </h3>
            <ul className="space-y-3">
              {navigation.services2.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-gray-700 hover:text-gray-900">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">
             Reach out to us
            </h3>
            {/* Contact Information */}
            <div className="space-y-3">
              {/* Phone Numbers */}
              <div className="space-y-2">
                <a 
                  href="tel:+2348079488374" 
                  className="block text-sm text-gray-600 hover:text-teal-800 transition-colors duration-200"
                >
                  📞 +234 807 948 8374
                </a>
                <a 
                  href="tel:+2348162187060" 
                  className="block text-sm text-gray-600 hover:text-teal-800 transition-colors duration-200"
                >
                  📞 +234 816 218 7060
                </a>
              </div>
              
              {/* Email */}
              <a 
                href="mailto:info@thehillsmedicalcenter.com" 
                className="block text-sm text-gray-600 hover:text-teal-800 transition-colors duration-200"
              >
                ✉️ info@thehillsmedicalcenter.com
              </a>
              
              {/* Location */}
              <a 
                href="https://maps.google.com/?q=98+Godwin+Abbe+Way+Etete+GRA+Benin+City+Edo+State+Nigeria+300102" 
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm text-gray-600 hover:text-teal-800 transition-colors duration-200"
              >
                📍 98, Godwin Abbe Way, Etete, G.R.A., Benin City, Edo State, Nigeria 300102
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
            {/* Copyright and Legal */}
            <div className="flex-1 max-w-none">
              <p className="text-xs text-gray-500 mb-2">
                © Copyright 2025. All Rights Reserved, Hills Medical Center
              </p>
              <p className="text-xs text-gray-400 leading-relaxed">
                Hills Medical Center remains committed to providing exceptional healthcare services built on trust, compassion, and innovation. We believe that every patient deserves personalized care, advanced medical support, and a warm, understanding environment that promotes healing. Our team of dedicated professionals continues to uphold the highest standards in medical excellence, ensuring that every visit leads to better health outcomes. From preventive care to specialized treatments, we strive to make your wellness journey seamless and reassuring. Thank you for trusting Hills Medical Center—your lifelong partner in health, healing, and hope.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}