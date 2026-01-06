'use client';

import Hero from "@/components/sections/Hero";
import Link from 'next/link';
import CTA from '@/components/sections/CTA';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      quote: "Hills Medical has transformed our healthcare experience. Now, our family receives world-class medical care without traveling far from home. They provide comprehensive, compassionate treatment with a personal touch.",
      name: "Sarah Johnson",
      title: "Patient and Mother of Two"
    },
    {
      quote: "The specialists at Hills Medical are exceptional. Their advanced diagnostic equipment and personalized care approach helped identify and treat my condition quickly and effectively.",
      name: "Michael Chen",
      title: "Business Executive"
    },
    {
      quote: "From emergency care to routine check-ups, Hills Medical consistently delivers outstanding service. The staff is professional, caring, and always puts patients first.",
      name: "Dr. Amara Okafor",
      title: "Referring Physician"
    },
    {
      quote: "The state-of-the-art facilities and experienced medical team at Hills Medical gave me confidence during my surgery. The recovery process was smooth thanks to their excellent post-operative care.",
      name: "Grace Adeolu",
      title: "Patient"
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div>
      <Hero />
      
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

      {/* Why Choose Us Section */}
      <section className="py-24 sm:py-32 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8" style={{ maxWidth: '1428px' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-6 items-center">
            {/* Left Content */}
            <div className="space-y-8 bg-gray-50 p-6 rounded-lg">
              {/* Header */}
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4 italic font-weight:100 font-serif">
                  Why Choose Us
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  A Series B SaaS startup faced growing pressure from misaligned financial models and an inefficient 
                  burn rate.
                </p>
              </div>

              {/* Challenge and Solution Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Challenge Card */}
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">World-Class Care, Close to Home</h3>
                  <p className="text-sm text-gray-600">
                    We bring global standards of healthcare to Benin City, delivering expert treatment without the need to travel far.
                  </p>
                </div>

                {/* Solution Card */}
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Experienced Specialists & Compassionate Staff</h3>
                  <p className="text-sm text-gray-600">
                    Our team of highly skilled doctors, nurses and support staff combine expertise with genuine care for every patient.
                  </p>
                </div>
                {/* Solution Card */}
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">State-of-the-Art Facilities & Technology</h3>
                  <p className="text-sm text-gray-600">
                    From modern diagnostic equipment to comfortable patient rooms, we’ve invested in the best tools to ensure safe, effective care.
                  </p>
                </div>
                {/* Solution Card */}
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Patient-Focused Approach</h3>
                  <p className="text-sm text-gray-600">
                    We design every service around your needs — short wait times, clear communication, and personalised treatment plans
                  </p>
                </div>
              </div>
            </div>

             {/* Right Image */}
            <div className="relative h-full">
              <div className="h-full min-h-[600px] bg-gray-800 rounded-2xl overflow-hidden">
                <img 
                  src="/assets/image2.jpeg" 
                  alt="Professional working at desk with computer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-24 sm:py-32 bg-gray-50">
        <div className="mx-auto px-6 lg:px-8" style={{ maxWidth: '1428px' }}>
          <div className="mx-auto max-w-4xl text-center">
            {/* Quote Icon */}
            <div className="flex justify-center mb-8">
              <div className="w-16 h-16 bg-green-500 rounded-lg flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                </svg>
              </div>
            </div>
            
            {/* Testimonial Slider */}
            <div className="relative overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-8">
                      {testimonial.quote}
                    </blockquote>
                    
                    <div className="text-center">
                      <p className="text-lg font-semibold text-gray-900 mb-1">{testimonial.name}</p>
                      <p className="text-base text-gray-600">{testimonial.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Dot Indicators */}
            <div className="flex justify-center space-x-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                    index === currentTestimonial 
                      ? 'bg-green-500' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Specialized Services Section */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="mx-auto px-6 lg:px-8" style={{ maxWidth: '1428px' }}>
          <div className="mx-auto max-w-2xl text-center mb-16 ">
            <p className="text-sm font-semibold text-gray-600">• SPECIALIZED HEALTHCARE SERVICES</p>
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              We offer some specialized healthcare services too
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
              <div className="aspect-[4/3] relative overflow-hidden">
                <img 
                  src="/assets/image5.jpeg" 
                  alt="Comprehensive Health Check-up Packages"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3 leading-tight">
                  Comprehensive Health Check-up Packages
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Learn how to choose and implement systems that serve growth—without slowing your team down
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
              <div className="aspect-[4/3] relative overflow-hidden">
                <img 
                  src="/assets/image12.jpeg" 
                  alt="Dialysis Services"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3 leading-tight">
                  Dialysis Services
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Even the best plans fall flat without clear ownership, tools, and follow-through—here&rsquo;s how we solve for that
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
              <div className="aspect-[4/3] relative overflow-hidden">
                <img 
                  src="/assets/image8.jpeg" 
                  alt="ANC Clinic"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3 leading-tight">
                  ANC Clinic
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  A practical guide to creating a model that goes beyond investor decks—and helps you run your business smarter
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
              <div className="aspect-[4/3] relative overflow-hidden">
                <img 
                  src="/assets/image3.jpeg" 
                  alt="Ambulance Services"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3 leading-tight">
                  Ambulance Services
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  How to maintain quality and efficiency while scaling rapidly—lessons from successful growth companies
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clients and Partners Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="mx-auto px-6 lg:px-8" style={{ maxWidth: '1428px' }}>
          <div className="flex items-center gap-8 lg:gap-12">
            {/* Left side - Text */}
            <div className="flex-shrink-0">
              <p className="text-sm font-medium text-gray-600">
               Our Clients and Partners
              </p>
            </div>
            
            {/* Right side - Scrolling logos container */}
            <div className="flex-1 relative overflow-hidden">
              <div className="flex space-x-12 scroll-left">
                
                <div className="flex items-center justify-center min-w-[160px] h-16">
                  <Image
                    className="h-12 w-auto"
                    src="/assets/allycare.jpg"
                    alt="Ally Care Partnership"
                    width={150}
                    height={30}
                  />
                </div>
                <div className="flex items-center justify-center min-w-[160px] h-16">
                  <Image
                    className="h-12 w-auto"
                    src="/assets/mansard.jpg"
                    alt="Mansard Partnership"
                    width={50}
                    height={50}
                  />
                </div>
                <div className="flex items-center justify-center min-w-[160px] h-16">
                  <Image
                    className="h-12 w-auto"
                    src="/assets/bastion.jpg"
                    alt="Bastion Partnership"
                    width={50}
                    height={50}
                  />
                </div>
                <div className="flex items-center justify-center min-w-[160px] h-16">
                  <Image
                    className="h-12 w-auto"
                    src="/assets/dothmo.jpg"
                    alt="Dothmo Partnership"
                    width={100}
                    height={50}
                  />
                </div>
                <div className="flex items-center justify-center min-w-[160px] h-16">
                  <Image
                    className="h-12 w-auto"
                    src="/assets/edhic.jpg"
                    alt="Edhic Partnership"
                    width={80}
                    height={100}
                  />
                </div>
                <div className="flex items-center justify-center min-w-[160px] h-16">
                  <Image
                    className="h-12 w-auto"
                    src="/assets/greenbar.jpg"
                    alt="Greenbar Partnership"
                    width={100}
                    height={80}
                  />
                </div>
                <div className="flex items-center justify-center min-w-[160px] h-16">
                  <Image
                    className="h-12 w-auto"
                    src="/assets/greenhmo.jpg"
                    alt="Greenhmo Partnership"
                    width={100}
                    height={80}
                  />
                </div>
                <div className="flex items-center justify-center min-w-[160px] h-16">
                  <Image
                    className="h-12 w-auto"
                    src="/assets/hygeia.jpg"
                    alt="Hygeia Partnership"
                    width={100}
                    height={80}
                  />
                </div>
                <div className="flex items-center justify-center min-w-[160px] h-16">
                  <Image
                    className="h-12 w-auto"
                    src="/assets/nnpc.jpg"
                    alt="NNPC Partnership"
                    width={100}
                    height={70}
                  />
                </div>
                <div className="flex items-center justify-center min-w-[160px] h-16">
                  <Image
                    className="h-12 w-auto"
                    src="/assets/reliancehmo.jpg"
                    alt="Reliancehmo Partnership"
                    width={100}
                    height={80}
                  />
                </div>
                <div className="flex items-center justify-center min-w-[160px] h-16">
                  <Image
                    className="h-12 w-auto"
                    src="/assets/rothaug.jpg"
                    alt="Rohaug Partnership"
                    width={100}
                    height={80}
                  />
                </div>
                <div className="flex items-center justify-center min-w-[160px] h-16">
                  <Image
                    className="h-12 w-auto"
                    src="/assets/tt.jpg"
                    alt="TT Partnership"
                    width={100}
                    height={80}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

     {/* CTA Section - Just above the footer */}
      <CTA />
    </div>
  );
}
