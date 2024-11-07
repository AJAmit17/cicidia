//sign up
'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

export default function Component() {
  const [agreed, setAgreed] = useState(false)

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-300 dark:from-gray-800 dark:to-gray-900 p-4 w-full">
      <Card className="w-full max-w-md rounded-2xl shadow-[0_10px_20px_rgba(0,0,0,0.19),_0_6px_6px_rgba(0,0,0,0.23)] transform hover:scale-105 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-gray-800 dark:text-gray-200 text-center">Sign Up</CardTitle>
          <CardDescription className="text-gray-600 dark:text-gray-400 text-center">Join our community today</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-gray-700 dark:text-gray-300">Full Name</Label>
              <Input id="name" placeholder="John Doe" className="bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-gray-700 dark:text-gray-300">Email</Label>
              <Input id="email" type="email" placeholder="john@example.com" className="bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="text-gray-700 dark:text-gray-300">Password</Label>
              <Input id="password" type="password" className="bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200" />
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" checked={agreed} onCheckedChange={(checked) => setAgreed(checked as boolean)} />
              <Label htmlFor="terms" className="text-sm text-gray-600 dark:text-gray-400">
                I agree to the <a href="/terms" className="text-blue-600 dark:text-blue-400 hover:underline">Terms and Conditions</a>
              </Label>
            </div>
          </form>
        </CardContent>
        <CardFooter>
          <Button className="w-full bg-gray-800 text-white hover:bg-gray-700 dark:bg-gray-200 dark:text-gray-800 dark:hover:bg-gray-300 transition-colors" disabled={!agreed}>
            Sign Up
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}