// "use client"

// import type React from "react"

// import { useState, useEffect, useRef } from "react"
// import { motion, useInView } from "framer-motion"
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import { Badge } from "@/components/ui/badge"
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import { Progress } from "@/components/ui/progress"
// import { Trophy, Timer, Target, Zap, Play, RotateCcw, CheckCircle } from "lucide-react"

// // Define interfaces for our data structures
// interface CodingChallenge {
//   id: number
//   title: string
//   difficulty: string
//   description: string
//   code: string
//   testCases: {
//     input: string
//     expected: string
//   }[]
// }

// interface TypingChallenge {
//   id: number
//   title: string
//   difficulty: string
//   text: string
// }

// interface GameStats {
//   challengesCompleted?: number
//   typingSpeed?: number
//   accuracy?: number
//   streak?: number
// }

// interface QuizQuestion {
//   question: string
//   options: string[]
//   correct: number
// }

// const codingChallenges: CodingChallenge[] = [
//   {
//     id: 1,
//     title: "Array Manipulation",
//     difficulty: "Easy",
//     description: "Find the maximum sum of a contiguous subarray",
//     code: `function maxSubArray(nums) {
//   // Your code here
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
//   },
//   {
//     id: 2,
//     title: "String Reversal",
//     difficulty: "Easy",
//     description: "Reverse a string without using built-in reverse methods",
//     code: `function reverseString(str) {
//   // Your code here
//   let result = '';
//   for (let i = str.length - 1; i >= 0; i--) {
//     result += str[i];
//   }
//   return result;
// }`,
//     testCases: [
//       { input: '"hello"', expected: '"olleh"' },
//       { input: '"world"', expected: '"dlrow"' },
//       { input: '"JavaScript"', expected: '"tpircSavaJ"' },
//     ],
//   },
//   {
//     id: 3,
//     title: "Binary Search",
//     difficulty: "Medium",
//     description: "Implement binary search algorithm",
//     code: `function binarySearch(arr, target) {
//   // Your code here
//   let left = 0;
//   let right = arr.length - 1;
  
//   while (left <= right) {
//     let mid = Math.floor((left + right) / 2);
    
//     if (arr[mid] === target) {
//       return mid;
//     } else if (arr[mid] < target) {
//       left = mid + 1;
//     } else {
//       right = mid - 1;
//     }
//   }
  
//   return -1;
// }`,
//     testCases: [
//       { input: "[1,2,3,4,5], 3", expected: "2" },
//       { input: "[1,2,3,4,5], 6", expected: "-1" },
//       { input: "[1,3,5,7,9], 7", expected: "3" },
//     ],
//   },
// ]

// const typingChallenges: TypingChallenge[] = [
//   {
//     id: 1,
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
//   },
//   {
//     id: 2,
//     title: "JavaScript Function",
//     difficulty: "Medium",
//     text: `const debounce = (func, delay) => {
//   let timeoutId;
//   return (...args) => {
//     clearTimeout(timeoutId);
//     timeoutId = setTimeout(() => func.apply(this, args), delay);
//   };
// };

// const handleSearch = debounce((query) => {
//   console.log('Searching for:', query);
// }, 300);`,
//   },
//   {
//     id: 3,
//     title: "CSS Animation",
//     difficulty: "Hard",
//     text: `@keyframes slideInFromLeft {
//   0% {
//     transform: translateX(-100%);
//     opacity: 0;
//   }
//   100% {
//     transform: translateX(0);
//     opacity: 1;
//   }
// }

// .slide-in {
//   animation: slideInFromLeft 0.5s ease-out;
// }`,
//   },
// ]

// export default function CodingGame() {
//   const [activeGame, setActiveGame] = useState("challenges")
//   const [selectedChallenge, setSelectedChallenge] = useState(0)
//   const [selectedTyping, setSelectedTyping] = useState(0)
//   const [gameStats, setGameStats] = useState<GameStats>({
//     challengesCompleted: 0,
//     typingSpeed: 0,
//     accuracy: 0,
//     streak: 0,
//   })
//   const ref = useRef(null)
//   const isInView = useInView(ref, { once: true, margin: "-100px" })

//   return (
//     <section id="coding-game" className="py-20 bg-muted/30">
//       <div className="container px-4">
//         <motion.div
//           ref={ref}
//           initial={{ opacity: 0, y: 20 }}
//           animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-12"
//         >
//           <h2 className="text-3xl md:text-4xl font-bold mb-4">Interactive Coding Challenges</h2>
//           <p className="text-muted-foreground max-w-2xl mx-auto">
//             Test your coding skills with interactive challenges and typing tests. See how you measure up!
//           </p>
//         </motion.div>

