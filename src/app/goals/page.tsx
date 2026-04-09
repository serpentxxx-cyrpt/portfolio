import { LandingPage } from "@/components/landing-page"
import { Target, Flag, Rocket, Compass, BookOpen, Star } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function GoalsPage() {
  const objectives = [
    {
      title: "Master Data Structures in C",
      timeframe: "Q2 2024",
      desc: "Focusing on competitive programming to strengthen logical problem-solving foundations.",
      icon: <Target className="w-6 h-6" />
    },
    {
      title: "Full-Stack AI Integration",
      timeframe: "Year End",
      desc: "Advancing toward building end-to-end intelligence pipelines for web and mobile.",
      icon: <Rocket className="w-6 h-6" />
    },
    {
      title: "VectorCore Development",
      timeframe: "Vision",
      desc: "Building scalable, AI-driven startups to address localized urban challenges.",
      icon: <Compass className="w-6 h-6" />
    }
  ]

  const certifications = [
    { name: "Generative AI", org: "Outskill and Be10X" },
    { name: "Programming", org: "NPTEL" },
    { name: "Soft Skills", org: "NPTEL" },
    { name: "Engineering Mathematics", org: "NPTEL" },
  ]

  return (
    <LandingPage 
      title="Goals & Vision" 
      subtitle="My professional roadmap and ongoing certifications."
      icon={<Target className="w-10 h-10" />}
    >
      <div className="space-y-16">
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {objectives.map((g, i) => (
            <div key={i} className="flex flex-col bg-card border border-border rounded-3xl p-8 space-y-4 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-150 transition-transform duration-500">
                 {g.icon}
              </div>
              <div className="p-3 rounded-full bg-primary/20 text-primary w-fit">
                {g.icon}
              </div>
              <h3 className="text-xl font-bold">{g.title}</h3>
              <p className="text-sm font-mono text-primary font-bold">{g.timeframe}</p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {g.desc}
              </p>
            </div>
          ))}
        </section>

        <section className="bg-muted/30 border border-border rounded-4xl p-10 space-y-8">
          <div className="flex items-center gap-3">
             <Star className="w-8 h-8 text-primary" />
             <h2 className="text-3xl font-bold">Certifications & Learning</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {certifications.map((cert) => (
              <div key={cert.name} className="flex justify-between items-center p-5 bg-background border border-border rounded-2xl">
                <div className="space-y-1">
                  <p className="font-bold">{cert.name}</p>
                  <p className="text-sm text-muted-foreground">{cert.org}</p>
                </div>
                <Badge variant="secondary">Verified</Badge>
              </div>
            ))}
          </div>
        </section>

        <div className="p-12 bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 rounded-4xl text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tight">Open for Collaborations</h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
             I am seeking opportunities to apply my AI/ML knowledge in real-world scenarios. Let's build something remarkable.
          </p>
          <p className="text-sm font-bold text-primary">tridibesh.sen2025@iem.edu.in</p>
        </div>
      </div>
    </LandingPage>
  )
}
