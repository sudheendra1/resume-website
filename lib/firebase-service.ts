// import {
//   collection,
//   doc,
//   getDocs,
//   getDoc,
//   addDoc,
//   updateDoc,
//   deleteDoc,
//   query,
//   orderBy,
//   where,
//   Timestamp,
// } from "firebase/firestore"
// import { db } from "../firebase/config"

// // Types for our data structures
// export interface Achievement {
//   id: string
//   title: string
//   organization: string
//   period: string
//   description: string
//   iconType: string
//   type: string
//   order: number
//   createdAt: Timestamp
// }

// export interface Skill {
//   id: string
//   name: string
//   level: number
//   category: string
//   order: number
// }

// export interface SkillGroup {
//   id: string
//   category: string
//   items: Skill[]
//   order: number
// }

// export interface Project {
//   id: string
//   title: string
//   description: string
//   image: string
//   category: string
//   tags: string[]
//   demoUrl: string
//   githubUrl: string
//   details: string
//   featured: boolean
//   order: number
//   createdAt: Timestamp
// }

// export interface CodingChallenge {
//   id: string
//   title: string
//   difficulty: string
//   description: string
//   code: string
//   testCases: {
//     input: string
//     expected: string
//   }[]
//   order: number
// }

// export interface TypingChallenge {
//   id: string
//   title: string
//   difficulty: string
//   text: string
//   order: number
// }

// export interface ContactMessage {
//   id: string
//   name: string
//   email: string
//   subject: string
//   message: string
//   createdAt: Timestamp
//   read: boolean
// }

// export interface GitHubRepo {
//   id: string
//   name: string
//   full_name: string
//   description: string
//   html_url: string
//   homepage: string | null
//   stargazers_count: number
//   forks_count: number
//   watchers_count: number
//   language: string
//   topics: string[]
//   updated_at: string
//   created_at: string
//   size: number
//   default_branch: string
//   preview_image: string
//   live_demo: boolean
// }

// // Achievements Service
// export const achievementsService = {
//   async getAll(): Promise<Achievement[]> {
//     try {
//       const q = query(collection(db, "achievements"), orderBy("order", "asc"))
//       const querySnapshot = await getDocs(q)
//       return querySnapshot.docs.map(
//         (doc) =>
//           ({
//             id: doc.id,
//             ...doc.data(),
//           }) as Achievement,
//       )
//     } catch (error) {
//       console.error("Error fetching achievements:", error)
//       return []
//     }
//   },

//   async getById(id: string): Promise<Achievement | null> {
//     try {
//       const docRef = doc(db, "achievements", id)
//       const docSnap = await getDoc(docRef)
//       if (docSnap.exists()) {
//         return { id: docSnap.id, ...docSnap.data() } as Achievement
//       }
//       return null
//     } catch (error) {
//       console.error("Error fetching achievement:", error)
//       return null
//     }
//   },

//   async create(achievement: Omit<Achievement, "id" | "createdAt">): Promise<string | null> {
//     try {
//       const docRef = await addDoc(collection(db, "achievements"), {
//         ...achievement,
//         createdAt: Timestamp.now(),
//       })
//       return docRef.id
//     } catch (error) {
//       console.error("Error creating achievement:", error)
//       return null
//     }
//   },

//   async update(id: string, achievement: Partial<Achievement>): Promise<boolean> {
//     try {
//       const docRef = doc(db, "achievements", id)
//       await updateDoc(docRef, achievement)
//       return true
//     } catch (error) {
//       console.error("Error updating achievement:", error)
//       return false
//     }
//   },

//   async delete(id: string): Promise<boolean> {
//     try {
//       await deleteDoc(doc(db, "achievements", id))
//       return true
//     } catch (error) {
//       console.error("Error deleting achievement:", error)
//       return false
//     }
//   },
// }

// // Skills Service
// export const skillsService = {
//   async getAll(): Promise<SkillGroup[]> {
//     try {
//       const q = query(collection(db, "skills"), orderBy("order", "asc"))
//       const querySnapshot = await getDocs(q)

//       // Group skills by category
//       const skillsMap = new Map<string, Skill[]>()
//       const categories = new Set<string>()

