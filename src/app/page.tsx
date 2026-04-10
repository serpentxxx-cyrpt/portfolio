'use client';

import React from 'react';
import { RadialScrollGallery } from '@/components/ui/portfolio-and-image-gallery';
import { Check, Code, BookOpen, Target, Cpu } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import PortfolioHero from '@/components/ui/portfolio-hero';

const portfolioItems = [
{ 
  step: "01", 
  title: "Education", 
  desc: "B.Tech in CSE (Data Science) @ UEM Kolkata. SGPA: 8.07",
  icon: <BookOpen className="w-5 h-5" />,
  image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=400&h=300&fit=crop",
  href: "/education"
},
{ 
  step: "02", 
  title: "Projects", 
  desc: "GestureSync, Solisticx AI, and Route-Kolkata.",
  icon: <Code className="w-5 h-5" />,
  image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=400&h=300&fit=crop",
  href: "/projects"
},
{ 
  step: "03", 
  title: "Skills", 
  desc: "C, JavaScript, Python, Web Dev, AI/ML & IoT.",
  icon: <Cpu className="w-5 h-5" />,
  image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?q=80&w=400&h=300&fit=crop",
  href: "/skills"
},
{ 
  step: "04", 
  title: "Goals", 
  desc: "Mastering DS in C and Full-Stack AI Integration.",
  icon: <Target className="w-5 h-5" />,
  image: "https://images.unsplash.com/photo-1484417894907-623942c8ee29?q=80&w=400&h=300&fit=crop",
  href: "/goals"
},
];

export default function Home() {
  const router = useRouter();

return (
  <div className="relative bg-background font-sans text-foreground overflow-hidden w-full min-h-screen">
    {/* Google Fonts for Hero */}
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@700&family=Antic&display=swap"
    />

    <PortfolioHero />

    <div className="relative z-10 -mt-20 pb-20"> 
      {/* Header Section */}
      <div className="h-[200px] flex items-center justify-center px-4 pt-10">
        <div className="text-center space-y-3">
          <Badge variant="secondary" className="px-3 py-1 text-sm">
             Portfolio Explorer
          </Badge>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            My Journey
          </h2>
          <p className="text-muted-foreground text-base max-w-[400px] mx-auto">
            Scroll to explore my professional background, projects, and future vision.
          </p>
        </div>
      </div>

      <RadialScrollGallery
        className="!min-h-[700px]"
        baseRadius={350}
        mobileRadius={220}
        scrollDuration={1500}
        visiblePercentage={45}
        onItemSelect={(index) => router.push(portfolioItems[index].href)}
      >
        {(hoveredIndex) =>
          portfolioItems.map((item, index) => {
            const isActive = hoveredIndex === index;
            return (
              <div
                key={index}
                className={`
                  w-[220px] h-[320px] sm:w-[260px] sm:h-[360px] 
                  rounded-2xl border p-5 flex flex-col justify-start items-start 
                  transition-all duration-500 shadow-sm relative overflow-hidden backdrop-blur-sm
                  ${isActive 
                    ? 'bg-card/90 border-primary scale-100 shadow-2xl z-20' 
                    : 'bg-card/60 border-border scale-90 opacity-60 z-10'
                  }
                `}
              >
                <div className="absolute inset-0 z-0 opacity-20">
                  <img src={item.image} alt={item.title} className="w-full h-[140px] object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/90" />
                </div>

                <div className="relative z-10 w-full flex justify-between items-start mb-4">
                  <span className={`font-mono text-lg font-semibold ${isActive ? 'text-primary' : 'text-muted-foreground/70'}`}>
                    {item.step}
                  </span>
                  <div className={`p-2 rounded-full ${isActive ? 'bg-primary/20 text-primary' : 'bg-muted text-muted-foreground'}`}>
                     {isActive ? <Check className="w-5 h-5" /> : item.icon}
                  </div>
                </div>
                
                <div className="relative z-10 mt-auto pt-4 w-full">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className={`w-full h-[100px] object-cover rounded-lg mb-4 transition-all duration-500 ${isActive ? 'scale-105 shadow-md' : 'scale-100 grayscale'}`} 
                  />
                  <h3 className="text-2xl font-bold mb-2 tracking-tight">{item.title}</h3>
                  <p className={`text-sm leading-snug ${isActive ? 'text-foreground/90' : 'text-muted-foreground'}`}>
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })
        }
      </RadialScrollGallery>
    </div>

    <div className="h-[350px] flex flex-col items-center justify-center bg-muted/20 border-t border-border space-y-6">
      <h2 className="text-3xl font-bold tracking-tight">Let's Connect!</h2>
      <p className="text-muted-foreground text-sm max-w-[400px] text-center px-4 leading-relaxed">
        I am always open to discussing new projects, open-source contributions, or professional opportunities in Data Science and AI.
      </p>
      
      <div className="flex flex-wrap justify-center gap-4">
        <Link href="mailto:tridibeshsen2002@gmail.com">
          <Badge variant="outline" className="px-5 py-2.5 flex items-center gap-2 cursor-pointer hover:bg-primary hover:text-primary-foreground transition-all duration-300">
            Email Me
          </Badge>
        </Link>
        <Link href="https://www.linkedin.com/in/tridibesh-sen-a39218380" target="_blank">
          <Badge variant="outline" className="px-5 py-2.5 flex items-center gap-2 cursor-pointer hover:bg-primary hover:text-primary-foreground transition-all duration-300">
            LinkedIn
          </Badge>
        </Link>
        <Link href="https://github.com/serpentxxx-cyrpt" target="_blank">
          <Badge variant="outline" className="px-5 py-2.5 flex items-center gap-2 cursor-pointer hover:bg-primary hover:text-primary-foreground transition-all duration-300">
            GitHub
          </Badge>
        </Link>
      </div>

      <div className="pt-4 text-xs font-mono text-muted-foreground">
        Built with Next.js & GSAP | © 2026 Tridibesh Sen
      </div>
    </div>
  </div>
);
}
