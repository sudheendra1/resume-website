// "use client"

// import type React from "react"

// import { useState, useRef, useEffect } from "react"
// import { motion, useInView } from "framer-motion"
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Textarea } from "@/components/ui/textarea"
// import { toast } from "sonner"
// import { Mail, MapPin, Phone } from "lucide-react"

// interface FormData {
//   name: string
//   email: string
//   subject: string
//   message: string
// }

// export default function Contact() {
//   const [formData, setFormData] = useState<FormData>({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//   })
//   const [isSubmitting, setIsSubmitting] = useState(false)
//   const [mounted, setMounted] = useState(false)
//   const ref = useRef(null)
//   const isInView = useInView(ref, { once: true, margin: "-100px" })

//   useEffect(() => {
//     setMounted(true)
//   }, [])

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target
//     setFormData((prev) => ({ ...prev, [name]: value }))
//   }

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault()
//     setIsSubmitting(true)

//     try {
//       // Simulate form submission
//       await new Promise((resolve) => setTimeout(resolve, 1500))

//       toast.success("Message sent!", {
//         description: "Thank you for your message. I'll get back to you soon.",
//       })

//       setFormData({
//         name: "",
//         email: "",
//         subject: "",
//         message: "",
//       })
//     } catch (error) {
//       toast.error("Failed to send message", {
//         description: "Please try again later or contact me directly.",
//       })
//     } finally {
//       setIsSubmitting(false)
//     }
//   }

//   if (!mounted) {
//     return (
//       <section id="contact" className="py-20 bg-muted/30">
//         <div className="container px-4">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
//             <p className="text-muted-foreground max-w-2xl mx-auto">
//               Have a project in mind or want to discuss potential opportunities? Feel free to reach out!
//             </p>
//           </div>

//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//             <div className="lg:col-span-2">
//               <Card>
//                 <CardHeader>
//                   <CardTitle>Send Me a Message</CardTitle>
//                   <CardDescription>
//                     Fill out the form below and I'll get back to you as soon as possible.
//                   </CardDescription>
//                 </CardHeader>
//                 <CardContent>
//                   <form className="space-y-4">
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                       <div className="space-y-2">
//                         <label htmlFor="name" className="text-sm font-medium">
//                           Your Name
//                         </label>
//                         <Input id="name" name="name" placeholder="John Doe" />
//                       </div>
//                       <div className="space-y-2">
//                         <label htmlFor="email" className="text-sm font-medium">
//                           Your Email
//                         </label>
//                         <Input id="email" name="email" type="email" placeholder="john@example.com" />
//                       </div>
//                     </div>
//                     <div className="space-y-2">
//                       <label htmlFor="subject" className="text-sm font-medium">
//                         Subject
//                       </label>
//                       <Input id="subject" name="subject" placeholder="Project Inquiry" />
//                     </div>
//                     <div className="space-y-2">
//                       <label htmlFor="message" className="text-sm font-medium">
//                         Message
//                       </label>
//                       <Textarea
//                         id="message"
//                         name="message"
//                         placeholder="Tell me about your project or inquiry..."
//                         rows={5}
//                       />
//                     </div>
//                     <Button type="submit" className="w-full">
//                       Send Message
//                     </Button>
//                   </form>
//                 </CardContent>
//               </Card>
//             </div>

//             <div>
//               <Card className="h-full">
//                 <CardHeader>
//                   <CardTitle>Contact Information</CardTitle>
//                   <CardDescription>Feel free to reach out through any of these channels.</CardDescription>
//                 </CardHeader>
//                 <CardContent className="space-y-6">
//                   <div className="flex items-start space-x-4">
//                     <Mail className="h-5 w-5 mt-0.5 text-muted-foreground" />
//                     <div>
//                       <h3 className="font-medium">Email</h3>
//                       <p className="text-sm text-muted-foreground">john.doe@example.com</p>
//                     </div>
//                   </div>
//                   <div className="flex items-start space-x-4">
//                     <Phone className="h-5 w-5 mt-0.5 text-muted-foreground" />
//                     <div>
//                       <h3 className="font-medium">Phone</h3>
//                       <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
//                     </div>
//                   </div>
//                   <div className="flex items-start space-x-4">
//                     <MapPin className="h-5 w-5 mt-0.5 text-muted-foreground" />
//                     <div>
//                       <h3 className="font-medium">Location</h3>
//                       <p className="text-sm text-muted-foreground">San Francisco, CA</p>
//                     </div>
//                   </div>

//                   <div className="pt-4">
//                     <h3 className="font-medium mb-4">Connect with me</h3>
//                     <div className="grid grid-cols-3 gap-2">
//                       {["GitHub", "LinkedIn", "Twitter"].map((platform) => (
//                         <Button key={platform} variant="outline" size="sm" className="w-full">
//                           {platform}
//                         </Button>
//                       ))}
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>
//             </div>
//           </div>
//         </div>
//       </section>
//     )
//   }

