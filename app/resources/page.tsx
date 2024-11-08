//tools and tips
'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Download } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Navbar } from '@/components/navbar'
import { FooterSection } from '@/components/footer'

const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
}

const staggerChildren = {
    animate: { transition: { staggerChildren: 0.1 } }
}

const resources = [
    {
        title: "Client Structure Pack",
        description: "Essential templates for organizing client information",
        date: "Jan 28 2024",
        size: "21 MB",
        category: "Organization",
    },
    {
        title: "IT Management Guide",
        description: "Comprehensive guide for managing IT infrastructure",
        date: "Jan 26 2024",
        size: "5 MB",
        category: "IT",
    },
    {
        title: "Marketing Strategy Toolkit",
        description: "Tools and templates for effective marketing campaigns",
        date: "Jan 24 2024",
        size: "15 MB",
        category: "Marketing",
    },
    {
        title: "Financial Planning Spreadsheet",
        description: "Detailed Excel template for financial forecasting",
        date: "Jan 22 2024",
        size: "8 MB",
        category: "Finance",
    },
    {
        title: "HR Policy Handbook",
        description: "Complete guide to creating company HR policies",
        date: "Jan 20 2024",
        size: "12 MB",
        category: "Human Resources",
    },
    {
        title: "Project Management Templates",
        description: "Set of templates for effective project management",
        date: "Jan 18 2024",
        size: "18 MB",
        category: "Project Management",
    },
]

export default function Component() {
    const [searchTerm, setSearchTerm] = useState('')
    const [filteredResources, setFilteredResources] = useState(resources)

    useEffect(() => {
        const results = resources.filter(resource =>
            resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
            resource.category.toLowerCase().includes(searchTerm.toLowerCase())
        )
        setFilteredResources(results)
    }, [searchTerm])

    return (
        <div className={`flex min-h-screen flex-col`}>
            <Navbar />

            <motion.section
                id="resources"
                className="container py-24"
                variants={staggerChildren}
                initial="initial"
                animate="animate"
            >
                <motion.h2
                    className="mb-12 text-center text-3xl font-bold"
                    variants={fadeIn}
                >
                    Featured Resources
                </motion.h2>
                <div className="mb-8">
                    <Input
                        type="search"
                        placeholder="Search resources..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="max-w-md mx-auto"
                    />
                </div>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    <AnimatePresence>
                        {filteredResources.map((resource) => (
                            <motion.div
                                key={resource.title}
                                variants={fadeIn}
                                layout
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                            >
                                <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                                    <CardHeader>
                                        <CardTitle>{resource.title}</CardTitle>
                                        <CardDescription>{resource.description}</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="flex items-center justify-between text-sm text-gray-500">
                                            <span>Updated: {resource.date}</span>
                                            <span>{resource.size}</span>
                                        </div>
                                        <div className="mt-4 flex justify-between">
                                            <Button variant="outline">
                                                <Download className="mr-2 h-4 w-4" />
                                                Download
                                            </Button>
                                            <Dialog>
                                                <DialogTrigger asChild>
                                                    <Button variant="ghost">Quick View</Button>
                                                </DialogTrigger>
                                                <DialogContent>
                                                    <DialogHeader>
                                                        <DialogTitle>{resource.title}</DialogTitle>
                                                        <DialogDescription>{resource.description}</DialogDescription>
                                                    </DialogHeader>
                                                    <div className="mt-4">
                                                        <p><strong>Category:</strong> {resource.category}</p>
                                                        <p><strong>Size:</strong> {resource.size}</p>
                                                        <p><strong>Last Updated:</strong> {resource.date}</p>
                                                    </div>
                                                    <Button className="mt-4">
                                                        <Download className="mr-2 h-4 w-4" />
                                                        Download Now
                                                    </Button>
                                                </DialogContent>
                                            </Dialog>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </motion.section>
            <FooterSection />
        </div >
    )
}