"use client"

import { useState, useRef, useEffect } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ExternalLink, Github, Star, GitFork, Eye, Calendar } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import type { GitHubData, GitHubRepository, GitHubRepoCardProps, RepoModalProps } from "@/types"

// Mock GitHub data - replace with real API calls
const mockGitHubData: GitHubData = {
  user: {
    login: "johndoe",
    name: "John Doe",
    public_repos: 42,
    followers: 156,
    following: 89,
  },
  repositories: [
    {
      id: 1,
      name: "react-dashboard",
      full_name: "johndoe/react-dashboard",
      description: "A modern React dashboard with real-time analytics and beautiful charts",
      html_url: "https://github.com/johndoe/react-dashboard",
      homepage: "https://dashboard-demo.vercel.app",
      stargazers_count: 234,
      forks_count: 45,
      watchers_count: 234,
      language: "TypeScript",
      topics: ["react", "dashboard", "analytics", "charts"],
      updated_at: "2024-01-15T10:30:00Z",
      created_at: "2023-08-20T14:20:00Z",
      size: 2048,
      default_branch: "main",
      preview_image: "/placeholder.svg?height=300&width=500",
      live_demo: true,
    },
    {
      id: 2,
      name: "ai-image-generator",
      full_name: "johndoe/ai-image-generator",
      description: "AI-powered image generation tool using Stable Diffusion with React frontend",
      html_url: "https://github.com/johndoe/ai-image-generator",
      homepage: "https://ai-gen-demo.vercel.app",
      stargazers_count: 189,
      forks_count: 32,
      watchers_count: 189,
      language: "Python",
      topics: ["ai", "machine-learning", "image-generation", "react"],
      updated_at: "2024-01-10T16:45:00Z",
      created_at: "2023-11-05T09:15:00Z",
      size: 5120,
      default_branch: "main",
      preview_image: "/placeholder.svg?height=300&width=500",
      live_demo: true,
    },
    {
      id: 3,
      name: "blockchain-explorer",
      full_name: "johndoe/blockchain-explorer",
      description: "Ethereum blockchain explorer with transaction visualization and analytics",
      html_url: "https://github.com/johndoe/blockchain-explorer",
      homepage: "https://blockchain-explorer-demo.vercel.app",
      stargazers_count: 156,
      forks_count: 28,
      watchers_count: 156,
      language: "JavaScript",
      topics: ["blockchain", "ethereum", "web3", "visualization"],
      updated_at: "2024-01-08T12:20:00Z",
      created_at: "2023-09-12T11:30:00Z",
      size: 3072,
      default_branch: "main",
      preview_image: "/placeholder.svg?height=300&width=500",
      live_demo: true,
    },
    {
      id: 4,
      name: "mobile-fitness-app",
      full_name: "johndoe/mobile-fitness-app",
      description: "React Native fitness tracking app with workout plans and progress tracking",
      html_url: "https://github.com/johndoe/mobile-fitness-app",
      homepage: null,
      stargazers_count: 98,
      forks_count: 15,
      watchers_count: 98,
      language: "JavaScript",
      topics: ["react-native", "fitness", "mobile", "health"],
      updated_at: "2024-01-05T14:10:00Z",
      created_at: "2023-10-18T16:45:00Z",
      size: 1536,
      default_branch: "main",
      preview_image: "/placeholder.svg?height=300&width=500",
      live_demo: false,
    },
    {
      id: 5,
      name: "api-gateway",
      full_name: "johndoe/api-gateway",
      description: "Microservices API gateway with rate limiting, authentication, and monitoring",
      html_url: "https://github.com/johndoe/api-gateway",
      homepage: null,
      stargazers_count: 67,
      forks_count: 12,
      watchers_count: 67,
      language: "Go",
      topics: ["api", "gateway", "microservices", "golang"],
      updated_at: "2024-01-03T09:30:00Z",
      created_at: "2023-07-25T13:20:00Z",
      size: 896,
      default_branch: "main",
      preview_image: "/placeholder.svg?height=300&width=500",
      live_demo: false,
    },
    {
      id: 6,
      name: "data-visualization",
      full_name: "johndoe/data-visualization",
      description: "Interactive data visualization library built with D3.js and React",
      html_url: "https://github.com/johndoe/data-visualization",
      homepage: "https://dataviz-demo.vercel.app",
      stargazers_count: 145,
      forks_count: 23,
      watchers_count: 145,
      language: "TypeScript",
      topics: ["d3js", "visualization", "react", "charts"],
      updated_at: "2024-01-01T18:00:00Z",
      created_at: "2023-06-10T10:15:00Z",
      size: 2560,
      default_branch: "main",
      preview_image: "/placeholder.svg?height=300&width=500",
      live_demo: true,
    },
  ],
  contributions: {
    total: 1247,
    weeks: [
      { week: "2024-01-01", contributions: 12 },
      { week: "2024-01-08", contributions: 8 },
      { week: "2024-01-15", contributions: 15 },
      { week: "2024-01-22", contributions: 10 },
    ],
  },
}

