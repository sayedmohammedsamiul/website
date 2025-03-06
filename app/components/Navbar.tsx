'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-blue-600">
            Elite Sports Club
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/facilities" className="text-gray-700 hover:text-blue-600 transition duration-300">
              Facilities
            </Link>
            <Link href="/programs" className="text-gray-700 hover:text-blue-600 transition duration-300">
              Programs
            </Link>
            <Link href="/schedule" className="text-gray-700 hover:text-blue-600 transition duration-300">
              Schedule
            </Link>
            <Link href="/membership" className="text-gray-700 hover:text-blue-600 transition duration-300">
              Membership
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition duration-300">
              Contact
            </Link>
            <Link
              href="/join"
              className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300"
            >
              Join Now
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <Link href="/facilities" className="block text-gray-700 hover:text-blue-600 transition duration-300">
              Facilities
            </Link>
            <Link href="/programs" className="block text-gray-700 hover:text-blue-600 transition duration-300">
              Programs
            </Link>
            <Link href="/schedule" className="block text-gray-700 hover:text-blue-600 transition duration-300">
              Schedule
            </Link>
            <Link href="/membership" className="block text-gray-700 hover:text-blue-600 transition duration-300">
              Membership
            </Link>
            <Link href="/contact" className="block text-gray-700 hover:text-blue-600 transition duration-300">
              Contact
            </Link>
            <Link
              href="/join"
              className="inline-block bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300"
            >
              Join Now
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
} 