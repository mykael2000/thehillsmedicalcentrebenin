'use client';

import { useState } from 'react';
import { CalendarDaysIcon, UserIcon, PhoneIcon } from '@heroicons/react/24/outline';
import { toast } from 'react-hot-toast';
export default function BookAppointment() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    service: '',
    doctor: '',
    appointmentDate: '',
    appointmentTime: '',
    reason: '',
    insuranceProvider: '',
    emergencyContact: '',
    emergencyPhone: '',
    medicalHistory: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3;
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const services = [
    'Radiology',
    'Critical and Emergency Care',
    'Cardiology',
    'Laboratory',
    'Nephrology',
    'Paediatrics',
    'Orthopaedics',
    'Surgery',
    'Outpatient Care'
  ];

  const doctors = {
    'Radiology': ['Dr. Sarah Johnson', 'Dr. Michael Chen', 'Dr. Emily Rodriguez'],
    'Critical and Emergency Care': ['Dr. James Wilson', 'Dr. Lisa Park', 'Dr. David Kim'],
    'Cardiology': ['Dr. Maria Garcia', 'Dr. Robert Brown', 'Dr. Jennifer Lee'],
    'Laboratory': ['Dr. Thomas Anderson', 'Dr. Rachel Green', 'Dr. Mark Taylor'],
    'Nephrology': ['Dr. Amanda White', 'Dr. Christopher Davis', 'Dr. Nicole Miller'],
    'Paediatrics': ['Dr. Jessica Thompson', 'Dr. Andrew Martinez', 'Dr. Samantha Clark'],
    'Orthopaedics': ['Dr. Kevin Rodriguez', 'Dr. Laura Wilson', 'Dr. Daniel Moore'],
    'Surgery': ['Dr. Patricia Jackson', 'Dr. Steven Harris', 'Dr. Michelle Lewis'],
    'Outpatient Care': ['Dr. Brian Walker', 'Dr. Catherine Hall', 'Dr. Jonathan Young']
  };

  const timeSlots = [
    '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '02:00 PM', '02:30 PM', '03:00 PM', '03:30 PM', '04:00 PM', '04:30 PM'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
  const isPhone = (v: string) => /^\+?[0-9()\s-]{7,20}$/.test(v);
  const isPastDate = (yyyyMmDd: string) => {
    if (!yyyyMmDd) return false;
    const d = new Date(yyyyMmDd);
    const today = new Date(); today.setHours(0,0,0,0);
    return d < today;
  };
  const isTodayOrFuture = (yyyyMmDd: string) => {
    if (!yyyyMmDd) return false;
    const d = new Date(yyyyMmDd);
    const today = new Date(); today.setHours(0,0,0,0);
    return d >= today;
  };

  const validateAll = () => {
    const e: Record<string, string> = {};
    if (!isEmail(formData.email.trim())) e.email = 'Enter a valid email';
    if (!isPhone(formData.phone.trim())) e.phone = 'Enter a valid phone number';
    if (!isPastDate(formData.dateOfBirth)) e.dateOfBirth = 'Date of birth must be in the past';
    if (!isTodayOrFuture(formData.appointmentDate)) e.appointmentDate = 'Appointment date cannot be in the past';
    if (!timeSlots.includes(formData.appointmentTime)) e.appointmentTime = 'Select a valid time';
    if (!formData.reason.trim() || formData.reason.trim().length < 10) e.reason = 'Provide at least 10 characters';
    if (!isPhone(formData.emergencyPhone.trim())) e.emergencyPhone = 'Enter a valid phone number';
    if (!formData.medicalHistory.trim()) e.medicalHistory = 'Please provide details or N/A';
    return e;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    const required = [
      'firstName','lastName','email','phone','dateOfBirth',
      'service','doctor','appointmentDate','appointmentTime',
      'reason','emergencyContact','emergencyPhone','medicalHistory',
    ];
    const missing = required.filter((k) => !String(formData[k as keyof typeof formData]).trim());
    if (missing.length) {
      const newErrors: Record<string, string> = {};
      missing.forEach((k) => { newErrors[k] = 'This field is required'; });
      setErrors((prev) => ({ ...prev, ...newErrors }));
      setStatus('error');
      toast.error(`Please complete all required fields: ${missing.join(', ')}`);
      return;
    }

    const eMap = validateAll();
    if (Object.keys(eMap).length) {
      setErrors((prev) => ({ ...prev, ...eMap }));
      setStatus('error');
      toast.error('Please fix validation errors and try again.');
      return;
    }

    try {
      const res = await fetch('/api/book-appointment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus('success');
        toast.success('Appointment request received. Check your email for confirmation.');
        // Optionally reset the form:
        // setFormData(initialValues);
      } else {
        const data = await res.json().catch(() => ({}));
        setStatus('error');
        toast.error(`Failed to submit appointment${data?.error ? `: ${data.error}` : ''}`);
      }
    } catch {
      setStatus('error');
      toast.error('Network error. Please try again.');
    }
  };

  const nextStep = () => {
    const step1Fields = ['firstName', 'lastName', 'email', 'phone', 'dateOfBirth'];
    const step2Fields = ['service', 'doctor', 'appointmentDate', 'appointmentTime', 'reason'];
    const step3Fields = ['emergencyContact', 'emergencyPhone', 'medicalHistory'];
    const fields = currentStep === 1 ? step1Fields : currentStep === 2 ? step2Fields : step3Fields;

    const newErrors: Record<string, string> = {};
    fields.forEach((f) => {
      const val = String(formData[f as keyof typeof formData]).trim();
      if (!val) { newErrors[f] = 'This field is required'; return; }
      if (f === 'email' && !isEmail(val)) newErrors.email = 'Enter a valid email';
      if (f === 'phone' && !isPhone(val)) newErrors.phone = 'Enter a valid phone number';
      if (f === 'dateOfBirth' && !isPastDate(val)) newErrors.dateOfBirth = 'Date of birth must be in the past';
      if (f === 'appointmentDate' && !isTodayOrFuture(val)) newErrors.appointmentDate = 'Appointment date cannot be in the past';
      if (f === 'appointmentTime' && !timeSlots.includes(val)) newErrors.appointmentTime = 'Select a valid time';
      if (f === 'reason' && val.length < 10) newErrors.reason = 'Provide at least 10 characters';
      if (f === 'emergencyPhone' && !isPhone(val)) newErrors.emergencyPhone = 'Enter a valid phone number';
    });
    setErrors(prev => ({ ...prev, ...newErrors }));
    if (Object.keys(newErrors).length > 0) return;
    if (currentStep < totalSteps) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  // const getMinDate = () => {
  //   const today = new Date();
  //   return today.toISOString().split('T')[0];
  // };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-white pt-32 pb-16 sm:pt-40 sm:pb-24">
        <div className="mx-auto px-6 lg:px-8" style={{ maxWidth: '1428px' }}>
          <div className="mx-auto max-w-4xl text-center">
            {/* Book Appointment Label */}
            <p className="text-sm font-semibold text-gray-600 mb-8">• BOOK APPOINTMENT</p>
            
            {/* Main Heading */}
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl mb-8">
              Schedule Your <span className="italic font-light font-serif">Healthcare Visit</span>
            </h1>
            
            {/* Description */}
            <p className="text-lg leading-8 text-gray-600 mb-16 max-w-2xl mx-auto">
              Book an appointment with our experienced healthcare professionals. We&apos;re here to provide you with the best medical care.
            </p>
          </div>
        </div>
      </section>

      {/* Appointment Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto px-6 lg:px-8" style={{ maxWidth: '1428px' }}>
          <div className="max-w-2xl mx-auto">
            
            {/* Progress Bar */}
            <div className="mb-12">
              {/* Circles + flexible connectors */}
              <div className="flex items-center w-full mb-4 gap-2 sm:gap-4">
                <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-sm font-semibold ${
                  currentStep >= 1 ? 'bg-[#094635] text-white' : 'bg-gray-200 text-gray-600'
                }`}>1</div>
                <div className={`flex-1 h-px ${currentStep > 1 ? 'bg-[#094635]' : 'bg-gray-200'}`}></div>
                <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-sm font-semibold ${
                  currentStep >= 2 ? 'bg-[#094635] text-white' : 'bg-gray-200 text-gray-600'
                }`}>2</div>
                <div className={`flex-1 h-px ${currentStep > 2 ? 'bg-[#094635]' : 'bg-gray-200'}`}></div>
                <div className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-sm font-semibold ${
                  currentStep >= 3 ? 'bg-[#094635] text-white' : 'bg-gray-200 text-gray-600'
                }`}>3</div>
              </div>

              {/* Labels */}
              <div className="grid grid-cols-3 gap-2 text-center text-xs sm:text-sm text-gray-600">
                <span>Personal Information</span>
                <span>Appointment Details</span>
                <span>Medical Information</span>
              </div>
            </div>

            {/* Form */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <form onSubmit={handleSubmit}>
                
                {/* Step 1: Personal Information */}
                {currentStep === 1 && (
                  <div className="space-y-6">
                    <div className="flex items-center mb-6">
                      <UserIcon className="w-6 h-6 text-[#094635] mr-3" />
                      <h2 className="text-2xl font-bold text-gray-900">Personal Information</h2>
                    </div>
                    
                    {/* Step 1: Personal Information – make typed text visible and thin focus ring */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          placeholder="First name"
                          aria-invalid={!!errors.firstName}
                          className={`w-full px-4 py-3 bg-white text-gray-900 placeholder:text-gray-500 caret-[#094635] border ${
                            errors.firstName
                              ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                              : 'border-gray-200 focus:border-[#094635] focus:ring-[#094635]'
                          } rounded-lg focus:ring-1 outline-none transition-all duration-200`}
                          required
                        />
                        {errors.firstName && <p className="mt-2 text-sm text-red-600">First name is required</p>}
                      </div>
                    
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          placeholder="Last name"
                          aria-invalid={!!errors.lastName}
                          className={`w-full px-4 py-3 bg-white text-gray-900 placeholder:text-gray-500 caret-[#094635] border ${
                            errors.lastName
                              ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                              : 'border-gray-200 focus:border-[#094635] focus:ring-[#094635]'
                          } rounded-lg focus:ring-1 outline-none transition-all duration-200`}
                          required
                        />
                        {errors.lastName && <p className="mt-2 text-sm text-red-600">Last name is required</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="johndoe@example.com"
                          aria-invalid={!!errors.email}
                          className={`w-full px-4 py-3 bg-white text-gray-900 placeholder:text-gray-500 caret-[#094635] border ${
                            errors.email
                              ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                              : 'border-gray-200 focus:border-[#094635] focus:ring-[#094635]'
                          } rounded-lg focus:ring-1 outline-none transition-all duration-200`}
                          required
                        />
                        {errors.email && <p className="mt-2 text-sm text-red-600">Email is required</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+234 (123) 456-7890"
                          aria-invalid={!!errors.phone}
                          className={`w-full px-4 py-3 bg-white text-gray-900 placeholder:text-gray-500 caret-[#094635] border ${
                            errors.phone
                              ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                              : 'border-gray-200 focus:border-[#094635] focus:ring-[#094635]'
                          } rounded-lg focus:ring-1 outline-none transition-all duration-200`}
                          required
                        />
                        {errors.phone && <p className="mt-2 text-sm text-red-600">Phone number is required</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Date of Birth *</label>
                        <input
                          type="date"
                          name="dateOfBirth"
                          value={formData.dateOfBirth}
                          onChange={handleInputChange}
                          placeholder="DD/MM/YY"
                          aria-invalid={!!errors.dateOfBirth}
                          className={`w-full px-4 py-3 bg-white text-gray-900 placeholder:text-gray-500 caret-[#094635] border ${
                            errors.dateOfBirth
                              ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                              : 'border-gray-200 focus:border-[#094635] focus:ring-[#094635]'
                          } rounded-lg focus:ring-1 outline-none transition-all duration-200`}
                          required
                        />
                        {errors.dateOfBirth && <p className="mt-2 text-sm text-red-600">Date of birth is required</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Insurance Provider</label>
                        <input
                          type="text"
                          name="insuranceProvider"
                          value={formData.insuranceProvider}
                          onChange={handleInputChange}
                          placeholder="e.g., Blue Cross, Aetna, Medicare"
                          className={`w-full px-4 py-3 bg-white text-gray-900 placeholder:text-gray-500 caret-[#094635] border border-gray-200 focus:border-[#094635] focus:ring-[#094635] rounded-lg focus:ring-1 outline-none transition-all duration-200`}
                         
                        />
                        
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 2: Appointment Details */}
                {currentStep === 2 && (
                  <div className="space-y-6">
                    <div className="flex items-center mb-6">
                      <CalendarDaysIcon className="w-6 h-6 text-[#094635] mr-3" />
                      <h2 className="text-2xl font-bold text-gray-900">Appointment Details</h2>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Step 2: Appointment Details – service select with chevron and placeholder */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Service *</label>
                        <div className="relative">
                          <select
                            name="service"
                            value={formData.service}
                            onChange={handleInputChange}
                            aria-invalid={!!errors.service}
                            className={`w-full px-4 py-3 bg-white appearance-none cursor-pointer border ${
                              errors.service
                                ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                                : 'border-gray-200 focus:border-[#094635] focus:ring-[#094635]'
                            } rounded-lg focus:ring-1 outline-none transition-all duration-200 ${
                              formData.service ? 'text-gray-900' : 'text-gray-500'
                            }`}
                            required
                          >
                            <option value="">Select a service</option>
                            {services.map((service) => (
                              <option key={service} value={service}>{service}</option>
                            ))}
                          </select>
                          {/* Inline chevron icon */}
                          <svg
                            className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                        {errors.service && <p className="mt-2 text-sm text-red-600">This field is required</p>}
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Doctor *</label>
                        <div className="relative">
                          <select
                            name="doctor"
                            value={formData.doctor}
                            onChange={handleInputChange}
                            aria-invalid={!!errors.doctor}
                            className={`w-full px-4 py-3 bg-white appearance-none cursor-pointer border ${
                              errors.doctor
                                ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                                : 'border-gray-200 focus:border-[#094635] focus:ring-[#094635]'
                            } rounded-lg focus:ring-1 outline-none transition-all duration-200 ${
                              formData.doctor ? 'text-gray-900' : 'text-gray-500'
                            }`}
                            disabled={!formData.service}
                            required
                          >
                            <option value="">Select a doctor</option>
                            {formData.service && doctors[formData.service as keyof typeof doctors]?.map((doctor) => (
                              <option key={doctor} value={doctor}>{doctor}</option>
                            ))}
                          </select>
                          <svg
                            className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                        {errors.doctor && <p className="mt-2 text-sm text-red-600">This field is required</p>}
                      </div>
                      
                     <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Preffered Date *</label>
                        <input
                          type="date"
                          name="appointmentDate"
                          value={formData.appointmentDate}
                          onChange={handleInputChange}
                          placeholder="DD/MM/YY"
                          aria-invalid={!!errors.appointmentDate}
                          className={`w-full px-4 py-3 bg-white text-gray-900 placeholder:text-gray-500 caret-[#094635] border ${
                            errors.appointmentDate
                              ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                              : 'border-gray-200 focus:border-[#094635] focus:ring-[#094635]'
                          } rounded-lg focus:ring-1 outline-none transition-all duration-200`}
                          required
                        />
                        {errors.appointmentDate && <p className="mt-2 text-sm text-red-600">Appointment date is required</p>}
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Time *</label>
                        <div className="relative">
                          <select
                            name="appointmentTime"
                            value={formData.appointmentTime}
                            onChange={handleInputChange}
                            aria-invalid={!!errors.appointmentTime}
                            className={`w-full px-4 py-3 bg-white appearance-none cursor-pointer z-10 border ${
                              errors.appointmentTime
                                ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
                                : 'border-gray-200 focus:border-[#094635] focus:ring-[#094635]'
                            } rounded-lg focus:ring-1 outline-none transition-all duration-200 ${
                              formData.appointmentTime ? 'text-gray-900' : 'text-gray-500'
                            }`}
                            required
                          >
                            <option value="">Select a time</option>
                            {timeSlots.map((time) => (
                              <option key={time} value={time}>{time}</option>
                            ))}
                          </select>
                          <svg
                            className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                        {errors.appointmentTime && <p className="mt-2 text-sm text-red-600">This field is required</p>}
                      </div>
                    </div> 
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Reason for Visit *</label>
                      <textarea
                        name="reason"
                        value={formData.reason}
                        onChange={handleInputChange}
                        rows={4}
                        placeholder="Please describe the reason for your visit..."
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg placeholder:text-gray-500 focus:ring-2 focus:ring-[#094635] focus:border-transparent outline-none transition-all duration-200 resize-none"
                        required
                      />
                    </div>
                  </div>
                )}

                {/* Step 3: Medical Information */}
                {currentStep === 3 && (
                  <div className="space-y-6">
                    <div className="flex items-center mb-6">
                      <PhoneIcon className="w-6 h-6 text-[#094635] mr-3" />
                      <h2 className="text-2xl font-bold text-gray-900">Medical & Emergency Information</h2>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Emergency Contact Name *</label>
                        <input
                          type="text"
                          name="emergencyContact"
                          value={formData.emergencyContact}
                          onChange={handleInputChange}
                          placeholder="Full name"
                          aria-invalid={!!errors.emergencyContact}
                          className={`w-full px-4 py-3 bg-white text-gray-900 placeholder:text-gray-500 caret-[#094635] border ${errors.emergencyContact ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-gray-200 focus:border-[#094635] focus:ring-[#094635]'} rounded-lg focus:ring-1 outline-none transition-all duration-200`}
                          required
                        />
                        {errors.emergencyContact && <p className="mt-2 text-sm text-red-600">This field is required</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Emergency Contact Number *</label>
                        <input
                          type="tel"
                          name="emergencyPhone"
                          value={formData.emergencyPhone}
                          onChange={handleInputChange}
                          placeholder="+234 800 000 0000"
                          aria-invalid={!!errors.emergencyPhone}
                          className={`w-full px-4 py-3 bg-white text-gray-900 placeholder:text-gray-500 caret-[#094635] border ${errors.emergencyContact ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-gray-200 focus:border-[#094635] focus:ring-[#094635]'} rounded-lg focus:ring-1 outline-none transition-all duration-200`}
                          required
                        />
                        {errors.emergencyPhone && <p className="mt-2 text-sm text-red-600">This field is required</p>}
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Medical History & Current Medications *</label>
                      <textarea
                        name="medicalHistory"
                        value={formData.medicalHistory}
                        onChange={handleInputChange}
                        rows={6}
                        placeholder="Please list any current medications and relevant medical conditions or enter N/A if none..."
                        aria-invalid={!!errors.medicalHistory}
                        className={`w-full px-4 py-3 bg-white text-gray-900 placeholder:text-gray-500 caret-[#094635] border ${errors.medicalHistory ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : 'border-gray-200 focus:border-[#094635] focus:ring-[#094635]'} rounded-lg focus:ring-1 outline-none transition-all duration-200 resize-none`}
                        required
                      />
                      {errors.medicalHistory && <p className="mt-2 text-sm text-red-600">This field is required</p>}
                    </div>
                    
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <h3 className="text-sm font-semibold text-blue-900 mb-2">Important Notes:</h3>
                      <ul className="text-sm text-blue-800 space-y-1">
                        <li>• Please arrive 15 minutes before your scheduled appointment</li>
                        <li>• Bring a valid ID and insurance card</li>
                        <li>• If you need to cancel or reschedule, please call at least 24 hours in advance</li>
                        <li>• For emergency situations, please call 911 or visit our emergency department</li>
                      </ul>
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex flex-col sm:flex-row sm:justify-between mt-8 pt-6 border-t border-gray-200 gap-3 sm:gap-4">
                  <button
                    type="button"
                    onClick={prevStep}
                    className={`w-full sm:w-auto px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                      currentStep === 1
                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300 cursor-pointer'
                    }`}
                    disabled={currentStep === 1}
                    aria-label="Previous step"
                  >
                    Previous
                  </button>
                  
                  {currentStep < totalSteps ? (
                    <button
                      type="button"
                      onClick={nextStep}
                      className="w-full sm:w-auto px-6 py-3 bg-[#094635] text-white rounded-lg font-semibold hover:bg-[#052B20] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#094635] focus:ring-offset-2 cursor-pointer"
                      aria-label="Next step"
                    >
                      Next
                    </button>
                  ) : (
                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="w-full sm:w-auto px-8 py-3 bg-[#094635] text-white rounded-lg font-semibold hover:bg-[#052B20] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#094635] focus:ring-offset-2 cursor-pointer"
                      aria-label="Book appointment"
                    >
                      {status === 'loading' ? 'Booking...' : 'Book Appointment'}
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}