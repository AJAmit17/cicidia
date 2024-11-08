"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";

interface ReviewProps {
    image: string;
    name: string;
    userName: string;
    comment: string;
    rating: number;
}

const reviewList: ReviewProps[] = [
    {
        image: "https://github.com/shadcn.png",
        name: "Srinaivas KS",
        userName: "Product Manager",
        comment:
            "Wow NextJs  is awesome!. This template lets me change colors, fonts and images to match my brand identity.",
        rating: 5.0,
    },
    {
        image: "https://github.com/shadcn.png",
        name: "Sophia Collins",
        userName: "Cybersecurity Analyst",
        comment:
            "At MasterSolis InfoTech, we don't just implement security - we innovate it with cutting-edge solutions that stay ahead of tomorrow's threats.",
        rating: 4.8,
    },
    {
        image: "https://github.com/shadcn.png",
        name: "Adam Johnson",
        userName: "Chief Technology Officer",
        comment:
            "Proud to lead a team that consistently pushes technological boundaries while delivering state-of-the-art solutions across cloud, web, and IT services, transforming client visions into innovative realities.",
        rating: 4.9,
    },
    {
        image: "https://github.com/shadcn.png",
        name: "Ethan Parker",
        userName: "Data Scientist",
        comment: "Great work experience in MasterSolis as a Data Scientist",
        rating: 5.0,
    },
    {
        image: "https://github.com/shadcn.png",
        name: "Ava Mitchell",
        userName: "IT Project Manager",
        comment:
            "Leading MasterSolis's technological innovation isn't just about implementing cutting-edge solutions - it's about transforming possibilities into reality for every client we serve.",
        rating: 5.0,
    },
    {
        image: "https://github.com/shadcn.png",
        name: "Isabella Reed",
        userName: "DevOps Engineer",
        comment: "Great to work here!! Friendly environment",
        rating: 4.9,
    },
];

const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating - fullStars >= 0.5;

    return (
        <>
            {Array.from({ length: fullStars }).map((_, index) => (
                <Star key={index} className="size-4 fill-primary text-primar saturate-100" />
            ))}
            {hasHalfStar && (
                <Star key="half" className="size-4 fill-primary text-primary opacity-20" />
            )}
        </>
    );
};

export const TestimonialSection = () => {
    return (
        <section id="testimonials" className="container py-24 sm:py-32">
            <div className="text-center mb-8">
                <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
                    Testimonials
                </h2>
                <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
                    Hear What Our 1000+ Clients Say
                </h2>
            </div>

            <Carousel
                opts={{
                    align: "start",
                }}
                className="relative w-[80%] sm:w-[90%] lg:max-w-screen-xl mx-auto"
            >
                <CarouselContent>
                    {reviewList.map((review) => (
                        <CarouselItem
                            key={review.name}
                            className="md:basis-1/2 lg:basis-1/3"
                        >
                            <Card className="bg-muted/50 dark:bg-card">
                                <CardContent className="pt-6 pb-0">
                                    <div className="flex gap-1 pb-6">
                                        {renderStars(review.rating)}
                                    </div>
                                    {`"${review.comment}"`}
                                </CardContent>

                                <CardHeader>
                                    <div className="flex flex-row items-center gap-4">
                                        <Avatar>
                                            <AvatarImage
                                                src={review.image}
                                                alt={review.name}
                                            />
                                            <AvatarFallback>{review.name.charAt(0)}</AvatarFallback>
                                        </Avatar>

                                        <div className="flex flex-col">
                                            <CardTitle className="text-lg">{review.name}</CardTitle>
                                            <CardDescription>{review.userName}</CardDescription>
                                        </div>
                                    </div>
                                </CardHeader>
                            </Card>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </section>
    );
};