//       querySnapshot.docs.forEach((doc) => {
//         const skill = { id: doc.id, ...doc.data() } as Skill
//         categories.add(skill.category)

//         if (!skillsMap.has(skill.category)) {
//           skillsMap.set(skill.category, [])
//         }
//         skillsMap.get(skill.category)!.push(skill)
//       })

//       // Convert to SkillGroup format
//       const skillGroups: SkillGroup[] = []
//       let order = 0

//       for (const category of categories) {
//         const items = skillsMap.get(category) || []
//         items.sort((a, b) => a.order - b.order)

//         skillGroups.push({
//           id: category.toLowerCase().replace(/\s+/g, "-"),
//           category,
//           items,
//           order: order++,
//         })
//       }

//       return skillGroups
//     } catch (error) {
//       console.error("Error fetching skills:", error)
//       return []
//     }
//   },

//   async create(skill: Omit<Skill, "id">): Promise<string | null> {
//     try {
//       const docRef = await addDoc(collection(db, "skills"), skill)
//       return docRef.id
//     } catch (error) {
//       console.error("Error creating skill:", error)
//       return null
//     }
//   },

//   async update(id: string, skill: Partial<Skill>): Promise<boolean> {
//     try {
//       const docRef = doc(db, "skills", id)
//       await updateDoc(docRef, skill)
//       return true
//     } catch (error) {
//       console.error("Error updating skill:", error)
//       return false
//     }
//   },

//   async delete(id: string): Promise<boolean> {
//     try {
//       await deleteDoc(doc(db, "skills", id))
//       return true
//     } catch (error) {
//       console.error("Error deleting skill:", error)
//       return false
//     }
//   },
// }

// // Projects Service
// export const projectsService = {
//   async getAll(): Promise<Project[]> {
//     try {
//       const q = query(collection(db, "projects"), orderBy("order", "asc"))
//       const querySnapshot = await getDocs(q)
//       return querySnapshot.docs.map(
//         (doc) =>
//           ({
//             id: doc.id,
//             ...doc.data(),
//           }) as Project,
//       )
//     } catch (error) {
//       console.error("Error fetching projects:", error)
//       return []
//     }
//   },

//   async getByCategory(category: string): Promise<Project[]> {
//     try {
//       const q = query(collection(db, "projects"), where("category", "==", category), orderBy("order", "asc"))
//       const querySnapshot = await getDocs(q)
//       return querySnapshot.docs.map(
//         (doc) =>
//           ({
//             id: doc.id,
//             ...doc.data(),
//           }) as Project,
//       )
//     } catch (error) {
//       console.error("Error fetching projects by category:", error)
//       return []
//     }
//   },

//   async getFeatured(): Promise<Project[]> {
//     try {
//       const q = query(collection(db, "projects"), where("featured", "==", true), orderBy("order", "asc"))
//       const querySnapshot = await getDocs(q)
//       return querySnapshot.docs.map(
//         (doc) =>
//           ({
//             id: doc.id,
//             ...doc.data(),
//           }) as Project,
//       )
//     } catch (error) {
//       console.error("Error fetching featured projects:", error)
//       return []
//     }
//   },

//   async create(project: Omit<Project, "id" | "createdAt">): Promise<string | null> {
//     try {
//       const docRef = await addDoc(collection(db, "projects"), {
//         ...project,
//         createdAt: Timestamp.now(),
//       })
//       return docRef.id
//     } catch (error) {
//       console.error("Error creating project:", error)
//       return null
//     }
//   },

//   async update(id: string, project: Partial<Project>): Promise<boolean> {
//     try {
//       const docRef = doc(db, "projects", id)
//       await updateDoc(docRef, project)
//       return true
//     } catch (error) {
//       console.error("Error updating project:", error)
//       return false
//     }
//   },

//   async delete(id: string): Promise<boolean> {
//     try {
//       await deleteDoc(doc(db, "projects", id))
//       return true
//     } catch (error) {
//       console.error("Error deleting project:", error)
//       return false
//     }
//   },
// }

