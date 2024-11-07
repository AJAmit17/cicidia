"use client";
import { Menu } from "lucide-react";
import React from "react";
import Link from "next/link";
import { ModeToggle } from "./toggle-theme";
import Image from "next/image";
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "./ui/navigation-menu";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";

interface RouteProps {
    href: string;
    label: string;
}

const routeList: RouteProps[] = [
    { href: "#testimonials", label: "Testimonials" },
    { href: "#team", label: "Team" },
    { href: "#contact", label: "Contact" },
    { href: "#faq", label: "FAQ" },
];

const extraRoutes: RouteProps[] = [
    { href: "/blogs", label: "Blog" },
    { href: "/services", label: "Services" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/pricing", label: "Pricing" },
    { href: "/careers", label: "Careers" },
    { href: "/about", label: "About" },
];

export const Navbar = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    return (
        <header className="shadow-inner bg-opacity-15 w-[90%] md:w-[70%] lg:w-[75%] lg:max-w-screen-xl top-5 mx-auto sticky border border-secondary z-40 rounded-2xl flex justify-between items-center p-2 bg-card">
            <Link href="/" className="font-bold text-lg flex items-center">
                {/* <ChevronsDown className="bg-gradient-to-tr border-secondary from-primary via-primary/70 to-primary rounded-lg w-9 h-9 mr-2 border text-white" /> */}
                <Image src="/logo.jpg" alt="logo" width={50} height={50} />
                MasterSolis InfoTech
            </Link>
            
            {/* <!-- Mobile Menu --> */}
            <div className="flex items-center lg:hidden">
                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                    <SheetTrigger asChild>
                        <Menu
                            onClick={() => setIsOpen(!isOpen)}
                            className="cursor-pointer lg:hidden"
                        />
                    </SheetTrigger>

                    <SheetContent
                        side="left"
                        className="flex flex-col justify-between rounded-tr-2xl rounded-br-2xl bg-card border-secondary"
                    >
                        <div>
                            <SheetHeader className="mb-4 ml-4">
                                <SheetTitle className="flex items-center">
                                    <Link href="/" className="flex items-center">
                                        {/* <ChevronsDown className="bg-gradient-to-tr border-secondary from-primary via-primary/70 to-primary rounded-lg w-9 h-9 mr-2 border text-white" /> */}
                                        <Image src="/logo.jpg" alt="logo" width={50} height={50} />
                                        MasterSolis InfoTech
                                    </Link>
                                </SheetTitle>
                            </SheetHeader>

                            <div className="flex flex-col gap-2">
                                {routeList.map(({ href, label }) => (
                                    <Button
                                        key={href}
                                        onClick={() => setIsOpen(false)}
                                        asChild
                                        variant="ghost"
                                        className="justify-start text-base"
                                    >
                                        <Link href={href}>{label}</Link>
                                    </Button>
                                ))}
                                {/* Dropdown for Extra Links in Mobile View */}
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button variant="ghost" className="justify-start text-base">
                                            More
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent className="bg-card">
                                        {extraRoutes.map(({ href, label }) => (
                                            <DropdownMenuItem key={href} onSelect={() => setIsOpen(false)}>
                                                <Link href={href}>{label}</Link>
                                            </DropdownMenuItem>
                                        ))}
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </div>
                        </div>

                        <SheetFooter className="flex-col sm:flex-col justify-start items-start">
                            <Separator className="mb-2" />
                            <ModeToggle />
                        </SheetFooter>
                    </SheetContent>
                </Sheet>
            </div>

            {/* <!-- Desktop Menu --> */}
            <NavigationMenu className="hidden lg:flex mx-auto">
                <NavigationMenuList>
                    <NavigationMenuItem>
                        {routeList.map(({ href, label }) => (
                            <NavigationMenuLink key={href} asChild>
                                <Link href={href} className="text-base px-2">
                                    {label}
                                </Link>
                            </NavigationMenuLink>
                        ))}
                        {/* Dropdown for Extra Links in Desktop View */}
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" className="text-base px-2">More</Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="bg-card">
                                {extraRoutes.map(({ href, label }) => (
                                    <DropdownMenuItem key={href}>
                                        <Link href={href}>{label}</Link>
                                    </DropdownMenuItem>
                                ))}
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>

            <div className="hidden lg:flex">
                <ModeToggle />
            </div>
        </header>
    );
};
