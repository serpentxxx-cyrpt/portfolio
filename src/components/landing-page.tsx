"use client"

import React from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { ModeToggle } from "@/components/mode-toggle"
import { Badge } from "@/components/ui/badge"

interface LandingPageProps {
  title: string
  subtitle: string
  children: React.ReactNode
  icon?: React.ReactNode
}

export function LandingPage({ title, subtitle, children, icon }: LandingPageProps) {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/20">
      {/* Navigation */}
      <nav className="fixed top-0 w-full border-b border-border bg-background/80 backdrop-blur-md z-50">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link 
            href="/" 
            className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </Link>
          <ModeToggle />
        </div>
      </nav>

      {/* Hero Header */}
      <header className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <div className="flex justify-center mb-6">
            <div className="p-4 rounded-2xl bg-primary/10 text-primary scale-110">
              {icon}
            </div>
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
            {title}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>
      </header>

      {/* Content */}
      <main className="pb-32 px-6">
        <div className="max-w-4xl mx-auto">
          {children}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-6 bg-muted/20">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <p className="font-semibold">B.Tech Portfolio</p>
            <p className="text-sm text-muted-foreground">© 2024 Built with Next.js & GSAP</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="mailto:tridibeshsen2002@gmail.com">
              <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground py-1.5 px-4 transition-colors">
                Email
              </Badge>
            </Link>
            <Link href="https://www.linkedin.com/in/tridibesh-sen-a39218380" target="_blank">
              <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground py-1.5 px-4 transition-colors">
                LinkedIn
              </Badge>
            </Link>
            <Link href="https://github.com/serpentxxx-cyrpt" target="_blank">
              <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground py-1.5 px-4 transition-colors">
                GitHub
              </Badge>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
