'use client';

import CTA from '@/components/sections/CTA';
import Image from 'next/image';

export default function Orthopaedics() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-white pt-32 pb-24 sm:pt-40 sm:pb-32">
        <div className="mx-auto px-6 lg:px-8" style={{ maxWidth: '1428px' }}>
          <div className="mx-auto max-w-4xl text-center">
            {/* Service Label */}
            <p className="text-sm font-semibold text-gray-600 mb-8">• ORTHOPAEDICS SERVICES</p>
            
            {/* Main Heading */}
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl mb-8">
              Advanced <span className="italic font-light font-serif">Bone & Joint</span> Care
            </h1>
            
            {/* Description */}
            <p className="text-lg leading-8 text-gray-600 mb-12 max-w-3xl mx-auto">
              Comprehensive orthopedic care for bones, joints, muscles, and ligaments with cutting-edge treatments and rehabilitation services.
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
                Expert Orthopedic Treatment
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Our orthopedics department specializes in the diagnosis, treatment, and rehabilitation of musculoskeletal conditions. Our board-certified orthopedic surgeons use the latest minimally invasive techniques and advanced technology to restore mobility and reduce pain.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                From sports injuries to joint replacements, we provide comprehensive care that gets you back to your active lifestyle as quickly and safely as possible.
              </p>
              
              {/* Services List */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Orthopedic Services Include:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-600 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700"><strong>Joint Replacement Surgery:</strong> Hip, knee, and shoulder replacements</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-600 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700"><strong>Arthroscopic Surgery:</strong> Minimally invasive joint procedures</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-600 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700"><strong>Sports Medicine:</strong> Athletic injury treatment and prevention</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-600 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700"><strong>Fracture Care:</strong> Comprehensive bone fracture treatment</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-600 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700"><strong>Spine Surgery:</strong> Treatment for back and neck conditions</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-green-600 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700"><strong>Physical Therapy:</strong> Rehabilitation and recovery programs</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl bg-gray-100 overflow-hidden">
                <Image
                  src="/assets/orthopaedics.jpg"
                  alt="Orthopedic treatment facility"
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
              Why Choose Our Orthopedic Care
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#094635] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Advanced Technology</h3>
              <p className="text-gray-600">State-of-the-art surgical equipment and minimally invasive techniques for better outcomes.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#094635] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Surgeons</h3>
              <p className="text-gray-600">Board-certified orthopedic surgeons with specialized training in various subspecialties.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#094635] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Comprehensive Rehabilitation</h3>
              <p className="text-gray-600">Complete recovery programs with physical therapy and ongoing support for optimal healing.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA />
    </div>
  );
}