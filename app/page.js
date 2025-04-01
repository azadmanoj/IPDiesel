"use client"
import Image from "next/image";
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      {/* Banner Section with Enhanced Gradient */}
      <section className="bg-gradient-to-br from-indigo-900 via-[#1f2969] to-blue-800 text-white py-24 md:py-40 text-center relative overflow-hidden">
        {/* Animated background particles */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-blue-400 opacity-10 animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-72 h-72 rounded-full bg-indigo-500 opacity-10 animate-pulse delay-300"></div>
          <div className="absolute top-1/2 left-1/3 w-40 h-40 rounded-full bg-purple-500 opacity-10 animate-pulse delay-500"></div>
        </div>
        
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="container mx-auto relative z-10 px-4">
          <div className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 drop-shadow-xl bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">Indore Punjab Diesel</h1>
            <p className="text-xl md:text-2xl mb-10 opacity-90">Your Premier Destination for Diesel Engine Solutions</p>
            <Link href="/contact" className="inline-block bg-gradient-to-r from-white to-blue-100 text-[#1f2969] font-semibold py-4 px-10 rounded-full hover:from-blue-700 hover:to-indigo-600 hover:text-white transition duration-300 ease-in-out transform hover:scale-105 shadow-xl animate-pulse">
              Get a Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-20 bg-gradient-to-b from-[#1f2969] to-[#0f1935]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200 mb-12">Our Core Services</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { title: "Fuel Injection Expertise", desc: "Precision repair and calibration for all diesel fuel injection systems.", icon: "⚙️" },
              { title: "Turbocharger Services", desc: "Complete diagnostics, repair, and replacement for turbochargers.", icon: "🔄" },
              { title: "Genuine Spare Parts", desc: "Access to a wide inventory of authentic diesel engine spares.", icon: "🔧" }
            ].map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-white to-blue-50 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-blue-100 hover:border-blue-300">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-semibold text-[#1f2969] mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
                <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mt-6"></div>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <Link href="/services" className="text-white hover:text-blue-200 font-semibold transition duration-300 group inline-flex items-center">
              Learn More About Our Services 
              <span className="ml-2 transition-transform duration-300 group-hover:translate-x-2">&rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#1f2969] to-blue-700 mb-12">Why Choose Us?</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="order-last md:order-first">
              <div className="bg-gradient-to-br from-[#1f2969] to-blue-800 h-80 rounded-lg shadow-md flex items-center justify-center text-white overflow-hidden relative">
                <div className="absolute inset-0 bg-[url('/workshop-placeholder.jpg')] bg-cover bg-center opacity-50"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#1f2969] via-transparent to-transparent"></div>
                <span className="italic relative z-10">Workshop Image Placeholder</span>
              </div>
            </div>
            <div className="space-y-6">
              {[
                { text: "Experienced Technicians with 20+ years in the industry", icon: "👨‍🔧" },
                { text: "Quality Assurance with rigorous testing protocols", icon: "✅" },
                { text: "Customer Focus with personalized service solutions", icon: "🤝" },
                { text: "Timely Delivery and transparent pricing", icon: "⏱️" }
              ].map((feature, index) => (
                <div key={index} className="flex items-start space-x-4 bg-gradient-to-r from-white to-blue-50 p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-x-1">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-[#1f2969] to-blue-700 text-white flex items-center justify-center text-lg">
                    {feature.icon}
                  </div>
                  <p className="text-gray-700 font-medium text-left">{feature.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-900 via-[#1f2969] to-blue-800 text-center text-white relative overflow-hidden">
        {/* Animated accent elements */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400 to-indigo-500"></div>
        <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-indigo-500 to-blue-400"></div>
        
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-blue-500 opacity-10 animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-indigo-600 opacity-10 animate-pulse delay-300"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200">Ready to Get Started?</h2>
          <p className="text-lg mb-8 opacity-90">Contact us today for expert advice or to schedule a service.</p>
          <Link href="/contact" className="inline-block bg-gradient-to-r from-white to-blue-100 text-[#1f2969] font-semibold py-4 px-10 rounded-full hover:from-blue-700 hover:to-indigo-600 hover:text-white transition duration-300 ease-in-out transform hover:scale-105 shadow-xl">
            Contact Us Now
          </Link>
        </div>
      </section>
    </>
  );
}