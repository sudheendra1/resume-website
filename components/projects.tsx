// "use client"

// import { useState, useRef, useEffect } from "react"
// import { motion, useInView } from "framer-motion"
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import { Badge } from "@/components/ui/badge"
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import { ExternalLink, Github, Maximize2 } from "lucide-react"
// import Image from "next/image"
// import Link from "next/link"
// import ProjectModal from "./project-modal"
// import type { Project, ProjectCardProps } from "@/types"

// const projects: Project[] = [
//   {
//     id: 1,
//     title: "E-Commerce Platform",
//     description:
//       "A full-featured e-commerce platform with product management, cart functionality, and payment processing.",
//     image: "/placeholder.svg?height=600&width=800",
//     category: "web",
//     tags: ["React", "Node.js", "MongoDB", "Stripe"],
//     demoUrl: "https://example.com",
//     githubUrl: "https://github.com",
//     details:
//       "This project was built using the MERN stack. It features user authentication, product management, shopping cart functionality, and Stripe payment integration. The admin dashboard allows for easy product and order management.",
//   },
//   {
//     id: 2,
//     title: "Task Management App",
//     description: "A collaborative task management application with real-time updates and team functionality.",
//     image: "/placeholder.svg?height=600&width=800",
//     category: "web",
//     tags: ["React", "Firebase", "Tailwind CSS"],
//     demoUrl: "https://example.com",
//     githubUrl: "https://github.com",
//     details:
//       "This task management app allows teams to collaborate effectively. It features real-time updates using Firebase, drag-and-drop task organization, and team management capabilities.",
//   },
//   {
//     id: 3,
//     title: "Weather Dashboard",
//     description: "A weather dashboard that displays current and forecasted weather data for multiple locations.",
//     image: "/placeholder.svg?height=600&width=800",
//     category: "web",
//     tags: ["React", "OpenWeather API", "Chart.js"],
//     demoUrl: "https://example.com",
//     githubUrl: "https://github.com",
//     details:
//       "This weather dashboard uses the OpenWeather API to fetch and display current weather conditions and 5-day forecasts. It includes interactive charts for temperature, humidity, and wind speed.",
//   },
//   {
//     id: 4,
//     title: "Mobile Fitness App",
//     description: "A fitness tracking mobile application with workout plans and progress tracking.",
//     image: "/placeholder.svg?height=600&width=800",
//     category: "mobile",
//     tags: ["React Native", "Firebase", "Expo"],
//     demoUrl: "https://example.com",
//     githubUrl: "https://github.com",
//     details:
//       "This mobile fitness app helps users track their workouts and progress. It includes pre-defined workout plans, custom workout creation, and progress visualization.",
//   },
//   {
//     id: 5,
//     title: "AI Image Generator",
//     description: "An AI-powered image generation tool that creates unique images from text descriptions.",
//     image: "/placeholder.svg?height=600&width=800",
//     category: "ai",
//     tags: ["Python", "TensorFlow", "React"],
//     demoUrl: "https://example.com",
//     githubUrl: "https://github.com",
//     details:
//       "This project uses a fine-tuned Stable Diffusion model to generate images from text prompts. The frontend is built with React, while the backend uses Python and TensorFlow.",
//   },
//   {
//     id: 6,
//     title: "Blockchain Explorer",
//     description: "A blockchain explorer for visualizing and analyzing blockchain data.",
//     image: "/placeholder.svg?height=600&width=800",
//     category: "blockchain",
//     tags: ["React", "Web3.js", "Ethereum"],
//     demoUrl: "https://example.com",
//     githubUrl: "https://github.com",
//     details:
//       "This blockchain explorer allows users to search for and view information about Ethereum transactions, blocks, and addresses. It includes visualizations of blockchain data and real-time updates.",
//   },
// ]

// export default function Projects() {
//   const [selectedProject, setSelectedProject] = useState<Project | null>(null)
//   const [isModalOpen, setIsModalOpen] = useState(false)
//   const [mounted, setMounted] = useState(false)
//   const ref = useRef(null)
//   const isInView = useInView(ref, { once: true, margin: "-100px" })

