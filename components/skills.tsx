// "use client"

// import { useRef, useState, useEffect } from "react"
// import { motion, useInView } from "framer-motion"
// import { Progress } from "@/components/ui/progress"
// import type { SkillGroup, SkillGroupProps, SkillItemProps } from "@/types"

// const skills: SkillGroup[] = [
//   {
//     category: "Frontend",
//     items: [
//       { name: "React", level: 95 },
//       { name: "JavaScript", level: 90 },
//       { name: "TypeScript", level: 85 },
//       { name: "HTML/CSS", level: 95 },
//       { name: "Next.js", level: 90 },
//       { name: "Tailwind CSS", level: 85 },
//     ],
//   },
//   {
//     category: "Backend",
//     items: [
//       { name: "Node.js", level: 80 },
//       { name: "Express", level: 85 },
//       { name: "MongoDB", level: 75 },
//       { name: "PostgreSQL", level: 70 },
//       { name: "GraphQL", level: 65 },
//       { name: "REST API", level: 90 },
//     ],
//   },
//   {
//     category: "Tools & Others",
//     items: [
//       { name: "Git", level: 90 },
//       { name: "Docker", level: 70 },
//       { name: "AWS", level: 65 },
//       { name: "CI/CD", level: 75 },
//       { name: "Jest", level: 80 },
//       { name: "Figma", level: 60 },
//     ],
//   },
// ]

// export default function Skills() {
//   const [mounted, setMounted] = useState(false)
//   const ref = useRef(null)
//   const isInView = useInView(ref, { once: true, margin: "-100px" })

//   useEffect(() => {
//     setMounted(true)
//   }, [])

//   if (!mounted) {
//     return (
//       <section id="skills" className="py-20 bg-background">
//         <div className="container px-4">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Expertise</h2>
//             <p className="text-muted-foreground max-w-2xl mx-auto">
//               My technical skills and proficiency levels across various technologies and tools.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {skills.map((skillGroup) => (
//               <StaticSkillGroupComponent key={skillGroup.category} skillGroup={skillGroup} />
//             ))}
//           </div>
//         </div>
//       </section>
//     )
//   }

//   return (
//     <section id="skills" className="py-20 bg-background">
//       <div className="container px-4">
//         <motion.div
//           ref={ref}
//           initial={{ opacity: 0, y: 20 }}
//           animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-12"
//         >
//           <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Expertise</h2>
//           <p className="text-muted-foreground max-w-2xl mx-auto">
//             My technical skills and proficiency levels across various technologies and tools.
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {skills.map((skillGroup, groupIndex) => (
//             <SkillGroupComponent key={skillGroup.category} skillGroup={skillGroup} index={groupIndex} />
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

// function StaticSkillGroupComponent({ skillGroup }: { skillGroup: SkillGroup }) {
//   return (
//     <div className="p-6 rounded-lg border bg-card text-card-foreground shadow-sm">
//       <h3 className="text-xl font-bold mb-6">{skillGroup.category}</h3>
//       <div className="space-y-6">
//         {skillGroup.items.map((skill) => (
//           <StaticSkillItem key={skill.name} skill={skill} />
//         ))}
//       </div>
//     </div>
//   )
// }

// function StaticSkillItem({ skill }: { skill: { name: string; level: number } }) {
//   return (
//     <div className="space-y-2">
//       <div className="flex justify-between">
//         <span className="font-medium">{skill.name}</span>
//         <span className="text-muted-foreground">{skill.level}%</span>
//       </div>
//       <Progress value={skill.level} className="h-2" />
//     </div>
//   )
// }

// function SkillGroupComponent({ skillGroup, index }: SkillGroupProps) {
//   const [mounted, setMounted] = useState(false)
//   const ref = useRef(null)
//   const isInView = useInView(ref, { once: true, margin: "-50px" })

//   useEffect(() => {
//     setMounted(true)
//   }, [])

//   if (!mounted) {
//     return <StaticSkillGroupComponent skillGroup={skillGroup} />
//   }

//   return (
//     <motion.div
//       ref={ref}
//       initial={{ opacity: 0, y: 20 }}
//       animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//       transition={{ duration: 0.5, delay: index * 0.2 }}
//       className="p-6 rounded-lg border bg-card text-card-foreground shadow-sm"
//     >
//       <h3 className="text-xl font-bold mb-6">{skillGroup.category}</h3>
//       <div className="space-y-6">
//         {skillGroup.items.map((skill, skillIndex) => (
//           <SkillItem key={skill.name} skill={skill} index={skillIndex} isParentInView={isInView} />
//         ))}
//       </div>
//     </motion.div>
//   )
// }

// function SkillItem({ skill, index, isParentInView }: SkillItemProps) {
//   return (
//     <div className="space-y-2">
//       <div className="flex justify-between">
//         <span className="font-medium">{skill.name}</span>
//         <span className="text-muted-foreground">{skill.level}%</span>
//       </div>
//       <motion.div
//         initial={{ width: 0 }}
//         animate={isParentInView ? { width: `${skill.level}%` } : { width: 0 }}
//         transition={{ duration: 1, delay: 0.3 + index * 0.1 }}
//       >
//         <Progress value={skill.level} className="h-2" />
//       </motion.div>
//     </div>
//   )
// }


"use client"

import { skillsService, type SkillGroup as FirebaseSkillGroup } from "@/lib/firebase-service"
import { useInView } from "framer-motion"
import { useEffect, useRef, useState } from "react"

export default function Skills() {
  const [skills, setSkills] = useState<FirebaseSkillGroup[]>([])
  const [loading, setLoading] = useState(true)
  const [mounted, setMounted] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    setMounted(true)
    fetchSkills()
  }, [])

  const fetchSkills = async () => {
    try {
      const data = await skillsService.getAll()
      console.log("Fetched skills:", data)
      setSkills(data)
    } catch (error) {
      console.error("Error fetching skills:", error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <section id="skills" className="py-20 bg-background">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Expertise</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Loading skills...</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some of my key skills and areas of expertise.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((group) => (
            <div key={group.id} className="bg-card rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-3">{group.category}</h3>
              <ul className="list-none pl-0">
                {group.items.map((skill, index) => (
                  <li key={index} className="mb-2">
                    <span className="inline-flex items-center rounded-full bg-secondary px-3 py-1 text-sm font-medium leading-5 text-primary">
                      {typeof skill === "string" ? skill : skill.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