//   return (
//     <section id="contact" className="py-20 bg-muted/30">
//       <div className="container px-4">
//         <motion.div
//           ref={ref}
//           initial={{ opacity: 0, y: 20 }}
//           animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-12"
//         >
//           <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
//           <p className="text-muted-foreground max-w-2xl mx-auto">
//             Have a project in mind or want to discuss potential opportunities? Feel free to reach out!
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           <motion.div
//             initial={{ opacity: 0, x: -20 }}
//             animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//             className="lg:col-span-2"
//           >
//             <Card>
//               <CardHeader>
//                 <CardTitle>Send Me a Message</CardTitle>
//                 <CardDescription>Fill out the form below and I'll get back to you as soon as possible.</CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <form onSubmit={handleSubmit} className="space-y-4">
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                     <div className="space-y-2">
//                       <label htmlFor="name" className="text-sm font-medium">
//                         Your Name
//                       </label>
//                       <Input
//                         id="name"
//                         name="name"
//                         value={formData.name}
//                         onChange={handleChange}
//                         placeholder="John Doe"
//                         required
//                       />
//                     </div>
//                     <div className="space-y-2">
//                       <label htmlFor="email" className="text-sm font-medium">
//                         Your Email
//                       </label>
//                       <Input
//                         id="email"
//                         name="email"
//                         type="email"
//                         value={formData.email}
//                         onChange={handleChange}
//                         placeholder="john@example.com"
//                         required
//                       />
//                     </div>
//                   </div>
//                   <div className="space-y-2">
//                     <label htmlFor="subject" className="text-sm font-medium">
//                       Subject
//                     </label>
//                     <Input
//                       id="subject"
//                       name="subject"
//                       value={formData.subject}
//                       onChange={handleChange}
//                       placeholder="Project Inquiry"
//                       required
//                     />
//                   </div>
//                   <div className="space-y-2">
//                     <label htmlFor="message" className="text-sm font-medium">
//                       Message
//                     </label>
//                     <Textarea
//                       id="message"
//                       name="message"
//                       value={formData.message}
//                       onChange={handleChange}
//                       placeholder="Tell me about your project or inquiry..."
//                       rows={5}
//                       required
//                     />
//                   </div>
//                   <Button type="submit" className="w-full" disabled={isSubmitting}>
//                     {isSubmitting ? "Sending..." : "Send Message"}
//                   </Button>
//                 </form>
//               </CardContent>
//             </Card>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, x: 20 }}
//             animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
//             transition={{ duration: 0.5, delay: 0.4 }}
//           >
//             <Card className="h-full">
//               <CardHeader>
//                 <CardTitle>Contact Information</CardTitle>
//                 <CardDescription>Feel free to reach out through any of these channels.</CardDescription>
//               </CardHeader>
//               <CardContent className="space-y-6">
//                 <div className="flex items-start space-x-4">
//                   <Mail className="h-5 w-5 mt-0.5 text-muted-foreground" />
//                   <div>
//                     <h3 className="font-medium">Email</h3>
//                     <p className="text-sm text-muted-foreground">john.doe@example.com</p>
//                   </div>
//                 </div>
//                 <div className="flex items-start space-x-4">
//                   <Phone className="h-5 w-5 mt-0.5 text-muted-foreground" />
//                   <div>
//                     <h3 className="font-medium">Phone</h3>
//                     <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
//                   </div>
//                 </div>
//                 <div className="flex items-start space-x-4">
//                   <MapPin className="h-5 w-5 mt-0.5 text-muted-foreground" />
//                   <div>
//                     <h3 className="font-medium">Location</h3>
//                     <p className="text-sm text-muted-foreground">San Francisco, CA</p>
//                   </div>
//                 </div>

//                 <div className="pt-4">
//                   <h3 className="font-medium mb-4">Connect with me</h3>
//                   <div className="grid grid-cols-3 gap-2">
//                     {["GitHub", "LinkedIn", "Twitter"].map((platform) => (
//                       <Button key={platform} variant="outline" size="sm" className="w-full">
//                         {platform}
//                       </Button>
//                     ))}
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   )
// }


