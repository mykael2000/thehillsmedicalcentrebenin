'use client';

import Link from 'next/link';
import CTA from '@/components/sections/CTA';
import Image from 'next/image';

export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-white pt-32 pb-12 sm:pt-40 sm:pb-16">
        <div className="mx-auto px-6 lg:px-8" style={{ maxWidth: '1428px' }}>
          <div className="mx-auto max-w-4xl text-center">
            {/* About Us Label */}
            <p className="text-sm font-semibold text-gray-600 mb-8">• ABOUT US</p>
            
            {/* Main Heading */}
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl mb-8">
              Your premier destination <span className="italic font-light font-serif">for <br />advanced and compassionate healthcare</span>
            </h1>
            
            {/* Description */}
            <p className="text-lg leading-8 text-gray-600 mb-12 max-w-3xl mx-auto">
              We provide quality and comprehensive healthcare services, driven by compassion, to meet local needs while matching global standards of excellence.
            </p>
          </div>
          
          {/* Team Image */}
          <div className="mt-16 sm:mt-10 flex justify-center">
            <div className="relative rounded-2xl overflow-hidden" style={{ maxWidth: '896px'}}>
              <img
                src="/assets/image2.jpeg"
                alt="Hills medical consulting team"
                className="w-full h-[539px] object-cover"
                onError={(e) => {
                  // Fallback to a placeholder if image doesn't exist
                  e.currentTarget.src = "data:image/svg+xml,%3Csvg width='800' height='600' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' font-size='24' text-anchor='middle' dy='.3em' fill='%236b7280'%3ETeam Photo%3C/text%3E%3C/svg%3E";
                }}
              />
            </div>
          </div>
          
          {/* Grid Section Below Team Photo */}
          <div className="mt-8 sm:mt-2 flex justify-center">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 rounded-2xl overflow-hidden shadow-lg w-full max-w-[898px] lg:h-[361px]">
              <div className="bg-black p-8 sm:p-12 lg:p-16 flex flex-col justify-center rounded-2xl w-full lg:max-w-[448px] h-auto lg:h-[361px]">
                <h2 className="text-2xl sm:text-3xl lg:text-3xl font-semibold text-white mb-6 leading-normal break-words">
                   At Hills Medical Centre, we don&rsquo;t just treat&mdash;we help patients move forward with compassionate, advanced care
                </h2>
              </div>
              <div className="hidden sm:block relative overflow-hidden rounded-2xl w-full lg:max-w-[448px] h-64 sm:h-72 lg:h-[361px]">
                <video
                  className="absolute inset-0 w-full h-full object-cover"
                  src="/assets/hero.mp4"
                  poster="/assets/image1.jpeg"
                  autoPlay
                  muted
                  loop
                  playsInline
                />
                <div className="absolute inset-0 bg-black/20"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Additional About Content */}
       <section className="py-24 sm:py-32 bg-white">
        <div className="mx-auto px-6 lg:px-8" style={{ maxWidth: '1428px' }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <p className="text-gray-600 leading-relaxed mb-6">
                Since inception in 2019, we have grown into a trusted centre of excellence, combining
                cutting-edge medical technology, industry-standard facilities and a team of highly
                experienced healthcare professionals across a wide range of disciplines —cardiology,
                surgery, paediatrics, obstetrics & gynaecology, emergency care and more. <br />
          
                Our wide range of patient-focused services ensures that every individual who walks
                through our doors receives the highest quality of care in a safe, compassionate
                environment.
              </p>
            </div>
            <div>
              <p className="text-gray-600 leading-relaxed mb-8">
                Our multi-specialist, state-of-the-art facility was designed as a one-stop centre for
                comprehensive care. From routine consultations to complex procedures, every department
                is supported by the latest medical technology and internationally benchmarked protocols to
                deliver safe, high-quality clinical outcomes.<br />
              
                Our commitment to continuous improvement, investment in cutting-edge technology, and
                recruitment of outstanding healthcare professionals has positioned The Hills Medical
                Centre as a trusted hub for comprehensive healthcare in Benin City and a benchmark for
                quality in Nigeria.
              </p>
            </div>
          </div>
        </div>
        <div className="mx-auto px-6 lg:px-8" style={{ maxWidth: '1428px' }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To provide high-quality, compassionate, and innovative healthcare by combining skilled professionals, modern technology, and patient-first care practices. We are committed to improving health outcomes, saving lives, and ensuring every patient experiences dignity, safety, and hope.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be the most trusted and patient-centered medical centre in Benin and beyond, delivering world-class healthcare services that are accessible, affordable, and life-transforming.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-24 sm:py-32 bg-gray-50">
        <div className="mx-auto px-6 lg:px-8" style={{ maxWidth: '1428px' }}>
            <p className="text-sm font-semibold text-gray-600 mb-8 text-center">• OUR VALUES</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-3 auto-rows-[160px] gap-6 lg:gap-8">
            {/* Left column - tall card spanning two rows */}
            <div className="rounded-2xl bg-white p-6 border border-gray-100 row-span-2 h-full flex flex-col justify-end">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Compassion</h3>
              <p className="text-gray-600">We treat every patient with kindness, empathy, and respect.</p>
            </div>

            {/* Middle column - split the tall card into two */}
            <div className="rounded-2xl bg-white p-6 border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Excellence</h3>
              <p className="text-gray-600">We uphold the highest standards of medical practice and continuous improvement.</p>
            </div>
            <div className="rounded-2xl bg-white p-6 border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Innovation</h3>
              <p className="text-gray-600">We embrace technology and new approaches to enhance healthcare delivery.</p>
            </div>

            {/* Right column - top small card */}
            <div className="rounded-2xl bg-white p-6 border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Integrity</h3>
              <p className="text-gray-600">We are transparent, ethical, and accountable in all our dealings.</p>
            </div>

            {/* Right column - tall card spanning two rows */}
            <div className="rounded-2xl bg-white p-6 border border-gray-100 row-span-2 h-full flex flex-col justify-end">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Impact</h3>
              <p className="text-gray-600">We measure our success by the lives we save, the communities we serve, and the trust we build.</p>
            </div>

            {/* Bottom row - left and middle small cards */}
            <div className="rounded-2xl bg-white p-6 border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Accessibility</h3>
              <p className="text-gray-600">We are committed to making quality healthcare available and affordable for all.</p>
            </div>
            <div className="rounded-2xl bg-white p-6 border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Collaboration</h3>
              <p className="text-gray-600">We work as a unified team with patients, families, and partners to achieve better outcomes.</p>
            </div>
          </div>
        </div>
      </section>

       {/* Our Services */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="mx-auto px-6 lg:px-8" style={{ maxWidth: '1428px' }}>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold text-gray-600">• OUR SERVICES</p>
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-16">
             World class Healthcare that meets Global Standard, close to home
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Row 1 */}
            {/* Outpatient Care */}
            <Link href="/services/outpatient-care" className="group bg-gray-50 rounded-2xl p-8 hover:bg-gray-100 transition-colors cursor-pointer">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="mb-6">
                    <div className="w-16 h-16 rounded-xl flex items-center justify-center mb-4">
                      <Image src="/assets/body.svg" alt="Outpatient Care" width={64} height={64} />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Outpatient Care</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Comprehensive outpatient services for non-emergency medical needs with convenient scheduling and expert care.
                    </p>
                  </div>
                </div>
                <div className="ml-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-gray-400 group-hover:text-gray-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>

            {/* Radiology */}
            <Link href="/services/radiology" className="group bg-gray-50 rounded-2xl p-8 hover:bg-gray-100 transition-colors cursor-pointer">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="mb-6">
                    <div className="w-16 h-16 rounded-xl flex items-center justify-center mb-4">
                       <Image src="/assets/xray.svg" alt="Radiology" width={64} height={64} />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Radiology</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Advanced imaging services including X-rays, CT scans, MRI, ultrasound, and mammography with expert radiologists.
                    </p>
                  </div>
                </div>
                <div className="ml-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-gray-400 group-hover:text-gray-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>

            {/* Critical and Emergency Care */}
            <Link href="/services/critical-emergency-care" className="group bg-gray-50 rounded-2xl p-8 hover:bg-gray-100 transition-colors cursor-pointer">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="mb-6">
                    <div className="w-16 h-16 rounded-xl flex items-center justify-center mb-4">
                      <Image src="/assets/ambulance.svg" alt="Ambulance" width={64} height={64} />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Critical and Emergency Care</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      24/7 emergency medical services with rapid response team and state-of-the-art critical care facilities.
                    </p>
                  </div>
                </div>
                <div className="ml-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-gray-400 group-hover:text-gray-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>

            {/* Row 2 */}
            {/* Laboratory */}
            <Link href="/services/laboratory" className="group bg-gray-50 rounded-2xl p-8 hover:bg-gray-100 transition-colors cursor-pointer">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="mb-6">
                    <div className="w-16 h-16 rounded-xl flex items-center justify-center mb-4">
                       <Image src="/assets/lab.svg" alt="Labouratory" width={64} height={64} />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Laboratory</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Complete diagnostic testing services with advanced laboratory equipment and rapid, accurate results.
                    </p>
                  </div>
                </div>
                <div className="ml-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-gray-400 group-hover:text-gray-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>

            {/* Nephrology & Dialysis */}
            <Link href="/services/nephrology" className="group bg-gray-50 rounded-2xl p-8 hover:bg-gray-100 transition-colors cursor-pointer">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                       <Image src="/assets/dialysis.svg" alt="Dialysis" width={64} height={64} />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Nephrology & Dialysis</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Specialized kidney care services with expert nephrologists and advanced dialysis treatment options.
                    </p>
                  </div>
                </div>
                <div className="ml-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-gray-400 group-hover:text-gray-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>

            {/* Cardiology */}
            <Link href="/services/cardiology" className="group bg-gray-50 rounded-2xl p-8 hover:bg-gray-100 transition-colors cursor-pointer">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                       <Image src="/assets/cardiology.svg" alt="Cardiology" width={64} height={64} />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Cardiology</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Comprehensive heart care services with expert cardiologists and advanced cardiovascular treatments.
                    </p>
                  </div>
                </div>
                <div className="ml-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-gray-400 group-hover:text-gray-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>

            {/* Row 3 */}
            {/* Paediatrics */}
            <Link href="/services/paediatrics" className="group bg-gray-50 rounded-2xl p-8 hover:bg-gray-100 transition-colors cursor-pointer">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                       <Image src="/assets/paediatrics.svg" alt="Paediatrics" width={64} height={64} />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Paediatrics</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Specialized child healthcare services with board-certified pediatricians in a child-friendly environment.
                    </p>
                  </div>
                </div>
                <div className="ml-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-gray-400 group-hover:text-gray-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>

            {/* Orthopaedics and Trauma */}
            <Link href="/services/orthopaedics" className="group bg-gray-50 rounded-2xl p-8 hover:bg-gray-100 transition-colors cursor-pointer">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                      <Image src="/assets/orthopaedics.svg" alt="Orthopaedics and Trauma" width={64} height={64} />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Orthopaedics and Trauma</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Advanced bone and joint care with cutting-edge treatments and comprehensive rehabilitation services.
                    </p>
                  </div>
                </div>
                <div className="ml-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-gray-400 group-hover:text-gray-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>

            {/* General Surgery */}
            <Link href="/services/surgery" className="group bg-gray-50 rounded-2xl p-8 hover:bg-gray-100 transition-colors cursor-pointer">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                       <Image src="/assets/surgery.svg" alt="General Surgery" width={64} height={64} />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">General Surgery</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      State-of-the-art surgical procedures with experienced surgeons using minimally invasive techniques.
                    </p>
                  </div>
                </div>
                <div className="ml-4 flex-shrink-0">
                  <svg className="w-6 h-6 text-gray-400 group-hover:text-gray-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

       {/* Meet Our Team Section */}
      {/* <section className="py-24 sm:py-32 bg-white">
        <div className="mx-auto px-6 lg:px-8" style={{ maxWidth: '1428px' }}>
          <div className="mb-16">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 mb-12">
              Meet Our Team
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            <div className="bg-white rounded-2xl overflow-hidden">
              <div className="aspect-square bg-gray-200 mb-6">
                <img
                  src="/assets/alex-tran.jpg"
                  alt="Alex Tran"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "data:image/svg+xml,%3Csvg width='300' height='300' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' font-size='24' text-anchor='middle' dy='.3em' fill='%236b7280'%3EAlex Tran%3C/text%3E%3C/svg%3E";
                  }}
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Alex Tran</h3>
                <p className="text-sm text-gray-600 mb-3">Managing Partner, Strategy</p>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  Alex brings over a decade of experience advising venture-backed startups on financial modeling, investor readiness, and strategic growth planning.
                </p>
                <div className="flex items-center">
                  <svg className="w-4 h-4 text-gray-400 mr-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  <span className="text-sm text-gray-400">X</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden">
              <div className="aspect-square bg-gray-200 mb-6">
                <img
                  src="/assets/maya-chen.jpg"
                  alt="Maya Chen"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "data:image/svg+xml,%3Csvg width='300' height='300' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' font-size='24' text-anchor='middle' dy='.3em' fill='%236b7280'%3EMaya Chen%3C/text%3E%3C/svg%3E";
                  }}
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Maya Chen</h3>
                <p className="text-sm text-gray-600 mb-3">Director of Systems & Ops</p>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  Maya specializes in building lean, scalable systems for high-growth companies—transforming tech stacks into operational advantages.
                </p>
                <div className="flex items-center">
                  <svg className="w-4 h-4 text-gray-400 mr-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  <span className="text-sm text-gray-400">X</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden">
              <div className="aspect-square bg-gray-200 mb-6">
                <img
                  src="/assets/sophie-tran.jpg"
                  alt="Sophie Tran"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "data:image/svg+xml,%3Csvg width='300' height='300' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' font-size='24' text-anchor='middle' dy='.3em' fill='%236b7280'%3ESophie Tran%3C/text%3E%3C/svg%3E";
                  }}
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Sophie Tran</h3>
                <p className="text-sm text-gray-600 mb-3">Head of Strategic Initiatives</p>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  Sophie leads cross-functional transformation efforts, aligning leadership teams around clear goals, KPIs, and execution frameworks.
                </p>
                <div className="flex items-center">
                  <svg className="w-4 h-4 text-gray-400 mr-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  <span className="text-sm text-gray-400">X</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden">
              <div className="aspect-square bg-gray-200 mb-6">
                <img
                  src="/assets/clara-jennings.jpg"
                  alt="Clara Jennings"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "data:image/svg+xml,%3Csvg width='300' height='300' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' font-size='24' text-anchor='middle' dy='.3em' fill='%236b7280'%3EClara Jennings%3C/text%3E%3C/svg%3E";
                  }}
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Clara Jennings</h3>
                <p className="text-sm text-gray-600 mb-3">Principal Consultant, Strategy</p>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  With a background in private equity and FP&A, Clara helps clients navigate capital strategy, burn management, and long-term planning.
                </p>
                <div className="flex items-center">
                  <svg className="w-4 h-4 text-gray-400 mr-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  <span className="text-sm text-gray-400">X</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA Section - Just above the footer */}
      <CTA />
    </div>
  );
}