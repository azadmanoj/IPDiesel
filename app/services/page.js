"use client"
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function ServicesPage() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      {/* Banner Section with Enhanced Gradient - matches home page styling */}
      <section className="bg-gradient-to-br from-indigo-900 via-[#1f2969] to-blue-800 text-white py-24 md:py-40 text-center relative overflow-hidden">
        {/* Animated background particles - matching home page */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-blue-400 opacity-10 animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-72 h-72 rounded-full bg-indigo-500 opacity-10 animate-pulse delay-300"></div>
          <div className="absolute top-1/2 left-1/3 w-40 h-40 rounded-full bg-purple-500 opacity-10 animate-pulse delay-500"></div>
        </div>
        
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="container mx-auto relative z-10 px-4">
          <div className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 drop-shadow-xl bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">Our Expert Services</h1>
            <p className="text-xl md:text-2xl mb-10 opacity-90">Comprehensive solutions for your diesel engine needs</p>
          </div>
        </div>
      </section>

      {/* Services List - styled to match home page */}
      <section className="py-20 bg-gradient-to-b from-[#1f2969] to-[#0f1935]">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {/* Service 1 */}
            <div className="bg-gradient-to-br from-white to-blue-50 p-8 md:p-12 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-blue-100 hover:border-blue-300">
              <div className="flex flex-col lg:flex-row items-center gap-10">
                <div className="lg:w-1/4 text-center flex-shrink-0">
                  <div className="bg-gradient-to-br from-[#1f2969] to-blue-800 h-24 w-24 mx-auto rounded-full flex items-center justify-center text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14.5 5 16.5 8 16.5 10c0 1-2.5 4.5-2.5 4.5s3.5 1 4.657 2.157a8.012 8.012 0 010 2.343zM12 10c0 2.21-1.79 4-4 4s-4-1.79-4-4 1.79-4 4-4 4 1.79 4 4z" />
                    </svg>
                  </div>
                </div>
                <div className="lg:w-3/4">
                  <h2 className="text-2xl md:text-3xl font-semibold text-[#1f2969] mb-4">Fuel Injection Services</h2>
                  <p className="text-gray-600 leading-relaxed mb-5">
                    We specialize in the comprehensive testing, repair, and calibration of all types of diesel fuel injection pumps and injectors. Using state-of-the-art equipment, our technicians ensure optimal performance and fuel efficiency for your engines.
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2 pl-5">
                    <li>Common Rail Pumps & Injectors</li>
                    <li>Rotary & Inline Pumps</li>
                    <li>Unit Injectors & Unit Pumps (EUI/EUP)</li>
                    <li>Nozzle Testing, Cleaning & Replacement</li>
                    <li>Advanced Diagnostics & Calibration</li>
                  </ul>
                  <Link href="/contact" className="mt-6 inline-block bg-gradient-to-r from-[#1f2969] to-blue-800 text-white font-semibold py-3 px-8 rounded-full hover:from-blue-700 hover:to-indigo-600 transition duration-300 ease-in-out transform hover:scale-105 shadow-lg">
                    Get Service Quote
                  </Link>
                </div>
              </div>
            </div>

            {/* Service 2 */}
            <div className="bg-gradient-to-br from-white to-blue-50 p-8 md:p-12 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-blue-100 hover:border-blue-300">
              <div className="flex flex-col lg:flex-row items-center gap-10">
                <div className="lg:w-1/4 text-center flex-shrink-0 order-first lg:order-last">
                  <div className="bg-gradient-to-br from-[#1f2969] to-blue-800 h-24 w-24 mx-auto rounded-full flex items-center justify-center text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                </div>
                <div className="lg:w-3/4 order-last lg:order-first">
                  <h2 className="text-2xl md:text-3xl font-semibold text-[#1f2969] mb-4">Turbocharger Repair & Replacement</h2>
                  <p className="text-gray-600 leading-relaxed mb-5">
                    Boost your engine's power and efficiency with our expert turbocharger services. We handle diagnostics, repairs, balancing, and replacement for a wide range of turbochargers, ensuring peak performance and longevity.
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2 pl-5">
                    <li>Comprehensive Turbo Diagnostics & Fault Finding</li>
                    <li>Core Assembly (CHRA) Replacement & Balancing</li>
                    <li>Actuator Testing, Repair & Calibration</li>
                    <li>VNT/VGT Mechanism Servicing</li>
                    <li>Performance Upgrades & Consultation</li>
                  </ul>
                  <Link href="/contact" className="mt-6 inline-block bg-gradient-to-r from-[#1f2969] to-blue-800 text-white font-semibold py-3 px-8 rounded-full hover:from-blue-700 hover:to-indigo-600 transition duration-300 ease-in-out transform hover:scale-105 shadow-lg">
                    Get Service Quote
                  </Link>
                </div>
              </div>
            </div>

            {/* Service 3 */}
            <div className="bg-gradient-to-br from-white to-blue-50 p-8 md:p-12 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-blue-100 hover:border-blue-300">
              <div className="flex flex-col lg:flex-row items-center gap-10">
                <div className="lg:w-1/4 text-center flex-shrink-0">
                  <div className="bg-gradient-to-br from-[#1f2969] to-blue-800 h-24 w-24 mx-auto rounded-full flex items-center justify-center text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                    </svg>
                  </div>
                </div>
                <div className="lg:w-3/4">
                  <h2 className="text-2xl md:text-3xl font-semibold text-[#1f2969] mb-4">Genuine Diesel Engine Spare Parts</h2>
                  <p className="text-gray-600 leading-relaxed mb-5">
                    We maintain a comprehensive inventory of genuine and high-quality OEM spare parts for various diesel engine makes and models. Using authentic parts guarantees compatibility, reliability, and extends the life of your engine components.
                  </p>
                  <ul className="list-disc list-inside text-gray-600 space-y-2 pl-5">
                    <li>Filters (Oil, Fuel, Air, Hydraulic)</li>
                    <li>Gaskets, Seals & O-Rings</li>
                    <li>Fuel Pump & Injector Components</li>
                    <li>Turbocharger Repair Kits & Parts</li>
                    <li>Engine Sensors & Electrical Components</li>
                  </ul>
                  <Link href="/contact" className="mt-6 inline-block bg-gradient-to-r from-[#1f2969] to-blue-800 text-white font-semibold py-3 px-8 rounded-full hover:from-blue-700 hover:to-indigo-600 transition duration-300 ease-in-out transform hover:scale-105 shadow-lg">
                    Get Parts Quote
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - matches home page */}
      <section className="py-20 bg-gradient-to-r from-indigo-900 via-[#1f2969] to-blue-800 text-center text-white relative overflow-hidden">
        {/* Animated accent elements */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400 to-indigo-500"></div>
        <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-indigo-500 to-blue-400"></div>
        
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-blue-500 opacity-10 animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-indigo-600 opacity-10 animate-pulse delay-300"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200">Ready to Experience Premium Service?</h2>
          <p className="text-lg mb-8 opacity-90">Contact our team of experts for a consultation today.</p>
          <Link href="/contact" className="inline-block bg-gradient-to-r from-white to-blue-100 text-[#1f2969] font-semibold py-4 px-10 rounded-full hover:from-blue-700 hover:to-indigo-600 hover:text-white transition duration-300 ease-in-out transform hover:scale-105 shadow-xl">
            Contact Us Now
          </Link>
        </div>
      </section>
    </>
  );
}