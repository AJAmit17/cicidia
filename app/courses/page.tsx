"use client"

import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { FooterSection } from '@/components/footer';
import { Navbar } from '@/components/navbar';
import Link from 'next/link';

// Sample course data
const courses = [
    {
        id: 1,
        title: 'DSA Using Python',
        description: 'This course can make you proficient in data structures and algorithms using python.',
        category: 'Computer Science',
        price: 4000,
        rating: 4.8,
        href: "/courseDetails"
    },
    {
        id: 2,
        title: 'React js with project',
        description: 'This is built for frontend proficients to deliver project using react framework.',
        category: 'Computer Science',
        price: 5500,
        rating: 4.2,
        href: "/courseDetails"
    },
    {
        id: 3,
        title: 'Front End - HTML, CSS, JS',
        description: 'This course is for learning basics of frontend domain to become ready on react or angular frameworks.',
        category: 'Computer Science',
        price: 2500,
        rating: 4.5,
        href: "/courseDetails"
    },
    {
        id: 4,
        title: 'Backend Python Django',
        description: 'This is built for backend proficients to deliver project using djangoframework.',
        category: 'Computer Science',
        price: 5500,
        rating: 4.7,
        href: "/courseDetails"
    },

];

const CourseListingPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filters, setFilters] = useState({
        category: [] as string[],
        rating: 4
    });

    const filteredCourses = courses.filter(course => {
        const categoryMatch = filters.category.length === 0 || filters.category.includes(course.category);
        const ratingMatch = course.rating >= filters.rating;
        const searchMatch = course.title.toLowerCase().includes(searchTerm.toLowerCase());
        return categoryMatch && ratingMatch && searchMatch;
    });

    return (
        <>
            <Navbar />
            <Card className="w-full max-w-4xl bg-card-background py-12 mx-12">
                <CardHeader>
                    <CardTitle>Course Listing</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="mb-6 flex items-center">
                        <label htmlFor="search" className="mr-4 font-medium">Search:</label>
                        <Input
                            id="search"
                            type="text"
                            placeholder="Search courses..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="flex-1"
                        />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {filteredCourses.map((course) => (
                            <Card key={course.id}>
                                <CardHeader>
                                    <CardTitle>{course.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="mb-4">{course.description}</p>
                                    <div className="flex justify-between items-center">
                                        <span className="font-medium text-gray-600">{course.category}</span>
                                        <span className="font-medium text-green-600">Rupees: {course.price.toFixed(2)}</span>
                                        <Link href={course.href} className="text-blue-600 hover:underline">View Details</Link>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </CardContent>
            </Card>
            <FooterSection />
        </>
    );
};

export default CourseListingPage;