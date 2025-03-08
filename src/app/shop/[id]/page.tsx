import Image from "next/image";
import Link from "next/link";
import Header from "../../_components/Header";
import Footer from "../../_components/Footer";
import { products, Product } from "../../_data/products";
import { notFound } from 'next/navigation';

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === params.id) || products[0];
  const relatedProducts = products.filter((p) => p.id !== params.id);

  if (!product) {
    return notFound();
  }
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="mx-auto max-w-7xl px-4 pt-24 sm:px-6 lg:px-8">
        {/* Product Details Section */}
        <div className="flex flex-col gap-16 py-16 md:flex-row">
          {/* Left Column - Product Image */}
          <div className="flex-1">
            <div className="relative h-[600px] w-full overflow-hidden rounded-2xl">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Right Column - Product Info */}
          <div className="flex-1 space-y-8 mt-8">
            <h1 className="text-4xl font-bold text-[#1A1D1F] md:text-5xl">{product.name}</h1>
            <div className="text-2xl font-bold text-[#1A1D1F]">${product.price.toFixed(2)}</div>
            <p className="text-lg text-[#6F767E]">{product.description}</p>
            <button
              type="button"
              className="w-full rounded-xl bg-black py-4 text-[15px] font-bold text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
            >
              Add to cart
            </button>
            <div className="flex items-center gap-4 text-sm text-[#6F767E]">
              {product.features.map((feature, index) => (
                <span key={index}>✓ {feature}</span>
              ))}
            </div>
           
          </div>
        </div>

        {/* Related Products Section */}
        <div className="py-16">
          <h2 className="mb-8 text-3xl font-bold text-[#1A1D1F]">Related products</h2>
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
                  <div className="text-lg font-bold text-[#1A1D1F]">${relatedProduct.price.toFixed(2)}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}