'use client'

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
    FacebookIcon,
    TwitterIcon,
    LinkedinIcon,
    Share2Icon,
    ChevronRight,
    Code,
    Calendar,
    Clock,
    Users,
} from "lucide-react"
import { Navbar } from "@/components/navbar"
import { FooterSection } from "@/components/footer"

export default function CoursePage({ params }: { params: { slug: string } }) {
    const courseData = {
        title: "Django Using Python",
        price: "Free",
        banner: "https://static.wixstatic.com/media/66b930_7bdee7b8ee174eb2b15a331727efe49e~mv2.jpg/v1/fit/w_800,h_600,al_c,q_90/file.webp",
        about: "Learn how to build powerful web applications using Django, a high-level Python web framework that encourages rapid development and clean, pragmatic design.",
        instructor: "Lalith Kumar",
        duration: "6 weeks",
        schedule: "Flexible",
        students: "500+",
        icon: <Code className="h-12 w-12 text-white" />,
        color: "from-green-500 to-teal-500",
        syllabus: [
            { week: 1, topic: "Introduction to Django and Python" },
            { week: 2, topic: "Models and Databases" },
            { week: 3, topic: "Views and URL Configurations" },
            { week: 4, topic: "Templates and Forms" },
            { week: 5, topic: "Authentication and Authorization" },
            { week: 6, topic: "RESTful API Development with Django REST Framework" },
        ]
    }

    const handleShare = (platform: string) => {
        const url = window.location.href
        const text = `Check out this course: ${courseData.title}`

        switch (platform) {
            case 'facebook':
                window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`)
                break
            case 'twitter':
                window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`)
                break
            case 'linkedin':
                window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${text}`)
                break
            default:
                navigator.clipboard.writeText(url)
        }
    }

    return (
        <div className="min-h-screen bg-background">
            <Navbar />
            <main className="container py-12">
                <div className="grid gap-6 lg:grid-cols-3">
                    <div className="lg:col-span-2 space-y-6">
                        <motion.h1
                            className="text-3xl font-bold"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            {courseData.title}
                        </motion.h1>
                        <motion.div
                            className="relative aspect-video overflow-hidden rounded-lg"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Image
                                src={courseData.banner}
                                alt={courseData.title}
                                fill
                                className="object-cover"
                            />
                            <div className={`absolute inset-0 bg-gradient-to-r ${courseData.color} opacity-75`} />
                            <div className="absolute inset-0 flex items-center justify-center">
                                {courseData.icon}
                            </div>
                        </motion.div>
                        <Tabs defaultValue="about" className="w-full">
                            <TabsList className="grid w-full grid-cols-3">
                                <TabsTrigger value="about">About</TabsTrigger>
                                <TabsTrigger value="syllabus">Syllabus</TabsTrigger>
                                <TabsTrigger value="instructor">Instructor</TabsTrigger>
                            </TabsList>
                            <TabsContent value="about">
                                <Card>
                                    <CardContent className="p-6">
                                        <p className="text-muted-foreground">{courseData.about}</p>
                                        <div className="mt-6 grid grid-cols-2 gap-4">
                                            <div className="flex items-center">
                                                <Calendar className="mr-2 h-4 w-4 opacity-70" />
                                                <span className="text-sm text-muted-foreground">{courseData.duration}</span>
                                            </div>
                                            <div className="flex items-center">
                                                <Clock className="mr-2 h-4 w-4 opacity-70" />
                                                <span className="text-sm text-muted-foreground">{courseData.schedule}</span>
                                            </div>
                                            <div className="flex items-center">
                                                <Users className="mr-2 h-4 w-4 opacity-70" />
                                                <span className="text-sm text-muted-foreground">{courseData.students} students</span>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </TabsContent>
                            <TabsContent value="syllabus">
                                <Card>
                                    <CardContent className="p-6">
                                        <ul className="space-y-4">
                                            {courseData.syllabus.map((week) => (
                                                <li key={week.week} className="flex items-center">
                                                    <span className="mr-2 flex h-7 w-7 items-center justify-center rounded-full bg-purple-100 text-purple-600">
                                                        {week.week}
                                                    </span>
                                                    <span>{week.topic}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                </Card>
                            </TabsContent>
                            <TabsContent value="instructor">
                                <Card>
                                    <CardContent className="p-6">
                                        <div className="flex items-center space-x-4">
                                            <Image
                                                src="/placeholder.svg"
                                                alt={courseData.instructor}
                                                width={64}
                                                height={64}
                                                className="rounded-full"
                                            />
                                            <div>
                                                <h3 className="text-lg font-semibold">{courseData.instructor}</h3>
                                                <p className="text-sm text-muted-foreground">Expert Django Developer</p>
                                            </div>
                                        </div>
                                        <p className="mt-4 text-muted-foreground">
                                            Lalith Kumar is an experienced Django developer with over 10 years of experience in web development.
                                            He has worked on numerous large-scale projects and is passionate about teaching Python and Django to aspiring developers.
                                        </p>
                                    </CardContent>
                                </Card>
                            </TabsContent>
                        </Tabs>
                    </div>
                    <div className="space-y-6">
                        <Card>
                            <CardContent className="p-6">
                                <h2 className="text-2xl font-bold mb-4">Price</h2>
                                <p className="text-3xl font-bold text-purple-500">{courseData.price}</p>
                                <Button className="w-full mt-4 group" size="lg">
                                    Enroll Now
                                    <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </Button>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="p-6">
                                <h2 className="text-xl font-bold mb-4">Share this course</h2>
                                <div className="flex gap-4">
                                    <Button
                                        variant="outline"
                                        size="icon"
                                        onClick={() => handleShare('facebook')}
                                    >
                                        <FacebookIcon className="h-4 w-4" />
                                    </Button>
                                    <Button
                                        variant="outline"
                                        size="icon"
                                        onClick={() => handleShare('twitter')}
                                    >
                                        <TwitterIcon className="h-4 w-4" />
                                    </Button>
                                    <Button
                                        variant="outline"
                                        size="icon"
                                        onClick={() => handleShare('linkedin')}
                                    >
                                        <LinkedinIcon className="h-4 w-4" />
                                    </Button>
                                    <Button
                                        variant="outline"
                                        size="icon"
                                        onClick={() => handleShare('copy')}
                                    >
                                        <Share2Icon className="h-4 w-4" />
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </main>
            <FooterSection />
        </div>
    )
}