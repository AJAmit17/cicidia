import Image from "next/image"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Navbar } from "@/components/navbar"
import { FooterSection } from "@/components/footer"
import Link from "next/link"

const courses = [
    {
        id: "ml-python",
        title: "AI, ML using Python",
        description: "Dive into the world of Artificial Intelligence and Machine Learning using Python.",
        image: "https://static.wixstatic.com/media/66b930_7bdee7b8ee174eb2b15a331727efe49e~mv2.jpg/v1/fit/w_800,h_600,al_c,q_90/file.webp",
        path: "/courses/ml-python",
        href: "/internshipDetails"
    },
    {
        id: "django-python",
        title: "Django Using Python",
        description: "Build powerful web applications with Django and Python.",
        image: "https://static.wixstatic.com/media/66b930_a95888e83d8c44daa226f19641bddc5f~mv2.png/v1/fit/w_800,h_600,al_c,q_90/file.webp",
        path: "/courses/django-python",
        href: "/internshipDetails"
    },
    {
        id: "frontend",
        title: "FrontEnd: HTML, CSS, R",
        description: "Master the art of creating beautiful and responsive user interfaces.",
        image: "https://static.wixstatic.com/media/66b930_5170d896143f46e2b597f8b040702509~mv2.jpg/v1/fit/w_800,h_600,al_c,q_90/file.webp",
        path: "/courses/frontend",
        href: "/internshipDetails"
    },

]

export default function Component() {
    return (
        <div className="container mx-auto">
            <Navbar />
            <h2 className="text-3xl font-bold text-center mb-3 py-12">Internships</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {courses.map((course) => (
                    <Card key={course.id} className="overflow-hidden">
                        <CardHeader className="p-0">
                            <Image
                                src={course.image}
                                alt={course.title}
                                width={300}
                                height={200}
                                className="w-full h-48 object-cover"
                            />
                        </CardHeader>
                        <CardContent className="p-6">
                            <CardTitle className="mb-2">{course.title}</CardTitle>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                {course.description}
                            </p>
                        </CardContent>
                        <CardFooter className="p-6 pt-0">
                            <Link href={course.href} className="w-full">
                                Learn More
                            </Link>
                        </CardFooter>
                    </Card>
                ))}
            </div>
            <FooterSection />
        </div>
    )
}