import { LandingPage } from "@/components/landing-page"
import { Code, ExternalLink, Link, Folder } from "lucide-react"

export default function ProjectsPage() {
  const projects = [
    {
      title: "GestureSync",
      desc: "An ML-powered wireless gesture controller that translates physical movements into real-time device commands using trained motion-sensing models.",
      tags: ["ML", "IoT", "Motion Sensing", "Python"],
      link: "#",
      image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=400&h=300&fit=crop"
    },
    {
      title: "Solisticx AI (In-Development)",
      desc: "A sophisticated workflow design platform integrating AI to automate and optimize complex productivity pipelines.",
      tags: ["AI", "Automation", "Workflow Engineering"],
      link: "#",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=400&h=300&fit=crop"
    },
    {
      title: "Route-কলকাতা",
      desc: "A solution-oriented web application designed to alleviate daily commuting issues in Kolkata through real-time bus tracking and route optimization.",
      tags: ["Web App", "Real-time Tracking", "Public Transport", "Kolkata"],
      link: "#",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=400&h=300&fit=crop"
    }
  ]

  return (
    <LandingPage 
      title="Projects" 
      subtitle="Transforming ideas into functional technology solutions."
      icon={<Code className="w-10 h-10" />}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((p, i) => (
          <div key={i} className="group relative bg-card border border-border rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500">
            <div className="h-48 overflow-hidden">
              <img 
                src={p.image} 
                alt={p.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
              />
            </div>
            <div className="p-6 space-y-4">
              <div className="flex justify-between items-start">
                <h3 className="text-2xl font-bold">{p.title}</h3>
                <div className="flex gap-2">
                  <Link className="w-5 h-5 cursor-pointer hover:text-primary transition-colors" />
                  <ExternalLink className="w-5 h-5 cursor-pointer hover:text-primary transition-colors" />
                </div>
              </div>
              <p className="text-muted-foreground line-clamp-3">
                {p.desc}
              </p>
              <div className="flex flex-wrap gap-2">
                {p.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-secondary text-secondary-foreground text-xs font-semibold rounded-full border border-border">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </LandingPage>
  )
}
