'use client';

import { useState, useEffect } from 'react';
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = 500; // Match the hero section height
      setIsScrolled(window.scrollY > heroHeight - 64); // 64px is header height
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial scroll position

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-sm' : 'bg-transparent'}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/about" className="flex items-center">
            <span className={`text-xl font-bold ${isScrolled ? 'text-[#1A1D1F]' : 'text-white'}`}>FreshHarvest</span>
          </Link>
        
        <div className="flex items-center gap-4 align-center">
          {/* Navigation */}
          <nav className="hidden md:flex md:space-x-8">
            <Link
              href="/"
              className={`text-[15px] ${isScrolled ? 'text-[#1A1D1F] hover:text-[#2A85FF]' : 'text-white hover:text-gray-200'}`}
            >
              Home
            </Link>
            <Link
              href="/shop"
              className={`text-[15px] ${isScrolled ? 'text-[#1A1D1F] hover:text-[#2A85FF]' : 'text-white hover:text-gray-200'}`}
            >
              Shop
            </Link>
          </nav>

          {/* Login Button */}
          <Link
            href="/login"
            className={`w-[91px] h-[52px] rounded-[8px] px-6 py-[14px] text-[15px] font-bold focus:outline-none focus:ring-2 focus:ring-offset-2 flex items-center justify-center gap-2 ${
              isScrolled
                ? 'bg-black text-white hover:bg-gray-800 focus:ring-black'
                : 'bg-transparent text-white border-2 border-white hover:bg-white/10 focus:ring-white'
            }`}
          >
            Login
          </Link>
          </div>
        </div>
      </div>
    </header>
  );
}