//   useEffect(() => {
//     setMounted(true)
//   }, [])

//   const openProjectModal = (project: Project) => {
//     setSelectedProject(project)
//     setIsModalOpen(true)
//   }

//   if (!mounted) {
//     return (
//       <section id="projects" className="py-20 bg-background">
//         <div className="container px-4">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
//             <p className="text-muted-foreground max-w-2xl mx-auto">
//               Explore my portfolio of projects spanning web development, mobile apps, AI, and blockchain technologies.
//             </p>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {projects.map((project) => (
//               <Card key={project.id} className="overflow-hidden h-full flex flex-col">
//                 <div className="relative overflow-hidden h-48">
//                   <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
//                 </div>
//                 <CardHeader>
//                   <CardTitle>{project.title}</CardTitle>
//                   <CardDescription>{project.description}</CardDescription>
//                 </CardHeader>
//                 <CardContent className="flex-grow">
//                   <div className="flex flex-wrap gap-2 mb-4">
//                     {project.tags.map((tag: string) => (
//                       <Badge key={tag} variant="secondary">
//                         {tag}
//                       </Badge>
//                     ))}
//                   </div>
//                 </CardContent>
//                 <CardFooter className="flex justify-between">
//                   <Button variant="outline" size="sm" asChild>
//                     <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
//                       <Github className="mr-2 h-4 w-4" />
//                       Code
//                     </Link>
//                   </Button>
//                   <Button size="sm" asChild>
//                     <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer">
//                       <ExternalLink className="mr-2 h-4 w-4" />
//                       Live Demo
//                     </Link>
//                   </Button>
//                 </CardFooter>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>
//     )
//   }

//   return (
//     <section id="projects" className="py-20 bg-background">
//       <div className="container px-4">
//         <motion.div
//           ref={ref}
//           initial={{ opacity: 0, y: 20 }}
//           animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-12"
//         >
//           <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
//           <p className="text-muted-foreground max-w-2xl mx-auto">
//             Explore my portfolio of projects spanning web development, mobile apps, AI, and blockchain technologies.
//           </p>
//         </motion.div>

//         <Tabs defaultValue="all" className="mb-8">
//           <TabsList className="mx-auto flex justify-center">
//             <TabsTrigger value="all">All Projects</TabsTrigger>
//             <TabsTrigger value="web">Web</TabsTrigger>
//             <TabsTrigger value="mobile">Mobile</TabsTrigger>
//             <TabsTrigger value="ai">AI</TabsTrigger>
//             <TabsTrigger value="blockchain">Blockchain</TabsTrigger>
//           </TabsList>

//           <TabsContent value="all" className="mt-8">
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//               {projects.map((project, index) => (
//                 <ProjectCard key={project.id} project={project} index={index} openModal={openProjectModal} />
//               ))}
//             </div>
//           </TabsContent>

