import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  ChevronLeft,
  Mail,
  Linkedin,
  Building,
  GraduationCap,
  MessageSquare,
  Clock,
  Target,
  Network,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function AboutPage() {
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
              <Link href="/blog" className="text-sm font-medium hover:text-purple-400 transition-colors">
                Blog
              </Link>
              <Link href="/about" className="text-sm font-medium text-purple-400 transition-colors">
                About
              </Link>
            </nav>
          </div>
        </div>
        <div className="tech-line w-full"></div>
      </header>

      <main className="relative z-10 py-12">
        <div className="container mx-auto px-4 md:px-6">
          {/* Back to Home */}
          <div className="mb-8">
            <Link href="/" className="text-purple-400 hover:text-purple-300 flex items-center">
              <ChevronLeft className="h-4 w-4 mr-1" />
              Back to Home
            </Link>
          </div>

          {/* About Header */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="md:col-span-2">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">About John Nebrej N. Rempis</h1>
              <p className="text-xl text-gray-300 mb-6">
                OJT Student, aspiring professional, and advocate for working smarter, not harder.
              </p>
              <div className="glass-effect p-6 rounded-lg mb-6">
                <p className="text-gray-300 mb-4">
                  Hello! I'm John Nebrej N. Rempis, the author behind "The Art of Productive Laziness." This blog serves
                  as my personal journal during my On-the-Job Training experience, documenting my weekly journey,
                  challenges, and growth.
                </p>
                <p className="text-gray-300 mb-4">
                  I'm currently pursuing my degree in Computer Science at Metro Manila University. My OJT placement at
                  TechFusion Inc. has been an incredible opportunity to apply classroom knowledge to real-world
                  scenarios and develop professional skills that will shape my future career.
                </p>
                <p className="text-gray-300 mb-4">
                  The title "The Art of Productive Laziness" reflects my philosophy that efficiency isn't about working
                  harder, but working smarter. Throughout my OJT experience, I've been learning how to prioritize tasks,
                  streamline processes, and achieve maximum results with optimal effort.
                </p>
                <p className="text-gray-300">
                  This blog serves dual purposes: it fulfills my educational requirements for OJT documentation, and it
                  allows me to reflect deeply on my experiences, extracting valuable lessons that will guide my
                  professional development.
                </p>
              </div>
              <p className="text-gray-300 italic">
                When I'm not at my internship or studying, you'll find me coding personal projects, playing basketball,
                and always looking for ways to balance productivity with well-deserved rest.
              </p>
              <div className="flex flex-wrap gap-4 mt-6">
                <Button variant="outline" className="border-purple-500/50 hover:bg-purple-500/20">
                  Read My Journal
                </Button>
              </div>
            </div>
            <div>
              <div className="glass-effect rounded-lg overflow-hidden gradient-border">
                <div className="relative aspect-square">
                  <Image
                    src="/placeholder.svg?height=400&width=400&text=Profile"
                    alt="John Nebrej N. Rempis"
                    width={400}
                    height={400}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold">OJT Details</h3>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Badge className="bg-purple-600/20 text-purple-300 border border-purple-500/30 mr-2">
                        Company
                      </Badge>
                      <span>TechFusion Inc.</span>
                    </div>
                    <div className="flex items-center">
                      <Badge className="bg-purple-600/20 text-purple-300 border border-purple-500/30 mr-2">
                        Position
                      </Badge>
                      <span>Junior Web Developer</span>
                    </div>
                    <div className="flex items-center">
                      <Badge className="bg-purple-600/20 text-purple-300 border border-purple-500/30 mr-2">
                        Duration
                      </Badge>
                      <span>April - June 2025</span>
                    </div>
                    <div className="flex items-center">
                      <Badge className="bg-purple-600/20 text-purple-300 border border-purple-500/30 mr-2">
                        University
                      </Badge>
                      <span>Metro Manila University</span>
                    </div>
                    <div className="flex items-center">
                      <Badge className="bg-purple-600/20 text-purple-300 border border-purple-500/30 mr-2">
                        Program
                      </Badge>
                      <span>Computer Science</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Skills and Objectives */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="glass-effect rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <div className="h-4 w-4 bg-purple-600 rounded-sm rotate-45 mr-3"></div>
                Skills Developing
              </h2>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-purple-900/20 border border-purple-500/30 rounded-md p-3 flex items-center">
                  <MessageSquare className="h-5 w-5 text-purple-400 mr-2" />
                  <span>Communication</span>
                </div>
                <div className="bg-purple-900/20 border border-purple-500/30 rounded-md p-3 flex items-center">
                  <Target className="h-5 w-5 text-purple-400 mr-2" />
                  <span>Problem Solving</span>
                </div>
                <div className="bg-purple-900/20 border border-purple-500/30 rounded-md p-3 flex items-center">
                  <Clock className="h-5 w-5 text-purple-400 mr-2" />
                  <span>Time Management</span>
                </div>
                <div className="bg-purple-900/20 border border-purple-500/30 rounded-md p-3 flex items-center">
                  <Network className="h-5 w-5 text-purple-400 mr-2" />
                  <span>Teamwork</span>
                </div>
                <div className="bg-purple-900/20 border border-purple-500/30 rounded-md p-3 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-purple-400 mr-2"
                  >
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                    <path d="m7 10 2 2 7-7" />
                    <path d="m7 16 2 2 7-7" />
                  </svg>
                  <span>Adaptability</span>
                </div>
                <div className="bg-purple-900/20 border border-purple-500/30 rounded-md p-3 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-purple-400 mr-2"
                  >
                    <path d="M18 3v4c0 2-2 4-4 4H2" />
                    <path d="M18 3a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
                    <path d="M6 21v-4c0-2 2-4 4-4h12" />
                    <path d="M6 21a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
                  </svg>
                  <span>Technical Skills</span>
                </div>
              </div>
            </div>

            <div className="glass-effect rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <div className="h-4 w-4 bg-purple-600 rounded-sm rotate-45 mr-3"></div>
                OJT Objectives
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full border border-purple-500 flex items-center justify-center mr-3 mt-0.5">
                    <div className="h-2.5 w-2.5 bg-purple-500 rounded-full"></div>
                  </div>
                  <span>Apply theoretical knowledge in practical settings</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full border border-purple-500 flex items-center justify-center mr-3 mt-0.5">
                    <div className="h-2.5 w-2.5 bg-purple-500 rounded-full"></div>
                  </div>
                  <span>Develop professional workplace skills</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full border border-purple-500 flex items-center justify-center mr-3 mt-0.5">
                    <div className="h-2.5 w-2.5 bg-purple-500 rounded-full"></div>
                  </div>
                  <span>Build a professional network</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full border border-purple-500 flex items-center justify-center mr-3 mt-0.5">
                    <div className="h-2.5 w-2.5 bg-purple-500 rounded-full"></div>
                  </div>
                  <span>Identify career interests and strengths</span>
                </li>
                <li className="flex items-start">
                  <div className="h-5 w-5 rounded-full border border-purple-500 flex items-center justify-center mr-3 mt-0.5">
                    <div className="h-2.5 w-2.5 bg-purple-500 rounded-full"></div>
                  </div>
                  <span>Document growth and learning experiences</span>
                </li>
              </ul>
            </div>

            <div className="glass-effect rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <div className="h-4 w-4 bg-purple-600 rounded-sm rotate-45 mr-3"></div>
                Contact Information
              </h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-purple-400 mr-3" />
                  <div>
                    <p className="text-sm text-gray-400">Email:</p>
                    <a href="mailto:john.rempis@example.com" className="hover:text-purple-400 transition-colors">
                      john.rempis@example.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center">
                  <Linkedin className="h-5 w-5 text-purple-400 mr-3" />
                  <div>
                    <p className="text-sm text-gray-400">LinkedIn:</p>
                    <a href="https://linkedin.com/in/johnrempis" className="hover:text-purple-400 transition-colors">
                      linkedin.com/in/johnrempis
                    </a>
                  </div>
                </div>
                <div className="flex items-center">
                  <GraduationCap className="h-5 w-5 text-purple-400 mr-3" />
                  <div>
                    <p className="text-sm text-gray-400">University Email:</p>
                    <a href="mailto:j.rempis@university.edu" className="hover:text-purple-400 transition-colors">
                      j.rempis@university.edu
                    </a>
                  </div>
                </div>
                <div className="flex items-center">
                  <Building className="h-5 w-5 text-purple-400 mr-3" />
                  <div>
                    <p className="text-sm text-gray-400">Company:</p>
                    <p>TechFusion Inc.</p>
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
                  <Link
                    href="/blog"
                    className="text-gray-400 hover:text-purple-400 transition-colors flex items-center"
                  >
                    <ArrowRight className="h-3 w-3 mr-1" /> Blog
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-purple-400 transition-colors flex items-center">
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
