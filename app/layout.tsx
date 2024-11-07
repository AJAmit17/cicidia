import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/providers/theme-provider";
import DotPattern from "@/components/ui/dot-pattern";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MasterSolis",
  description: "MasterSolis InfoTech believes in connecting corporate professionals to excel students professionally and make industry ready",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background w-full", inter.className)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col items-center justify-center min-h-screen">
            {children}
          </div>

          <DotPattern
            className={cn(
              "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
            )}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
