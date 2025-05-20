"use client";

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Calendar, Tag, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { getAllBlogPosts, getImagePath, getLatestPost } from "@/lib/utils"
import { useRef, useState, useEffect, useCallback } from "react"
import PolaroidGallery from "../components/PolaroidGallery"

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  week: string;
  description: string;
  src: string;
}

export default function Blog() {
  const allPosts = getAllBlogPosts();
  const latestPost = getLatestPost();
  const [sortOrder, setSortOrder] = useState<'latest' | 'oldest'>('latest');
  const posts = [...allPosts].sort((a, b) => {
    const weekA = parseInt(a.week.replace(/\D/g, ''));
    const weekB = parseInt(b.week.replace(/\D/g, ''));
    if (sortOrder === 'latest') {
      return weekB - weekA;
    } else {
      return weekA - weekB;
    }
  });
  const scrollRef = useRef<HTMLDivElement>(null);
  const [openWeek, setOpenWeek] = useState<string | null>(null);

  // Auto-expand the top entry on mobile when posts or sortOrder changes
  useEffect(() => {
    if (posts.length > 0) {
      setOpenWeek(posts[0].slug);
    }
  }, [sortOrder, posts.length]);

  function scrollContainer(direction: number) {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction * 320, // adjust to card width
        behavior: "smooth",
      });
    }
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

      <main className="relative z-10">
        <div className="container mx-auto px-4 md:px-6 py-8">
          <div className="flex items-center mb-6">
            <div className="h-4 w-4 bg-purple-600 rounded-sm rotate-45"></div>
            <h1 className="text-2xl font-bold ml-2">ALL ENTRIES</h1>
            <div className="tech-line flex-grow ml-4"></div>
            <select
              className="ml-4 bg-[#1a093a] border border-purple-700 text-white rounded px-3 py-1 text-sm focus:outline-none"
              value={sortOrder}
              onChange={e => setSortOrder(e.target.value as 'latest' | 'oldest')}
              aria-label="Sort blog posts"
            >
              <option value="latest">Latest</option>
              <option value="oldest">Oldest</option>
            </select>
          </div>

          {/* Weekly Posts Section */}
          {/* Desktop: Static grid of weekly posts */}
          <div className="hidden md:grid gap-6 grid-cols-2 lg:grid-cols-3">
            {posts.map((post: BlogPost, i: number) => (
              <Card key={i} className="tech-card overflow-hidden" id={post.slug}>
                <div className="flex flex-col">
                  <div className="w-full relative aspect-[16/9]">
                    <Image
                      src={getImagePath(post.src)}
                      alt={post.title}
                      fill
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center space-x-4 mb-3">
                      <Badge variant="outline" className="border-purple-500/50 text-purple-300">
                        <Calendar className="h-3 w-3 mr-1" />
                        {post.date}
                      </Badge>
                      <Badge variant="outline" className="border-purple-500/50 text-purple-300">
                        {post.week}
                      </Badge>
                      {post.slug === latestPost.slug && (
                        <Badge className="bg-purple-600 hover:bg-purple-700">Latest</Badge>
                      )}
                    </div>
                    <h3 className="text-xl font-bold mb-2 hover:text-purple-400 transition-colors">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h3>
                    <p className="text-gray-400 mb-4 line-clamp-2">{post.description}</p>
                    <Link href={`/blog/${post.slug}`}>
                      <Button variant="ghost" className="text-purple-400 hover:text-purple-300 p-0">
                        Read Entry
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          {/* Mobile: Vertical collapsible list of week titles and cards */}
          <div className="block md:hidden">
            <ul className="divide-y divide-purple-900 bg-[#12062a] rounded-lg overflow-hidden">
              {posts.map((post) => (
                <li key={post.slug}>
                  <button
                    className="w-full text-left py-4 px-4 hover:bg-purple-900/30 text-purple-200 font-semibold text-base focus:outline-none flex justify-between items-center"
                    onClick={() => setOpenWeek(openWeek === post.slug ? null : post.slug)}
                    aria-expanded={openWeek === post.slug}
                  >
                    <span>{post.week}: {post.title}</span>
                    <span className={`transition-transform duration-200 ${openWeek === post.slug ? 'rotate-90' : ''}`}>▶</span>
                  </button>
                  <div
                    className={`transition-all duration-300 overflow-hidden bg-[#1a093a] ${openWeek === post.slug ? 'max-h-[1000px] py-4 px-2' : 'max-h-0 py-0 px-2'}`}
                    style={{
                      borderBottomLeftRadius: openWeek === post.slug ? '0.75rem' : undefined,
                      borderBottomRightRadius: openWeek === post.slug ? '0.75rem' : undefined,
                    }}
                  >
                    {openWeek === post.slug && (
                      <Card className="tech-card overflow-hidden">
                        <div className="flex flex-col">
                          <div className="w-full relative aspect-[16/9] mb-4">
                            <Image
                              src={getImagePath(post.src)}
                              alt={post.title}
                              fill
                              className="object-cover w-full h-full rounded-t-lg"
                            />
                          </div>
                          <div className="p-4">
                            <div className="flex items-center space-x-4 mb-3">
                              <Badge variant="outline" className="border-purple-500/50 text-purple-300">
                                <Calendar className="h-3 w-3 mr-1" />
                                {post.date}
                              </Badge>
                              <Badge variant="outline" className="border-purple-500/50 text-purple-300">
                                {post.week}
                              </Badge>
                              {post.slug === latestPost.slug && (
                                <Badge className="bg-purple-600 hover:bg-purple-700">Latest</Badge>
                              )}
                            </div>
                            <h3 className="text-xl font-bold mb-2 hover:text-purple-400 transition-colors">
                              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                            </h3>
                            <p className="text-gray-400 mb-4">{post.description}</p>
                            <Link href={`/blog/${post.slug}`}>
                              <Button className="w-full bg-purple-600 hover:bg-purple-700 mt-2">Read Entry</Button>
                            </Link>
                          </div>
                        </div>
                      </Card>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>

      {/* Photo Gallery Section */}
      <section id= "photogallery"className="relative z-10 py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center mb-6">
            <div className="h-4 w-4 bg-purple-600 rounded-sm rotate-45"></div>
            <h2 className="text-xl font-bold ml-2">PHOTO GALLERY</h2>
            <div className="tech-line flex-grow ml-4"></div>
          </div>

          <PolaroidGallery />
        </div>
      </section>

      <footer className="relative z-1 mt-16">
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
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="h-8 w-8 rounded-full bg-[#150a30] flex items-center justify-center hover:bg-purple-900/50 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-purple-400"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>

                <a
                  href="#"
                  className="h-8 w-8 rounded-full bg-[#150a30] flex items-center justify-center hover:bg-purple-900/50 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-purple-400"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="tech-line w-full my-8"></div>
          <div className="text-center">
            <p className="text-gray-400">© 2025 nberrr. All rights reserved.</p>
            <p className="text-sm text-gray-500 mt-2">
              This journal documents my personal journey through on-the-job training.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