// // Coding Challenges Service
// export const codingChallengesService = {
//   async getAll(): Promise<CodingChallenge[]> {
//     try {
//       const q = query(collection(db, "coding-challenges"), orderBy("order", "asc"))
//       const querySnapshot = await getDocs(q)
//       return querySnapshot.docs.map(
//         (doc) =>
//           ({
//             id: doc.id,
//             ...doc.data(),
//           }) as CodingChallenge,
//       )
//     } catch (error) {
//       console.error("Error fetching coding challenges:", error)
//       return []
//     }
//   },

//   async create(challenge: Omit<CodingChallenge, "id">): Promise<string | null> {
//     try {
//       const docRef = await addDoc(collection(db, "coding-challenges"), challenge)
//       return docRef.id
//     } catch (error) {
//       console.error("Error creating coding challenge:", error)
//       return null
//     }
//   },
// }

// // Typing Challenges Service
// export const typingChallengesService = {
//   async getAll(): Promise<TypingChallenge[]> {
//     try {
//       const q = query(collection(db, "typing-challenges"), orderBy("order", "asc"))
//       const querySnapshot = await getDocs(q)
//       return querySnapshot.docs.map(
//         (doc) =>
//           ({
//             id: doc.id,
//             ...doc.data(),
//           }) as TypingChallenge,
//       )
//     } catch (error) {
//       console.error("Error fetching typing challenges:", error)
//       return []
//     }
//   },

//   async create(challenge: Omit<TypingChallenge, "id">): Promise<string | null> {
//     try {
//       const docRef = await addDoc(collection(db, "typing-challenges"), challenge)
//       return docRef.id
//     } catch (error) {
//       console.error("Error creating typing challenge:", error)
//       return null
//     }
//   },
// }

// // Contact Service
// export const contactService = {
//   async create(message: Omit<ContactMessage, "id" | "createdAt" | "read">): Promise<string | null> {
//     try {
//       const docRef = await addDoc(collection(db, "contact-messages"), {
//         ...message,
//         createdAt: Timestamp.now(),
//         read: false,
//       })
//       return docRef.id
//     } catch (error) {
//       console.error("Error creating contact message:", error)
//       return null
//     }
//   },

//   async getAll(): Promise<ContactMessage[]> {
//     try {
//       const q = query(collection(db, "contact-messages"), orderBy("createdAt", "desc"))
//       const querySnapshot = await getDocs(q)
//       return querySnapshot.docs.map(
//         (doc) =>
//           ({
//             id: doc.id,
//             ...doc.data(),
//           }) as ContactMessage,
//       )
//     } catch (error) {
//       console.error("Error fetching contact messages:", error)
//       return []
//     }
//   },

//   async markAsRead(id: string): Promise<boolean> {
//     try {
//       const docRef = doc(db, "contact-messages", id)
//       await updateDoc(docRef, { read: true })
//       return true
//     } catch (error) {
//       console.error("Error marking message as read:", error)
//       return false
//     }
//   },
// }

// // GitHub Repositories Service
// export const githubService = {
//   async getAll(): Promise<GitHubRepo[]> {
//     try {
//       const q = query(collection(db, "github-repos"), orderBy("stargazers_count", "desc"))
//       const querySnapshot = await getDocs(q)
//       return querySnapshot.docs.map(
//         (doc) =>
//           ({
//             id: doc.id,
//             ...doc.data(),
//           }) as GitHubRepo,
//       )
//     } catch (error) {
//       console.error("Error fetching GitHub repos:", error)
//       return []
//     }
//   },

//   async syncFromGitHub(repos: Omit<GitHubRepo, "id">[]): Promise<boolean> {
//     try {
//       // This would typically be called from a server function or admin panel
//       // to sync data from GitHub API
//       for (const repo of repos) {
//         await addDoc(collection(db, "github-repos"), repo)
//       }
//       return true
//     } catch (error) {
//       console.error("Error syncing GitHub repos:", error)
//       return false
//     }
//   },
// }


import { collection, getDocs, addDoc, doc, getDoc } from "firebase/firestore"
import { db } from "../firebase/config"

