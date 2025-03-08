"use client";

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ShopHeader from "../../_components/Header";
import Footer from "../../_components/Footer";
import { blogPosts } from "../../_data/blog";

type Params = { id: string };

type Props = {
  params: Promise<Params>;
};

export default async function BlogPostPage({ params }: Props) {
  const { id } = await params;
  if (!id) {
    return notFound();
  }
  const post = blogPosts.find((p) => p.id === id);
  const relatedPosts = blogPosts.filter((p) => p.id !== id).slice(0, 3);

  if (!post) {
    return notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      <ShopHeader />

      <main className=" mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="mt-32 relative mb-8">
          <div className="flex items-center mb-8">
            <div className="space-y-4 px-4">
              <h1 className="text-4xl font-bold text-gray-900 md:text-5xl">{post.title}</h1>
              <p className="text-lg text-gray-600">{post.subtitle}</p>
            </div>
          </div>
          <div className="h-[600px] w-full relative">
            <Image
              src={post.mainImage}
              alt={post.title}
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>
        </div>

        {/* Article Content */}
        <div className="mx-auto max-w-3xl pt-16">
          <div className="prose prose-lg">
            {post.precontent.map((paragraph, index) => (
              <p key={index} className="text-lg text-[#6F767E] mb-8">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 py-12">
          {post.middleImages.map((image, index) => (
            <div key={index} className="relative h-80 w-full overflow-hidden rounded-2xl">
              <Image
                src={image}
                alt="Article image"
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
          {/* Article Content */}
          <div className="mx-auto max-w-3xl pt-16">
          <div className="prose prose-lg">
            {post.postcontent.map((paragraph, index) => (
              <p key={index} className="text-lg text-[#6F767E] mb-8">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* Related Articles */}
        <div className="py-16">
          <h2 className="mb-8 text-3xl font-bold text-[#1A1D1F]">Related articles</h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {relatedPosts.map((relatedPost) => (
              <Link key={relatedPost.id} href={`/blog/${relatedPost.id}`} className="group">
                <div className="relative h-64 w-full overflow-hidden rounded-2xl">
                  <Image
                    src={relatedPost.mainImage}
                    alt={relatedPost.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="mt-4">
                  <div>
                    <h3 className="text-xl font-bold text-[#1A1D1F]">{relatedPost.title}</h3>
                    <p className="text-sm text-gray-600 mt-1">By {relatedPost.author}</p>
                  </div>
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