//           {["web", "mobile", "ai", "blockchain"].map((category) => (
//             <TabsContent key={category} value={category} className="mt-8">
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {projects
//                   .filter((project) => project.category === category)
//                   .map((project, index) => (
//                     <ProjectCard key={project.id} project={project} index={index} openModal={openProjectModal} />
//                   ))}
//               </div>
//             </TabsContent>
//           ))}
//         </Tabs>
//       </div>

//       {isModalOpen && selectedProject && (
//         <ProjectModal project={selectedProject} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
//       )}
//     </section>
//   )
// }

// function ProjectCard({ project, index, openModal }: ProjectCardProps) {
//   const [mounted, setMounted] = useState(false)
//   const ref = useRef(null)
//   const isInView = useInView(ref, { once: true, margin: "-50px" })

//   useEffect(() => {
//     setMounted(true)
//   }, [])

//   if (!mounted) {
//     return (
//       <Card className="overflow-hidden h-full flex flex-col">
//         <div className="relative overflow-hidden h-48">
//           <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
//         </div>
//         <CardHeader>
//           <CardTitle>{project.title}</CardTitle>
//           <CardDescription>{project.description}</CardDescription>
//         </CardHeader>
//         <CardContent className="flex-grow">
//           <div className="flex flex-wrap gap-2 mb-4">
//             {project.tags.map((tag: string) => (
//               <Badge key={tag} variant="secondary">
//                 {tag}
//               </Badge>
//             ))}
//           </div>
//         </CardContent>
//         <CardFooter className="flex justify-between">
//           <Button variant="outline" size="sm" asChild>
//             <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
//               <Github className="mr-2 h-4 w-4" />
//               Code
//             </Link>
//           </Button>
//           <Button size="sm" asChild>
//             <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer">
//               <ExternalLink className="mr-2 h-4 w-4" />
//               Live Demo
//             </Link>
//           </Button>
//         </CardFooter>
//       </Card>
//     )
//   }

//   return (
//     <motion.div
//       ref={ref}
//       initial={{ opacity: 0, y: 20 }}
//       animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//       transition={{ duration: 0.5, delay: index * 0.1 }}
//     >
//       <Card className="overflow-hidden h-full flex flex-col group hover:shadow-lg transition-all duration-300">
//         <div className="relative overflow-hidden h-48">
//           <Image
//             src={project.image || "/placeholder.svg"}
//             alt={project.title}
//             fill
//             className="object-cover transition-transform duration-500 group-hover:scale-110"
//           />
//           <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
//             <Button variant="secondary" size="icon" className="mr-2" onClick={() => openModal(project)}>
//               <Maximize2 className="h-5 w-5" />
//               <span className="sr-only">View Details</span>
//             </Button>
//           </div>
//         </div>
//         <CardHeader>
//           <CardTitle>{project.title}</CardTitle>
//           <CardDescription>{project.description}</CardDescription>
//         </CardHeader>
//         <CardContent className="flex-grow">
//           <div className="flex flex-wrap gap-2 mb-4">
//             {project.tags.map((tag: string) => (
//               <Badge key={tag} variant="secondary">
//                 {tag}
//               </Badge>
//             ))}
//           </div>
//         </CardContent>
//         <CardFooter className="flex justify-between">
//           <Button variant="outline" size="sm" asChild>
//             <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
//               <Github className="mr-2 h-4 w-4" />
//               Code
//             </Link>
//           </Button>
//           <Button size="sm" asChild>
//             <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer">
//               <ExternalLink className="mr-2 h-4 w-4" />
//               Live Demo
//             </Link>
//           </Button>
//         </CardFooter>
//       </Card>
//     </motion.div>
//   )
// }


"use client"

import { useState, useRef, useEffect } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ExternalLink, Github, Maximize2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import ProjectModal from "./project-modal"
import { projectsService, type Project as FirebaseProject } from "@/lib/firebase-service"

export default function Projects() {
  const [projects, setProjects] = useState<FirebaseProject[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedProject, setSelectedProject] = useState<FirebaseProject | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    setMounted(true)
    fetchProjects()
  }, [])

  const fetchProjects = async () => {
    try {
      const data = await projectsService.getAll()
      console.log("Fetched projects:", data)
      setProjects(data)
    } catch (error) {
      console.error("Error fetching projects:", error)
    } finally {
      setLoading(false)
    }
  }

  const openProjectModal = (project: FirebaseProject) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  if (loading) {
    return (
      <section id="projects" className="py-20 bg-background">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Loading projects...</p>
          </div>
        </div>
      </section>
    )
  }

  // if (!mounted) {
  //   return (
  //     <section id="projects" className="py-20 bg-background">
  //       <div className="container px-4">
  //         <div className="text-center mb-12">
  //           <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
  //           <p className="text-muted-foreground max-w-2xl mx-auto">
  //             Explore my portfolio of projects spanning web development, mobile apps, AI, and blockchain technologies.
  //           </p>
  //         </div>
  //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  //           {projects.map((project) => (
  //             <Card key={project.id} className="overflow-hidden h-full flex flex-col">
  //               <div className="relative overflow-hidden h-48">
  //                 <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
  //               </div>
  //               <CardHeader>
  //                 <CardTitle>{project.title}</CardTitle>
  //                 <CardDescription>{project.description}</CardDescription>
  //               </CardHeader>
  //               <CardContent className="flex-grow">
  //                 <div className="flex flex-wrap gap-2 mb-4">
  //                   {project.tags.map((tag: string) => (
  //                     <Badge key={tag} variant="secondary">
  //                       {tag}
  //                     </Badge>
  //                   ))}
  //                 </div>
  //               </CardContent>
  //               <CardFooter className="flex justify-between">
  //                 <Button variant="outline" size="sm" asChild>
  //                   <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
  //                     <Github className="mr-2 h-4 w-4" />
  //                     Code
  //                   </Link>
  //                 </Button>
  //                 <Button size="sm" asChild>
  //                   <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer">
  //                     <ExternalLink className="mr-2 h-4 w-4" />
  //                     Live Demo
  //                   </Link>
  //                 </Button>
  //               </CardFooter>
  //             </Card>
  //           ))}
  //         </div>
  //       </div>
  //     </section>
  //   )
  // }

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore my portfolio of projects spanning web development, mobile apps, AI, and blockchain technologies.
          </p>
        </motion.div>

        <Tabs defaultValue="all" className="mb-8">
          <TabsList className="mx-auto flex justify-center">
            <TabsTrigger value="all">All Projects</TabsTrigger>
            <TabsTrigger value="web">Web</TabsTrigger>
            <TabsTrigger value="mobile">Mobile</TabsTrigger>
            <TabsTrigger value="ai">AI</TabsTrigger>
            <TabsTrigger value="blockchain">Blockchain</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} openModal={openProjectModal} />
              ))}
            </div>
          </TabsContent>

          {["web", "mobile", "ai", "blockchain"].map((category) => (
            <TabsContent key={category} value={category} className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects
                  .filter((project) => project.category === category)
                  .map((project, index) => (
                    <ProjectCard key={project.id} project={project} index={index} openModal={openProjectModal} />
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>

      {isModalOpen && selectedProject && (
        <ProjectModal
          project={{
            ...selectedProject,
            id: typeof selectedProject.id === "string" ? Number(selectedProject.id) : selectedProject.id
          }}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </section>
  )
}

interface ProjectCardProps {
  project: FirebaseProject
  index: number
  openModal: (project: FirebaseProject) => void
}

function ProjectCard({ project, index, openModal }: ProjectCardProps) {
  const [mounted, setMounted] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  useEffect(() => {
    setMounted(true)
  }, [])

  // if (!mounted) {
  //   return (
  //     <Card className="overflow-hidden h-full flex flex-col">
  //       <div className="relative overflow-hidden h-48">
  //         <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
  //       </div>
  //       <CardHeader>
  //         <CardTitle>{project.title}</CardTitle>
  //         <CardDescription>{project.description}</CardDescription>
  //       </CardHeader>
  //       <CardContent className="flex-grow">
  //         <div className="flex flex-wrap gap-2 mb-4">
  //           {project.tags.map((tag: string) => (
  //             <Badge key={tag} variant="secondary">
  //               {tag}
  //             </Badge>
  //           ))}
  //         </div>
  //       </CardContent>
  //       <CardFooter className="flex justify-between">
  //         <Button variant="outline" size="sm" asChild>
  //           <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
  //             <Github className="mr-2 h-4 w-4" />
  //             Code
  //           </Link>
  //         </Button>
  //         <Button size="sm" asChild>
  //           <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer">
  //             <ExternalLink className="mr-2 h-4 w-4" />
  //             Live Demo
  //           </Link>
  //         </Button>
  //       </CardFooter>
  //     </Card>
  //   )
  // }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="overflow-hidden h-full flex flex-col group hover:shadow-lg transition-all duration-300">
        <div className="relative overflow-hidden h-48">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <Button variant="secondary" size="icon" className="mr-2" onClick={() => openModal(project)}>
              <Maximize2 className="h-5 w-5" />
              <span className="sr-only">View Details</span>
            </Button>
          </div>
        </div>
        <CardHeader>
          <CardTitle>{project.title}</CardTitle>
          <CardDescription>{project.description}</CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag: string) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" size="sm" asChild>
            <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              Code
            </Link>
          </Button>
          <Button size="sm" asChild>
            <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" />
              Live Demo
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
