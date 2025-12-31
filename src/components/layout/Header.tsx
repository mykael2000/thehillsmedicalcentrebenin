'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { 
    name: 'Services', 
    href: '/services',
    dropdown: [
      { 
        name: 'Radiology', 
        href: '/services/radiology',
        description: 'Advanced imaging services including X-rays, CT, MRI, and ultrasound.',
        icon: '/assets/xray.svg'
      },
      { 
        name: 'Critical and Emergency Care', 
        href: '/services/critical-emergency-care',
        description: '24/7 emergency medical services with state-of-the-art facilities.',
        icon: '/assets/ambulance.svg'
      },
      { 
        name: 'Cardiology', 
        href: '/services/cardiology',
        description: 'Comprehensive heart care services with expert cardiologists.',
        icon: '/assets/cardiology.svg'
      },
      { 
        name: 'Laboratory', 
        href: '/services/laboratory',
        description: 'Complete diagnostic testing with rapid and accurate results.',
        icon: '/assets/lab.svg'
      },
      { 
        name: 'Nephrology', 
        href: '/services/nephrology',
        description: 'Specialized kidney care and dialysis services.',
        icon: '/assets/dialysis.svg'
      },
      { 
        name: 'Paediatrics', 
        href: '/services/paediatrics',
        description: 'Specialized healthcare for infants, children, and adolescents.',
        icon: '/assets/paediatrics.svg'
      },
      { 
        name: 'Orthopaedics', 
        href: '/services/orthopaedics',
        description: 'Advanced bone and joint care with expert orthopedic surgeons.',
        icon: '/assets/orthopaedics.svg'
      },
      { 
        name: 'Surgery', 
        href: '/services/surgery',
        description: 'Comprehensive surgical services with minimally invasive techniques.',
        icon: '/assets/surgery.svg'
      },
      { 
        name: 'Outpatient Care', 
        href: '/services/outpatient-care',
        description: 'Comprehensive outpatient services for non-emergency medical needs.',
        icon: '/assets/body.svg'
      },
    ]
  },
  { name: 'News & Articles', href: '/news' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // const [isScrolled, setIsScrolled] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setIsScrolled(window.scrollY > 50);
  //   };

  //   window.addEventListener('scroll', handleScroll);
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesDropdownOpen(false);
      }
    };

    if (servicesDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [servicesDropdownOpen]);

  // Close mobile menu when clicking outside or on escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
        setServicesDropdownOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <header className="fixed top-2 sm:top-4 md:top-6 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-[95%] sm:max-w-6xl px-2 sm:px-4 md:px-6" style={{ maxWidth: '1428px' }}>
      <nav 
        ref={navRef}
        className="rounded-lg sm:rounded-xl md:rounded-2xl transition-all duration-300 bg-white/80 backdrop-blur-md border border-gray-200/30"
        aria-label="Global"
      >
        <div className="flex items-center justify-between px-3 py-2.5 sm:px-4 sm:py-3 md:px-6 md:py-3 lg:px-8">
          {/* Logo */}
          <div className="flex lg:flex-1">
    <Link href="/" className="-m-1.5 p-1.5">
      <img
        src="/assets/THMC-Logo.svg"
        alt="Hills Medical logo"
        className="h-8 sm:h-10 w-auto"
        loading="eager"
      />
    </Link>
  </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 transition-colors duration-200"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              <span className="sr-only">{mobileMenuOpen ? 'Close menu' : 'Open menu'}</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          {/* Desktop navigation (hidden on mobile, visible on md+) */}
          <div className="hidden md:flex md:gap-x-4 lg:gap-x-6 xl:gap-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.dropdown ? (
                  <div 
                    ref={dropdownRef}
                    className="relative"
                  >
                    <button 
                      className="flex items-center gap-1 text-xs md:text-sm lg:text-sm font-regular leading-6 transition-colors duration-300 whitespace-nowrap text-black hover:text-[#052B20]"
                      onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                    >
                      {item.name}
                      <ChevronDownIcon className={`h-3 w-3 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>
                    
                    {servicesDropdownOpen && (
                      <div 
                        className="absolute top-full left-1/2 transform -translate-x-1/2 bg-white/95 backdrop-blur-md rounded-xl shadow-xl border border-gray-200/20 py-6 z-50"
                        style={{ 
                          width: navRef.current ? `${navRef.current.offsetWidth}px` : '100%',
                          maxWidth: '1428px',
                          marginTop: '1.5rem',
                          marginLeft: '2rem'
                        }}
                      >
                        <div className="grid grid-cols-3 gap-4 px-6">
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className="group block p-4 hover:bg-gray-50 transition-colors duration-200 rounded-lg border border-transparent hover:border-gray-200"
                              onClick={() => setServicesDropdownOpen(false)}
                            >
                              <div className="flex items-start gap-3">
                                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                                  <Image 
                                    src={subItem.icon} 
                                    alt={subItem.name} 
                                    width={42} 
                                    height={42} 
                                  />
                                </div>
                                <div className="flex-1">
                                  <div className="font-medium text-gray-900 group-hover:text-[#052B20] transition-colors duration-200 mb-2">
                                    {subItem.name}
                                  </div>
                                  <div className="text-sm text-gray-500 leading-relaxed">
                                    {subItem.description}
                                  </div>
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link 
                    href={item.href} 
                    className="text-xs md:text-sm lg:text-sm font-regular leading-6 transition-colors duration-300 whitespace-nowrap text-black hover:text-[#052B20]"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button - Hidden on mobile and small tablets */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Link
              href="/book-appointment"
              className="rounded-lg bg-[#094635] px-3 py-2 lg:px-4 lg:py-2.5 xl:px-5 xl:py-2.5 text-xs lg:text-sm font-semibold text-white shadow-sm hover:bg-[#052B20] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-all duration-300 hover:shadow-lg whitespace-nowrap"
            >
              <span className="hidden xl:inline">Book Appointment</span>
              <span className="xl:hidden">Book</span>
            </Link>
          </div>
        </div>
      </nav>
      
      {/* Mobile menu overlay */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 z-40 bg-black/50 md:hidden" 
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />
          
          {/* Mobile menu panel */}
          <div className="fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-white shadow-xl md:hidden">
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
               <Link href="/" className="-m-1.5 p-1.5">
      <img
        src="/assets/THMC-Logo.svg"
        alt="Hills Medical logo"
        className="h-8 sm:h-10 w-auto"
        loading="eager"
      />
    </Link>
              <button
                type="button"
                className="rounded-md p-2 text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            
            {/* Navigation */}
            <div className="px-6 py-6 h-screen max-h-screen overflow-y-auto bg-white">
              <nav className="space-y-2">
                {navigation.map((item) => (
                  <div key={item.name}>
                    {item.dropdown ? (
                      <div>
                        <Link
                          href={item.href}
                          className="block rounded-lg px-3 py-3 text-base font-semibold text-gray-900 hover:bg-gray-50"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                        <div className="ml-6 mt-2 space-y-1 border-l-2 border-gray-100 pl-4">
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className="block rounded-lg px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              <div className="flex items-start gap-3">
                                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                                  <Image 
                                    src={subItem.icon} 
                                    alt={subItem.name} 
                                    width={20} 
                                    height={20} 
                                  />
                                </div>
                                <div className="flex-1">
                                  <div className="font-medium">{subItem.name}</div>
                                  <div className="text-xs text-gray-500 mt-1">{subItem.description}</div>
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        className="block rounded-lg px-3 py-3 text-base font-semibold text-gray-900 hover:bg-gray-50"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
              </nav>
              
              {/* Mobile CTA Button */}
              <div className="mt-8 pt-6 border-t border-gray-200">
                <Link
                  href="/book-appointment"
                  className="block w-full rounded-lg bg-[#094635] px-4 py-3 text-center text-base font-semibold text-white shadow-sm hover:bg-[#052B20] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#094635]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Book Appointment
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
}