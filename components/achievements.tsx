// "use client"

// import type React from "react"

// import { useRef, useState, useEffect } from "react"
// import { motion, useInView } from "framer-motion"
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Award, BookOpen, Briefcase, GraduationCap } from "lucide-react"

// interface Achievement {
//   id: number
//   title: string
//   organization: string
//   period: string
//   description: string
//   icon: React.ReactNode
//   type: string
// }

// const achievements = [
//   {
//     id: 1,
//     title: "Senior Frontend Developer",
//     organization: "Tech Solutions Inc.",
//     period: "2020 - Present",
//     description:
//       "Led the development of the company's flagship product, resulting in a 40% increase in user engagement. Mentored junior developers and implemented best practices for code quality.",
//     icon: <Briefcase className="h-6 w-6" />,
//     type: "work",
//   },
//   {
//     id: 2,
//     title: "Frontend Developer",
//     organization: "Digital Innovations",
//     period: "2018 - 2020",
//     description:
//       "Developed and maintained multiple client websites and web applications. Collaborated with designers to implement responsive and accessible user interfaces.",
//     icon: <Briefcase className="h-6 w-6" />,
//     type: "work",
//   },
//   {
//     id: 3,
//     title: "Master's in Computer Science",
//     organization: "University of Technology",
//     period: "2016 - 2018",
//     description: "Specialized in Human-Computer Interaction and Web Technologies. Graduated with honors.",
//     icon: <GraduationCap className="h-6 w-6" />,
//     type: "education",
//   },
//   {
//     id: 4,
//     title: "Bachelor's in Software Engineering",
//     organization: "State University",
//     period: "2012 - 2016",
//     description:
//       "Focused on software development methodologies and programming fundamentals. Participated in multiple hackathons and coding competitions.",
//     icon: <GraduationCap className="h-6 w-6" />,
//     type: "education",
//   },
//   {
//     id: 5,
//     title: "Best Web Application Award",
//     organization: "DevFest 2022",
//     period: "2022",
//     description:
//       "Received the Best Web Application award for developing an innovative accessibility tool for visually impaired users.",
//     icon: <Award className="h-6 w-6" />,
//     type: "award",
//   },
//   {
//     id: 6,
//     title: "Certified React Developer",
//     organization: "React Certification Board",
//     period: "2021",
//     description:
//       "Completed advanced certification in React development, covering state management, hooks, and performance optimization.",
//     icon: <BookOpen className="h-6 w-6" />,
//     type: "certification",
//   },
// ]

// export default function Achievements() {
//   const [mounted, setMounted] = useState(false)
//   const ref = useRef(null)
//   const isInView = useInView(ref, { once: true, margin: "-100px" })

//   useEffect(() => {
//     setMounted(true)
//   }, [])

//   if (!mounted) {
//     return (
//       <section id="achievements" className="py-20 bg-muted/30">
//         <div className="container px-4">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience & Achievements</h2>
//             <p className="text-muted-foreground max-w-2xl mx-auto">
//               My professional journey, educational background, and notable accomplishments.
//             </p>
//           </div>

//           <div className="relative">
//             {/* Timeline line */}
//             <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-border" />

//             <div className="space-y-12">
//               {achievements.map((achievement) => (
//                 <StaticTimelineItem key={achievement.id} achievement={achievement} />
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>
//     )
//   }

//   return (
//     <section id="achievements" className="py-20 bg-muted/30">
//       <div className="container px-4">
//         <motion.div
//           ref={ref}
//           initial={{ opacity: 0, y: 20 }}
//           animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-12"
//         >
//           <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience & Achievements</h2>
//           <p className="text-muted-foreground max-w-2xl mx-auto">
//             My professional journey, educational background, and notable accomplishments.
//           </p>
//         </motion.div>

//         <div className="relative">
//           {/* Timeline line */}
//           <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-border" />

//           <div className="space-y-12">
//             {achievements.map((achievement, index) => (
//               <TimelineItem key={achievement.id} achievement={achievement} index={index} />
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// function StaticTimelineItem({ achievement }: { achievement: Achievement }) {
//   const isEven = achievement.id % 2 === 0

