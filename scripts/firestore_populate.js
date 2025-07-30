// "use client"

// import {
//   achievementsService,
//   skillsService,
//   projectsService,
//   codingChallengesService,
//   typingChallengesService,
// } from "../lib/firebase-service"

// // Sample data to seed the database
// const sampleAchievements = [
//   {
//     title: "Senior Frontend Developer",
//     organization: "Tech Solutions Inc.",
//     period: "2020 - Present",
//     description:
//       "Led the development of the company's flagship product, resulting in a 40% increase in user engagement. Mentored junior developers and implemented best practices for code quality.",
//     iconType: "briefcase",
//     type: "work",
//     order: 1,
//   },
//   {
//     title: "Master's in Computer Science",
//     organization: "University of Technology",
//     period: "2016 - 2018",
//     description: "Specialized in Human-Computer Interaction and Web Technologies. Graduated with honors.",
//     iconType: "graduation-cap",
//     type: "education",
//     order: 3,
//   },
//   {
//     title: "Best Web Application Award",
//     organization: "DevFest 2022",
//     period: "2022",
//     description:
//       "Received the Best Web Application award for developing an innovative accessibility tool for visually impaired users.",
//     iconType: "award",
//     type: "award",
//     order: 5,
//   },
// ]

// const sampleSkills = [
//   { name: "React", level: 95, category: "Frontend", order: 1 },
//   { name: "JavaScript", level: 90, category: "Frontend", order: 2 },
//   { name: "TypeScript", level: 85, category: "Frontend", order: 3 },
//   { name: "Node.js", level: 80, category: "Backend", order: 1 },
//   { name: "Express", level: 85, category: "Backend", order: 2 },
//   { name: "MongoDB", level: 75, category: "Backend", order: 3 },
//   { name: "Git", level: 90, category: "Tools & Others", order: 1 },
//   { name: "Docker", level: 70, category: "Tools & Others", order: 2 },
// ]

// const sampleProjects = [
//   {
//     title: "E-Commerce Platform",
//     description:
//       "A full-featured e-commerce platform with product management, cart functionality, and payment processing.",
//     image: "/placeholder.svg?height=600&width=800",
//     category: "web",
//     tags: ["React", "Node.js", "MongoDB", "Stripe"],
//     demoUrl: "https://example.com",
//     githubUrl: "https://github.com",
//     details:
//       "This project was built using the MERN stack. It features user authentication, product management, shopping cart functionality, and Stripe payment integration.",
//     featured: true,
//     order: 1,
//   },
//   {
//     title: "Mobile Fitness App",
//     description: "A fitness tracking mobile application with workout plans and progress tracking.",
//     image: "/placeholder.svg?height=600&width=800",
//     category: "mobile",
//     tags: ["React Native", "Firebase", "Expo"],
//     demoUrl: "https://example.com",
//     githubUrl: "https://github.com",
//     details:
//       "This mobile fitness app helps users track their workouts and progress. It includes pre-defined workout plans, custom workout creation, and progress visualization.",
//     featured: false,
//     order: 2,
//   },
// ]

// const sampleCodingChallenges = [
//   {
//     title: "Array Manipulation",
//     difficulty: "Easy",
//     description: "Find the maximum sum of a contiguous subarray",
//     code: `function maxSubArray(nums) {
//   let maxSum = nums[0];
//   let currentSum = nums[0];
  
//   for (let i = 1; i < nums.length; i++) {
//     currentSum = Math.max(nums[i], currentSum + nums[i]);
//     maxSum = Math.max(maxSum, currentSum);
//   }
  
//   return maxSum;
// }`,
//     testCases: [
//       { input: "[-2,1,-3,4,-1,2,1,-5,4]", expected: "6" },
//       { input: "[1]", expected: "1" },
//       { input: "[5,4,-1,7,8]", expected: "23" },
//     ],
//     order: 1,
//   },
// ]

// const sampleTypingChallenges = [
//   {
//     title: "React Component",
//     difficulty: "Easy",
//     text: `import React from 'react';

