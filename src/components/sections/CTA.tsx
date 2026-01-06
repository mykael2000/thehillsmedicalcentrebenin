'use client';

import Link from 'next/link';

export default function CTA() {
  return (
    <section
      className="relative py-16 sm:py-20 bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/image1.jpeg')" }}
    >
      <div className="absolute inset-0 bg-black/80"></div>
      <div className="relative z-10 mx-auto px-6 lg:px-8" style={{ maxWidth: '1428px' }}>
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Content */}
            <div>
              <div className="mb-4">
                <span className="text-green-400 text-sm font-medium tracking-wide uppercase">
                  • GET STARTED
                </span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              
              <p className="text-gray-200 text-lg mb-8 leading-relaxed">
                Book your appointment today and take the first step towards better health.
              </p>
              
              {/* Buttons Section */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-x-6">
                <Link
                  href="/book-appointment"
                  className="w-full sm:w-auto rounded-lg bg-[#094635] px-4 sm:px-6 py-3 sm:py-4 text-sm font-semibold text-white shadow-sm hover:bg-[#052B20] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all duration-300 hover:shadow-lg text-center"
                >
                  Book Appointment
                </Link>
                <Link 
                  href="/contact" 
                  className="w-full sm:w-auto rounded-lg bg-white px-4 sm:px-6 py-3 sm:py-4 text-sm font-regular text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all duration-300 hover:shadow-lg text-center"
                >
                  Contact Us
                </Link>
              </div>
            </div>
            
            {/* Right side - Image */}
            {/* <div className="lg:flex justify-end">
              <div className="w-full max-w-md">
                <img 
                  src="/assets/why-choose-us-image.png" 
                  alt="Leaf pattern" 
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}