//         {/* Game Stats */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//           transition={{ duration: 0.5, delay: 0.2 }}
//           className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
//         >
//           <Card className="text-center">
//             <CardContent className="pt-4">
//               <Trophy className="h-6 w-6 mx-auto mb-2 text-yellow-500" />
//               <div className="text-xl font-bold">{gameStats.challengesCompleted}</div>
//               <p className="text-xs text-muted-foreground">Challenges</p>
//             </CardContent>
//           </Card>
//           <Card className="text-center">
//             <CardContent className="pt-4">
//               <Zap className="h-6 w-6 mx-auto mb-2 text-blue-500" />
//               <div className="text-xl font-bold">{gameStats.typingSpeed}</div>
//               <p className="text-xs text-muted-foreground">WPM</p>
//             </CardContent>
//           </Card>
//           <Card className="text-center">
//             <CardContent className="pt-4">
//               <Target className="h-6 w-6 mx-auto mb-2 text-green-500" />
//               <div className="text-xl font-bold">{gameStats.accuracy}%</div>
//               <p className="text-xs text-muted-foreground">Accuracy</p>
//             </CardContent>
//           </Card>
//           <Card className="text-center">
//             <CardContent className="pt-4">
//               <Timer className="h-6 w-6 mx-auto mb-2 text-purple-500" />
//               <div className="text-xl font-bold">{gameStats.streak}</div>
//               <p className="text-xs text-muted-foreground">Streak</p>
//             </CardContent>
//           </Card>
//         </motion.div>

//         <Tabs value={activeGame} onValueChange={setActiveGame}>
//           <TabsList className="mx-auto flex justify-center mb-8">
//             <TabsTrigger value="challenges">Code Challenges</TabsTrigger>
//             <TabsTrigger value="typing">Typing Test</TabsTrigger>
//             <TabsTrigger value="quiz">Tech Quiz</TabsTrigger>
//           </TabsList>

//           <TabsContent value="challenges">
//             <CodingChallenges
//               challenges={codingChallenges}
//               selected={selectedChallenge}
//               onSelect={setSelectedChallenge}
//               onComplete={(stats: GameStats) => setGameStats((prev) => ({ ...prev, ...stats }))}
//             />
//           </TabsContent>

//           <TabsContent value="typing">
//             <TypingTest
//               challenges={typingChallenges}
//               selected={selectedTyping}
//               onSelect={setSelectedTyping}
//               onComplete={(stats: GameStats) => setGameStats((prev) => ({ ...prev, ...stats }))}
//             />
//           </TabsContent>

//           <TabsContent value="quiz">
//             <TechQuiz onComplete={(stats: GameStats) => setGameStats((prev) => ({ ...prev, ...stats }))} />
//           </TabsContent>
//         </Tabs>
//       </div>
//     </section>
//   )
// }

// interface CodingChallengesProps {
//   challenges: CodingChallenge[]
//   selected: number
//   onSelect: (index: number) => void
//   onComplete: (stats: GameStats) => void
// }

// function CodingChallenges({ challenges, selected, onSelect, onComplete }: CodingChallengesProps) {
//   const [showSolution, setShowSolution] = useState(false)
//   const [completedChallenges, setCompletedChallenges] = useState<Set<number>>(new Set())

//   const challenge = challenges[selected]

//   const handleComplete = () => {
//     setCompletedChallenges((prev) => new Set([...prev, challenge.id]))
//     onComplete({ challengesCompleted: completedChallenges.size + 1 })
//     setShowSolution(true)
//   }

//   return (
//     <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//       <div className="space-y-4">
//         <h3 className="text-lg font-semibold">Select Challenge</h3>
//         {challenges.map((challenge, index) => (
//           <Card
//             key={challenge.id}
//             className={`cursor-pointer transition-all ${
//               selected === index ? "ring-2 ring-primary" : ""
//             } ${completedChallenges.has(challenge.id) ? "bg-green-50 dark:bg-green-950" : ""}`}
//             onClick={() => onSelect(index)}
//           >
//             <CardContent className="p-4">
//               <div className="flex items-center justify-between mb-2">
//                 <h4 className="font-medium">{challenge.title}</h4>
//                 {completedChallenges.has(challenge.id) && <CheckCircle className="h-4 w-4 text-green-500" />}
//               </div>
//               <Badge
//                 variant={
//                   challenge.difficulty === "Easy"
//                     ? "secondary"
//                     : challenge.difficulty === "Medium"
//                       ? "default"
//                       : "destructive"
//                 }
//               >
//                 {challenge.difficulty}
//               </Badge>
//             </CardContent>
//           </Card>
//         ))}
//       </div>

//       <div className="lg:col-span-2">
//         <Card>
//           <CardHeader>
//             <CardTitle className="flex items-center justify-between">
//               {challenge.title}
//               <Badge
//                 variant={
//                   challenge.difficulty === "Easy"
//                     ? "secondary"
//                     : challenge.difficulty === "Medium"
//                       ? "default"
//                       : "destructive"
//                 }
//               >
//                 {challenge.difficulty}
//               </Badge>
//             </CardTitle>
//             <CardDescription>{challenge.description}</CardDescription>
//           </CardHeader>
//           <CardContent className="space-y-4">
//             <div>
//               <h4 className="font-medium mb-2">Solution:</h4>
//               <pre className="bg-muted p-4 rounded-md text-sm overflow-x-auto">
//                 <code>{showSolution ? challenge.code : "// Click 'Show Solution' to reveal the code"}</code>
//               </pre>
//             </div>

