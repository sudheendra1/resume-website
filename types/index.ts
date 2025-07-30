// import type React from "react"

// // Project types
// export interface Project {
//   id: number
//   title: string
//   description: string
//   image: string
//   category: string
//   tags: string[]
//   demoUrl: string
//   githubUrl: string
//   details: string
// }

// // GitHub types
// export interface GitHubRepository {
//   id: number
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

// export interface GitHubUser {
//   login: string
//   name: string
//   public_repos: number
//   followers: number
//   following: number
// }

// export interface GitHubData {
//   user: GitHubUser
//   repositories: GitHubRepository[]
//   contributions: {
//     total: number
//     weeks: Array<{
//       week: string
//       contributions: number
//     }>
//   }
// }

// // Skills types
// export interface Skill {
//   name: string
//   level: number
// }

// export interface SkillGroup {
//   category: string
//   items: Skill[]
// }

// // Achievement types
// export interface Achievement {
//   id: number
//   title: string
//   organization: string
//   period: string
//   description: string
//   icon: React.ReactNode
//   type: string
// }

// // Component prop types
// export interface ProjectCardProps {
//   project: Project
//   index: number
//   openModal: (project: Project) => void
// }

// export interface ProjectModalProps {
//   project: Project | null
//   isOpen: boolean
//   onClose: () => void
// }

// export interface GitHubRepoCardProps {
//   repo: GitHubRepository
//   index: number
//   onSelect: (repo: GitHubRepository) => void
// }

// export interface RepoModalProps {
//   repo: GitHubRepository | null
//   onClose: () => void
// }

// export interface SkillGroupProps {
//   skillGroup: SkillGroup
//   index: number
// }

// export interface SkillItemProps {
//   skill: Skill
//   index: number
//   isParentInView: boolean
// }

// export interface TimelineItemProps {
//   achievement: Achievement
//   index: number
// }

export interface Project {
  id: number | string
  title: string
  description: string
  details: string
  image: string
  category: string
  tags: string[]
  demoUrl: string
  githubUrl: string
}

export interface ProjectCardProps {
  project: Project
  index: number
  openModal: (project: Project) => void
}

export interface ProjectModalProps {
  project: Project
  isOpen: boolean
  onClose: () => void
}

export interface GitHubData {
  user: {
    login: string
    name: string
    public_repos: number
    followers: number
    following: number
  }
  repositories: GitHubRepository[]
  contributions: {
    total: number
    weeks: { week: string; contributions: number }[]
  }
}

export interface GitHubRepository {
  id: number
  name: string
  full_name: string
  description: string
  html_url: string
  homepage: string | null
  stargazers_count: number
  forks_count: number
  watchers_count: number
  language: string
  topics: string[]
  updated_at: string
  created_at: string
  size: number
  default_branch: string
  preview_image: string
  live_demo: boolean
}

export interface GitHubRepoCardProps {
  repo: GitHubRepository
  index: number
  onSelect: (repo: GitHubRepository) => void
}

export interface RepoModalProps {
  repo: GitHubRepository
  onClose: () => void
}

export interface SkillGroup {
  category: string
  items: { name: string; level: number }[]
}

export interface SkillGroupProps {
  skillGroup: SkillGroup
  index: number
}

export interface SkillItemProps {
  skill: { name: string; level: number }
  index: number
  isParentInView: boolean
}
