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
    Briefcase,
    Calendar,
    Clock,
    Users,
} from "lucide-react"
import { Navbar } from "@/components/navbar"
import { FooterSection } from "@/components/footer"

export default function InternshipPage({ params }: { params: { slug: string } }) {
    const internshipData = {
        title: "Frontend Development Internship",
        company: "Tech Innovators Inc.",
        stipend: "Paid",
        banner: "https://static.wixstatic.com/media/66b930_7bdee7b8ee174eb2b15a331727efe49e~mv2.jpg/v1/fit/w_800,h_600,al_c,q_90/file.webp",
        about: "Gain real-world experience in frontend development using the latest technologies in a dynamic environment. Collaborate with a team to develop responsive and interactive web applications.",
        duration: "3 months",
        schedule: "Flexible",
        applicants: "200+",
        skills: ["JavaScript", "React", "CSS", "Git"],
        icon: <Briefcase className="h-12 w-12 text-white" />,
        color: "from-blue-500 to-indigo-500",
        responsibilities: [
            "Develop and maintain web applications",
            "Collaborate with backend developers",
            "Implement responsive designs",
            "Optimize web pages for performance",
        ],
    }

    const handleShare = (platform: string) => {
        const url = window.location.href
        const text = `Check out this internship: ${internshipData.title} at ${internshipData.company}`

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
                            {internshipData.title}
                        </motion.h1>
                        <motion.div
                            className="relative aspect-video overflow-hidden rounded-lg"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Image
                                src={internshipData.banner}
                                alt={internshipData.title}
                                fill
                                className="object-cover"
                            />
                            <div className={`absolute inset-0 bg-gradient-to-r ${internshipData.color} opacity-75`} />
                            <div className="absolute inset-0 flex items-center justify-center">
                                {internshipData.icon}
                            </div>
                        </motion.div>
                        <Tabs defaultValue="about" className="w-full">
                            <TabsList className="grid w-full grid-cols-3">
                                <TabsTrigger value="about">About</TabsTrigger>
                                <TabsTrigger value="responsibilities">Responsibilities</TabsTrigger>
                                <TabsTrigger value="company">Company</TabsTrigger>
                            </TabsList>
                            <TabsContent value="about">
                                <Card>
                                    <CardContent className="p-6">
                                        <p className="text-muted-foreground">{internshipData.about}</p>
                                        <div className="mt-6 grid grid-cols-2 gap-4">
                                            <div className="flex items-center">
                                                <Calendar className="mr-2 h-4 w-4 opacity-70" />
                                                <span className="text-sm text-muted-foreground">{internshipData.duration}</span>
                                            </div>
                                            <div className="flex items-center">
                                                <Clock className="mr-2 h-4 w-4 opacity-70" />
                                                <span className="text-sm text-muted-foreground">{internshipData.schedule}</span>
                                            </div>
                                            <div className="flex items-center">
                                                <Users className="mr-2 h-4 w-4 opacity-70" />
                                                <span className="text-sm text-muted-foreground">{internshipData.applicants} applicants</span>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </TabsContent>
                            <TabsContent value="responsibilities">
                                <Card>
                                    <CardContent className="p-6">
                                        <ul className="space-y-4">
                                            {internshipData.responsibilities.map((responsibility, index) => (
                                                <li key={index} className="flex items-center">
                                                    <span className="mr-2 flex h-7 w-7 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                                                        {index + 1}
                                                    </span>
                                                    <span>{responsibility}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                </Card>
                            </TabsContent>
                            <TabsContent value="company">
                                <Card>
                                    <CardContent className="p-6">
                                        <h3 className="text-lg font-semibold">{internshipData.company}</h3>
                                        <p className="mt-4 text-muted-foreground">
                                            Tech Innovators Inc. is a leading software development firm focused on innovation in web and mobile applications. We value learning, teamwork, and growth.
                                        </p>
                                        <h4 className="mt-6 text-md font-semibold">Required Skills</h4>
                                        <ul className="mt-2 space-y-1">
                                            {internshipData.skills.map((skill) => (
                                                <li key={skill} className="text-sm text-muted-foreground">- {skill}</li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                </Card>
                            </TabsContent>
                        </Tabs>
                    </div>
                    <div className="space-y-6">
                        <Card>
                            <CardContent className="p-6">
                                <h2 className="text-2xl font-bold mb-4">Stipend</h2>
                                <p className="text-3xl font-bold text-blue-500">{internshipData.stipend}</p>
                                <Button className="w-full mt-4 group" size="lg">
                                    Apply Now
                                    <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </Button>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="p-6">
                                <h2 className="text-xl font-bold mb-4">Share this internship</h2>
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
