import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Briefcase, Users, Award, Rocket, Network, Book, Brain, FlaskConical } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { FooterSection } from "@/components/footer"

export default function Component() {
    return (
        <div className="container mx-auto">
            <Navbar />
            <h1 className="text-4xl font-bold text-center mb-12 px-4 py-12">Products</h1>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                    <CardHeader>
                        <Users className="w-8 h-8 mb-2" />
                        <CardTitle>Mentorship Platform</CardTitle>
                        <CardDescription>Connect with industry experts</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p>Our digital platform allows students to connect with industry experts for personalized mentorship, career guidance, and project advice.</p>
                        <Button className="mt-4">Find a Mentor</Button>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <Briefcase className="w-8 h-8 mb-2" />
                        <CardTitle>Internship and Co-op Portal</CardTitle>
                        <CardDescription>Find opportunities with partner corporations</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p>Our service connects students to internships and cooperative education opportunities with our partner corporations.</p>
                        <Button className="mt-4">Explore Opportunities</Button>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <Book className="w-8 h-8 mb-2" />
                        <CardTitle>Corporate Training Modules</CardTitle>
                        <CardDescription>Learn industry-relevant skills</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p>Access online courses designed by corporate professionals, covering skills required in various industries such as data analytics, software development, and project management.</p>
                        <Button className="mt-4">Browse Courses</Button>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <Rocket className="w-8 h-8 mb-2" />
                        <CardTitle>Industry Projects and Hackathons</CardTitle>
                        <CardDescription>Gain practical experience</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p>Participate in real-world projects or hackathons to gain practical experience, supervised by corporate mentors.</p>
                        <Button className="mt-4">Join a Project</Button>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <Network className="w-8 h-8 mb-2" />
                        <CardTitle>Professional Networking App</CardTitle>
                        <CardDescription>Connect with professionals</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p>Our app is tailored to connect students with professionals for networking, job shadowing opportunities, and knowledge-sharing events.</p>
                        <Button className="mt-4">Start Networking</Button>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <Network className="w-8 h-8 mb-2" />
                        <CardTitle>Certification Programs</CardTitle>
                        <CardDescription>Get industry-recognized certifications</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p>Courses designed to provide certifications in industry-relevant technologies and methodologies, accredited by partner companies.</p>
                        <Button className="mt-4">Explore Certifications</Button>
                    </CardContent>
                </Card>
            </div>

            <div className="mt-12">
                <h2 className="text-2xl font-bold mb-6">Additional Services</h2>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <Card>
                        <CardHeader>
                            <Award className="w-8 h-8 mb-2" />
                            <CardTitle>Job Readiness Bootcamps</CardTitle>
                            <CardDescription>Prepare for your career</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p>Intensive training camps focusing on interview preparation, resume building, soft skills, and career development.</p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <Brain className="w-8 h-8 mb-2" />
                            <CardTitle>AI-Powered Skill Assessment</CardTitle>
                            <CardDescription>Evaluate and improve your skills</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p>Our tool evaluates students' skills based on industry benchmarks and provides personalized development plans.</p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <Network className="w-8 h-8 mb-2" />
                            <CardTitle>Career Simulation Labs</CardTitle>
                            <CardDescription>Experience different roles</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p>Virtual simulation tools that let students experience a day in the life of different roles to understand job expectations.</p>
                        </CardContent>
                    </Card>
                </div>
            </div>

            <Accordion type="single" collapsible className="mt-12">
                <AccordionItem value="research">
                    <AccordionTrigger>
                        <div className="flex items-center">
                            <FlaskConical className="w-6 h-6 mr-2" />
                            Corporate-Sponsored Research Programs
                        </div>
                    </AccordionTrigger>
                    <AccordionContent>
                        Participate in collaborative research initiatives where you can work on projects funded by companies and receive mentorship from industry experts.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>

            <Card className="mt-12">
                <CardHeader>
                    <CardTitle>Join Our Platform Today</CardTitle>
                    <CardDescription>Start your journey towards a successful career</CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="mb-4">Our Education-Industry Collaboration Platform offers a comprehensive suite of tools and opportunities to help you succeed in your career. From personalized mentorship to hands-on projects, we're here to support your professional growth.</p>
                    <Button>Sign Up Now</Button>
                </CardContent>
            </Card>
            <FooterSection />
        </div>
    )
}