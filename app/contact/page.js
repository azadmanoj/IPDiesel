"use client"
import { MapPinIcon, PhoneIcon, EnvelopeIcon, ClockIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function ContactPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('');
  const [modalOpen, setModalOpen] = useState(false); // Modal visibility
  const [modalMessage, setModalMessage] = useState(''); // Modal message

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation check
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('Please fill in all the required fields.');
      return;
    }

    setStatus('Sending...');
    
    try {
      // Send the form data to your backend API
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      
      if (result.success) {
        setModalMessage('Message sent successfully!');
        setFormData({ name: '', phone: '', email: '', subject: '', message: '' });
      } else {
        setModalMessage('An error occurred. Please try again.');
      }
      
      setModalOpen(true);
      setStatus(''); // Reset status message
    } catch (error) {
      setModalMessage('Failed to send email. Please try again.');
      setModalOpen(true);
      setStatus('');
    }
  };

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
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 drop-shadow-xl bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">Contact Us</h1>
            <p className="text-xl md:text-2xl mb-10 opacity-90">Get in touch with our diesel engine experts</p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-gradient-to-b from-[#1f2969] to-[#0f1935]">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <h2 className="text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200 mb-6 text-center lg:text-left">Our Contact Information</h2>
              
              {/* Contact Cards - styling matches home page services cards */}
              {[
                {
                  icon: <MapPinIcon className="h-8 w-8 text-[#1f2969]" />,
                  title: "Our Location",
                  details: [
                    "123 Diesel Lane, Industrial Area",
                    "Indore, Madhya Pradesh 452001"
                  ],
                  link: "#",
                  linkText: "View on Map"
                },
                {
                  icon: <PhoneIcon className="h-8 w-8 text-[#1f2969]" />,
                  title: "Phone & WhatsApp",
                  details: [
                    "+91 98765 43210 (Service Inquiries)",
                    "+91 98765 43211 (Parts Department)"
                  ],
                  link: "#",
                  linkText: "Call Now"
                },
                {
                  icon: <EnvelopeIcon className="h-8 w-8 text-[#1f2969]" />,
                  title: "Email Us",
                  details: [
                    "service@indorepunjabdiesel.com",
                    "parts@indorepunjabdiesel.com"
                  ],
                  link: "#",
                  linkText: "Send Email"
                },
                {
                  icon: <ClockIcon className="h-8 w-8 text-[#1f2969]" />,
                  title: "Working Hours",
                  details: [
                    "Monday - Saturday: 8:00 AM - 8:00 PM",
                    "Sunday: 10:00 AM - 4:00 PM",
                    "*Emergency services available 24/7"
                  ]
                }
              ].map((card, index) => (
                <div key={index} className="bg-gradient-to-br from-white to-blue-50 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-blue-100 hover:border-blue-300">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                      {card.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-[#1f2969] mb-2">{card.title}</h3>
                      {card.details.map((detail, idx) => (
                        <p key={idx} className={`text-gray-600 ${idx === card.details.length - 1 && detail.startsWith('*') ? 'text-sm mt-2' : ''}`}>
                          {detail}
                        </p>
                      ))}
                      {card.link && (
                        <Link href={card.link} className="mt-3 inline-block text-[#1f2969] font-medium hover:text-blue-700 transition duration-300 group flex items-center">
                          {card.linkText} <span className="ml-1 transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Form */}
            <div className="bg-gradient-to-br from-white to-blue-50 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-blue-100">
              <h2 className="text-3xl font-semibold text-[#1f2969] mb-6 text-center">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Your Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1f2969] focus:border-transparent"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1f2969] focus:border-transparent"
                      placeholder="Enter your phone number"
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1f2969] focus:border-transparent"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Subject</label>
                  <select 
                    id="subject" 
                    name="subject"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1f2969] focus:border-transparent"
                    value={formData.subject}
                    onChange={handleInputChange}
                  >
                    <option value="">Select a subject</option>
                    <option value="service">Service Inquiry</option>
                    <option value="parts">Parts Inquiry</option>
                    <option value="appointment">Book Appointment</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Your Message</label>
                  <textarea 
                    id="message" 
                    name="message"
                    rows="5" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1f2969] focus:border-transparent"
                    placeholder="Enter your message"
                    value={formData.message}
                    onChange={handleInputChange}
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-[#1f2969] to-blue-800 text-white font-semibold py-4 px-10 rounded-full hover:from-blue-700 hover:to-indigo-600 transition duration-300 ease-in-out transform hover:scale-105 shadow-xl"
                >
                  Send Message
                </button>
              </form>
              {status && <p className="mt-4 text-sm text-center">{status}</p>}
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
          <h2 className="text-4xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200">Need Emergency Assistance?</h2>
          <p className="text-lg mb-8 opacity-90">Our 24/7 emergency service team is always ready to help.</p>
          <Link href="/emergency" className="inline-block bg-gradient-to-r from-white to-blue-100 text-[#1f2969] font-semibold py-4 px-10 rounded-full hover:from-blue-700 hover:to-indigo-600 hover:text-white transition duration-300 ease-in-out transform hover:scale-105 shadow-xl">
            Emergency Service
          </Link>
        </div>
      </section>
    </>
  );
}
