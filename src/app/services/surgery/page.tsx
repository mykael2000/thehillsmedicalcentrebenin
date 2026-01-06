'use client';

import CTA from '@/components/sections/CTA';
import Image from 'next/image';

export default function Surgery() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-white pt-32 pb-24 sm:pt-40 sm:pb-32">
        <div className="mx-auto px-6 lg:px-8" style={{ maxWidth: '1428px' }}>
          <div className="mx-auto max-w-4xl text-center">
            {/* Service Label */}
            <p className="text-sm font-semibold text-gray-600 mb-8">• SURGICAL SERVICES</p>
            
            {/* Main Heading */}
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl mb-8">
              Advanced <span className="italic font-light font-serif">Surgical</span> Excellence
            </h1>
            
            {/* Description */}
            <p className="text-lg leading-8 text-gray-600 mb-12 max-w-3xl mx-auto">
              State-of-the-art surgical procedures performed by experienced surgeons using the latest minimally invasive techniques and technology.
            </p>
          </div>
        </div>
      </section>

      {/* Service Details Section */}
      <section className="py-24 sm:py-32 bg-gray-50">
        <div className="mx-auto px-6 lg:px-8" style={{ maxWidth: '1428px' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-8">
                Comprehensive Surgical Care
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our surgical department offers a full range of surgical procedures, from routine operations to complex specialized surgeries. Our board-certified surgeons are committed to providing the highest quality care using advanced surgical techniques and state-of-the-art equipment.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                We prioritize patient safety, comfort, and optimal outcomes through personalized surgical plans and comprehensive pre- and post-operative care.
              </p>
              
              {/* Services List */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Surgical Services Include:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-600 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700"><strong>General Surgery:</strong> Appendectomy, hernia repair, gallbladder surgery</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-600 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700"><strong>Laparoscopic Surgery:</strong> Minimally invasive abdominal procedures</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-600 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700"><strong>Cardiovascular Surgery:</strong> Heart and vascular procedures</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-600 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700"><strong>Neurosurgery:</strong> Brain and spinal cord procedures</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-600 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700"><strong>Plastic Surgery:</strong> Reconstructive and cosmetic procedures</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-600 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700"><strong>Emergency Surgery:</strong> Trauma and urgent surgical interventions</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl bg-gray-100 overflow-hidden">
                <Image
                  src="/assets/surgical-set.jpg"
                  alt="Modern surgical facility"
                  width={600}
                  height={450}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 sm:py-32 bg-gray-50">
        <div className="mx-auto px-6 lg:px-8" style={{ maxWidth: '1428px' }}>
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">
              Why Choose Our Surgical Services
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#094635] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Advanced Safety Protocols</h3>
              <p className="text-gray-600">Rigorous safety measures and infection control protocols to ensure patient wellbeing.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#094635] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Surgical Team</h3>
              <p className="text-gray-600">Highly skilled surgeons, anesthesiologists, and surgical nurses working together.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#094635] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Minimally Invasive Techniques</h3>
              <p className="text-gray-600">Advanced laparoscopic and robotic surgery for faster recovery and better outcomes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA />
    </div>
  );
}