export default function GitHubShowcase() {
  const [selectedRepo, setSelectedRepo] = useState<GitHubRepository | null>(null)
  const [filter, setFilter] = useState("all")
  const [mounted, setMounted] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    setMounted(true)
  }, [])

  const filteredRepos = mockGitHubData.repositories.filter((repo) => {
    if (filter === "all") return true
    if (filter === "popular") return repo.stargazers_count > 100
    if (filter === "recent") return new Date(repo.updated_at) > new Date("2024-01-01")
    return repo.topics.includes(filter)
  })

  const formatDate = (dateString: string): string => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
  }

  // if (!mounted) {
  //   return (
  //     <section id="github-showcase" className="py-20 bg-background">
  //       <div className="container px-4">
  //         <div className="text-center mb-12">
  //           <h2 className="text-3xl md:text-4xl font-bold mb-4">GitHub Showcase</h2>
  //           <p className="text-muted-foreground max-w-2xl mx-auto">
  //             Explore my open-source contributions and projects with live previews and detailed insights.
  //           </p>
  //         </div>

  //         {/* GitHub Stats */}
  //         <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
  //           <Card className="text-center">
  //             <CardContent className="pt-6">
  //               <div className="text-2xl font-bold text-primary">{mockGitHubData.user.public_repos}</div>
  //               <p className="text-sm text-muted-foreground">Public Repos</p>
  //             </CardContent>
  //           </Card>
  //           <Card className="text-center">
  //             <CardContent className="pt-6">
  //               <div className="text-2xl font-bold text-primary">{mockGitHubData.contributions.total}</div>
  //               <p className="text-sm text-muted-foreground">Contributions</p>
  //             </CardContent>
  //           </Card>
  //           <Card className="text-center">
  //             <CardContent className="pt-6">
  //               <div className="text-2xl font-bold text-primary">{mockGitHubData.user.followers}</div>
  //               <p className="text-sm text-muted-foreground">Followers</p>
  //             </CardContent>
  //           </Card>
  //           <Card className="text-center">
  //             <CardContent className="pt-6">
  //               <div className="text-2xl font-bold text-primary">
  //                 {mockGitHubData.repositories.reduce((sum, repo) => sum + repo.stargazers_count, 0)}
  //               </div>
  //               <p className="text-sm text-muted-foreground">Total Stars</p>
  //             </CardContent>
  //           </Card>
  //         </div>

  //         {/* Repository Grid */}
  //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  //           {filteredRepos.map((repo) => (
  //             <StaticRepoCard key={repo.id} repo={repo} />
  //           ))}
  //         </div>
  //       </div>
  //     </section>
  //   )
  // }

  return (
    <section id="github-showcase" className="py-20 bg-background">
      <div className="container px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">GitHub Showcase</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore my open-source contributions and projects with live previews and detailed insights.
          </p>
        </motion.div>

        {/* GitHub Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8"
        >
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-primary">{mockGitHubData.user.public_repos}</div>
              <p className="text-sm text-muted-foreground">Public Repos</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-primary">{mockGitHubData.contributions.total}</div>
              <p className="text-sm text-muted-foreground">Contributions</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-primary">{mockGitHubData.user.followers}</div>
              <p className="text-sm text-muted-foreground">Followers</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-primary">
                {mockGitHubData.repositories.reduce((sum, repo) => sum + repo.stargazers_count, 0)}
              </div>
              <p className="text-sm text-muted-foreground">Total Stars</p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Repository Filters */}
        <Tabs value={filter} onValueChange={setFilter} className="mb-8">
          <TabsList className="mx-auto flex justify-center flex-wrap">
            <TabsTrigger value="all">All Repos</TabsTrigger>
            <TabsTrigger value="popular">Popular</TabsTrigger>
            <TabsTrigger value="recent">Recent</TabsTrigger>
            <TabsTrigger value="react">React</TabsTrigger>
            <TabsTrigger value="ai">AI/ML</TabsTrigger>
            <TabsTrigger value="blockchain">Blockchain</TabsTrigger>
          </TabsList>
        </Tabs>

        {/* Repository Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRepos.map((repo, index) => (
            <GitHubRepoCard key={repo.id} repo={repo} index={index} onSelect={setSelectedRepo} />
          ))}
        </div>

        {/* Repository Modal */}
        {selectedRepo && <RepoModal repo={selectedRepo} onClose={() => setSelectedRepo(null)} />}
      </div>
    </section>
  )
}

