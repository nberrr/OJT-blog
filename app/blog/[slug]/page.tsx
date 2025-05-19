'use client';

import { use } from "react";
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Calendar, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getBlogPostBySlug, getImagePath, getAllBlogPosts } from '@/lib/utils';
import { BlogPost } from '@/lib/types';

export default function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const post = getBlogPostBySlug(slug);
  const allPosts = getAllBlogPosts();
  // Sort posts by week number ascending for navigation
  const allPostsSorted = [...allPosts].sort((a, b) => {
    const weekA = parseInt(a.week.replace(/\D/g, ''));
    const weekB = parseInt(b.week.replace(/\D/g, ''));
    return weekA - weekB;
  });
  const currentIndex = allPostsSorted.findIndex(p => p.slug === slug);
  const prevPost = currentIndex > 0 ? allPostsSorted[currentIndex - 1] : null;
  const nextPost = currentIndex < allPostsSorted.length - 1 ? allPostsSorted[currentIndex + 1] : null;

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

            <div className="mb-8 flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-4">
              <h1 className="text-4xl font-bold mb-0">{post.title}</h1>
              <span className="inline-block bg-purple-700 text-white text-xs font-semibold px-3 py-1 rounded-full align-middle md:ml-2">{post.week}</span>
            </div>
            <div className="flex items-center text-gray-400 mb-6">
              <Calendar className="h-4 w-4 mr-2" />
              <span>{post.date}</span>
            </div>

            <div className="bg-purple-900/20 border border-purple-500/20 rounded-lg p-6 mb-8">
              <p className="text-lg text-gray-200 italic">{post.description}</p>
            </div>

            <div
              className="prose prose-invert max-w-none mb-12 [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:mt-8 [&>h2]:mb-4 [&>p]:mb-4 [&>p]:text-gray-300"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12">
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

          {/* Previous/Next Navigation */}
          <div className="flex flex-col md:flex-row gap-4 max-w-4xl mx-auto my-12">
            {prevPost ? (
              <Link href={`/blog/${prevPost.slug}`} className="block w-full md:w-auto">
                <div className="border border-purple-900/40 rounded-lg p-4 hover:bg-purple-900/10 transition-colors">
                  <div className="text-xs text-gray-400 mb-1 flex items-center">
                    <ArrowLeft className="h-4 w-4 mr-1" /> Previous
                  </div>
                  <div className="font-bold text-white truncate">{prevPost.week}: {prevPost.title}</div>
                </div>
              </Link>
            ) : <div />}
            {nextPost ? (
              <Link href={`/blog/${nextPost.slug}`} className="block w-full md:w-auto text-right">
                <div className="border border-purple-900/40 rounded-lg p-4 hover:bg-purple-900/10 transition-colors">
                  <div className="text-xs text-gray-400 mb-1 flex items-center justify-end">
                    Next <ArrowRight className="h-4 w-4 ml-1" />
                  </div>
                  <div className="font-bold text-white truncate">{nextPost.week}: {nextPost.title}</div>
                </div>
              </Link>
            ) : <div />}
          </div>
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
