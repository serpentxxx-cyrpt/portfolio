import { LandingPage } from "@/components/landing-page"
import { Cpu, Terminal, Layout, Database, Settings, ShieldCheck, Zap } from "lucide-react"

export default function SkillsPage() {
  const categories = [
    {
      name: "Programming",
      icon: <Terminal className="w-6 h-6" />,
      skills: ["C (Competitive Programming Focus)", "JavaScript", "Python (Foundational)"]
    },
    {
      name: "Web Development",
      icon: <Layout className="w-6 h-6" />,
      skills: ["HTML5", "CSS3", "Modern Frontend Architecture", "UI/UX Principles"]
    },
    {
      name: "AI/ML & Data",
      icon: <Zap className="w-6 h-6" />,
      skills: ["Generative AI Prompting", "TinyML Implementation", "Data Visualization"]
    },
    {
      name: "Hardware/IoT",
      icon: <Cpu className="w-6 h-6" />,
      skills: ["Arduino", "ESP32", "MPU-6500", "RFID", "Sensor Integration"]
    },
    {
      name: "Professional",
      icon: <ShieldCheck className="w-6 h-6" />,
      skills: ["Technical Documentation", "Problem-Solving", "Professional Communication"]
    }
  ]

  return (
    <LandingPage 
      title="Relevant Skills" 
      subtitle="The multi-disciplinary toolkit I use to build solutions."
      icon={<Cpu className="w-10 h-10" />}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {categories.map((cat, i) => (
          <div key={i} className="bg-card border border-border rounded-3xl p-6 space-y-4 hover:border-primary/50 transition-colors group">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-secondary text-secondary-foreground group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                {cat.icon}
              </div>
              <h3 className="text-xl font-bold">{cat.name}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map(skill => (
                <div key={skill} className="px-4 py-2 bg-background border border-border rounded-xl text-sm font-medium hover:bg-secondary transition-colors cursor-default">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </LandingPage>
  )
}
