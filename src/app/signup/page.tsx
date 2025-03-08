import Image from "next/image";
import Link from "next/link";

export default function SignupPage() {
  return (
    <div className="flex min-h-screen">
      {/* Left side - Signup Form */}
      <div className="w-full bg-[#FAFAFA] p-8 md:w-1/2 md:p-16">
        <div className="mx-auto max-w-md">
          <h2 className="mt-32 mb-12 text-[32px] font-bold text-[#1A1D1F]">Sign Up</h2>
          <form className="space-y-6">
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                <Image src="/email.png" alt="User icon" width={20} height={20} />
              </div>
              <input
                type="text"
                placeholder="Your name"
                className="w-full rounded-xl border-[1.6px] border-[#E0E2E9] bg-white px-12 py-4 text-[15px] text-[#1A1D1F] placeholder:text-[#6F767E] focus:outline-none focus:ring-2 focus:ring-[#2A85FF]"
              />
            </div>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                <Image src="/email.png" alt="Email icon" width={20} height={20} />
              </div>
              <input
                type="email"
                placeholder="Your email"
                className="w-full rounded-xl border-[1.6px] border-[#E0E2E9] bg-white px-12 py-4 text-[15px] text-[#1A1D1F] placeholder:text-[#6F767E] focus:outline-none focus:ring-2 focus:ring-[#2A85FF]"
              />
            </div>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                <Image src="/pass.png" alt="Password icon" width={20} height={20} />
              </div>
              <input
                type="password"
                placeholder="Password"
                className="w-full rounded-xl border-[1.6px] border-[#E0E2E9] bg-white px-12 py-4 text-[15px] text-[#1A1D1F] placeholder:text-[#6F767E] focus:outline-none focus:ring-2 focus:ring-[#2A85FF]"
              />
            </div>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                <Image src="/pass.png" alt="Password icon" width={20} height={20} />
              </div>
              <input
                type="password"
                placeholder="Confirm password"
                className="w-full rounded-xl border-[1.6px] border-[#E0E2E9] bg-white px-12 py-4 text-[15px] text-[#1A1D1F] placeholder:text-[#6F767E] focus:outline-none focus:ring-2 focus:ring-[#2A85FF]"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-xl border-[1.6px] border-[#E0E2E9] bg-[rgba(0,98,255,1)] py-4 text-[15px] font-bold text-white hover:bg-[#2478E8] focus:outline-none focus:ring-2 focus:ring-[rgba(0,98,255,1)] focus:ring-offset-2"
            >
              Sign up
            </button>
          </form>

          <div className="mb-8 mt-12 flex items-center justify-between">
            <div className="h-px flex-1 bg-[#EFEFEF]"></div>
            <span className="mx-4 text-[15px] text-[#6F767E]">or</span>
            <div className="h-px flex-1 bg-[#EFEFEF]"></div>
          </div>

          <div className="flex gap-2 align-center">
            <button className="flex w-full items-center justify-center gap-3 rounded-xl border-[1.6px] border-[#E0E2E9] bg-white py-4 text-[15px] text-[#1A1D1F] hover:bg-[#FAFAFA] focus:outline-none focus:ring-2 focus:ring-[#EFEFEF]">
              <Image src="/google.svg" alt="Google" width={20} height={20} />
              <span>Google</span>
            </button>
            <button className="flex w-full items-center justify-center gap-3 rounded-xl border-[1.6px] border-[#E0E2E9] bg-white py-4 text-[15px] text-[#1A1D1F] hover:bg-[#FAFAFA] focus:outline-none focus:ring-2 focus:ring-[#EFEFEF]">
              <Image src="/facebook.svg" alt="Facebook" width={20} height={20} />
              <span>Facebook</span>
            </button>
          </div>

          <div className="mt-6 text-left font-['Poppins'] text-[18px] leading-[24px] tracking-[0.1px] text-[#6F767E]">
            Already have an account?{" "}
            <Link href="/login" className="text-[rgba(0,98,255,1)] hover:text-[#2478E8] hover:underline">
              Log In
            </Link>
          </div>
        </div>
      </div>

      {/* Right side - Background Image */}
      <div className="hidden md:block md:w-1/2">
        <div className="relative h-full w-full">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 to-purple-800/30"></div>
          <Image
            src="/login-bg.png"
            alt="Fresh produce and e-commerce"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </div>
  );
}