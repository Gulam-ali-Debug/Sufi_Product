'use client';

import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp, FaPinterestP } from 'react-icons/fa';
import { useState } from 'react';
import { Facebook, Twitter, Instagram, MessageCircleHeart, Youtube, Linkedin } from 'lucide-react';

const Footer = () => {
  const [language, setLanguage] = useState('English');

  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Newsletter Section */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <div className="inline-flex items-center justify-center mb-4">
            <div className="h-12 w-12 rounded-full bg-white flex items-center justify-center mr-3">
              <span className="text-black font-bold text-xl">S</span>
            </div>
            <span className="text-white font-bold text-3xl tracking-wider">
              Sufi Products Attar
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Become a Fragrance Insider!
          </h1>
          <h2 className="text-xl md:text-2xl text-white font-bold mb-6">
            Subscribe to our emails
          </h2>
          <p className="text-white mb-8 max-w-xl mx-auto font-bold">
            Join our email list for early updates on new collections and exclusive offers!
          </p>

          <div className="max-w-md mx-auto mb-8">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <label className="block text-sm font-bold text-white mb-2 text-left">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 bg-black border border-white rounded-lg focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent text-white font-bold"
                />
              </div>
              <button className="bg-white text-black px-8 py-3 rounded-lg font-bold transition-none mt-6 sm:mt-8">
                Subscribe
              </button>
            </div>
          </div>

          <hr className="border-white mb-8" />
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Shop By Category */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white border-l-4 border-white pl-3">
              Shop By Category
            </h3>
            <ul className="space-y-3">
              {['Attar', 'Oud Attar', 'Floral Attar', 'Musk Attar', 'Mega Pack', 'Bakhoor', 'Car Decor'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-white font-bold block"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Deals & Information */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white border-l-4 border-white pl-3">
              Deals & Information
            </h3>
            <ul className="space-y-3">
              {[
                'Return & Refund policy',
                'Terms & Conditions',
                'Shipping Policy',
                'Privacy Policy',
                'Return / Exchange',
                'Track Order'
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-white font-bold block"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white border-l-4 border-white pl-3">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-white mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-white font-bold">
                  F-06 Landmark Prime, Vansa - Bhayli Main Rd, Vadodara, Gujarat 390012
                </span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-white mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:info@sufiproducts.com" className="text-white font-bold">
                  info@sufiproducts.com
                </a>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-white mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+919512447722" className="text-white font-bold">
                  +91 95 12 44 77 22
                </a>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-white mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-white font-bold">
                  10:00am - 7:00pm, Monday to Saturday
                </span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white border-l-4 border-white pl-3">
              Follow Us
            </h3>
            <div className="flex space-x-4 mb-8">
              {[
                { icon: FaFacebookF, label: 'Facebook' },
                { icon: FaInstagram, label: 'Instagram' },
                { icon: FaTwitter, label: 'Twitter' },
                { icon: FaPinterestP, label: 'Pinterest' }
              ].map((social) => (
                <a
                  key={social.label}
                  href="#"
                  className="w-10 h-10 rounded-full bg-black flex items-center justify-center"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-white" />
                </a>
              ))}
            </div>

            <h3 className="text-xl font-bold mb-6 text-white border-l-4 border-white pl-3">
              Secure Payment
            </h3>
            <div className="space-y-4">
              <p className="text-white mb-4 font-bold">
                Guaranteed safe checkout
              </p>
              <div className="grid grid-cols-2 gap-3">
                {['Pay', 'Buy', 'Visa', 'Mastercard'].map((method) => (
                  <div
                    key={method}
                    className="bg-black border border-white rounded-lg p-3 flex items-center justify-center"
                  >
                    <span className="text-white font-bold">{method}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar - Language Selector and social icons */}
        <div className="pt-8 border-t border-white">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Language Selector (remain on the left/its place) */}
            <div className="flex flex-col items-center md:flex-row md:items-center mb-4 md:mb-0 gap-4 md:w-1/3 md:justify-start">
              <div className="relative mb-2 md:mb-0 md:mr-6">
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  className="appearance-none bg-black text-white px-4 py-2 pr-8 rounded-lg focus:outline-none cursor-pointer"
                >
                  <option value="English">English</option>
                  <option value="Hindi">Hindi</option>
                  <option value="Arabic">Arabic</option>
                  <option value="Gujarati">Gujarati</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
            {/* Social Icons Centered */}
            <div className="flex items-center justify-center gap-[1.5em] text-base md:w-1/3 md:order-none order-last mb-4 md:mb-0">
              <Facebook size={20} />
              <Twitter size={20} />
              <Instagram size={20} />
              <FaPinterestP size={20} />
              <Youtube size={20} />
              <Linkedin size={20} />
              <FaWhatsapp size={20} />
            </div>
            {/* Empty div for spacing like before, stays right on desktop */}
            <div className="hidden md:block w-24 md:w-1/3"></div>
          </div>
          {/* Copyright now in a separate div below icons/language selector */}
          <div className="text-[#e6e6e6] text-center mt-6">
            <span className="">
              © 2026 Sufi Products. Designed & Developed by Spider Web Solutions
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;