//             <div>
//               <h4 className="font-medium mb-2">Test Cases:</h4>
//               <div className="space-y-2">
//                 {challenge.testCases.map((testCase, index) => (
//                   <div key={index} className="bg-muted p-3 rounded text-sm">
//                     <div>
//                       <strong>Input:</strong> {testCase.input}
//                     </div>
//                     <div>
//                       <strong>Expected:</strong> {testCase.expected}
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div className="flex space-x-2">
//               <Button onClick={() => setShowSolution(!showSolution)}>
//                 {showSolution ? "Hide Solution" : "Show Solution"}
//               </Button>
//               <Button onClick={handleComplete} disabled={completedChallenges.has(challenge.id)}>
//                 {completedChallenges.has(challenge.id) ? "Completed" : "Mark Complete"}
//               </Button>
//             </div>
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   )
// }

// interface TypingTestProps {
//   challenges: TypingChallenge[]
//   selected: number
//   onSelect: (index: number) => void
//   onComplete: (stats: GameStats) => void
// }

// function TypingTest({ challenges, selected, onSelect, onComplete }: TypingTestProps) {
//   const [isActive, setIsActive] = useState(false)
//   const [currentIndex, setCurrentIndex] = useState(0)
//   const [userInput, setUserInput] = useState("")
//   const [startTime, setStartTime] = useState<number | null>(null)
//   const [wpm, setWpm] = useState(0)
//   const [accuracy, setAccuracy] = useState(100)
//   const [timeLeft, setTimeLeft] = useState(60)

//   const challenge = challenges[selected]
//   const targetText = challenge.text

//   useEffect(() => {
//     let interval: NodeJS.Timeout | null = null
//     if (isActive && timeLeft > 0) {
//       interval = setInterval(() => {
//         setTimeLeft((time) => time - 1)
//       }, 1000)
//     } else if (timeLeft === 0) {
//       handleFinish()
//     }
//     return () => {
//       if (interval) clearInterval(interval)
//     }
//   }, [isActive, timeLeft])

//   const startTest = () => {
//     setIsActive(true)
//     setStartTime(Date.now())
//     setCurrentIndex(0)
//     setUserInput("")
//     setTimeLeft(60)
//   }

//   const handleFinish = () => {
//     setIsActive(false)
//     const wordsTyped = userInput.trim().split(" ").length
//     const finalWpm = Math.round((wordsTyped / (60 - timeLeft)) * 60)
//     const correctChars = userInput.split("").filter((char, index) => char === targetText[index]).length
//     const finalAccuracy = Math.round((correctChars / userInput.length) * 100) || 0

//     setWpm(finalWpm)
//     setAccuracy(finalAccuracy)
//     onComplete({ typingSpeed: finalWpm, accuracy: finalAccuracy })
//   }

//   const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
//     if (!isActive) return
//     setUserInput(e.target.value)
//     setCurrentIndex(e.target.value.length)
//   }

//   return (
//     <div className="space-y-6">
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//         {challenges.map((challenge, index) => (
//           <Card
//             key={challenge.id}
//             className={`cursor-pointer transition-all ${selected === index ? "ring-2 ring-primary" : ""}`}
//             onClick={() => onSelect(index)}
//           >
//             <CardContent className="p-4">
//               <h4 className="font-medium mb-2">{challenge.title}</h4>
//               <Badge
//                 variant={
//                   challenge.difficulty === "Easy"
//                     ? "secondary"
//                     : challenge.difficulty === "Medium"
//                       ? "default"
//                       : "destructive"
//                 }
//               >
//                 {challenge.difficulty}
//               </Badge>
//             </CardContent>
//           </Card>
//         ))}
//       </div>

//       <Card>
//         <CardHeader>
//           <CardTitle className="flex items-center justify-between">
//             Typing Test: {challenge.title}
//             <div className="flex items-center space-x-4 text-sm">
//               <div className="flex items-center space-x-1">
//                 <Timer className="h-4 w-4" />
//                 <span>{timeLeft}s</span>
//               </div>
//               <div className="flex items-center space-x-1">
//                 <Zap className="h-4 w-4" />
//                 <span>{wpm} WPM</span>
//               </div>
//               <div className="flex items-center space-x-1">
//                 <Target className="h-4 w-4" />
//                 <span>{accuracy}%</span>
//               </div>
//             </div>
//           </CardTitle>
//         </CardHeader>
//         <CardContent className="space-y-4">
//           <div className="bg-muted p-4 rounded-md">
//             <pre className="text-sm whitespace-pre-wrap font-mono">
//               {targetText.split("").map((char, index) => (
//                 <span
//                   key={index}
//                   className={
//                     index < currentIndex
//                       ? userInput[index] === char
//                         ? "bg-green-200 dark:bg-green-800"
//                         : "bg-red-200 dark:bg-red-800"
//                       : index === currentIndex
//                         ? "bg-blue-200 dark:bg-blue-800"
//                         : ""
//                   }
//                 >
//                   {char}
//                 </span>
//               ))}
//             </pre>
//           </div>

//           <textarea
//             value={userInput}
//             onChange={handleInputChange}
//             placeholder="Start typing here..."
//             className="w-full h-32 p-3 border rounded-md resize-none font-mono text-sm"
//             disabled={!isActive || timeLeft === 0}
//           />

//           <div className="flex space-x-2">
//             <Button onClick={startTest} disabled={isActive}>
//               <Play className="mr-2 h-4 w-4" />
//               {isActive ? "Test Running..." : "Start Test"}
//             </Button>
//             <Button
//               variant="outline"
//               onClick={() => {
//                 setIsActive(false)
//                 setUserInput("")
//                 setCurrentIndex(0)
//                 setTimeLeft(60)
//               }}
//             >
//               <RotateCcw className="mr-2 h-4 w-4" />
//               Reset
//             </Button>
//           </div>

