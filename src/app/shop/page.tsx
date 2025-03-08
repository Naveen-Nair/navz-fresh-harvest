import Image from "next/image";
import Link from "next/link";
import Header from "../_components/ShopHeader";
import Footer from "../_components/Footer";
import { products } from "../_data/products";

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="relative h-[500px] w-full overflow-hidden mb-16">
          <Image
            src="/shopback.jpeg"
            alt="Fresh produce"
            fill
            className="object-cover"
            priority
          />
        <div className="absolute inset-0 bg-black/[.24]"></div>

        <Header />

          <div className="absolute inset-0 flex items-center justify-center text-center">
            <div className="space-y-4 px-4">
              <h1 className="text-4xl font-bold text-white md:text-5xl">Shop Fresh & Organic</h1>
              <p className="text-lg text-white">Explore our selection of premium fresh produce and organic food</p>
              <button className="mt-4 rounded-xl bg-black px-8 py-4 text-[15px] font-bold text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2">
                Shop
              </button>
            </div>
          </div>
        </div>
      <main className="mx-auto max-w-7xl px-4 pt-24 sm:px-6 lg:px-8">
        {/* Hero Section */}
     

        {/* Seasonal Picks Section */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4 pr-20">
              <h2 className="text-3xl font-bold text-[#1A1D1F]">Seasonal Picks</h2>
              <p className="text-[#6F767E]">Discover our handpicked selection of seasonal fruits and vegetables, fresh from local farms</p>
              <button className="mt-4 rounded-xl bg-[#EFEFEF] px-8 py-4 text-[15px] font-semibold text-[#1A1D1F] hover:bg-gray-200 focus:outline-none">
                Learn More
              </button>
            </div>
            <Link href="/shop/fresh-pears" className="relative h-[400px] w-full overflow-hidden rounded-2xl bg-[#F5F5F5]">
            <div className="relative h-[400px] w-full overflow-hidden rounded-2xl bg-[#F5F5F5]">
              <Image
                src="/sh-pear.png"
                alt="Seasonal Picks"
                fill
                className="object-cover"
              />
            </div>
            </Link>
          </div>
        </div>

        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="relative h-[400px] w-full overflow-hidden rounded-2xl bg-[#F5F5F5]">
          <Link href="/shop/watermelon" className="group">

              <Image
                src="/sh-watermelon.png"
                alt="Best Sellers"
                fill
                className="object-cover"
              />
              </Link>
            </div>
      
            <div className="space-y-4 p-20">
              <h2 className="text-3xl font-bold text-[#1A1D1F]">Best Sellers</h2>
              <p className="text-[#6F767E]">Discover our most popular and loved products</p>
              <button className="mt-4 rounded-xl bg-[#EFEFEF] px-8 py-4 text-[15px] font-semibold text-[#1A1D1F] hover:bg-gray-200 focus:outline-none">
                View All
              </button>
            </div>
            </div>
        </div>
 
        {/* Fresh & Organic Selection */}
        <div className="mb-16 mt-40">
          <h2 className="mb-8 text-3xl font-bold text-[#1A1D1F]">Fresh & Organic Selection</h2>
          <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr] gap-8">
            {/* Featured Product */}
            <Link href="/shop/fresh-pears" className="group">
              <div className="relative h-[700px] w-full overflow-hidden rounded-2xl bg-[#F5F5F5]">
                <Image
                  src="/sh-featured.png"
                  alt="Featured pears"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="mt-4 space-y-2">
                <h3 className="text-xl font-bold text-[#1A1D1F]">Featured product</h3>
                <p className="text-[#6F767E]">Handpicked premium pears, rich in flavor and nutrients</p>
                <div className="text-lg font-bold text-[#1A1D1F]">$10.99</div>
              </div>
            </Link>

            {/* Right Column Products */}
            <div className="space-y-8">
              <Link href="/shop/fresh-pears" className="group">
                <div className="relative h-[280px] w-full overflow-hidden rounded-2xl bg-[#F5F5F5]">
                  <Image
                    src="/sh-pear.png"
                    alt="Fruits"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="mt-4 space-y-2">
                  <h3 className="text-xl font-bold text-[#1A1D1F]">Fruits</h3>
                  <p className="text-[#6F767E]">A delicate blend of fresh fruits for a balanced taste</p>
                  <div className="text-lg font-bold text-[#1A1D1F]">$10.99</div>
                </div>
              </Link>

              <Link href="/shop/fresh-mushroom" className="group">
                <div className="relative h-[280px] w-full overflow-hidden rounded-2xl bg-[#F5F5F5] mt-10">
                  <Image
                    src="/sh-mush.png"
                    alt="Mushrooms"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="mt-4 space-y-2">
                  <h3 className="text-xl font-bold text-[#1A1D1F]">Mushrooms</h3>
                  <p className="text-[#6F767E]">Organic mushrooms, perfect for gourmet dishes</p>
                  <div className="text-lg font-bold text-[#1A1D1F]">$10.99</div>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Why Shop With Us */}
        <div className="mb-40 mt-40">
          <h2 className="mb-8 text-3xl font-bold text-[#1A1D1F] mb-12">Why Shop With Us?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-60 gap-y-20">
            <div className="">
              <div className="w-10 h-10">
                <Image
                  src="/sustainability.png"
                  alt="Sustainability"
                  width={20}
                  height={20}
                />
              </div>
              <h3 className="text-xl text-[#1A1D1F]">Sustainability First</h3>
              <p className="text-[#6F767E]">Our products are ethically sourced and environmentally friendly.</p>
            </div>

            <div className="">
              <div className="w-10 h-10">
                <Image
                  src="/quality.png"
                  alt="Quality"
                  width={20}
                  height={20}
                />
              </div>
              <h3 className="text-xl text-[#1A1D1F]">Quality Assurance</h3>
              <p className="text-[#6F767E]">Every product goes through a rigorous quality check before reaching you.</p>
            </div>

            <div className="">
              <div className="w-10 h-10">
                <Image
                  src="/satisfaction.png"
                  alt="Satisfaction"
                  width={20}
                  height={20}
                />
              </div>
              <h3 className="text-xl  text-[#1A1D1F]">Customer Satisfaction</h3>
              <p className="text-[#6F767E]">We prioritize customer experience with reliable service and fresh produce</p>
            </div>

            <div className="">
              <div className="w-10 h-10">
                <Image
                  src="/fresh.png"
                  alt="Fresh"
                  width={20}
                  height={20}
                />
              </div>
              <h3 className="text-xl text-[#1A1D1F]">Fresh, Every Day</h3>
              <p className="text-[#6F767E]">We ensure daily restocking for the best and freshest selection.</p>
            </div>
          </div>
        </div>
        
      </main>

      <Footer />
    </div>
  );
}