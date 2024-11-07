"use client"

import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Select } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { FooterSection } from '@/components/footer';
import { Navbar } from '@/components/navbar';

// Sample course data
const courses = [
    {
        id: 1,
        title: 'Introduction to Computer Science',
        description: 'Learn the fundamentals of computer science and programming.',
        category: 'Computer Science',
        price: 99.99,
        rating: 4.8
    },
    {
        id: 2,
        title: 'Business Accounting Essentials',
        description: 'Gain a solid understanding of basic accounting principles.',
        category: 'Business',
        price: 79.99,
        rating: 4.2
    },
    {
        id: 3,
        title: 'Creative Writing Workshop',
        description: 'Develop your creative writing skills in this interactive workshop.',
        category: 'Arts',
        price: 59.99,
        rating: 4.5
    },
    {
        id: 4,
        title: 'Introduction to Graphic Design',
        description: 'Explore the fundamentals of graphic design and visual communication.',
        category: 'Design',
        price: 89.99,
        rating: 4.7
    },
    {
        id: 5,
        title: 'Data Analysis with Python',
        description: 'Learn how to analyze and visualize data using Python.',
        category: 'Data Science',
        price: 119.99,
        rating: 4.9
    }
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
                    <div className="mb-6 grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div>
                            <label className="block font-medium mb-2">Category</label>
                            <Checkbox value="Computer Science">Computer Science</Checkbox>
                            <Checkbox value="Business">Business</Checkbox>
                            <Checkbox value="Arts">Arts</Checkbox>
                            <Checkbox value="Design">Design</Checkbox>
                            <Checkbox value="Data Science">Data Science</Checkbox>
                        </div>
                        <div>
                            <label htmlFor="rating" className="block font-medium mb-2">Minimum Rating</label>
                            <Select
                                value={filters.rating.toString()}
                                onValueChange={(value) => setFilters((prev) => ({ ...prev, rating: parseFloat(value) }))}
                            >
                                <option value="1">1 star</option>
                                <option value="2">2 stars</option>
                                <option value="3">3 stars</option>
                                <option value="4">4 stars</option>
                                <option value="5">5 stars</option>
                            </Select>
                        </div>
                        <div className="col-span-2 flex justify-end">
                            <Button>Apply Filters</Button>
                        </div>
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
                                        <span className="font-medium text-green-600">${course.price.toFixed(2)}</span>
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