//           <Progress value={((60 - timeLeft) / 60) * 100} className="w-full" />
//         </CardContent>
//       </Card>
//     </div>
//   )
// }

// interface TechQuizProps {
//   onComplete: (stats: GameStats) => void
// }

// function TechQuiz({ onComplete }: TechQuizProps) {
//   const [currentQuestion, setCurrentQuestion] = useState(0)
//   const [score, setScore] = useState(0)
//   const [showResult, setShowResult] = useState(false)
//   const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)

//   const questions: QuizQuestion[] = [
//     {
//       question: "What is the virtual DOM in React?",
//       options: [
//         "A copy of the real DOM kept in memory",
//         "A new type of HTML element",
//         "A React component",
//         "A JavaScript library",
//       ],
//       correct: 0,
//     },
//     {
//       question: "Which of the following is NOT a JavaScript data type?",
//       options: ["String", "Boolean", "Float", "Symbol"],
//       correct: 2,
//     },
//     {
//       question: "What does CSS stand for?",
//       options: ["Computer Style Sheets", "Cascading Style Sheets", "Creative Style Sheets", "Colorful Style Sheets"],
//       correct: 1,
//     },
//   ]

//   const handleAnswer = (answerIndex: number) => {
//     setSelectedAnswer(answerIndex)
//     if (answerIndex === questions[currentQuestion].correct) {
//       setScore(score + 1)
//     }

//     setTimeout(() => {
//       if (currentQuestion < questions.length - 1) {
//         setCurrentQuestion(currentQuestion + 1)
//         setSelectedAnswer(null)
//       } else {
//         setShowResult(true)
//         onComplete({ streak: score + (answerIndex === questions[currentQuestion].correct ? 1 : 0) })
//       }
//     }, 1000)
//   }

//   const resetQuiz = () => {
//     setCurrentQuestion(0)
//     setScore(0)
//     setShowResult(false)
//     setSelectedAnswer(null)
//   }

//   if (showResult) {
//     return (
//       <Card className="text-center">
//         <CardContent className="pt-6">
//           <Trophy className="h-16 w-16 mx-auto mb-4 text-yellow-500" />
//           <h3 className="text-2xl font-bold mb-2">Quiz Complete!</h3>
//           <p className="text-lg mb-4">
//             You scored {score} out of {questions.length}
//           </p>
//           <Button onClick={resetQuiz}>
//             <RotateCcw className="mr-2 h-4 w-4" />
//             Try Again
//           </Button>
//         </CardContent>
//       </Card>
//     )
//   }

//   return (
//     <Card>
//       <CardHeader>
//         <CardTitle className="flex items-center justify-between">
//           Tech Quiz
//           <Badge variant="outline">
//             {currentQuestion + 1} / {questions.length}
//           </Badge>
//         </CardTitle>
//         <Progress value={((currentQuestion + 1) / questions.length) * 100} />
//       </CardHeader>
//       <CardContent className="space-y-4">
//         <h3 className="text-lg font-medium">{questions[currentQuestion].question}</h3>
//         <div className="space-y-2">
//           {questions[currentQuestion].options.map((option, index) => (
//             <Button
//               key={index}
//               variant={
//                 selectedAnswer === index
//                   ? index === questions[currentQuestion].correct
//                     ? "default"
//                     : "destructive"
//                   : "outline"
//               }
//               className="w-full justify-start"
//               onClick={() => handleAnswer(index)}
//               disabled={selectedAnswer !== null}
//             >
//               {option}
//             </Button>
//           ))}
//         </div>
//       </CardContent>
//     </Card>
//   )
// }


// "use client"

// import {
//   codingChallengesService,
//   typingChallengesService,
//   type CodingChallenge as FirebaseCodingChallenge,
//   type TypingChallenge as FirebaseTypingChallenge,
// } from "@/lib/firebase-service"
// import { useInView } from "framer-motion"
// import { useRef, useState, useEffect } from "react"

// interface GameStats {
//   challengesCompleted: number
//   typingSpeed: number
//   accuracy: number
//   streak: number
// }

// export default function CodingGame() {
//   const [activeGame, setActiveGame] = useState("challenges")
//   const [selectedChallenge, setSelectedChallenge] = useState(0)
//   const [selectedTyping, setSelectedTyping] = useState(0)
//   const [codingChallenges, setCodingChallenges] = useState<FirebaseCodingChallenge[]>([])
//   const [typingChallenges, setTypingChallenges] = useState<FirebaseTypingChallenge[]>([])
//   const [loading, setLoading] = useState(true)
//   const [gameStats, setGameStats] = useState<GameStats>({
//     challengesCompleted: 0,
//     typingSpeed: 0,
//     accuracy: 0,
//     streak: 0,
//   })
//   const ref = useRef(null)
//   const isInView = useInView(ref, { once: true, margin: "-100px" })

//   useEffect(() => {
//     fetchChallenges()
//   }, [])

