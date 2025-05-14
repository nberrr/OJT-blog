import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Calendar, ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"

export default function BlogPage() {
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

      <main className="relative z-10 py-12">
        <div className="container mx-auto px-4 md:px-6">
          {/* Page Header */}
          <div className="mb-12">
            <div className="flex items-center mb-4">
              <Link href="/" className="text-purple-400 hover:text-purple-300 flex items-center mr-4">
                <ChevronLeft className="h-4 w-4 mr-1" />
                Back to Home
              </Link>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animated-gradient-text">My OJT Weekly Journal</h1>
            <p className="text-xl text-gray-300 max-w-3xl">
              A chronological record of my on-the-job training experience
            </p>
          </div>

          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Week 1: Introduction to the Workplace",
                date: "February 24-28, 2025",
                week: 1,
                excerpt: "My first week of OJT was an exciting journey into the professional world. I learned about the company's culture, met my team members, and started understanding the development workflow.",
                image: "/uploads/week1/cover.jpeg",
                slug: "week-1-introduction"
              },
              {
                title: "Week 2: Diving into Development",
                date: "March 3-7, 2025",
                week: 2,
                excerpt: "This week focused on getting hands-on with development tasks. I started working on small features and learned about the codebase structure and development practices.",
                image: "/uploads/week2/cover.jpg",
                slug: "week-2-development"
              },
              {
                title: "Week 3: First Project Challenge",
                date: "March 10-14, 2025",
                week: 3,
                excerpt: "Took on my first significant project this week. Learned about project planning, task management, and the importance of clear communication in development.",
                image: "/uploads/week3/cover.jpg",
                slug: "week-3-first-project"
              },
              {
                title: "Week 4: Team Collaboration",
                date: "March 17-21, 2025",
                week: 4,
                excerpt: "Focused on improving team collaboration and communication. Participated in code reviews and learned from senior developers' feedback.",
                image: "/uploads/week4/cover.jpg",
                slug: "week-4-collaboration"
              },
              {
                title: "Week 5: Women's Month Special",
                date: "March 24-28, 2025",
                week: 5,
                excerpt: "Celebrated Women's Month while continuing our development work. Participated in special events and discussions about diversity in tech.",
                image: "/uploads/week5/cover.jpg",
                slug: "week-5-womens-month"
              },
              {
                title: "Week 6: New Technologies",
                date: "March 31 - April 4, 2025",
                week: 6,
                excerpt: "Explored new technologies and frameworks. Started implementing modern development practices and tools in our projects.",
                image: "/uploads/week6/cover.jpg",
                slug: "week-6-new-tech"
              },
            ].map((post) => (
              <Card key={post.week} className="tech-card overflow-hidden gradient-border">
                <div className="relative">
                  <div className="absolute top-0 left-0 bg-purple-600 text-white px-3 py-1 text-sm font-bold z-20">
                    Week {post.week}
                  </div>
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={600}
                    height={400}
                    className="w-full h-[240px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0118] via-[#0a0118]/70 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-2 hover:text-purple-400 transition-colors">{post.title}</h2>
                  <div className="flex items-center text-sm text-gray-400 mb-4">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{post.date}</span>
                  </div>
                  <p className="text-gray-300 mb-6">{post.excerpt}</p>
                  <div className="flex justify-between items-center">
                    <Badge variant="outline" className="border-purple-500/50 text-purple-300">
                      Week {post.week}
                    </Badge>
                    <Link href={`/blog/${post.slug}`}>
                      <Button variant="ghost" className="p-0 h-auto hover:text-purple-400 group">
                        Read Entry{" "}
                        <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            ))}
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
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
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
            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-gray-400 hover:text-purple-400 transition-colors flex items-center">
                    <ArrowRight className="h-3 w-3 mr-1" /> Home
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-purple-400 transition-colors flex items-center">
                    <ArrowRight className="h-3 w-3 mr-1" /> Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-gray-400 hover:text-purple-400 transition-colors flex items-center"
                  >
                    <ArrowRight className="h-3 w-3 mr-1" /> About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-gray-400 hover:text-purple-400 transition-colors flex items-center"
                  >
                    <ArrowRight className="h-3 w-3 mr-1" /> Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Archives</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-purple-400 transition-colors flex items-center">
                    <ArrowRight className="h-3 w-3 mr-1" /> March 2025
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-purple-400 transition-colors flex items-center">
                    <ArrowRight className="h-3 w-3 mr-1" /> February 2025
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-purple-400 transition-colors flex items-center">
                    <ArrowRight className="h-3 w-3 mr-1" /> January 2025
                  </Link>
                </li>
              </ul>
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