// const Button = ({ children, onClick, variant = 'primary' }) => {
//   return (
//     <button 
//       className={\`btn btn-\${variant}\`}
//       onClick={onClick}
//     >
//       {children}
//     </button>
//   );
// };

// export default Button;`,
//     order: 1,
//   },
// ]

// export async function seedFirestore() {
//   console.log("Starting Firestore seeding...")

//   try {
//     // Seed achievements
//     console.log("Seeding achievements...")
//     for (const achievement of sampleAchievements) {
//       await achievementsService.create(achievement)
//     }

//     // Seed skills
//     console.log("Seeding skills...")
//     for (const skill of sampleSkills) {
//       await skillsService.create(skill)
//     }

//     // Seed projects
//     console.log("Seeding projects...")
//     for (const project of sampleProjects) {
//       await projectsService.create(project)
//     }

//     // Seed coding challenges
//     console.log("Seeding coding challenges...")
//     for (const challenge of sampleCodingChallenges) {
//       await codingChallengesService.create(challenge)
//     }

//     // Seed typing challenges
//     console.log("Seeding typing challenges...")
//     for (const challenge of sampleTypingChallenges) {
//       await typingChallengesService.create(challenge)
//     }

//     console.log("Firestore seeding completed successfully!")
//   } catch (error) {
//     console.error("Error seeding Firestore:", error)
//   }
// }

// // Run the seeding function
// seedFirestore()

"use client"

import { config } from "dotenv"
import { initializeApp } from "firebase/app"
import { getFirestore, collection, addDoc, Timestamp } from "firebase/firestore"

// Load environment variables from .env file
config()

// Firebase configuration - loading from environment variables
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
}

// Debug: Log the config to see what's being loaded
console.log("🔧 Firebase Config Debug:")
console.log("Project ID:", firebaseConfig.projectId ? "✅ Found" : "❌ Missing")
console.log("API Key:", firebaseConfig.apiKey ? "✅ Found" : "❌ Missing")
console.log("Auth Domain:", firebaseConfig.authDomain ? "✅ Found" : "❌ Missing")