function StaticRepoCard({ repo }: { repo: GitHubRepository }) {
  const formatDate = (dateString: string): string => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
  }

  return (
    <Card className="overflow-hidden h-full flex flex-col">
      <div className="relative overflow-hidden h-48">
        <Image src={repo.preview_image || "/placeholder.svg"} alt={repo.name} fill className="object-cover" />
      </div>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">{repo.name}</CardTitle>
          <div className="flex items-center space-x-1 text-sm text-muted-foreground">
            <Star className="h-3 w-3" />
            <span>{repo.stargazers_count}</span>
          </div>
        </div>
        <CardDescription className="line-clamp-2">{repo.description}</CardDescription>
      </CardHeader>

      <CardContent className="flex-grow">
        <div className="flex flex-wrap gap-1 mb-4">
          {repo.topics.slice(0, 3).map((topic: string) => (
            <Badge key={topic} variant="secondary" className="text-xs">
              {topic}
            </Badge>
          ))}
          {repo.topics.length > 3 && (
            <Badge variant="outline" className="text-xs">
              +{repo.topics.length - 3}
            </Badge>
          )}
        </div>

        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <div className={`w-3 h-3 rounded-full ${getLanguageColor(repo.language)}`} />
              <span>{repo.language}</span>
            </div>
            <div className="flex items-center space-x-1">
              <GitFork className="h-3 w-3" />
              <span>{repo.forks_count}</span>
            </div>
          </div>
          <div className="flex items-center space-x-1">
            <Calendar className="h-3 w-3" />
            <span>{formatDate(repo.updated_at)}</span>
          </div>
        </div>
      </CardContent>

      <div className="p-4 pt-0">
        <div className="flex space-x-2">
          <Button variant="outline" size="sm" asChild className="flex-1">
            <Link href={repo.html_url} target="_blank" rel="noopener noreferrer">
              <Github className="mr-1 h-3 w-3" />
              Code
            </Link>
          </Button>
          {repo.live_demo && repo.homepage && (
            <Button size="sm" asChild className="flex-1">
              <Link href={repo.homepage} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-1 h-3 w-3" />
                Demo
              </Link>
            </Button>
          )}
        </div>
      </div>
    </Card>
  )
}

