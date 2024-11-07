import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { icons } from "lucide-react";
import { Icon } from "./ui/icon";

interface FeaturesProps {
    icon: string;
    title: string;
    description: string;
}

const featureList: FeaturesProps[] = [
    {
        icon: "TabletSmartphone",
        title: "Cloud Solutions",
        description:
            "We offer cloud storage solutions that are designed to meet your specific needs. With our state-of-the-art technology, you can rest assured that your data is safe and easily accessible.",
    },
    {
        icon: "BadgeCheck",
        title: "Web Development",
        description:
            "We specialize in creating responsive designs that are fully customizable to your unique business needs. Our team prioritizes a user-friendly interface for optimal customer engagement.",
    },
    {
        icon: "Goal",
        title: "IT Services",
        description:
            "Our proficient cuttingedge technology allows us to provide the most efficient services available, while our team of experienced professionals brings a wealth of knowledge and expertise to every project we undertake.",
    },
    {
        icon: "PictureInPicture",
        title: "Full Stack Training",
        description:
            "Our full stack training program offers expert training, giving you all the tools you need to become a successful developer. We provide a comprehensive curriculum that covers everything you need to know.",
    },
    {
        icon: "MousePointerClick",
        title: "Projects",
        description:
            "Looking for a team that can take on your final year project with confidence? Look no further. Our IT startup specializes in providing innovative solutions that will help take your project to a whole new level. Our team of experts is passionate about what they do, and we're ready to bring your vision to life.",
    },
    {
        icon: "Newspaper",
        title: "InternShips",
        description:
            "Our comprehensive internship program offers hands-on experience in the fast-paced world of technology. At our IT startup, we provide a supportive and stimulating environment where you’ll thrive and grow.",
    },
];

export const FeaturesSection = () => {
    return (
        <section id="features" className="container py-24 sm:py-32">
            <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
               Our Services
            </h2>

            <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
                What Makes Us Different
            </h2>

            <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
            MasterSolis InfoTech is your go-to IT consulting partner. With our range of services and expertise, we can help your business succeed in even the most challenging environments.
            </h3>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {featureList.map(({ icon, title, description }) => (
                    <div key={title}>
                        <Card className="h-full bg-background border-0 shadow-none">
                            <CardHeader className="flex justify-center items-center">
                                <div className="bg-primary/20 p-2 rounded-full ring-8 ring-primary/10 mb-4">
                                    <Icon
                                        name={icon as keyof typeof icons}
                                        size={24}
                                        color="hsl(var(--primary))"
                                        className="text-primary"
                                    />
                                </div>

                                <CardTitle>{title}</CardTitle>
                            </CardHeader>

                            <CardContent className="text-muted-foreground text-center">
                                {description}
                            </CardContent>
                        </Card>
                    </div>
                ))}
            </div>
        </section>
    );
};