//   const fetchChallenges = async () => {
//     try {
//       const [codingData, typingData] = await Promise.all([
//         codingChallengesService.getAll(),
//         typingChallengesService.getAll(),
//       ])
//       console.log("Fetched coding challenges:", codingData)
//       console.log("Fetched typing challenges:", typingData)
//       setCodingChallenges(codingData)
//       setTypingChallenges(typingData)
//     } catch (error) {
//       console.error("Error fetching challenges:", error)
//     } finally {
//       setLoading(false)
//     }
//   }

//   if (loading) {
//     return (
//       <section id="coding-game" className="py-20 bg-muted/30">
//         <div className="container px-4">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl md:text-4xl font-bold mb-4">Interactive Coding Challenges</h2>
//             <p className="text-muted-foreground max-w-2xl mx-auto">Loading challenges...</p>
//           </div>
//         </div>
//       </section>
//     )
//   }

//   return (
//     <section id="coding-game" className="py-20 bg-muted/30">
//       <div className="container px-4">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl md:text-4xl font-bold mb-4">Interactive Coding Challenges</h2>
//           <p className="text-muted-foreground max-w-2xl mx-auto">
//             Test your coding skills with our interactive challenges. Complete challenges to earn points and climb the
//             leaderboard.
//           </p>
//         </div>

//         <div className="flex justify-center space-x-4 mb-8">
//           <button
//             className={`px-6 py-2 rounded-full ${
//               activeGame === "challenges"
//                 ? "bg-primary text-primary-foreground"
//                 : "bg-secondary text-secondary-foreground"
//             }`}
//             onClick={() => setActiveGame("challenges")}
//           >
//             Coding Challenges
//           </button>
//           <button
//             className={`px-6 py-2 rounded-full ${
//               activeGame === "typing" ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"
//             }`}
//             onClick={() => setActiveGame("typing")}
//           >
//             Typing Challenges
//           </button>
//         </div>