// Types
export interface Project {
  id: string | number
  title: string
  description: string
  details: string
  image: string
  category: string
  tags: string[]
  demoUrl: string
  githubUrl: string
}

export interface Achievement {
  id: string
  title: string
  organization: string
  period: string
  description: string
  iconType: string
  type: string
}

export interface SkillGroup {
  id: string
  category: string
  items: string[] | { name: string; level: number }[]
}

export interface CodingChallenge {
  id: string
  title: string
  description: string
  difficulty: string
  // code: string
  // testCases: { input: string; expected: string }[]
  // order?: number
  code: string // This is your solution code
  order?: number
  testCases: {
    input: string
    expected: string
  }[]
}

export interface TypingChallenge {
  id: string
  title: string
  difficulty: string
  text: string
}

// Service functions
export const projectsService = {
  async getAll(): Promise<Project[]> {
    try {
      const querySnapshot = await getDocs(collection(db, "projects"))
      return querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Project[]
    } catch (error) {
      console.error("Error fetching projects:", error)
      return []
    }
  },

  async getById(id: string): Promise<Project | null> {
    try {
      const docRef = doc(db, "projects", id)
      const docSnap = await getDoc(docRef)

      if (docSnap.exists()) {
        return { id: docSnap.id, ...docSnap.data() } as Project
      }
      return null
    } catch (error) {
      console.error("Error fetching project:", error)
      return null
    }
  },
}

export const achievementsService = {
  async getAll(): Promise<Achievement[]> {
    try {
      const querySnapshot = await getDocs(collection(db, "achievements"))
      return querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Achievement[]
    } catch (error) {
      console.error("Error fetching achievements:", error)
      return []
    }
  },
}

// export const skillsService = {
//   async getAll(): Promise<SkillGroup[]> {
//     try {
//       const querySnapshot = await getDocs(collection(db, "skills"))
//       return querySnapshot.docs.map((doc) => ({
//         id: doc.id,
//         ...doc.data(),
//       })) as SkillGroup[]
//     } catch (error) {
//       console.error("Error fetching skills:", error)
//       return []
//     }
//   },
// }

export const skillsService = {
  async getAll(): Promise<SkillGroup[]> {
    try {
      const querySnapshot = await getDocs(collection(db, "skills"));

      const skillsByCategory: Record<string, { name: string; level: number }[]> = {};

      querySnapshot.forEach((doc) => {
        const data = doc.data();
        const category = data.category ?? "Uncategorized";
        const skill = {
          name: data.name ?? "Unnamed Skill",
          level: data.level ?? 0,
        };

        if (!skillsByCategory[category]) {
          skillsByCategory[category] = [];
        }

        skillsByCategory[category].push(skill);
      });

      return Object.entries(skillsByCategory).map(([category, items], index) => ({
        id: category.toLowerCase().replace(/\s+/g, "-"),
        category,
        items,
      }));
    } catch (error) {
      console.error("Error fetching skills:", error);
      return [];
    }
  },
};


export const codingChallengesService = {
  async getAll(): Promise<CodingChallenge[]> {
    try {
      const querySnapshot = await getDocs(collection(db, "coding-challenges"))
      // return querySnapshot.docs.map((doc) => ({
      const challenges = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as CodingChallenge[]
      return challenges.sort((a, b) => {
        const orderA = a.order || 0
        const orderB = b.order || 0
        return orderA - orderB
      })
    } catch (error) {
      console.error("Error fetching coding challenges:", error)
      return []
    }
  },
}

export const typingChallengesService = {
  async getAll(): Promise<TypingChallenge[]> {
    try {
      const querySnapshot = await getDocs(collection(db, "typing-challenges"))
      return querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as TypingChallenge[]
    } catch (error) {
      console.error("Error fetching typing challenges:", error)
      return []
    }
  },
}

export const contactService = {
  async create(data: { name: string; email: string; subject: string; message: string }): Promise<string | null> {
    try {
      const docRef = await addDoc(collection(db, "contacts"), {
        ...data,
        createdAt: new Date(),
      })
      return docRef.id
    } catch (error) {
      console.error("Error creating contact:", error)
      return null
    }
  },
}
