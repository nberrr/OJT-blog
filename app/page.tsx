"use client";

import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  Calendar,
  Clock,
  Tag,
  User,
  Code,
  Server,
  Palette,
  BarChart,
  Bug,
  Terminal,
  Sparkles,
  Cog,
  LifeBuoy,
  Layers,
  Wrench,
  Wifi,
  ArrowLeft,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { getFeaturedPost, getRecentPosts, getImagePath, getLatestPost } from "@/lib/utils"
import { useRef } from "react"

export default function Home() {
  const featuredPost = getFeaturedPost();
  const recentPosts = getRecentPosts();
  const latestPost = getLatestPost();
  const scrollRef = useRef<HTMLDivElement>(null);

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
              <Link href="/" className="text-sm font-medium text-purple-400 transition-colors">
                Home
              </Link>
              <Link href="/blog" className="text-sm font-medium hover:text-purple-400 transition-colors">
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
        {/* Hero Banner */}
        <section className="py-8 mb-8">
          <div className="container mx-auto px-4 md:px-6">
            <div className="glass-effect rounded-lg p-6 md:p-10 relative overflow-hidden">
              <div className="absolute -right-20 -top-20 w-60 h-60 bg-purple-600/20 rounded-full blur-3xl"></div>
              <div className="absolute -left-20 -bottom-20 w-60 h-60 bg-blue-600/20 rounded-full blur-3xl"></div>

              {/* Mobile logo - center above heading */}
              <div className="md:hidden flex justify-center mb-4">
                <div className="relative w-16 h-16">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 animate-pulse blur-md"></div>
                  <div className="absolute inset-1 rounded-full bg-[#0a0118] flex items-center justify-center">
                    <Image
                      src="/DOSTlogo.png"
                      alt="DOST Logo"
                      width={128}
                      height={128}
                      className="object-contain w-12 h-12 drop-shadow-[0_1px_6px_blue]"
                      priority
                    />
                  </div>
                </div>
              </div>

              <div className="relative flex flex-col md:flex-row items-center gap-6 md:gap-10">
                <div className="w-full flex-col text-center md:w-2/3  md:pr-0">
                  <h1 className="text-3xl md:text-5xl font-bold mb-4">
                    <span className="animated-gradient-text">The Art of Productive Laziness</span>
                  </h1>
                  <p className="text-lg text-gray-300 mb-6">
                  A personal journey through my OJT experience at DOST, documenting how strategic efficiency and smart work can lead to greater productivity than constant busyness.
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <Link href="/blog">
                    <Button className="bg-purple-600 hover:bg-purple-700 tech-button">
                      Explore My Journey
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    </Link>
                    <Link href="#photo-highlights" scroll={true}>
                    <Button variant="outline" className="border-purple-500/50 hover:bg-purple-500/20">
                        View OJT Highlights
                    </Button>
                    </Link>
                  </div>
                </div>

                {/* Desktop logo */}
                <div className="hidden md:flex md:w-1/3 justify-center">
                  <div className="relative w-64 h-64">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 animate-pulse blur-md"></div>
                    <div className="absolute inset-1 rounded-full bg-[#0a0118] flex items-center justify-center">
                      <Image
                        src="/DOSTlogo.png"
                        alt="DOST Logo"
                        width={250}
                        height={250}
                        className="object-contain w-32 h-32 drop-shadow-[0_1px_6px_blue]"
                        priority
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 md:px-6 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-2/3">
              <section className="mb-16">
                <div className="flex items-center mb-6">
                  <div className="h-4 w-4 bg-purple-600 rounded-sm rotate-45"></div>
                  <h2 className="text-xl font-bold ml-2">FEATURED POST</h2>
                  <div className="tech-line flex-grow ml-4"></div>
                </div>

                <Card className="bg-[#0e0225]/80 border-purple-900/30 overflow-hidden gradient-border">
                  <div className="relative">
                    <Image
                      src={getImagePath(featuredPost.src)}
                      alt={featuredPost.title}
                      width={800}
                      height={400}
                      className="w-full h-[300px] md:h-[400px] object-cover scale-110 md:scale-100 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0e0225] via-[#0e0225]/70 to-transparent"></div>
                    <div className="absolute top-0 right-0 z-10">
                      <Badge className="bg-purple-600 hover:bg-purple-700 text-white whitespace-nowrap font-semibold shadow-lg border-0 rounded-tl-none rounded-br-none rounded-tr-md rounded-bl-md px-3 py-1">
                        {featuredPost.week}
                      </Badge>
                    </div>
                    {featuredPost.slug === latestPost.slug && (
                      <div className="absolute top-8 right-0 z-10">
                        <Badge className="bg-purple-600 hover:bg-purple-700 text-white whitespace-nowrap font-semibold shadow-lg border-0 rounded-tl-none rounded-br-none rounded-tr-md rounded-bl-md px-3 py-1">
                          Latest
                        </Badge>
                      </div>
                    )}
                    <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-4 md:p-8 featured-overlay">
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <Badge variant="outline" className="border-purple-500/50 text-purple-300 whitespace-nowrap bg-[#0e0225]/80 backdrop-blur-sm">
                          <Calendar className="h-3 w-3 mr-1" />
                          {featuredPost.date}
                        </Badge>
                        <Badge variant="outline" className="border-purple-500/50 text-purple-300 whitespace-nowrap bg-[#0e0225]/80 backdrop-blur-sm">
                          <Tag className="h-3 w-3 mr-1" />
                          OJT
                        </Badge>
                      </div>
                      <h1 className="text-lg sm:text-xl md:text-4xl font-bold mb-2 neon-text text-shadow-lg leading-tight">
                        {featuredPost.title}
                      </h1>
                      <p className="text-gray-200 mb-4 max-w-3xl text-shadow-sm p-1 rounded-md text-sm sm:text-base md:bg-transparent md:p-0 md:backdrop-blur-none line-clamp-3">
                        {featuredPost.description}
                      </p>
                      <Link href={`/blog/${featuredPost.slug}`}>
                        <Button className="bg-purple-600 hover:bg-purple-700 tech-button">
                          Read Full Article
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </Card>
              </section>

              <section className="mb-16">
                <div className="flex items-center mb-6">
                  <div className="h-4 w-4 bg-purple-600 rounded-sm rotate-45"></div>
                  <h2 className="text-xl font-bold ml-2">LATEST ENTRIES</h2>
                  <div className="tech-line flex-grow ml-4"></div>
                </div>

                {/* Mobile: Horizontal scroll with arrows */}
                <div className="relative block md:hidden">
                  <button
                    className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-[#0a0118]/80 p-2 rounded-full shadow-md"
                    onClick={() => scrollContainer(-1)}
                    aria-label="Scroll left"
                  >
                    <ArrowLeft className="h-6 w-6 text-purple-400" />
                  </button>
                  <div
                    ref={scrollRef}
                    className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-4 hide-scrollbar"
                  >
                    {recentPosts.map((post, i) => (
                      <div key={i} className="min-w-[320px] max-w-xs snap-center transition-transform duration-300">
                        <Card className="tech-card overflow-hidden">
                          <div className="flex flex-col md:flex-row">
                            <div className="w-full md:w-1/3 relative aspect-[16/9]">
                              <Image
                                src={getImagePath(post.src)}
                                alt={post.title}
                                fill
                                className="object-cover w-full h-full"
                              />
                            </div>
                            <div className="p-6 md:w-2/3">
                              <div className="flex items-center space-x-4 mb-3">
                                <Badge variant="outline" className="border-purple-500/50 text-purple-300">
                                  <Calendar className="h-3 w-3 mr-1" />
                                  {post.date}
                                </Badge>
                                <Badge variant="outline" className="border-purple-500/50 text-purple-300">
                                  {post.week}
                                </Badge>
                              
                              </div>
                              {post.slug === latestPost.slug && (
                                  <Badge variant="outline" className="bg-purple-600">Latest</Badge>
                                )}
                              <h3 className="text-xl font-bold mb-2 hover:text-purple-400 transition-colors">
                                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                              </h3>
                              <p className="text-gray-400 mb-4">{post.description}</p>
                              <Link href={`/blog/${post.slug}`}>
                                <Button variant="ghost" className="text-purple-400 hover:text-purple-300 p-0">
                                  Read Entry
                                  <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                              </Link>
                            </div>
                          </div>
                        </Card>
                      </div>
                    ))}
                  </div>
                  <button
                    className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-[#0a0118]/80 p-2 rounded-full shadow-md"
                    onClick={() => scrollContainer(1)}
                    aria-label="Scroll right"
                  >
                    <ArrowRight className="h-6 w-6 text-purple-400" />
                  </button>
                </div>
                {/* Desktop: Grid as usual */}
                <div className="hidden md:grid gap-6">
                  {recentPosts.map((post, i) => (
                    <Card key={i} className="tech-card overflow-hidden">
                      <div className="flex flex-col md:flex-row">
                        <div className="w-full md:w-1/3 relative aspect-[16/9]">
                          <Image
                            src={getImagePath(post.src)}
                            alt={post.title}
                            fill
                            className="object-cover w-full h-full"
                          />
                        </div>
                        <div className="p-6 md:w-2/3">
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
                <div className="mt-8 text-center">
                <Link href="/blog">
                  <Button className="bg-purple-600 hover:bg-purple-700 tech-button">
                      See All Entries
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                </div>
              </section>

              <section id="photo-highlights" className="mb-16">
                <div className="flex items-center mb-6">
                  <div className="h-4 w-4 bg-purple-600 rounded-sm rotate-45"></div>
                  <h2 className="text-xl font-bold ml-2">PHOTO HIGHLIGHTS</h2>
                  <div className="tech-line flex-grow ml-4"></div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {[...Array(6)].map((_, i) => {
                    const themes = ["Office", "Team", "Workspace", "Meeting", "Coding", "Learning"]
                    const theme = themes[i % themes.length]

                    return (
                      <div key={i} className="relative group overflow-hidden rounded-md gradient-border">
                        <Image
                          src={`/placeholder.svg?height=300&width=300&text=OJT+${theme}`}
                          alt={`OJT ${theme} photo`}
                          width={300}
                          height={300}
                          className="object-cover w-full h-48 transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0e0225] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                          <h3 className="text-white font-bold text-lg">{theme} Moment</h3>
                          <p className="text-purple-300 text-sm">Week {themes.indexOf(theme) + 1}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </section>
            </div>

            <div className="lg:w-1/3 space-y-8">
              <div className="glass-effect rounded-lg p-6">
                <h3 className="text-lg font-bold mb-4 flex items-center">
                  <User className="h-4 w-4 mr-2 text-purple-400" />
                  ABOUT ME
                </h3>
                <div className="flex flex-col items-center mb-4">
                  <div className="w-24 h-24 rounded-full overflow-hidden gradient-border mb-4">
                    <Image
                      src="/myPIC.jpg"
                      alt="Profile"
                      width={100}
                      height={100}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <h4 className="text-lg font-bold">John Nebrej N. Rempis</h4>
                  <p className="text-sm text-gray-400">DOST Intern</p>
                </div>
                <p className="text-sm text-gray-300 mb-4">
                  Documenting my journey through on-the-job training and personal development. I believe in{" "}
                  <span className="text-purple-300 font-medium">the art of productive laziness</span> - working smarter,
                  not harder.
                </p>
                <Link href="/about">
                <Button variant="outline" className="w-full border-purple-500/50 hover:bg-purple-500/20">
                    View Profile
                </Button>
                </Link>
              </div>

              <div className="glass-effect rounded-lg p-6">
                <h3 className="text-lg font-bold mb-4 flex items-center">
                  <Tag className="h-4 w-4 mr-2 text-purple-400" />
                  ROLES I'VE EXPLORED
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center p-2 rounded-md hover:bg-purple-900/20 transition-colors">
                    <Code className="h-5 w-5 mr-3 text-purple-400" />
                    <div>
                      <h4 className="font-medium">Frontend Developer</h4>
                      <p className="text-xs text-gray-400">Building user interfaces and experiences</p>
                    </div>
                  </div>

                  <div className="flex items-center p-2 rounded-md hover:bg-purple-900/20 transition-colors">
                    <Palette className="h-5 w-5 mr-3 text-purple-400" />
                    <div>
                      <h4 className="font-medium">UI/UX Designer</h4>
                      <p className="text-xs text-gray-400">Creating intuitive user experiences</p>
                    </div>
                  </div>

                  <div className="flex items-center p-2 rounded-md hover:bg-purple-900/20 transition-colors">
                  <LifeBuoy className="h-5 w-5 mr-3 text-purple-400" />
                    <div>
                      <h4 className="font-medium">Technical Support</h4>
                    <p className="text-xs text-gray-400">Performed troubleshooting for system units and printers</p>
                  </div>
                    </div>

                <div className="flex items-center p-2 rounded-md hover:bg-purple-900/20 transition-colors">
                  <Cog className="h-5 w-5 mr-3 text-purple-400" />
                  <div>
                    <h4 className="font-medium">Technical Assistant</h4>
                    <p className="text-xs text-gray-400">Assisted in event setups, ensuring smooth flow</p>
                  </div>
                </div>

                  <div className="flex items-center p-2 rounded-md hover:bg-purple-900/20 transition-colors">
                  <Layers className="h-5 w-5 mr-3 text-purple-400" />
                    <div>
                    <h4 className="font-medium">Layout Designer</h4>
                    <p className="text-xs text-gray-400">Redesigning outdated brochures</p>
                  </div>
                    </div>

                <div className="flex items-center p-2 rounded-md hover:bg-purple-900/20 transition-colors">
                  <Wrench className="h-5 w-5 mr-3 text-purple-400" />
                  <div>
                    <h4 className="font-medium">Hardware & System Maintenance</h4>
                    <p className="text-xs text-gray-400">Maintained device performance and reliability</p>
                  </div>
                </div>

                  <div className="flex items-center p-2 rounded-md hover:bg-purple-900/20 transition-colors">
                  <Wifi className="h-5 w-5 mr-3 text-purple-400" />
                    <div>
                    <h4 className="font-medium">Network Support</h4>
                    <p className="text-xs text-gray-400">Performed basic network setup and troubleshooting</p>
                  </div>
                </div>

                </div>
              </div>

              <div className="glass-effect rounded-lg p-6">
                <h3 className="text-lg font-bold mb-4 flex items-center">
                  <Sparkles className="h-4 w-4 mr-2 text-purple-400" />
                  PRODUCTIVE LAZINESS
                </h3>
                <div className="p-4 bg-[#150a30] rounded-md border border-purple-500/30 relative">
                  <div className="absolute -top-3 -left-1 text-purple-500 text-4xl opacity-30">"</div>
                  <p className="text-gray-300 italic text-sm mb-3">
                    The art of productive laziness isn't about doing nothing; it's about achieving more by focusing on
                    what truly matters.
                  </p>
                  <div className="flex justify-end">
                    <span className="text-purple-400 text-xs">- My OJT Philosophy</span>
                  </div>
                </div>
              </div>
            </div>
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
