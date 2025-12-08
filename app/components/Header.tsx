"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src={`${basePath}/gitsicsLogo.png`}
              alt="GITSICS Logo"
              width={40}
              height={40}
              className="h-10 w-auto"
              priority
              unoptimized
            />
            <div className="flex flex-col">
              <div className="text-xl font-bold text-blue-600">GITSICS</div>
              <span className="text-xs text-gray-600 hidden sm:inline">
                Global I Tech Solutions Inc.
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-gray-700 hover:text-blue-600 transition">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 transition">
              About
            </Link>
            <Link href="/courses" className="text-gray-700 hover:text-blue-600 transition">
              Courses
            </Link>
            <Link href="/advanced-career" className="text-gray-700 hover:text-blue-600 transition">
              Advanced Career
            </Link>
            <Link href="/career-services" className="text-gray-700 hover:text-blue-600 transition">
              Career Services
            </Link>
            <Link href="/staffing" className="text-gray-700 hover:text-blue-600 transition">
              Staffing
            </Link>
            <Link href="/how-it-works" className="text-gray-700 hover:text-blue-600 transition">
              How It Works
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition">
              Contact
            </Link>
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition font-semibold"
            >
              Enroll Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3">
            <Link href="/" className="block text-gray-700 hover:text-blue-600">Home</Link>
            <Link href="/about" className="block text-gray-700 hover:text-blue-600">About</Link>
            <Link href="/courses" className="block text-gray-700 hover:text-blue-600">Courses</Link>
            <Link href="/advanced-career" className="block text-gray-700 hover:text-blue-600">Advanced Career</Link>
            <Link href="/career-services" className="block text-gray-700 hover:text-blue-600">Career Services</Link>
            <Link href="/staffing" className="block text-gray-700 hover:text-blue-600">Staffing</Link>
            <Link href="/how-it-works" className="block text-gray-700 hover:text-blue-600">How It Works</Link>
            <Link href="/contact" className="block text-gray-700 hover:text-blue-600">Contact</Link>
            <Link
              href="/contact"
              className="block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition text-center font-semibold"
            >
              Enroll Now
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}