function GitHubRepoCard({ repo, index, onSelect }: GitHubRepoCardProps) {
  const [mounted, setMounted] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  useEffect(() => {
    setMounted(true)
  }, [])

  const formatDate = (dateString: string): string => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
  }

  // if (!mounted) {
  //   return <StaticRepoCard repo={repo} />
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
            src={repo.preview_image || "/placeholder.svg"}
            alt={repo.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <Button variant="secondary" size="icon" className="mr-2" onClick={() => onSelect(repo)}>
              <Eye className="h-5 w-5" />
              <span className="sr-only">View Details</span>
            </Button>
          </div>
        </div>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg">{repo.name}</CardTitle>
            <div className="flex items-center space-x-1 text-sm text-muted-foreground">
              <Star className="h-3 w-3" />
              <span>{repo.stargazers_count}</span>
            </div>
          </div>
          <CardDescription className="line-clamp-2">{repo.description}</CardDescription>
        </CardHeader>

        <CardContent className="flex-grow">
          <div className="flex flex-wrap gap-1 mb-4">
            {repo.topics.slice(0, 3).map((topic: string) => (
              <Badge key={topic} variant="secondary" className="text-xs">
                {topic}
              </Badge>
            ))}
            {repo.topics.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{repo.topics.length - 3}
              </Badge>
            )}
          </div>

          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <div className={`w-3 h-3 rounded-full ${getLanguageColor(repo.language)}`} />
                <span>{repo.language}</span>
              </div>
              <div className="flex items-center space-x-1">
                <GitFork className="h-3 w-3" />
                <span>{repo.forks_count}</span>
              </div>
            </div>
            <div className="flex items-center space-x-1">
              <Calendar className="h-3 w-3" />
              <span>{formatDate(repo.updated_at)}</span>
            </div>
          </div>
        </CardContent>

        <div className="p-4 pt-0">
          <div className="flex space-x-2">
            <Button variant="outline" size="sm" asChild className="flex-1">
              <Link href={repo.html_url} target="_blank" rel="noopener noreferrer">
                <Github className="mr-1 h-3 w-3" />
                Code
              </Link>
            </Button>
            {repo.live_demo && repo.homepage && (
              <Button size="sm" asChild className="flex-1">
                <Link href={repo.homepage} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-1 h-3 w-3" />
                  Demo
                </Link>
              </Button>
            )}
          </div>
        </div>
      </Card>
    </motion.div>
  )
}

function RepoModal({ repo, onClose }: RepoModalProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!repo || !mounted) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50" onClick={onClose}>
      <div
        className="bg-background rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h2 className="text-2xl font-bold">{repo.name}</h2>
              <p className="text-muted-foreground">{repo.description}</p>
            </div>
            <Button variant="ghost" size="icon" onClick={onClose}>
              ×
            </Button>
          </div>

          <div className="relative h-64 md:h-80 mb-6 rounded-md overflow-hidden">
            <Image src={repo.preview_image || "/placeholder.svg"} alt={repo.name} fill className="object-cover" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="font-semibold mb-2">Repository Stats</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Stars:</span>
                  <span>{repo.stargazers_count}</span>
                </div>
                <div className="flex justify-between">
                  <span>Forks:</span>
                  <span>{repo.forks_count}</span>
                </div>
                <div className="flex justify-between">
                  <span>Watchers:</span>
                  <span>{repo.watchers_count}</span>
                </div>
                <div className="flex justify-between">
                  <span>Size:</span>
                  <span>{(repo.size / 1024).toFixed(1)} MB</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {repo.topics.map((topic: string) => (
                  <Badge key={topic} variant="secondary">
                    {topic}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          <div className="flex space-x-4">
            <Button asChild>
              <Link href={repo.html_url} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                View on GitHub
              </Link>
            </Button>
            {repo.live_demo && repo.homepage && (
              <Button variant="outline" asChild>
                <Link href={repo.homepage} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Demo
                </Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

function getLanguageColor(language: string): string {
  const colors: Record<string, string> = {
    JavaScript: "bg-yellow-400",
    TypeScript: "bg-blue-500",
    Python: "bg-green-500",
    Go: "bg-cyan-500",
    Java: "bg-orange-500",
    "C++": "bg-pink-500",
    React: "bg-blue-400",
  }
  return colors[language] || "bg-gray-400"
}
