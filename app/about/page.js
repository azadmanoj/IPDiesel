"use client"
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      {/* Banner Section with Enhanced Gradient - matches contact page styling */}
      <section className="bg-gradient-to-br from-indigo-900 via-[#1f2969] to-blue-800 text-white py-24 md:py-40 text-center relative overflow-hidden">
        {/* Animated background particles - matching contact page */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-blue-400 opacity-10 animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-72 h-72 rounded-full bg-indigo-500 opacity-10 animate-pulse delay-300"></div>
          <div className="absolute top-1/2 left-1/3 w-40 h-40 rounded-full bg-purple-500 opacity-10 animate-pulse delay-500"></div>
        </div>
        
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="container mx-auto relative z-10 px-4">
          <div className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 drop-shadow-xl bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">About Us</h1>
            <p className="text-xl md:text-2xl mb-10 opacity-90">Your trusted diesel engine specialists since 1995</p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 bg-gradient-to-b from-[#1f2969] to-[#0f1935]">
        <div className="container mx-auto px-4">
          {/* Our Story Section */}
          <div className="mb-16">
            <h2 className="text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200 mb-10 text-center">Our Story</h2>
            <div className="bg-gradient-to-br from-white to-blue-50 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-blue-100 hover:border-blue-300">
              <div className="flex flex-col lg:flex-row items-center gap-10">
                <div className="lg:w-1/2">
                  <div className="rounded-lg shadow-md overflow-hidden">
                    <Image 
                      src="/about-image.jpg" 
                      alt="Our Workshop"
                      width={600}
                      height={400}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
                <div className="lg:w-1/2">
                  <h3 className="text-2xl font-semibold text-[#1f2969] mb-6">Founded in 1995</h3>
                  <p className="text-gray-600 mb-4">
                    Indore Punjab Diesel has grown from a small repair shop to one of the region's most trusted diesel engine specialists. Our journey has been fueled by a passion for diesel technology and a commitment to honest, quality service.
                  </p>
                  <p className="text-gray-600 mb-6">
                    Over the years, we've invested in advanced diagnostic equipment and continuous training for our technicians, ensuring we stay at the forefront of diesel engine technology.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <div className="bg-blue-100 p-4 rounded-lg flex-1 min-w-[150px]">
                      <h4 className="text-xl font-semibold text-[#1f2969] mb-2">25+ Years</h4>
                      <p className="text-gray-600">Of diesel expertise</p>
                    </div>
                    <div className="bg-blue-100 p-4 rounded-lg flex-1 min-w-[150px]">
                      <h4 className="text-xl font-semibold text-[#1f2969] mb-2">10,000+</h4>
                      <p className="text-gray-600">Engines serviced</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Our Team Section */}
          <div className="mb-16">
            <h2 className="text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200 mb-10 text-center">Our Expert Team</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {/* Team Member 1 */}
              <div className="bg-gradient-to-br from-white to-blue-50 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-blue-100 hover:border-blue-300 text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-blue-100 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-[#1f2969]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-[#1f2969] mb-1">Harpreet Singh</h3>
                <p className="text-blue-700 font-medium mb-3">Founder & Lead Technician</p>
                <p className="text-gray-600">25+ years of diesel engine expertise with specialization in fuel injection systems.</p>
              </div>

              {/* Team Member 2 */}
              <div className="bg-gradient-to-br from-white to-blue-50 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-blue-100 hover:border-blue-300 text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-blue-100 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-[#1f2969]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-[#1f2969] mb-1">Rajiv Sharma</h3>
                <p className="text-blue-700 font-medium mb-3">Turbocharger Specialist</p>
                <p className="text-gray-600">Certified in turbocharger diagnostics and repair with 15 years experience.</p>
              </div>

              {/* Team Member 3 */}
              <div className="bg-gradient-to-br from-white to-blue-50 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-blue-100 hover:border-blue-300 text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-blue-100 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-[#1f2969]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-[#1f2969] mb-1">Amit Patel</h3>
                <p className="text-blue-700 font-medium mb-3">Parts & Inventory Manager</p>
                <p className="text-gray-600">Ensures we always have genuine OEM parts for your diesel engines.</p>
              </div>
            </div>
          </div>

          {/* Our Values Section */}
          <div>
            <h2 className="text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200 mb-10 text-center">Our Core Values</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {/* Value 1 */}
              <div className="bg-gradient-to-br from-white to-blue-50 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-blue-100 hover:border-blue-300 text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-[#1f2969] text-white flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-[#1f2969] mb-3">Quality Work</h3>
                <p className="text-gray-600">We stand behind every repair with industry-leading warranties and guarantees.</p>
              </div>

              {/* Value 2 */}
              <div className="bg-gradient-to-br from-white to-blue-50 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-blue-100 hover:border-blue-300 text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-[#1f2969] text-white flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-[#1f2969] mb-3">Fair Pricing</h3>
                <p className="text-gray-600">Honest, transparent pricing with no hidden fees or unnecessary repairs.</p>
              </div>

              {/* Value 3 */}
              <div className="bg-gradient-to-br from-white to-blue-50 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-blue-100 hover:border-blue-300 text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-[#1f2969] text-white flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-[#1f2969] mb-3">Timely Service</h3>
                <p className="text-gray-600">We respect your time with efficient diagnostics and prompt repairs.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - matches contact page */}
      <section className="py-20 bg-gradient-to-r from-indigo-900 via-[#1f2969] to-blue-800 text-center text-white relative overflow-hidden">
        {/* Animated accent elements */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400 to-indigo-500"></div>
        <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-indigo-500 to-blue-400"></div>
        
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-blue-500 opacity-10 animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-indigo-600 opacity-10 animate-pulse delay-300"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200">Ready to Experience Our Service?</h2>
          <p className="text-lg mb-8 opacity-90">Get in touch with our diesel engine experts today.</p>
          <Link href="/contact" className="inline-block bg-gradient-to-r from-white to-blue-100 text-[#1f2969] font-semibold py-4 px-10 rounded-full hover:from-blue-700 hover:to-indigo-600 hover:text-white transition duration-300 ease-in-out transform hover:scale-105 shadow-xl">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}