import Image from "next/image";
import Link from "next/link";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import { relatedProducts } from "./_data/relatedProducts";
import { testimonials } from "./_data/testimonials";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className=" ">
        {/* Hero Section */}
        <div className="mt-32 relative mb-8 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-8 ">
            <div className="space-y-4 px-4 w-[60%]">
              <h1 className="text-4xl font-bold text-gray-900 md:text-5xl">Fresh & Organic Food Delivered to Your Doorstep</h1>
              <p className="text-lg text-gray-600">Your one-stop destination for farm-fresh produce, exotic fruits, and high-quality organic food.</p>
            </div>
          </div>
          <Link 
            href="/blog/healthy-eating" 
            className="ml-2 inline-block rounded-xl bg-black px-8 py-4 text-[15px] font-bold text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
          >
             Article
          </Link>
          <div className="h-[600px] w-full relative mt-10">
            <Image
              src={"/blog-1.png"}
              alt={"Fresh & Organic Food Delivered to Your Doorstep"}
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>
        </div>
 
   {/* Related Products Section */}
   <div className="py-16 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-3xl font-bold text-[#1A1D1F]">Discover Freshness in Every Bite</h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {relatedProducts.map((relatedProduct) => (
              <Link key={relatedProduct.id} href={`/shop/${relatedProduct.id}`} className="group">
                <div className="relative h-80 w-full overflow-hidden rounded-2xl">
                  <Image
                    src={relatedProduct.image}
                    alt={relatedProduct.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="mt-4 space-y-2">
                  <h3 className="text-xl font-bold text-[#1A1D1F]">{relatedProduct.name}</h3>
                  <p className="text-[#6F767E]">{relatedProduct.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

  

        {/* Features Section */}
        <div className="mb-16 pl-4 sm:pl-6 lg:pl-8 mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className={`space-y-8 ml-0 md:ml-24 transform transition-all duration-500 hover:translate-x-2 ${
              // Add dynamic classes based on viewport or state
              typeof window !== 'undefined' && window.innerWidth > 768 ? 'animate-slideIn' : ''
            }`}>
<h2 className="text-3xl font-bold text-[#1A1D1F] mb-8">Why Choose Harvest Fresh?</h2>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-[#1A1D1F]">Premium Quality</h3>
                <p className="text-[#6F767E]">We ensure the highest quality standards with farm-to-table freshness</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-[#1A1D1F]">Sustainably Sourced</h3>
                <p className="text-[#6F767E]">Our products come from sustainable farming practices for a healthier planet.</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-[#1A1D1F]">Fast & Reliable Delivery</h3>
                <p className="text-[#6F767E]">Get your groceries delivered fresh and on time, every time.</p>
              </div>
              <div className="flex space-x-4 mt-8">
                <Link
                  href="/shop"
                  className="inline-block rounded-xl bg-black px-8 py-4 text-[15px] font-bold text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
                >
                  Shop Now
                </Link>
                <Link
                  href="/about"
                  className="inline-block rounded-xl bg-gray-200 px-8 py-4 text-[15px] font-bold text-gray-800 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-offset-2"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="relative h-[500px] w-full overflow-hidden rounded-lg bg-[#F5F5F5]">
              <Image
                src="/main-right.png"
                alt="Fresh produce features"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

              {/* Why Choose Us Section */}
              <div className="py-16 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-3xl font-bold text-[#1A1D1F]">Why Choose Us?</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="group">
              <div className="relative h-[300px] w-full overflow-hidden rounded-2xl">
                <Image
                  src="/main-4.png"
                  alt="High-Quality, Fresh Ingredients"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="mt-6 space-y-2">
                <h3 className="text-xl font-bold text-[#1A1D1F]">High-Quality, Fresh Ingredients</h3>
                <p className="text-[#6F767E]">We source only the freshest, organic ingredients to ensure the best quality.</p>
              </div>
            </div>
            <div className="group">
              <div className="relative h-[300px] w-full overflow-hidden rounded-2xl">
                <Image
                  src="/main-5.png"
                  alt="A Taste of Luxury & Comfort"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="mt-6 space-y-2">
                <h3 className="text-xl font-bold text-[#1A1D1F]">A Taste of Luxury & Comfort</h3>
                <p className="text-[#6F767E]">Enjoy artisanal, handcrafted baked goods and fresh produce, perfect for every occasion.</p>
              </div>
            </div>
          </div>
        </div>

        {/* What Our Customers Say */}
        <div className="py-16 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-12 text-3xl font-bold text-[#1A1D1F]">What Our Customers Say</h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="p-6 rounded-2xl border border-[#E6E8EC] hover:border-[#2A85FF] transition-colors duration-200">
                <p className="text-lg text-[#1A1D1F] mb-6">{testimonial.text}</p>
                <div className="flex items-center gap-4">
                  <div className="relative h-12 w-12 overflow-hidden rounded-full">
                    <Image
                      src={testimonial.avatar}
                      alt={`${testimonial.name}'s Avatar`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-[#1A1D1F]">{testimonial.name}</p>
                    <p className="text-[#6F767E]">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Join Us Section */}
        <div className="py-16 mx-auto px-4 sm:px-6 lg:px-8 mt-8 bg-[rgba(247,247,247,1)]">
          <div className="flex md:flex-row flex-col gap-x-20 gap-y-8 items-center text-center justify-between">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A1D1F]">Join Us for a Healthier Lifestyle!</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/shop"
                className="inline-block rounded-xl bg-black px-8 sm:px-10 md:px-12 py-4 sm:py-5 md:py-6 text-sm sm:text-base md:text-lg font-bold text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
              >
                Shop
              </Link>
              <Link
                href="/about"
                className="inline-block rounded-xl bg-gray-200 px-8 sm:px-10 md:px-12 py-4 sm:py-5 md:py-6 text-sm sm:text-base md:text-lg font-bold text-gray-800 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-offset-2"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
