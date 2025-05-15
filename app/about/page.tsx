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
                Hello! I'm John Nebrej N. Rempis, the author behind "The Art of Productive Laziness." 
                This blog serves as my personal journal during my On-the-Job Training (OJT) experience,
                documenting my weekly journey, the challenges I faced, the lessons I learned, and the personal growth 
                I’ve achieved throughout the process.
                </p>
                <p className="text-gray-300 mb-4">
                I'm currently pursuing a degree in Information Technology at Bicol University College of Science.
                My OJT experience was truly memorable and fulfilling. I had the incredible opportunity to work with the
                dedicated staff of the DOST MIS and the S&T Promotions team. Their support and guidance played a big role
                in helping me understand how IT systems are applied in real-world environments.
                </p>
                <p className="text-gray-300 mb-4">
                The title "The Art of Productive Laziness" reflects my belief that true productivity is not about 
                constantly working, but about working smart. During my internship, I explored ways to improve efficiency,
                simplify tasks, and contribute meaningfully while managing my time and energy effectively.
                </p>
                <p className="text-gray-300">
                This blog serves dual purposes: it fulfills my academic requirement for OJT documentation, and it 
                allows me to reflect on every meaningful moment of this journey. I hope that by sharing my story,
                I can inspire other students to embrace their internships not just as a requirement, but as a valuable
                opportunity to grow personally and professionally.
                </p>
              </div>
              <p className="text-gray-300 italic">
              When I’m not at my internship or studying, you’ll find me working on personal coding projects, 
              playing basketball, palying games, or simply enjoying a well-earned break — all in the
              pursuit of balance between productivity and rest.
              </p>
            </div>
            <div>
              <div className="glass-effect rounded-lg overflow-hidden gradient-border">
                <div className="relative w-full aspect-[3/4] bg-[#0a0118]">
                  <Image
                    src="/internID.png"
                    alt="John Nebrej N. Rempis"
                    fill
                    className="object-contain w-full h-full"
                  />
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold">OJT Details</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-center">
                      <Badge className="bg-purple-600/20 text-purple-300 border border-purple-500/30 mr-2">
                        Company
                      </Badge>
                      <span>Department of Science and Technology</span>
                    </div>
                    <div className="flex items-center">
                      <Badge className="bg-purple-600/20 text-purple-300 border border-purple-500/30 mr-2">
                        Position
                      </Badge>
                      <span>Front-end Developer</span>
                    </div>
                    <div className="flex items-center">
                      <Badge className="bg-purple-600/20 text-purple-300 border border-purple-500/30 mr-2">
                        Duration
                      </Badge>
                      <span>February 24, 2025 - June 6 , 2025</span>
                    </div>
                    <div className="flex items-center">
                      <Badge className="bg-purple-600/20 text-purple-300 border border-purple-500/30 mr-2">
                        University
                      </Badge>
                      <span>Bicol University - College of Science</span>
                    </div>
                    <div className="flex items-center">
                      <Badge className="bg-purple-600/20 text-purple-300 border border-purple-500/30 mr-2">
                        Program
                      </Badge>
                      <span>Information Technology</span>
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
                    <a href="mailto:benj.nebrej@gmail.com" className="hover:text-purple-400 transition-colors">
                      benj.nebrej@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center">
                  <Linkedin className="h-5 w-5 text-purple-400 mr-3" />
                  <div>
                    <p className="text-sm text-gray-400">LinkedIn:</p>
                    <a href="https://www.linkedin.com/in/john-nebrej-rempis-504962355/" className="hover:text-purple-400 transition-colors">
                      linkedin.com/in/johnnebrejrempis
                    </a>
                  </div>
                </div>
                <div className="flex items-center">
                  <GraduationCap className="h-5 w-5 text-purple-400 mr-3" />
                  <div>
                    <p className="text-sm text-gray-400">University Email:</p>
                    <a href="johnnebrejnieves.rempis@bicol-u.edu.ph" className="hover:text-purple-400 transition-colors">
                    johnnebrejnieves.rempis@bicol-u.edu.ph
                    </a>
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