"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"
import { Mail, MapPin, Phone } from "lucide-react"
import { contactService } from "@/lib/firebase-service"

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [mounted, setMounted] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const messageId = await contactService.create({
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      })

      if (messageId) {
        toast.success("Message sent!", {
          description: "Thank you for your message. I'll get back to you soon.",
        })

        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        })
      } else {
        throw new Error("Failed to save message")
      }
    } catch (error) {
      console.error("Error sending message:", error)
      toast.error("Failed to send message", {
        description: "Please try again later or contact me directly.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  // if (!mounted) {
  //   return (
  //     <section id="contact" className="py-20 bg-muted/30">
  //       <div className="container px-4">
  //         <div className="text-center mb-12">
  //           <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
  //           <p className="text-muted-foreground max-w-2xl mx-auto">
  //             Have a project in mind or want to discuss potential opportunities? Feel free to reach out!
  //           </p>
  //         </div>

  //         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
  //           <div className="lg:col-span-2">
  //             <Card>
  //               <CardHeader>
  //                 <CardTitle>Send Me a Message</CardTitle>
  //                 <CardDescription>
  //                   Fill out the form below and I'll get back to you as soon as possible.
  //                 </CardDescription>
  //               </CardHeader>
  //               <CardContent>
  //                 <form className="space-y-4">
  //                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
  //                     <div className="space-y-2">
  //                       <label htmlFor="name" className="text-sm font-medium">
  //                         Your Name
  //                       </label>
  //                       <Input id="name" name="name" placeholder="John Doe" />
  //                     </div>
  //                     <div className="space-y-2">
  //                       <label htmlFor="email" className="text-sm font-medium">
  //                         Your Email
  //                       </label>
  //                       <Input id="email" name="email" type="email" placeholder="john@example.com" />
  //                     </div>
  //                   </div>
  //                   <div className="space-y-2">
  //                     <label htmlFor="subject" className="text-sm font-medium">
  //                       Subject
  //                     </label>
  //                     <Input id="subject" name="subject" placeholder="Project Inquiry" />
  //                   </div>
  //                   <div className="space-y-2">
  //                     <label htmlFor="message" className="text-sm font-medium">
  //                       Message
  //                     </label>
  //                     <Textarea
  //                       id="message"
  //                       name="message"
  //                       placeholder="Tell me about your project or inquiry..."
  //                       rows={5}
  //                     />
  //                   </div>
  //                   <Button type="submit" className="w-full">
  //                     Send Message
  //                   </Button>
  //                 </form>
  //               </CardContent>
  //             </Card>
  //           </div>

  //           <div>
  //             <Card className="h-full">
  //               <CardHeader>
  //                 <CardTitle>Contact Information</CardTitle>
  //                 <CardDescription>Feel free to reach out through any of these channels.</CardDescription>
  //               </CardHeader>
  //               <CardContent className="space-y-6">
  //                 <div className="flex items-start space-x-4">
  //                   <Mail className="h-5 w-5 mt-0.5 text-muted-foreground" />
  //                   <div>
  //                     <h3 className="font-medium">Email</h3>
  //                     <p className="text-sm text-muted-foreground">john.doe@example.com</p>
  //                   </div>
  //                 </div>
  //                 <div className="flex items-start space-x-4">
  //                   <Phone className="h-5 w-5 mt-0.5 text-muted-foreground" />
  //                   <div>
  //                     <h3 className="font-medium">Phone</h3>
  //                     <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
  //                   </div>
  //                 </div>
  //                 <div className="flex items-start space-x-4">
  //                   <MapPin className="h-5 w-5 mt-0.5 text-muted-foreground" />
  //                   <div>
  //                     <h3 className="font-medium">Location</h3>
  //                     <p className="text-sm text-muted-foreground">San Francisco, CA</p>
  //                   </div>
  //                 </div>

  //                 <div className="pt-4">
  //                   <h3 className="font-medium mb-4">Connect with me</h3>
  //                   <div className="grid grid-cols-3 gap-2">
  //                     {["GitHub", "LinkedIn", "Twitter"].map((platform) => (
  //                       <Button key={platform} variant="outline" size="sm" className="w-full bg-transparent">
  //                         {platform}
  //                       </Button>
  //                     ))}
  //                   </div>
  //                 </div>
  //               </CardContent>
  //             </Card>
  //           </div>
  //         </div>
  //       </div>
  //     </section>
  //   )
  // }

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to discuss potential opportunities? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <Card>
              <CardHeader>
                <CardTitle>Send Me a Message</CardTitle>
                <CardDescription>Fill out the form below and I'll get back to you as soon as possible.</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Your Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Your Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Project Inquiry"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project or inquiry..."
                      rows={5}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>Feel free to reach out through any of these channels.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Mail className="h-5 w-5 mt-0.5 text-muted-foreground" />
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-sm text-muted-foreground">sudheendra579@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="h-5 w-5 mt-0.5 text-muted-foreground" />
                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <p className="text-sm text-muted-foreground">+91 8073085483</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <MapPin className="h-5 w-5 mt-0.5 text-muted-foreground" />
                  <div>
                    <h3 className="font-medium">Location</h3>
                    <p className="text-sm text-muted-foreground">India</p>
                  </div>
                </div>

                <div className="pt-4">
                  <h3 className="font-medium mb-4">Connect with me</h3>
                  <div className="grid grid-cols-3 gap-2">
                    {["GitHub", "LinkedIn", "Twitter"].map((platform) => (
                      <Button key={platform} variant="outline" size="sm" className="w-full bg-transparent">
                        {platform}
                      </Button>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
