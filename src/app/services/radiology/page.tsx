'use client';

import CTA from '@/components/sections/CTA';
import Image from 'next/image';

export default function Radiology() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-white pt-32 pb-24 sm:pt-40 sm:pb-32">
        <div className="mx-auto px-6 lg:px-8" style={{ maxWidth: '1428px' }}>
          <div className="mx-auto max-w-4xl text-center">
            {/* Service Label */}
            <p className="text-sm font-semibold text-gray-600 mb-8">• RADIOLOGY SERVICES</p>
            
            {/* Main Heading */}
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl mb-8">
              Advanced <span className="italic font-light font-serif">Diagnostic Imaging</span> Services
            </h1>
            
            {/* Description */}
            <p className="text-lg leading-8 text-gray-600 mb-12 max-w-3xl mx-auto">
              State-of-the-art imaging technology and expert radiologists providing accurate diagnoses to support your healthcare journey.
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
                Comprehensive Imaging Solutions
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our radiology department is equipped with the latest imaging technology and staffed by experienced radiologists who provide accurate, timely diagnoses to support your treatment plan.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                From routine X-rays to advanced MRI and CT scans, we offer a full range of diagnostic imaging services in a comfortable, patient-centered environment.
              </p>
              
              {/* Services List */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Imaging Services Include:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-600 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600">Digital X-rays and Fluoroscopy</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-600 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600">CT Scans (Computed Tomography)</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-600 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600">MRI (Magnetic Resonance Imaging)</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-600 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600">Ultrasound Imaging</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-600 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600">Mammography</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Image */}
            <div className="relative">
              <div className="aspect-[4/3] relative rounded-2xl overflow-hidden">
                <Image
                  src="/assets/image12.jpeg"
                  alt="Radiology Department"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="mx-auto px-6 lg:px-8" style={{ maxWidth: '1428px' }}>
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Why Choose Our Radiology Services
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-[#094635] rounded-xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-green-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Advanced Technology</h3>
              <p className="text-gray-600">
                Latest imaging equipment ensuring high-quality, detailed images for accurate diagnosis.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-[#094635] rounded-xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-green-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Fast Results</h3>
              <p className="text-gray-600">
                Quick turnaround times with expert radiologist interpretation for timely treatment decisions.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-[#094635] rounded-xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-green-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.623 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Expert Radiologists</h3>
              <p className="text-gray-600">
                Board-certified radiologists with extensive experience in diagnostic imaging interpretation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA />
    </div>
  );
}