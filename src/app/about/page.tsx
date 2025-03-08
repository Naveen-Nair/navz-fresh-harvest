import Image from "next/image";
import Header from "../_components/Header";
import Footer from "../_components/Footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="mx-auto max-w-7xl px-4 pt-24 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-16 py-16 md:flex-row">
          {/* Left Column - Text Content */}
          <div className="flex-1 space-y-8">
            <h1 className="text-4xl font-bold text-[#1A1D1F] md:text-5xl">About</h1>
            <p className="text-lg text-[#6F767E]">
              At FreshHarvest, we're passionate about delivering the freshest, highest-quality produce right to your doorstep. Our journey began with a simple mission: to connect local farmers with conscious consumers, making fresh, sustainable produce accessible to everyone.
            </p>
            <p className="text-lg text-[#6F767E]">
              We work directly with a network of trusted local farmers who share our commitment to sustainable agriculture and exceptional quality. Every fruit and vegetable in our selection is carefully chosen to ensure you receive only the best nature has to offer.
            </p>
            <p className="text-lg text-[#6F767E]">
              Our dedicated team ensures that your produce is handled with care from farm to doorstep, maintaining its freshness and nutritional value. We're not just delivering groceries; we're delivering a promise of quality, sustainability, and convenience.
            </p>
                    {/* Contact Form Section */}
        <div className=" max-w-2xl py-16">
          <h2 className="mb-8 text-3xl font-bold text-[#1A1D1F]">Contact us</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-[#1A1D1F]">
                  First name
                </label>
                <input
                  type="text"
                  id="firstName"
                  placeholder="John"
                  className="mt-1 w-full rounded-xl border-[1.6px] border-[#E0E2E9] px-4 py-3 text-[15px] text-[#1A1D1F] placeholder:text-[#6F767E] focus:border-[#2A85FF] focus:outline-none focus:ring-1 focus:ring-[#2A85FF]"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-[#1A1D1F]">
                  Last name
                </label>
                <input
                  type="text"
                  id="lastName"
                  placeholder="Doe"
                  className="mt-1 w-full rounded-xl border-[1.6px] border-[#E0E2E9] px-4 py-3 text-[15px] text-[#1A1D1F] placeholder:text-[#6F767E] focus:border-[#2A85FF] focus:outline-none focus:ring-1 focus:ring-[#2A85FF]"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[#1A1D1F]">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="john.doe@example.com"
                className="mt-1 w-full rounded-xl border-[1.6px] border-[#E0E2E9] px-4 py-3 text-[15px] text-[#1A1D1F] placeholder:text-[#6F767E] focus:border-[#2A85FF] focus:outline-none focus:ring-1 focus:ring-[#2A85FF]"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-[#1A1D1F]">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="Write your message here..."
                className="mt-1 w-full rounded-xl border-[1.6px] border-[#E0E2E9] px-4 py-3 text-[15px] text-[#1A1D1F] placeholder:text-[#6F767E] focus:border-[#2A85FF] focus:outline-none focus:ring-1 focus:ring-[#2A85FF]"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full rounded-xl bg-black py-4 text-[15px] font-bold text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
            >
              Submit
            </button>
          </form>
        </div>
          </div>

          {/* Right Column - Image */}
          <div className="flex-1">
            <div className="relative h-[600px] w-full overflow-hidden rounded-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 to-purple-800/30"></div>
              <Image
                src="/about-image.png"
                alt="Fresh produce and farming"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>


      </main>

      <Footer />
    </div>
  );
}