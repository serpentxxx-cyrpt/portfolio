import { LandingPage } from "@/components/landing-page"
import { BookOpen, GraduationCap, Calendar, Star } from "lucide-react"

export default function EducationPage() {
  return (
    <LandingPage 
      title="Education" 
      subtitle="University of Engineering and Management, Kolkata & GSMS Taki House."
      icon={<BookOpen className="w-10 h-10" />}
    >
      <div className="space-y-12">
        <section className="relative pl-8 border-l-2 border-primary/20 space-y-8">
          <div className="relative">
            <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-primary border-4 border-background" />
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-primary font-mono text-sm font-bold">
                <Calendar className="w-4 h-4" />
                <span>2025 - 2029</span>
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">B.Tech in CSE (Data Science)</h3>
                <p className="text-lg font-medium text-muted-foreground">University of Engineering and Management, Kolkata</p>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-bold">
                  <Star className="w-4 h-4" />
                  SGPA (1st Semester): 8.07
                </div>
              </div>
              <p className="text-muted-foreground max-w-2xl">
                Specializing in Data Science with a core focus on algorithms, statistical modeling, and machine learning foundations.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-primary/40 border-4 border-background" />
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-muted-foreground font-mono text-sm">
                <Calendar className="w-4 h-4" />
                <span>2023 - 2025</span>
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">Higher Secondary (Class XII)</h3>
                <p className="text-lg font-medium text-muted-foreground">GSMS Taki House</p>
                <p className="text-sm font-bold text-muted-foreground/80">Result: 71%</p>
              </div>
              <p className="text-muted-foreground max-w-2xl">
                Specialization in Mathematics, Physics, and Computer Science. Laid the groundwork for computational thinking and scientific analysis.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-card border border-border rounded-3xl p-8 space-y-6">
          <h2 className="text-3xl font-bold flex items-center gap-2">
            <GraduationCap className="w-8 h-8 text-primary" />
            Academic Vision
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            I am driven by the challenge of transforming complex data into intelligent, actionable solutions that bridge the gap between hardware and software. My goal is to master both the theoretical depth of data science and the practical agility of full-stack development.
          </p>
        </section>
      </div>
    </LandingPage>
  )
}
