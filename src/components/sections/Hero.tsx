'use client';

import Link from 'next/link';

export default function Hero() {
  return (
    <div className="relative isolate px-4 sm:px-6 lg:px-8 min-h-screen flex items-end">
      {/* Background Video */}
      <div className="absolute inset-0 -z-20">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/assets/hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Linear gradient overlay */}
        <div 
          className="absolute inset-0" 
          style={{
            background: 'linear-gradient(#0000 50%, #000 87%)'
          }}
        ></div>
      </div>
      
      <div className="mx-auto max-w-7xl pb-8 sm:pb-12 md:pb-16 lg:pb-24 w-full" style={{ maxWidth: '1380px' }}>
        <div className="grid grid-cols-1 lg:grid-cols-10 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-end">
          {/* Left side - Content (70%) */}
          <div className="text-left lg:col-span-7 order-2 lg:order-1">
            <p className="text-xs sm:text-sm font-semibold leading-6 text-400 mb-3 sm:mb-4 font-sans">
              WELCOME TO HILLS MEDICAL
            </p>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-white">
              <div className="font-sans">Healing begins the moment</div>
              <div className="italic font-light font-serif">you walk through our doors</div>
            </h1>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-6 sm:leading-8 text-gray-200 font-sans">
              We are a premier destination for advanced, compassionate healthcare, located in the heart<br className="hidden sm:block" />
of Benin-City. Our quality and comprehensive healthcare services are tailored to meet local <br className="hidden sm:block" />
needs while matching global standards of excellence.
            </p>
            <div className="mt-6 sm:mt-8 lg:mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-x-6">
              <Link
                href="/book-appointment"
                className="w-full sm:w-auto rounded-lg bg-[#094635] px-4 sm:px-6 py-3 sm:py-4 text-sm font-semibold text-white shadow-sm hover:bg-[#052B20] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all duration-300 hover:shadow-lg text-center"
              >
                Start Your Strategy Call
              </Link>
              <Link 
                href="/services" 
                className="w-full sm:w-auto rounded-lg bg-white px-4 sm:px-6 py-3 sm:py-4 text-sm font-regular text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all duration-300 hover:shadow-lg text-center"
              >
                View Our Services 
              </Link>
            </div>
            
            {/* Reviews section */}
            <div className="mt-6 sm:mt-8 lg:mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-x-4">
              <div className="flex -space-x-1 overflow-hidden">
                <div className="inline-block h-6 w-6 sm:h-8 sm:w-8 rounded-full bg-white/20 backdrop-blur-sm border border-white/30"></div>
                <div className="inline-block h-6 w-6 sm:h-8 sm:w-8 rounded-full bg-white/30 backdrop-blur-sm border border-white/30"></div>
                <div className="inline-block h-6 w-6 sm:h-8 sm:w-8 rounded-full bg-white/40 backdrop-blur-sm border border-white/30"></div>
              </div>
              <div className="flex items-center gap-x-1">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="h-3 w-3 sm:h-4 sm:w-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-xs sm:text-sm text-gray-200 ml-2">4.9/5 • 400+ Reviews</span>
              </div>
            </div>
          </div>
          
        
        </div>
      </div>
    </div>
  );
}