
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardFooter,
} from "@/components/ui/card";
import { GithubIcon, LinkedinIcon, XIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
interface TeamProps {
    imageUrl: string;
    firstName: string;
    lastName: string;
    positions: string[];
    socialNetworks: SocialNetworkProps[];
}
interface SocialNetworkProps {
    name: string;
    url: string;
}
export const TeamSection = () => {
    const teamList: TeamProps[] = [
        {
            imageUrl: "https://static.wixstatic.com/media/4349f2_4cc55d02745942afa8fa67c38acc0097~mv2.jpg/v1/fill/w_605,h_444,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Charan.jpg",
            firstName: "Charan Vishnu",
            lastName: "Kathari",
            positions: ["Managing Director"],
            socialNetworks: [
                {
                    name: "LinkedIn",
                    url: "https://www.linkedin.com/in/leopoldo-miranda/",
                },
                {
                    name: "Github",
                    url: "https://github.com/leoMirandaa",
                },
                {
                    name: "X",
                    url: "https://x.com/leo_mirand4",
                },
            ],
        },
        {
            imageUrl:
                "https://static.wixstatic.com/media/66b930_3a857ce875814ac59a2d9ab4d7576737~mv2.png/v1/fill/w_605,h_444,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/arp_PNG.png",
            firstName: "Reddy Prasad",
            lastName: "A",
            positions: ["Corporate Relations Manager"],
            socialNetworks: [
                {
                    name: "LinkedIn",
                    url: "https://www.linkedin.com/in/leopoldo-miranda/",
                },
                {
                    name: "X",
                    url: "https://x.com/leo_mirand4",
                },
            ],
        }
    ];
    const socialIcon = (socialName: string) => {
        switch (socialName) {
            case "LinkedIn":
                return <LinkedinIcon />;
            case "Github":
                return <GithubIcon />;
            case "X":
                return <XIcon />;
        }
    };

    return (
        <section id="team" className="container lg:w-[75%] py-24 sm:py-32">
            <div className="text-center mb-8">
                <h2 className=" text-3xl md:text-4xl text-center font-bold gap-8">
                    Meet Our Talented Team: Experts in Their Fields.
                </h2>

                <p className=" text-sm text-primary text-center mb-2 tracking-wider">
                   &quot; Our team is composed of passionate individuals who are dedicated to providing service to our clients. We work together to achieve our goals and deliver high-quality results.&quot;
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
                {teamList.map(
                    (
                        { imageUrl, firstName, lastName, positions, socialNetworks },
                        index
                    ) => (
                        <Card
                            key={index}
                            className="bg-muted/60 dark:bg-card flex flex-col h-full overflow-hidden group/hoverimg"
                        >
                            <CardHeader className="p-0 gap-0">
                                <div className="h-full overflow-hidden">
                                    <Image
                                        src={imageUrl}
                                        alt=""
                                        width={300}
                                        height={300}
                                        className="w-full aspect-square object-cover saturate-0 transition-all duration-200 ease-linear size-full group-hover/hoverimg:saturate-100 group-hover/hoverimg:scale-[1.01]"
                                    />
                                </div>
                                <CardTitle className="py-6 pb-4 px-6">
                                    {firstName}
                                    <span className="text-primary ml-2">{lastName}</span>
                                </CardTitle>
                            </CardHeader>
                            {positions.map((position, index) => (
                                <CardContent
                                    key={index}
                                    className={`pb-0 text-muted-foreground ${index === positions.length - 1 && "pb-6"
                                        }`}
                                >
                                    {position}
                                    {index < positions.length - 1 && <span>,</span>}
                                </CardContent>
                            ))}

                            <CardFooter className="space-x-4 mt-auto">
                                {socialNetworks.map(({ name, url }, index) => (
                                    <Link
                                        key={index}
                                        href={url}
                                        target="_blank"
                                        className="hover:opacity-80 transition-all"
                                    >
                                        {socialIcon(name)}
                                    </Link>
                                ))}
                            </CardFooter>
                        </Card>
                    )
                )}
            </div>
        </section>
    );
};