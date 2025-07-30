"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

export default function Hero() {
  const [scrollY, setScrollY] = useState(0)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [mounted])

  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/placeholder.svg?height=1080&width=1920')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.3)",
          transform: mounted ? `translateY(${scrollY * 0.5}px)` : "translateY(0px)",
        }}
      />

      <motion.div
        className="container relative z-10 px-4 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">
            Hello, I'm Sudheendra Settipalli
          </span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Experienced Mobile App Developer and Machine Learning Engineer adept in Dart, Python, and Java, with a specialized focus on Flutter framework. Skilled in crafting user-friendly applications and integrating machine learning to enhance app functionality and user experience. Demonstrates a passion for innovative technology solutions, leveraging problem-solving abilities and leadership qualities.
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button size="lg" className="gap-2">
            <Mail className="h-4 w-4" />
            Contact Me
          </Button>
          <Button size="lg" variant="secondary" className="gap-2">
            Download Resume
          </Button>
        </motion.div>

        <motion.div
          className="flex justify-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="icon" className="rounded-full h-12 w-12">
              <Github className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </Button>
          </Link>
          <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="icon" className="rounded-full h-12 w-12">
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </Button>
          </Link>
        </motion.div>

        <motion.div
          className="mt-8 p-4 bg-black/20 backdrop-blur-sm rounded-lg border border-white/10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <div className="flex items-center justify-center space-x-4 text-sm text-gray-200">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span>Available for work</span>
            </div>
            <div className="w-px h-4 bg-white/20" />
            <div className="flex items-center space-x-2">
              <span>🚀 Try the coding challenges below!</span>
            </div>
          </div>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Button variant="ghost" size="icon" className="rounded-full h-12 w-12 border border-white/20">
          <ArrowDown className="h-6 w-6" />
          <span className="sr-only">Scroll Down</span>
        </Button>
      </div>
    </section>
  )
}


// "use client"

// import { useState, useEffect } from "react"

// export default function Hero() {
//   const [scrollY, setScrollY] = useState(0)
//   const [mounted, setMounted] = useState(false)

//   useEffect(() => {
//     setMounted(true)
//   }, [])

//   useEffect(() => {
//     // if (!mounted) return

//     const handleScroll = () => {
//       setScrollY(window.scrollY)
//     }

//     // Set initial scroll position
//     setScrollY(window.scrollY)

//     window.addEventListener("scroll", handleScroll)
//     return () => window.removeEventListener("scroll", handleScroll)
//   }, [mounted])

//   return (
//     <div className="relative h-[100vh] w-full overflow-hidden">
//       <div
//         className="absolute top-0 left-0 h-full w-full"
//         style={{
//           backgroundImage: "url('/placeholder.svg?height=1080&width=1920')",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           filter: "brightness(0.3)",
//           transform: `translateY(${mounted ? scrollY * 0.5 : 0}px)`,
//         }}
//       ></div>
//       <div className="container relative z-10 flex h-full items-center justify-center">
//         <div className="text-center">
//           <h1 className="text-4xl font-bold text-white md:text-6xl">Welcome to My Website</h1>
//           <p className="mt-4 text-lg text-gray-300">Discover amazing things.</p>
//         </div>
//       </div>
//     </div>
//   )
// }
