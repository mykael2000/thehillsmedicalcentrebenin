'use client';

// import Link from 'next/link';
import Image from 'next/image';
import CTA from '@/components/sections/CTA';

export default function OutpatientCare() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-white pt-32 pb-24 sm:pt-40 sm:pb-32">
        <div className="mx-auto px-6 lg:px-8" style={{ maxWidth: '1428px' }}>
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-semibold text-gray-600 mb-8">• OUTPATIENT CARE</p>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl mb-8">
              Comprehensive Outpatient <span className="italic font-light font-serif">Services</span>
            </h1>
            <p className="text-lg leading-8 text-gray-600 mb-12 max-w-3xl mx-auto">
              Comprehensive outpatient services for non-emergency medical needs, providing quality care without hospital admission.
            </p>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-24 sm:py-32 bg-gray-50">
        <div className="mx-auto px-6 lg:px-8" style={{ maxWidth: '1428px' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Outpatient Services</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-[#094635] rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-green-100" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Same-Day Procedures</h3>
                    <p className="text-gray-600">Minor surgical procedures that don&rsquo;t require overnight stays.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-[#094635] rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-green-100" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Diagnostic Services</h3>
                    <p className="text-gray-600">Comprehensive diagnostic testing and imaging services.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-[#094635] rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-green-100" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Follow-up Care</h3>
                    <p className="text-gray-600">Ongoing monitoring and follow-up appointments for continued care.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-[#094635] rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-green-100" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Consultation Services</h3>
                    <p className="text-gray-600">Expert medical consultations with our specialist physicians.</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
               {/* Image */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl bg-gray-100 overflow-hidden">
                <Image
                  src="/assets/outpatient.jpg"
                  alt="Modern surgical facility"
                  width={600}
                  height={450}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
}