import Image from "next/image";
import Link from "next/link";

export default function ChangePasswordPage() {
  return (
    <div className="flex min-h-screen">
      {/* Left side - Change Password Form */}
      <div className="w-full bg-[#FAFAFA] p-8 md:w-1/2 md:p-16">
        <div className="mx-auto max-w-md">
          <h2 className="mt-52 mb-12 text-[32px] font-bold text-[#1A1D1F]">Change Password</h2>
          <p className="mb-8 text-[15px] text-[#6F767E]">
            Enter your current password and choose a new password for your account.
          </p>
          <form className="space-y-6">
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                <Image src="/pass.png" alt="Password icon" width={20} height={20} />
              </div>
              <input
                type="password"
                placeholder="Current password"
                className="w-full rounded-xl border-[1.6px] border-[#E0E2E9] bg-white px-12 py-4 text-[15px] text-[#1A1D1F] placeholder:text-[#6F767E] focus:outline-none focus:ring-2 focus:ring-[#2A85FF]"
              />
            </div>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                <Image src="/pass.png" alt="Password icon" width={20} height={20} />
              </div>
              <input
                type="password"
                placeholder="New password"
                className="w-full rounded-xl border-[1.6px] border-[#E0E2E9] bg-white px-12 py-4 text-[15px] text-[#1A1D1F] placeholder:text-[#6F767E] focus:outline-none focus:ring-2 focus:ring-[#2A85FF]"
              />
            </div>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                <Image src="/pass.png" alt="Password icon" width={20} height={20} />
              </div>
              <input
                type="password"
                placeholder="Confirm new password"
                className="w-full rounded-xl border-[1.6px] border-[#E0E2E9] bg-white px-12 py-4 text-[15px] text-[#1A1D1F] placeholder:text-[#6F767E] focus:outline-none focus:ring-2 focus:ring-[#2A85FF]"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-xl border-[1.6px] border-[#E0E2E9] bg-[rgba(0,98,255,1)] py-4 text-[15px] font-bold text-white hover:bg-[#2478E8] focus:outline-none focus:ring-2 focus:ring-[rgba(0,98,255,1)] focus:ring-offset-2"
            >
              Change Password
            </button>
          </form>
          <div className="mt-6 text-center text-[15px] text-[#6F767E]">
            <Link href="/" className="text-[#2A85FF] hover:text-[#2478E8] hover:underline">
              Back to Dashboard
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