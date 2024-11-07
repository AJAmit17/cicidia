'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { FooterSection } from '@/components/footer'
import { Navbar } from '@/components/navbar'

// Dummy blog data
const blogs = [
    {
        title: "Getting Started with Next.js",
        description: "Learn how to build modern web applications with Next.js",
        date: "2023-05-15",
        author: {
            name: "John Doe",
            avatar: "/placeholder.svg?height=40&width=40"
        },
        tags: ["Next.js", "React", "Web Development"]
    },
    {
        title: "The Power of Tailwind CSS",
        description: "Discover how Tailwind CSS can streamline your styling workflow",
        date: "2023-05-20",
        author: {
            name: "Jane Smith",
            avatar: "/placeholder.svg?height=40&width=40"
        },
        tags: ["CSS", "Tailwind", "Frontend"]
    },
    {
        title: "Mastering TypeScript",
        description: "Take your JavaScript skills to the next level with TypeScript",
        date: "2023-05-25",
        author: {
            name: "Bob Johnson",
            avatar: "/placeholder.svg?height=40&width=40"
        },
        tags: ["TypeScript", "JavaScript", "Programming"]
    },
    {
        title: "Introduction to GraphQL",
        description: "Learn how GraphQL can improve your API development process",
        date: "2023-05-30",
        author: {
            name: "Alice Brown",
            avatar: "/placeholder.svg?height=40&width=40"
        },
        tags: ["GraphQL", "API", "Backend"]
    },
    {
        title: "Responsive Design Techniques",
        description: "Create websites that look great on any device",
        date: "2023-06-05",
        author: {
            name: "Charlie Wilson",
            avatar: "/placeholder.svg?height=40&width=40"
        },
        tags: ["CSS", "Responsive", "Design"]
    },
    {
        title: "State Management with Redux",
        description: "Master state management in complex React applications",
        date: "2023-06-10",
        author: {
            name: "Eva Garcia",
            avatar: "/placeholder.svg?height=40&width=40"
        },
        tags: ["Redux", "React", "State Management"]
    }
]

export default function Component() {
    return (
        <>
            <Navbar />
            <div className="min-h-screen py-12">
                <header className="py-6 px-4 sm:px-6 lg:px-8">
                    <div className="container mx-auto">
                        <h1 className="text-3xl font-bold text-primary">Blogs</h1>
                    </div>
                </header>
                <main className="py-12 px-4 sm:px-6 lg:px-8">
                    <div className="container mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {blogs.map((blog, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <Card className="h-full flex flex-col bg-grey-900">
                                        <CardHeader>
                                            <CardTitle>{blog.title}</CardTitle>
                                            <CardDescription>{blog.description}</CardDescription>
                                        </CardHeader>
                                        <CardContent className="flex-grow">
                                            <p className="text-sm text-muted-foreground mb-4">{blog.date}</p>
                                            <div className="flex flex-wrap gap-2">
                                                {blog.tags.map((tag, tagIndex) => (
                                                    <Badge key={tagIndex} variant="secondary">{tag}</Badge>
                                                ))}
                                            </div>
                                        </CardContent>
                                        <CardFooter className="flex items-center space-x-4">
                                            <Avatar>
                                                <AvatarImage src={blog.author.avatar} alt={blog.author.name} />
                                                <AvatarFallback>{blog.author.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                                            </Avatar>
                                            <div className="text-sm font-medium">{blog.author.name}</div>
                                        </CardFooter>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </main>
            </div>
            <FooterSection />
        </>

    )
}