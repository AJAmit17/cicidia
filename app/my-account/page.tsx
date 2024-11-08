'use client'

import { useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Bell, CreditCard, LogOut, Mail, Settings } from 'lucide-react'
import { Navbar } from '@/components/navbar'
import { FooterSection } from '@/components/footer'

export default function MyAccount() {
    const [notifications, setNotifications] = useState(true)

    return (
        <div className="container mx-auto bg-background-muted">
            <Navbar />
            <Tabs defaultValue="general" className="w-full py-10">
                <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="general">General</TabsTrigger>
                    <TabsTrigger value="password">Password</TabsTrigger>
                    <TabsTrigger value="notifications">Notifications</TabsTrigger>
                    <TabsTrigger value="billing">Billing</TabsTrigger>
                </TabsList>
                <TabsContent value="general">
                    <Card>
                        <CardHeader>
                            <CardTitle>General Information</CardTitle>
                            <CardDescription>Update your account details here.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex items-center space-x-4">
                                <Avatar className="h-20 w-20">
                                    <AvatarImage src="/placeholder.svg?height=80&width=80" alt="User avatar" />
                                    <AvatarFallback>JD</AvatarFallback>
                                </Avatar>
                                <Button>Change Avatar</Button>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="firstName">First name</Label>
                                    <Input id="firstName" placeholder="John" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="lastName">Last name</Label>
                                    <Input id="lastName" placeholder="Doe" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="email">Email</Label>
                                    <Input id="email" placeholder="john.doe@example.com" type="email" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="username">Username</Label>
                                    <Input id="username" placeholder="johndoe" />
                                </div>
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button>Save Changes</Button>
                        </CardFooter>
                    </Card>
                </TabsContent>
                <TabsContent value="password">
                    <Card>
                        <CardHeader>
                            <CardTitle>Password</CardTitle>
                            <CardDescription>Change your password here. After saving, you'll be logged out.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="current">Current password</Label>
                                <Input id="current" type="password" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="new">New password</Label>
                                <Input id="new" type="password" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="confirm">Confirm password</Label>
                                <Input id="confirm" type="password" />
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button>Change Password</Button>
                        </CardFooter>
                    </Card>
                </TabsContent>
                <TabsContent value="notifications">
                    <Card>
                        <CardHeader>
                            <CardTitle>Notifications</CardTitle>
                            <CardDescription>Manage your notification preferences.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex items-center space-x-4">
                                <Switch
                                    id="notifications"
                                    checked={notifications}
                                    onCheckedChange={setNotifications}
                                />
                                <Label htmlFor="notifications">Enable notifications</Label>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="flex items-center space-x-2">
                                    <Bell className="h-4 w-4" />
                                    <Label htmlFor="push">Push notifications</Label>
                                    <Switch id="push" />
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Mail className="h-4 w-4" />
                                    <Label htmlFor="email">Email notifications</Label>
                                    <Switch id="email" />
                                </div>
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button>Save Preferences</Button>
                        </CardFooter>
                    </Card>
                </TabsContent>
                <TabsContent value="billing">
                    <Card>
                        <CardHeader>
                            <CardTitle>Billing</CardTitle>
                            <CardDescription>Manage your billing information and view your plan.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-4">
                                    <CreditCard className="h-8 w-8" />
                                    <div>
                                        <p className="text-sm font-medium">Visa ending in 1234</p>
                                        <p className="text-sm text-gray-500">Expires 12/2024</p>
                                    </div>
                                </div>
                                <Button variant="outline">Update</Button>
                            </div>
                            <div>
                                <p className="text-sm font-medium">Current Plan: Pro</p>
                                <p className="text-sm text-gray-500">$19.99/month</p>
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button variant="outline" className="w-full">View Billing History</Button>
                        </CardFooter>
                    </Card>
                </TabsContent>
            </Tabs>
            <div className="mt-6 flex justify-between">
                <Button variant="outline" className="flex items-center space-x-2">
                    <Settings className="h-4 w-4" />
                    <span>Account Settings</span>
                </Button>
                <Button variant="destructive" className="flex items-center space-x-2">
                    <LogOut className="h-4 w-4" />
                    <span>Log Out</span>
                </Button>
            </div>
            <FooterSection />
        </div>
    )
}