//         {activeGame === "challenges" && (
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {codingChallenges.map((challenge, index) => (
//               <div
//                 key={index}
//                 className={`p-6 rounded-lg shadow-md bg-card text-card-foreground hover:shadow-lg transition-shadow duration-300 cursor-pointer ${
//                   selectedChallenge === index ? "ring-2 ring-primary" : ""
//                 }`}
//                 onClick={() => setSelectedChallenge(index)}
//               >
//                 <h3 className="text-xl font-semibold mb-2">{challenge.title}</h3>
//                 <p className="text-muted-foreground">{challenge.description}</p>
//               </div>
//             ))}
//           </div>
//         )}

//         {activeGame === "typing" && (
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {typingChallenges.map((typing, index) => (
//               <div
//                 key={index}
//                 className={`p-6 rounded-lg shadow-md bg-card text-card-foreground hover:shadow-lg transition-shadow duration-300 cursor-pointer ${
//                   selectedTyping === index ? "ring-2 ring-primary" : ""
//                 }`}
//                 onClick={() => setSelectedTyping(index)}
//               >
//                 <h3 className="text-xl font-semibold mb-2">{typing.title}</h3>
//                 <p className="text-muted-foreground">{typing.text}</p>
//               </div>
//             ))}
//           </div>
//         )}

//         <div ref={ref}>
//           {isInView && (
//             <div className="mt-12 text-center">
//               <h3 className="text-2xl font-bold mb-4">Game Statistics</h3>
//               <p className="text-muted-foreground">Here's how you're doing so far:</p>
//               <ul className="list-none space-y-2 mt-4">
//                 <li>Challenges Completed: {gameStats.challengesCompleted}</li>
//                 <li>Average Typing Speed: {gameStats.typingSpeed} WPM</li>
//                 <li>Accuracy: {gameStats.accuracy}%</li>
//                 <li>Current Streak: {gameStats.streak}</li>
//               </ul>
//             </div>
//           )}
//         </div>
//       </div>
//     </section>
//   )
// }


"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Textarea } from "@/components/ui/textarea"
import { Trophy, Timer, Target, Zap, Play, RotateCcw, CheckCircle, X, AlertCircle } from "lucide-react"
import { toast } from "sonner"
import {
  codingChallengesService,
  typingChallengesService,
  type CodingChallenge as FirebaseCodingChallenge,
  type TypingChallenge as FirebaseTypingChallenge,
} from "@/lib/firebase-service"

interface GameStats {
  challengesCompleted: number
  typingSpeed: number
  accuracy: number
  streak: number
}

interface TestResult {
  passed: boolean
  input: string
  expected: string
  actual: string
  error?: string
}

export default function CodingGame() {
  const [activeGame, setActiveGame] = useState("challenges")
  const [selectedChallenge, setSelectedChallenge] = useState(0)
  const [selectedTyping, setSelectedTyping] = useState(0)
  const [codingChallenges, setCodingChallenges] = useState<FirebaseCodingChallenge[]>([])
  const [typingChallenges, setTypingChallenges] = useState<FirebaseTypingChallenge[]>([])
  const [loading, setLoading] = useState(true)
  const [gameStats, setGameStats] = useState<GameStats>({
    challengesCompleted: 0,
    typingSpeed: 0,
    accuracy: 0,
    streak: 0,
  })
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const [isActive, setIsActive] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [userInput, setUserInput] = useState("")
  const [wpm, setWpm] = useState(0)
  const [accuracy, setAccuracy] = useState(100)
  const [timeLeft, setTimeLeft] = useState(60)

  useEffect(() => {
    fetchChallenges()
  }, [])

  const fetchChallenges = async () => {
    try {
      const [codingData, typingData] = await Promise.all([
        codingChallengesService.getAll(),
        typingChallengesService.getAll(),
      ])

      // Sort coding challenges by order if available
      const sortedCodingData = codingData.sort((a, b) => {
        const orderA = (a as any).order || 0
        const orderB = (b as any).order || 0
        return orderA - orderB
      })

      setCodingChallenges(sortedCodingData)
      setTypingChallenges(typingData)
    } catch (error) {
      console.error("Error fetching challenges:", error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null
    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((time) => time - 1)
      }, 1000)
    } else if (timeLeft === 0) {
      handleFinish()
    }
    return () => {
      if (interval) clearInterval(interval)
    }
  }, [isActive, timeLeft])

  const handleFinish = () => {
    setIsActive(false)
    const wordsTyped = userInput.trim().split(" ").length
    const finalWpm = Math.round((wordsTyped / (60 - timeLeft)) * 60)
    const finalAccuracy =
      Math.round(
        (userInput.split("").filter((char, index) => char === typingChallenges[selectedTyping].text[index]).length /
          userInput.length) *
          100,
      ) || 0

    setWpm(finalWpm)
    setAccuracy(finalAccuracy)
    setGameStats((prev) => ({
      ...prev,
      typingSpeed: finalWpm,
      accuracy: finalAccuracy,
    }))
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (!isActive) return
    setUserInput(e.target.value)
    setCurrentIndex(e.target.value.length)
  }

  const startTest = () => {
    setIsActive(true)
    setCurrentIndex(0)
    setUserInput("")
    setTimeLeft(60)
  }

  if (loading) {
    return (
      <section id="coding-game" className="py-20 bg-muted/30">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Interactive Coding Challenges</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Loading challenges...</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="coding-game" className="py-20 bg-muted/30">
      <div className="container px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Interactive Coding Challenges</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Test your coding skills with interactive challenges and typing tests. Write real code and see instant
            results!
          </p>
        </motion.div>

        {/* Game Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
        >
          <Card className="text-center">
            <CardContent className="pt-4">
              <Trophy className="h-6 w-6 mx-auto mb-2 text-yellow-500" />
              <div className="text-xl font-bold">{gameStats.challengesCompleted}</div>
              <p className="text-xs text-muted-foreground">Challenges</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-4">
              <Zap className="h-6 w-6 mx-auto mb-2 text-blue-500" />
              <div className="text-xl font-bold">{gameStats.typingSpeed}</div>
              <p className="text-xs text-muted-foreground">WPM</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-4">
              <Target className="h-6 w-6 mx-auto mb-2 text-green-500" />
              <div className="text-xl font-bold">{gameStats.accuracy}%</div>
              <p className="text-xs text-muted-foreground">Accuracy</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-4">
              <Timer className="h-6 w-6 mx-auto mb-2 text-purple-500" />
              <div className="text-xl font-bold">{gameStats.streak}</div>
              <p className="text-xs text-muted-foreground">Streak</p>
            </CardContent>
          </Card>
        </motion.div>

        <Tabs value={activeGame} onValueChange={setActiveGame}>
          <TabsList className="mx-auto flex justify-center mb-8">
            <TabsTrigger value="challenges">Code Challenges</TabsTrigger>
            <TabsTrigger value="typing">Typing Test</TabsTrigger>
          </TabsList>

          <TabsContent value="challenges">
            <InteractiveCodingChallenges
              challenges={codingChallenges}
              selected={selectedChallenge}
              onSelect={setSelectedChallenge}
              onComplete={(stats: Partial<GameStats>) => setGameStats((prev) => ({ ...prev, ...stats }))}
            />
          </TabsContent>

          <TabsContent value="typing">
            <TypingTest
              challenges={typingChallenges}
              selected={selectedTyping}
              onSelect={setSelectedTyping}
              isActive={isActive}
              setIsActive={setIsActive}
              currentIndex={currentIndex}
              setCurrentIndex={setCurrentIndex}
              userInput={userInput}
              setUserInput={setUserInput}
              wpm={wpm}
              setWpm={setWpm}
              accuracy={accuracy}
              setAccuracy={setAccuracy}
              timeLeft={timeLeft}
              setTimeLeft={setTimeLeft}
              handleFinish={handleFinish}
              handleInputChange={handleInputChange}
              startTest={startTest}
            />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

interface InteractiveCodingChallengesProps {
  challenges: FirebaseCodingChallenge[]
  selected: number
  onSelect: (index: number) => void
  onComplete: (stats: Partial<GameStats>) => void
}

function InteractiveCodingChallenges({ challenges, selected, onSelect, onComplete }: InteractiveCodingChallengesProps) {
  const [userCode, setUserCode] = useState("")
  const [testResults, setTestResults] = useState<TestResult[]>([])
  const [isRunning, setIsRunning] = useState(false)
  const [completedChallenges, setCompletedChallenges] = useState<Set<string>>(new Set())
  const [showSolution, setShowSolution] = useState(false)

  const challenge = challenges[selected]

  // Generate starter code from the solution
  const generateStarterCode = (solution: string, title: string) => {
    // Extract function name from solution
    const functionMatch = solution.match(/function\s+(\w+)\s*$$[^)]*$$/)
    if (functionMatch) {
      const functionName = functionMatch[1]
      const paramsMatch = solution.match(/function\s+\w+\s*$$([^)]*)$$/)
      const params = paramsMatch ? paramsMatch[1] : ""

      return `function ${functionName}(${params}) {
  // Write your code here
  // ${challenge.description}
  
}`
    }

    // Fallback starter code
    return `function solution() {
  // Write your code here
  // ${challenge.description}
  
}`
  }

  // Reset user code when challenge changes
  useEffect(() => {
    if (challenge) {
      const starterCode = generateStarterCode(challenge.code, challenge.title)
      setUserCode(starterCode)
      setTestResults([])
      setShowSolution(false)
    }
  }, [challenge])

  const runTests = async () => {
    if (!challenge) return

    setIsRunning(true)
    const results: TestResult[] = []

    try {
      // Create a function from user code
      const userFunction = new Function("return " + userCode)()

      for (const testCase of challenge.testCases) {
        try {
          // Parse the input (handle arrays, strings, numbers)
          let input
          try {
            input = JSON.parse(testCase.input)
          } catch {
            // If JSON.parse fails, try eval for more complex inputs
            input = eval(testCase.input)
          }

          const expected = testCase.expected

          // Run the user's function
          let actual
          if (Array.isArray(input)) {
            actual = userFunction(input)
          } else {
            actual = userFunction(input)
          }

          // Convert to string for comparison
          const actualStr = String(actual)
          const expectedStr = String(expected)

          results.push({
            passed: actualStr === expectedStr,
            input: testCase.input,
            expected: expectedStr,
            actual: actualStr,
          })
        } catch (error) {
          results.push({
            passed: false,
            input: testCase.input,
            expected: testCase.expected,
            actual: "Error",
            error: error instanceof Error ? error.message : "Unknown error",
          })
        }
      }
    } catch (error) {
      // If there's a syntax error in the user code
      results.push({
        passed: false,
        input: "Code compilation",
        expected: "Valid function",
        actual: "Syntax Error",
        error: error instanceof Error ? error.message : "Code compilation failed",
      })
    }

    setTestResults(results)
    setIsRunning(false)

    // Check if all tests passed
    const allPassed = results.length > 0 && results.every((result) => result.passed)
    if (allPassed) {
      setCompletedChallenges((prev) => new Set([...prev, challenge.id]))
      onComplete({
        challengesCompleted: completedChallenges.size + 1,
        streak: completedChallenges.size + 1,
      })
      toast.success("Challenge completed! 🎉", {
        description: "All test cases passed successfully!",
      })
    } else {
      toast.error("Some tests failed", {
        description: "Check the test results and try again.",
      })
    }
  }

  const resetCode = () => {
    if (challenge) {
      const starterCode = generateStarterCode(challenge.code, challenge.title)
      setUserCode(starterCode)
      setTestResults([])
    }
  }

  if (!challenges.length) {
    return (
      <div className="text-center py-8">
        <p className="text-muted-foreground">No coding challenges available.</p>
      </div>
    )
  }

  if (!challenge) {
    return (
      <div className="text-center py-8">
        <p className="text-muted-foreground">Loading challenge...</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Challenge Selection */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Select Challenge</h3>
        {challenges.map((challenge, index) => (
          <Card
            key={challenge.id}
            className={`cursor-pointer transition-all ${
              selected === index ? "ring-2 ring-primary" : ""
            } ${completedChallenges.has(challenge.id) ? "bg-green-50 dark:bg-green-950" : ""}`}
            onClick={() => onSelect(index)}
          >
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-medium text-sm">{challenge.title}</h4>
                {completedChallenges.has(challenge.id) && <CheckCircle className="h-4 w-4 text-green-500" />}
              </div>
              <Badge
                variant={
                  challenge.difficulty === "Easy"
                    ? "secondary"
                    : challenge.difficulty === "Medium"
                      ? "default"
                      : "destructive"
                }
                className="text-xs"
              >
                {challenge.difficulty}
              </Badge>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Challenge Area */}
      <div className="lg:col-span-2 space-y-6">
        {/* Challenge Description */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              {challenge.title}
              <Badge
                variant={
                  challenge.difficulty === "Easy"
                    ? "secondary"
                    : challenge.difficulty === "Medium"
                      ? "default"
                      : "destructive"
                }
              >
                {challenge.difficulty}
              </Badge>
            </CardTitle>
            <CardDescription>{challenge.description}</CardDescription>
          </CardHeader>
        </Card>

        {/* Code Editor */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              Code Editor
              <div className="flex space-x-2">
                <Button variant="outline" size="sm" onClick={resetCode}>
                  <RotateCcw className="h-4 w-4 mr-1" />
                  Reset
                </Button>
                <Button onClick={runTests} disabled={isRunning}>
                  <Play className="h-4 w-4 mr-1" />
                  {isRunning ? "Running..." : "Run Tests"}
                </Button>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Textarea
              value={userCode}
              onChange={(e) => setUserCode(e.target.value)}
              className="font-mono text-sm min-h-[200px] resize-none"
              placeholder="Write your code here..."
            />
          </CardContent>
        </Card>

        {/* Test Cases */}
        <Card>
          <CardHeader>
            <CardTitle>Test Cases</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {challenge.testCases.map((testCase, index) => {
                const result = testResults[index]
                return (
                  <div
                    key={index}
                    className={`p-3 rounded border ${
                      result
                        ? result.passed
                          ? "border-green-500 bg-green-50 dark:bg-green-950"
                          : "border-red-500 bg-red-50 dark:bg-red-950"
                        : "border-gray-200"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">Test Case {index + 1}</span>
                      {result && (
                        <div className="flex items-center">
                          {result.passed ? (
                            <CheckCircle className="h-4 w-4 text-green-500" />
                          ) : (
                            <X className="h-4 w-4 text-red-500" />
                          )}
                        </div>
                      )}
                    </div>
                    <div className="text-sm space-y-1">
                      <div>
                        <strong>Input:</strong> {testCase.input}
                      </div>
                      <div>
                        <strong>Expected:</strong> {testCase.expected}
                      </div>
                      {result && (
                        <>
                          <div>
                            <strong>Your Output:</strong> {result.actual}
                          </div>
                          {result.error && (
                            <div className="text-red-600 flex items-center">
                              <AlertCircle className="h-3 w-3 mr-1" />
                              <strong>Error:</strong> {result.error}
                            </div>
                          )}
                        </>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>

        {/* Solution */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              Solution
              <Button variant="outline" onClick={() => setShowSolution(!showSolution)}>
                {showSolution ? "Hide Solution" : "Show Solution"}
              </Button>
            </CardTitle>
          </CardHeader>
          {showSolution && (
            <CardContent>
              <pre className="bg-muted p-4 rounded-md text-sm overflow-x-auto whitespace-pre-wrap">
                <code>{challenge.code}</code>
              </pre>
            </CardContent>
          )}
        </Card>
      </div>
    </div>
  )
}

interface TypingTestProps {
  challenges: FirebaseTypingChallenge[]
  selected: number
  onSelect: (index: number) => void
  isActive: boolean
  setIsActive: (isActive: boolean) => void
  currentIndex: number
  setCurrentIndex: (currentIndex: number) => void
  userInput: string
  setUserInput: (userInput: string) => void
  wpm: number
  setWpm: (wpm: number) => void
  accuracy: number
  setAccuracy: (accuracy: number) => void
  timeLeft: number
  setTimeLeft: (timeLeft: number) => void
  handleFinish: () => void
  handleInputChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  startTest: () => void
}

function TypingTest({
  challenges,
  selected,
  onSelect,
  isActive,
  setIsActive,
  currentIndex,
  setCurrentIndex,
  userInput,
  setUserInput,
  wpm,
  setWpm,
  accuracy,
  setAccuracy,
  timeLeft,
  setTimeLeft,
  handleFinish,
  handleInputChange,
  startTest,
}: TypingTestProps) {
  const challenge = challenges[selected]
  const targetText = challenge.text

  if (!challenges.length) {
    return (
      <div className="text-center py-8">
        <p className="text-muted-foreground">No typing challenges available.</p>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {challenges.map((challenge, index) => (
          <Card
            key={challenge.id}
            className={`cursor-pointer transition-all ${selected === index ? "ring-2 ring-primary" : ""}`}
            onClick={() => onSelect(index)}
          >
            <CardContent className="p-4">
              <h4 className="font-medium mb-2">{challenge.title}</h4>
              <Badge
                variant={
                  challenge.difficulty === "Easy"
                    ? "secondary"
                    : challenge.difficulty === "Medium"
                      ? "default"
                      : "destructive"
                }
              >
                {challenge.difficulty}
              </Badge>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            Typing Test: {challenge.title}
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-1">
                <Timer className="h-4 w-4" />
                <span>{timeLeft}s</span>
              </div>
              <div className="flex items-center space-x-1">
                <Zap className="h-4 w-4" />
                <span>{wpm} WPM</span>
              </div>
              <div className="flex items-center space-x-1">
                <Target className="h-4 w-4" />
                <span>{accuracy}%</span>
              </div>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-muted p-4 rounded-md">
            <pre className="text-sm whitespace-pre-wrap font-mono">
              {targetText.split("").map((char, index) => (
                <span
                  key={index}
                  className={
                    index < currentIndex
                      ? userInput[index] === char
                        ? "bg-green-200 dark:bg-green-800"
                        : "bg-red-200 dark:bg-red-800"
                      : index === currentIndex
                        ? "bg-blue-200 dark:bg-blue-800"
                        : ""
                  }
                >
                  {char}
                </span>
              ))}
            </pre>
          </div>

          <Textarea
            value={userInput}
            onChange={handleInputChange}
            placeholder="Start typing here..."
            className="w-full h-32 font-mono text-sm resize-none"
            disabled={!isActive || timeLeft === 0}
          />

          <div className="flex space-x-2">
            <Button onClick={startTest} disabled={isActive}>
              <Play className="mr-2 h-4 w-4" />
              {isActive ? "Test Running..." : "Start Test"}
            </Button>
            <Button
              variant="outline"
              onClick={() => {
                setIsActive(false)
                setUserInput("")
                setCurrentIndex(0)
                setTimeLeft(60)
              }}
            >
              <RotateCcw className="mr-2 h-4 w-4" />
              Reset
            </Button>
          </div>

          <Progress value={((60 - timeLeft) / 60) * 100} className="w-full" />
        </CardContent>
      </Card>
    </div>
  )
}
