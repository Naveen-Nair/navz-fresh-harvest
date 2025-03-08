import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-xl font-bold text-[#1A1D1F]">FreshHarvest</span>
          </Link>
        
        <div className="flex items-center gap-4 align-center">
          {/* Navigation */}
          <nav className="hidden md:flex md:space-x-8">
            <Link
              href="/"
              className="text-[15px] text-[#1A1D1F] hover:text-[#2A85FF]"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-[15px] text-[#1A1D1F] hover:text-[#2A85FF]"
            >
              About us
            </Link> 
            <Link
              href="/shop"
              className="text-[15px] text-[#1A1D1F] hover:text-[#2A85FF]"
            >
              Shop
            </Link>
          </nav>

          {/* Login Button */}
          <Link
            href="/login"
            className="rounded-[8px] bg-black px-4 py-2 text-[15px]  text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 flex items-center justify-center gap-2"
          >
            Login
          </Link>
          </div>
        </div>
      </div>
    </header>
  );
}