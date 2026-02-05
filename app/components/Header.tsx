"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md" role="banner">
      <nav className="container mx-auto px-4 py-4" aria-label="Main navigation">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3 tap-target" aria-label="GITSICS home">
            <Image
              src={`${basePath}/gitsicsLogo.png`}
              alt=""
              width={40}
              height={40}
              className="h-10 w-10 shrink-0"
              priority
              unoptimized
              fetchPriority="high"
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
            <Link href="/" className="text-gray-700 hover:text-blue-600 transition tap-target py-2">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 transition tap-target py-2">
              About
            </Link>
            <Link href="/courses" className="text-gray-700 hover:text-blue-600 transition tap-target py-2">
              Courses
            </Link>
            <Link href="/advanced-career" className="text-gray-700 hover:text-blue-600 transition tap-target py-2">
              Advanced Career
            </Link>
            <Link href="/career-services" className="text-gray-700 hover:text-blue-600 transition tap-target py-2">
              Career Services
            </Link>
            <Link href="/staffing" className="text-gray-700 hover:text-blue-600 transition tap-target py-2">
              Staffing
            </Link>
            <Link
              href="/enroll"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition font-semibold tap-target"
            >
              Enroll Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden text-gray-700 tap-target p-2 -m-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
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
          <div className="md:hidden mt-4 pb-4 space-y-3" role="menu">
            <Link href="/" className="block text-gray-700 hover:text-blue-600 py-3 tap-target" role="menuitem">Home</Link>
            <Link href="/about" className="block text-gray-700 hover:text-blue-600 py-3 tap-target" role="menuitem">About</Link>
            <Link href="/courses" className="block text-gray-700 hover:text-blue-600 py-3 tap-target" role="menuitem">Courses</Link>
            <Link href="/advanced-career" className="block text-gray-700 hover:text-blue-600 py-3 tap-target" role="menuitem">Advanced Career</Link>
            <Link href="/career-services" className="block text-gray-700 hover:text-blue-600 py-3 tap-target" role="menuitem">Career Services</Link>
            <Link href="/staffing" className="block text-gray-700 hover:text-blue-600 py-3 tap-target" role="menuitem">Staffing</Link>
            <Link
              href="/enroll"
              className="block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition text-center font-semibold tap-target"
              role="menuitem"
            >
              Enroll Now
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}