//   return (
//     <div className="relative">
//       <div className={`flex flex-col md:flex-row items-center ${isEven ? "md:flex-row-reverse" : ""}`}>
//         <div className="md:w-1/2" />

//         <div className="z-10 flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground shadow-md">
//           {achievement.icon}
//         </div>

//         <div className="md:w-1/2">
//           <Card
//             className={`mt-4 md:mt-0 ${isEven ? "md:mr-8" : "md:ml-8"} hover:shadow-lg transition-shadow duration-300`}
//           >
//             <CardHeader className="pb-2">
//               <CardTitle className="flex items-center">
//                 <span className="text-xl">{achievement.title}</span>
//                 <span className="ml-auto text-sm text-muted-foreground">{achievement.period}</span>
//               </CardTitle>
//               <p className="text-sm font-medium text-muted-foreground">{achievement.organization}</p>
//             </CardHeader>
//             <CardContent>
//               <p className="text-sm text-muted-foreground">{achievement.description}</p>
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//     </div>
//   )
// }

// function TimelineItem({ achievement, index }: { achievement: Achievement; index: number }) {
//   const [mounted, setMounted] = useState(false)
//   const ref = useRef(null)
//   const isInView = useInView(ref, { once: true, margin: "-50px" })
//   const isEven = index % 2 === 0

//   useEffect(() => {
//     setMounted(true)
//   }, [])

//   if (!mounted) {
//     return <StaticTimelineItem achievement={achievement} />
//   }

//   return (
//     <motion.div
//       ref={ref}
//       initial={{ opacity: 0, x: isEven ? -20 : 20 }}
//       animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? -20 : 20 }}
//       transition={{ duration: 0.5, delay: index * 0.1 }}
//       className="relative"
//     >
//       <div className={`flex flex-col md:flex-row items-center ${isEven ? "md:flex-row-reverse" : ""}`}>
//         <div className="md:w-1/2" />

//         <div className="z-10 flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground shadow-md">
//           {achievement.icon}
//         </div>

//         <div className="md:w-1/2">
//           <Card
//             className={`mt-4 md:mt-0 ${isEven ? "md:mr-8" : "md:ml-8"} hover:shadow-lg transition-shadow duration-300`}
//           >
//             <CardHeader className="pb-2">
//               <CardTitle className="flex items-center">
//                 <span className="text-xl">{achievement.title}</span>
//                 <span className="ml-auto text-sm text-muted-foreground">{achievement.period}</span>
//               </CardTitle>
//               <p className="text-sm font-medium text-muted-foreground">{achievement.organization}</p>
//             </CardHeader>
//             <CardContent>
//               <p className="text-sm text-muted-foreground">{achievement.description}</p>
//             </CardContent>
//           </Card>
//         </div>
//       </div>
//     </motion.div>
//   )
// }


"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Briefcase, GraduationCap, Award, BookOpen } from "lucide-react"
import { achievementsService, type Achievement as FirebaseAchievement } from "@/lib/firebase-service"

