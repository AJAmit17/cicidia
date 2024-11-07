"use client";

import { useState, useEffect } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ThumbsUp, MessageSquare, Search } from "lucide-react";
import { motion } from "framer-motion";
import { FooterSection } from "@/components/footer";
import { Navbar } from "@/components/navbar";

export default function Component() {
    const [mounted, setMounted] = useState(false);

    // Avoid SSR issues by checking if component has mounted
    useEffect(() => setMounted(true), []);

    if (!mounted) return null;

    return (
        <>
            <Navbar />
            <div
                className="min-h-screen w-full transition-colors duration-500 bg-background text-primary"
                style={{
                    backgroundColor: "var(--background)",
                    color: "var(--text)"
                }}
            >
                <div className="max-w-7xl mx-auto px-4 py-12">
                    <div className="flex justify-between items-center mb-8">
                        <h1
                            className="text-3xl font-bold bg-clip-text text-transparent"
                            style={{
                                backgroundImage: "linear-gradient(to right, #ffffff, #b794f4)"
                            }}
                        >
                            Groups
                        </h1>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="md:col-span-2 space-y-8">
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5" style={{ color: "var(--primary)" }} />
                                <Input
                                    className="pl-10 border-opacity-30 placeholder-opacity-70"
                                    placeholder="Search..."
                                    style={{
                                        backgroundColor: "rgba(0, 0, 0, 0.1)",
                                        borderColor: "var(--primary)",
                                        color: "var(--text)"
                                    }}
                                />
                            </div>

                            {/* Posts */}
                            {[1, 2, 3].map((post) => (
                                <motion.div key={post} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: post * 0.1 }}>
                                    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)", borderColor: "var(--primary)" }}>
                                        <CardHeader className="flex flex-row items-center space-x-4">
                                            <Avatar>
                                                <AvatarImage src={`https://i.pravatar.cc/150?img=${post}`} />
                                                <AvatarFallback>U{post}</AvatarFallback>
                                            </Avatar>
                                            <div className="flex-1">
                                                <h3 className="text-lg font-semibold" style={{ color: "var(--text)" }}>User Group {post}</h3>
                                                <p className="text-sm" style={{ color: "var(--primary)" }}>Technology</p>
                                            </div>
                                            <Button className="transition-all duration-300 bg-violet-900" >
                                                Join
                                            </Button>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="mb-4" style={{ color: "var(--text)" }}>
                                                This is a group for tech enthusiasts. Join us to share your thoughts and stay updated with the latest trends!
                                            </p>
                                            <div className="flex items-center space-x-4">
                                                <button className="flex items-center space-x-1 text-sm transition-colors" style={{ color: "var(--primary)" }}>
                                                    <ThumbsUp className="h-4 w-4" />
                                                    <span>Like</span>
                                                </button>
                                                <button className="flex items-center space-x-1 text-sm transition-colors" style={{ color: "var(--primary)" }}>
                                                    <MessageSquare className="h-4 w-4" />
                                                    <span>Comment</span>
                                                </button>
                                            </div>
                                            <div className="mt-4">
                                                <Input placeholder="Write a comment..." style={{ backgroundColor: "rgba(0, 0, 0, 0.3)", borderColor: "var(--primary)", color: "var(--text)" }} />
                                            </div>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>

                        <div className="space-y-8">
                            <Card style={{ backgroundColor: "rgba(0, 0, 0, 0.2)", borderColor: "var(--primary)" }}>
                                <CardHeader>
                                    <h3 className="text-xl font-bold bg-clip-text text-primary" style={{ backgroundImage: "linear-gradient(to right, var(--primary), #b794f4)" }}>
                                        Suggested Groups
                                    </h3>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    {[1, 2, 3].map((group) => (
                                        <motion.div key={group} className="flex items-center space-x-4" whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                                            <Avatar>
                                                <AvatarImage src={`https://i.pravatar.cc/150?img=${group + 10}`} />
                                                <AvatarFallback>G{group}</AvatarFallback>
                                            </Avatar>
                                            <div className="flex-1">
                                                <h4 className="text-sm font-semibold" style={{ color: "var(--text)" }}>Tech Innovators {group}</h4>
                                                <p className="text-xs" style={{ color: "var(--primary)" }}>Technology</p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
            <FooterSection />
        </>
    );
}
