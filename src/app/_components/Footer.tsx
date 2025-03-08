import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white">
<div className="w-full border-t border-gray-200"></div>
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Brand and Description */}
          <div className="md:col-span-1 flex flex-col items-center md:items-start  mb-10 md:mb-0">
            <Link href="/" className="flex items-center">
              <span className="text-xl font-bold text-[#1A1D1F]">FreshHarvest</span>
            </Link>
          
            <div className="mt-6 flex justify-center md:justify-start space-x-4">
              <Link href="#" className="text-[#6F767E] hover:text-[#2A85FF]">
                <Image src="/fb.png" alt="Facebook" width={24} height={24} />
              </Link>
              <Link href="#" className="text-[#6F767E] hover:text-[#2A85FF]">
                <Image src="/li.png" alt="LinkedIn" width={24} height={24} />
              </Link>
              <Link href="#" className="text-[#6F767E] hover:text-[#2A85FF]">
                <Image src="/yt.png" alt="YouTube" width={24} height={24} />
              </Link>
              <Link href="#" className="text-[#6F767E] hover:text-[#2A85FF]">
                <Image src="/insta.png" alt="Instagram" width={24} height={24} />
              </Link>
            </div>
          </div>
          {/* Support Links */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 whitespace-nowrap md:justify-end md:ml-auto">
          <div className="text-center md:text-left md:ml-16">
            <h3 className="text-sm font-semibold text-[#1A1D1F]">Support</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link href="/faq" className="text-sm text-[#6F767E] hover:text-[#2A85FF]">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-[#6F767E] hover:text-[#2A85FF]">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/returns" className="text-sm text-[#6F767E] hover:text-[#2A85FF]">
                  Returns
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="text-center md:text-left md:ml-4">
            <h3 className="text-sm font-semibold text-[#1A1D1F]">Company</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link href="/about" className="text-sm text-[#6F767E] hover:text-[#2A85FF]">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-sm text-[#6F767E] hover:text-[#2A85FF]">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm text-[#6F767E] hover:text-[#2A85FF]">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="text-center md:text-left">
            <h3 className="text-sm font-semibold text-[#1A1D1F]">Legal</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link href="/privacy" className="text-sm text-[#6F767E] hover:text-[#2A85FF]">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-[#6F767E] hover:text-[#2A85FF]">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          </div>
        </div>
      </div>
    </footer>
  );
}