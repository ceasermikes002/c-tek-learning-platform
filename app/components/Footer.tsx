"use client"
import Link from 'next/link';
import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

const Footer = () => {
  const pathname = usePathname(); // Get the current path
  const currentYear = new Date().getFullYear(); // Get the current year dynamically

  // Check if the current route is the dashboard or any nested route under it
  const isDashboardRoute = pathname.startsWith('/dashboard');

  // If it's a dashboard route, return null to prevent rendering the footer
  if (isDashboardRoute) return null;

  return (
    <footer className="bg-[#1c1b1b] text-white py-8">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left text-[#fffbf0]">
            <p className="text-lg font-semibold mb-2">
              © {currentYear} C-Tek Learning. All rights reserved.
            </p>
            <p className="text-sm">Empowering learners for a brighter future.</p>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-6 text-[#fffbf0]">
            {[Facebook, Twitter, Linkedin, Instagram].map((Icon, index) => (
              <motion.a
                key={index}
                href="#"
                className="hover:text-[#f79920] transition-colors"
                whileHover={{ y: -5 }} // Move up by 5px on hover
                whileTap={{ scale: 0.9 }} // Slight scale effect on tap
                transition={{ type: 'spring', stiffness: 300, damping: 15 }}
              >
                <Icon size={24} />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="my-6 border-t border-gray-700"></div>

        {/* Bottom Section */}
        <div className="text-center space-x-4 text-[#fffbf0]">
          <Link href="#" className="hover:text-[#f79920] transition-colors">
            Privacy Policy
          </Link>
          <Link href="#" className="hover:text-[#f79920] transition-colors">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