// Validate Firebase config
if (!firebaseConfig.projectId || !firebaseConfig.apiKey) {
  console.error("❌ Firebase configuration is missing. Please check your .env file.")
  console.error("Make sure you have these variables in your .env file:")
  console.error("- NEXT_PUBLIC_FIREBASE_PROJECT_ID")
  console.error("- NEXT_PUBLIC_FIREBASE_API_KEY")
  console.error("- NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN")
  console.error("- NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET")
  console.error("- NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID")
  console.error("- NEXT_PUBLIC_FIREBASE_APP_ID")
  process.exit(1)
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

// Sample data to seed the database (cleaned up field names and values)
const sampleAchievements = [
  {
    title: "Senior Frontend Developer",
    organization: "Tech Solutions Inc.",
    period: "2020 - Present",
    description:
      "Led the development of the company's flagship product, resulting in a 40% increase in user engagement. Mentored junior developers and implemented best practices for code quality.",
    iconType: "briefcase",
    type: "work",
    order: 1,
  },
  {
    title: "Master's in Computer Science",
    organization: "University of Technology",
    period: "2016 - 2018",
    description: "Specialized in Human-Computer Interaction and Web Technologies. Graduated with honors.",
    iconType: "graduation-cap",
    type: "education",
    order: 2,
  },
  {
    title: "Best Web Application Award",
    organization: "DevFest 2022",
    period: "2022",
    description:
      "Received the Best Web Application award for developing an innovative accessibility tool for visually impaired users.",
    iconType: "award",
    type: "award",
    order: 3,
  },
  {
    title: "Full Stack Developer",
    organization: "StartupXYZ",
    period: "2018 - 2020",
    description: "Built scalable web applications and APIs. Worked with React, Node.js, and cloud technologies.",
    iconType: "briefcase",
    type: "work",
    order: 4,
  },
  {
    title: "Bachelor's in Computer Engineering",
    organization: "Engineering College",
    period: "2014 - 2018",
    description: "Focused on software development and computer systems. Active in coding competitions.",
    iconType: "graduation-cap",
    type: "education",
    order: 5,
  },
]

const sampleSkills = [
  { name: "React", level: 95, category: "Frontend", order: 1 },
  { name: "JavaScript", level: 90, category: "Frontend", order: 2 },
  { name: "TypeScript", level: 85, category: "Frontend", order: 3 },
  { name: "Next.js", level: 88, category: "Frontend", order: 4 },
  { name: "HTML/CSS", level: 92, category: "Frontend", order: 5 },
  { name: "Tailwind CSS", level: 85, category: "Frontend", order: 6 },

  { name: "Node.js", level: 80, category: "Backend", order: 1 },
  { name: "Express", level: 85, category: "Backend", order: 2 },
  { name: "MongoDB", level: 75, category: "Backend", order: 3 },
  { name: "Firebase", level: 80, category: "Backend", order: 4 },
  { name: "PostgreSQL", level: 70, category: "Backend", order: 5 },

  { name: "Git", level: 90, category: "Tools & Others", order: 1 },
  { name: "Docker", level: 70, category: "Tools & Others", order: 2 },
  { name: "VS Code", level: 95, category: "Tools & Others", order: 3 },
  { name: "Figma", level: 75, category: "Tools & Others", order: 4 },
]

const sampleProjects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform with product management, cart functionality, and payment processing.",
    image: "/placeholder.svg?height=600&width=800",
    category: "web",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
    details:
      "This project was built using the MERN stack. It features user authentication, product management, shopping cart functionality, and Stripe payment integration. The platform includes an admin dashboard for managing products and orders.",
    featured: true,
    order: 1,
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates and team features.",
    image: "/placeholder.svg?height=600&width=800",
    category: "web",
    tags: ["Next.js", "Firebase", "TypeScript", "Tailwind"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
    details:
      "Built with Next.js and Firebase, this app allows teams to collaborate on projects with real-time updates, task assignments, and progress tracking.",
    featured: true,
    order: 2,
  },
  {
    title: "Mobile Fitness App",
    description: "A fitness tracking mobile application with workout plans and progress tracking.",
    image: "/placeholder.svg?height=600&width=800",
    category: "mobile",
    tags: ["React Native", "Firebase", "Expo"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
    details:
      "This mobile fitness app helps users track their workouts and progress. It includes pre-defined workout plans, custom workout creation, and progress visualization.",
    featured: false,
    order: 3,
  },
  {
    title: "Weather Dashboard",
    description: "A responsive weather dashboard with location-based forecasts and interactive maps.",
    image: "/placeholder.svg?height=600&width=800",
    category: "web",
    tags: ["Vue.js", "OpenWeather API", "Chart.js"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
    details:
      "Interactive weather dashboard that provides detailed forecasts, weather maps, and historical data visualization using Chart.js.",
    featured: false,
    order: 4,
  },
]

const sampleCodingChallenges = [
  {
    title: "Array Manipulation - Maximum Subarray",
    difficulty: "Easy",
    description: "Find the maximum sum of a contiguous subarray (Kadane's Algorithm)",
    code: "function maxSubArray(nums) {\n  let maxSum = nums[0];\n  let currentSum = nums[0];\n  \n  for (let i = 1; i < nums.length; i++) {\n    currentSum = Math.max(nums[i], currentSum + nums[i]);\n    maxSum = Math.max(maxSum, currentSum);\n  }\n  \n  return maxSum;\n}\n\n// Time Complexity: O(n)\n// Space Complexity: O(1)",
    testCases: [
      { input: "[-2,1,-3,4,-1,2,1,-5,4]", expected: "6" },
      { input: "[1]", expected: "1" },
      { input: "[5,4,-1,7,8]", expected: "23" },
    ],
    order: 1,
  },
  {
    title: "Two Sum Problem",
    difficulty: "Easy",
    description: "Find two numbers in an array that add up to a target sum",
    code: "function twoSum(nums, target) {\n  const map = new Map();\n  \n  for (let i = 0; i < nums.length; i++) {\n    const complement = target - nums[i];\n    \n    if (map.has(complement)) {\n      return [map.get(complement), i];\n    }\n    \n    map.set(nums[i], i);\n  }\n  \n  return [];\n}\n\n// Time Complexity: O(n)\n// Space Complexity: O(n)",
    testCases: [
      { input: "[2,7,11,15], target: 9", expected: "[0,1]" },
      { input: "[3,2,4], target: 6", expected: "[1,2]" },
      { input: "[3,3], target: 6", expected: "[0,1]" },
    ],
    order: 2,
  },
]

const sampleTypingChallenges = [
  {
    title: "React Functional Component",
    difficulty: "Easy",
    text: "import React from 'react';\n\nconst Button = ({ children, onClick, variant = 'primary' }) => {\n  return (\n    <button \n      className={`btn btn-${variant}`}\n      onClick={onClick}\n    >\n      {children}\n    </button>\n  );\n};\n\nexport default Button;",
    order: 1,
  },
  {
    title: "JavaScript Array Methods",
    difficulty: "Medium",
    text: "const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];\n\n// Filter even numbers\nconst evenNumbers = numbers.filter(num => num % 2 === 0);\n\n// Map to squares\nconst squares = numbers.map(num => num * num);\n\n// Reduce to sum\nconst sum = numbers.reduce((acc, num) => acc + num, 0);\n\n// Chain operations\nconst result = numbers\n  .filter(num => num > 5)\n  .map(num => num * 2)\n  .reduce((acc, num) => acc + num, 0);\n\nconsole.log({ evenNumbers, squares, sum, result });",
    order: 2,
  },
]

async function seedFirestore() {
  console.log("🚀 Starting Firestore seeding...")

  try {
    // Seed achievements
    console.log("📝 Seeding achievements...")
    for (const achievement of sampleAchievements) {
      await addDoc(collection(db, "achievements"), {
        ...achievement,
        createdAt: Timestamp.now(),
      })
    }
    console.log(`✅ Added ${sampleAchievements.length} achievements`)

    // Seed skills
    console.log("⚡ Seeding skills...")
    for (const skill of sampleSkills) {
      await addDoc(collection(db, "skills"), skill)
    }
    console.log(`✅ Added ${sampleSkills.length} skills`)

    // Seed projects
    console.log("🚀 Seeding projects...")
    for (const project of sampleProjects) {
      await addDoc(collection(db, "projects"), {
        ...project,
        createdAt: Timestamp.now(),
      })
    }
    console.log(`✅ Added ${sampleProjects.length} projects`)

    // Seed coding challenges
    console.log("💻 Seeding coding challenges...")
    for (const challenge of sampleCodingChallenges) {
      await addDoc(collection(db, "coding-challenges"), challenge)
    }
    console.log(`✅ Added ${sampleCodingChallenges.length} coding challenges`)

    // Seed typing challenges
    console.log("⌨️ Seeding typing challenges...")
    for (const challenge of sampleTypingChallenges) {
      await addDoc(collection(db, "typing-challenges"), challenge)
    }
    console.log(`✅ Added ${sampleTypingChallenges.length} typing challenges`)

    console.log("\n🎉 Firestore seeding completed successfully!")
    console.log("\n📊 Summary:")
    console.log(`- Achievements: ${sampleAchievements.length} documents`)
    console.log(`- Skills: ${sampleSkills.length} documents`)
    console.log(`- Projects: ${sampleProjects.length} documents`)
    console.log(`- Coding Challenges: ${sampleCodingChallenges.length} documents`)
    console.log(`- Typing Challenges: ${sampleTypingChallenges.length} documents`)

    process.exit(0)
  } catch (error) {
    console.error("❌ Error seeding Firestore:", error)
    console.error("Make sure your Firebase configuration is correct in .env file")
    process.exit(1)
  }
}

// Run the seeding function
seedFirestore()
