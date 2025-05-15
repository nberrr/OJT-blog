'use client';

import { use } from "react";
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Calendar, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getBlogPostBySlug, getImagePath } from '@/lib/utils';
import { BlogPost } from '@/lib/types';

export default function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-[#0a0118] text-white flex items-center justify-center">
        <div className="text-xl">Entry not found</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0118] text-white">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-purple-600 futuristic-blur"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-blue-600 futuristic-blur"></div>
        <div className="absolute inset-0 cyber-grid opacity-30"></div>
      </div>

      <header className="sticky top-0 z-40 glass-effect">
        <div className="container mx-auto py-4 px-4 md:px-6">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="text-xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500"
            >
              nberrr<span className="text-purple-400">_</span>
            </Link>

            <nav className="flex items-center gap-6">
              <Link href="/" className="text-sm font-medium hover:text-purple-400 transition-colors">
                Home
              </Link>
              <Link href="/blog" className="text-sm font-medium text-purple-400 transition-colors">
                Blog
              </Link>
              <Link href="/about" className="text-sm font-medium hover:text-purple-400 transition-colors">
                About
              </Link>
            </nav>
          </div>
        </div>
        <div className="tech-line w-full"></div>
      </header>

      <main className="relative z-10 py-8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-8">
            <Link href="/blog">
              <Button variant="ghost" className="text-purple-400 hover:text-purple-300">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Blog
              </Button>
            </Link>
          </div>

          <article className="max-w-4xl mx-auto">
            <div className="relative w-full h-[400px] mb-8 rounded-lg overflow-hidden">
              <Image
                src={getImagePath(post.src)}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="mb-8">
              <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
              <div className="flex items-center text-gray-400">
                <Calendar className="h-4 w-4 mr-2" />
                <span>{post.date}</span>
              </div>
            </div>

            <div 
              className="prose prose-invert max-w-none mb-12 [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:mt-8 [&>h2]:mb-4 [&>p]:mb-4 [&>p]:text-gray-300" 
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {post.images.map((image, index) => (
                <div key={index} className="relative aspect-square rounded-lg overflow-hidden">
                  <Image
                    src={getImagePath(image)}
                    alt={`Gallery image ${index + 1}`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </article>
        </div>
      </main>

      <footer className="relative z-10 mt-16">
        <div className="tech-line w-full mb-8"></div>
        <div className="container mx-auto px-4 md:px-6 pb-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <Link
                href="/"
                className="text-xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500 mb-4 inline-block"
              >
                nberrr<span className="text-purple-400">_</span>
              </Link>
              <p className="text-gray-400 mb-4 max-w-md">
                A personal journey through my OJT experience. Documenting weekly insights, challenges, and growth as I
                navigate the professional world.
              </p>
            </div>
            
          </div>
        </div>
      </footer>
    </div>
  );
}