export default function Achievements() {
  const [achievements, setAchievements] = useState<FirebaseAchievement[]>([])
  const [loading, setLoading] = useState(true)
  const [mounted, setMounted] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    setMounted(true)
    fetchAchievements()
  }, [])

  const fetchAchievements = async () => {
    try {
      const data = await achievementsService.getAll()
      console.log("Fetched achievements:", data)
       if (data.length === 0) {
      setAchievements([
        {
          id: "1",
          title: "Dummy Achievement",
          organization: "Test Org",
          period: "2023",
          description: "This is a test achievement",
          iconType: "award",
          type: "award",
          // createdAt: Timestamp.now(),
          // order: 1
        }
      ]);
    } else {
      setAchievements(data);
    }
      // setAchievements(data)
    } catch (error) {
      console.error("Error fetching achievements:", error)
    } finally {
      setLoading(false)
    }
  }

  const getIconComponent = (iconType: string) => {
    switch (iconType) {
      case "briefcase":
        return <Briefcase className="h-6 w-6" />
      case "graduation-cap":
        return <GraduationCap className="h-6 w-6" />
      case "award":
        return <Award className="h-6 w-6" />
      case "book-open":
        return <BookOpen className="h-6 w-6" />
      default:
        return <Briefcase className="h-6 w-6" />
    }
  }

  if (loading) {
    return (
      <section id="achievements" className="py-20 bg-muted/30">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience & Achievements</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Loading achievements...</p>
          </div>
        </div>
      </section>
    )
  }

  // if (!mounted) {
  //   return (
  //     <section id="achievements" className="py-20 bg-muted/30">
  //       <div className="container px-4">
  //         <div className="text-center mb-12">
  //           <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience & Achievements</h2>
  //           <p className="text-muted-foreground max-w-2xl mx-auto">
  //             My professional journey, educational background, and notable accomplishments.
  //           </p>
  //         </div>

  //         <div className="relative">
  //           <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-border" />

  //           <div className="space-y-12">
  //             {achievements.map((achievement) => (
  //               <StaticTimelineItem key={achievement.id} achievement={achievement} />
  //             ))}
  //           </div>
  //         </div>
  //       </div>
  //     </section>
  //   )
  // }

  return (
    <section id="achievements" className="py-20 bg-muted/30">
      <div className="container px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience & Achievements</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My professional journey, educational background, and notable accomplishments.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-border" />

          <div className="space-y-12">
            {achievements.map((achievement, index) => (
              <TimelineItem key={achievement.id} achievement={achievement} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function StaticTimelineItem({ achievement }: { achievement: FirebaseAchievement }) {
  const isEven = Number.parseInt(achievement.id) % 2 === 0

  return (
    <div className="relative">
      <div className={`flex flex-col md:flex-row items-center ${isEven ? "md:flex-row-reverse" : ""}`}>
        <div className="md:w-1/2" />

        <div className="z-10 flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground shadow-md">
          {getIconComponent(achievement.iconType)}
        </div>

        <div className="md:w-1/2">
          <Card
            className={`mt-4 md:mt-0 ${isEven ? "md:mr-8" : "md:ml-8"} hover:shadow-lg transition-shadow duration-300`}
          >
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center">
                <span className="text-xl">{achievement.title}</span>
                <span className="ml-auto text-sm text-muted-foreground">{achievement.period}</span>
              </CardTitle>
              <p className="text-sm font-medium text-muted-foreground">{achievement.organization}</p>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{achievement.description}</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

function TimelineItem({ achievement, index }: { achievement: FirebaseAchievement; index: number }) {
  const [mounted, setMounted] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })
  const isEven = index % 2 === 0

  useEffect(() => {
    setMounted(true)
  }, [])

  // // if (!mounted) {
  //   return <StaticTimelineItem achievement={achievement} />
  // // }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isEven ? -20 : 20 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? -20 : 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative"
    >
      <div className={`flex flex-col md:flex-row items-center ${isEven ? "md:flex-row-reverse" : ""}`}>
        <div className="md:w-1/2" />

        <div className="z-10 flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground shadow-md">
          {getIconComponent(achievement.iconType)}
        </div>

        <div className="md:w-1/2">
          <Card
            className={`mt-4 md:mt-0 ${isEven ? "md:mr-8" : "md:ml-8"} hover:shadow-lg transition-shadow duration-300`}
          >
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center">
                <span className="text-xl">{achievement.title}</span>
                <span className="ml-auto text-sm text-muted-foreground">{achievement.period}</span>
              </CardTitle>
              <p className="text-sm font-medium text-muted-foreground">{achievement.organization}</p>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{achievement.description}</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </motion.div>
  )
}

function getIconComponent(iconType: string) {
  switch (iconType) {
    case "briefcase":
      return <Briefcase className="h-6 w-6" />
    case "graduation-cap":
      return <GraduationCap className="h-6 w-6" />
    case "award":
      return <Award className="h-6 w-6" />
    case "book-open":
      return <BookOpen className="h-6 w-6" />
    default:
      return <Briefcase className="h-6 w-6" />
  }
}
