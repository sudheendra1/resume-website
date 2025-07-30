// import Hero from "@/components/hero"
// import Projects from "@/components/projects"
// import GitHubShowcase from "@/components/github-showcase"
// import CodingGame from "@/components/coding-game"
// import Achievements from "@/components/achievements"
// import Skills from "@/components/skills"
// import Contact from "@/components/contact"
// import Footer from "@/components/footer"

// export default function Home() {
//   return (
//     <main className="min-h-screen bg-gradient-to-b from-background to-muted/30">
//       <Hero />
//       <Projects />
//       <GitHubShowcase />
//       <CodingGame />
//       <Achievements />
//       <Skills />
//       <Contact />
//       <Footer />
//     </main>
//   )
// }

"use client"

import { useState, useEffect } from "react"
import Hero from "@/components/hero"
import Projects from "@/components/projects"
import GitHubShowcase from "@/components/github-showcase"
import CodingGame from "@/components/coding-game"
import Achievements from "@/components/achievements"
import Skills from "@/components/skills"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import { Loader2 } from "lucide-react"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time to ensure Firebase is initialized
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-12 w-12 animate-spin text-primary" />
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      <Hero />
      <Projects />
      <GitHubShowcase />
      <CodingGame />
      <Achievements />
      <Skills />
      <Contact />
      <Footer />
    </main>
  )
}
