import { Card } from "@/components/ui/card";
import {
  Code2,
  Smartphone,
  Database,
  Cloud,
  Palette,
  Zap,
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Frontend",
      color: "text-blue-500",
      skills: ["React", "TypeScript", "Vue.js", "Next.js", "Tailwind CSS","HTML5","CSS3"],
    },
    {
      icon: Smartphone,
      title: "Mobile",
      color: "text-purple-500",
      skills: ["React Native", "Flutter", "iOS/Android", "Expo"],
    },
    {
      icon: Database,
      title: "Backend",
      color: "text-green-500",
      skills: ["Node.js", "Express", "PostgreSQL", "MongoDB", "GraphQL","Laravel"],
    },
    // {
    //   icon: Cloud,
    //   title: "DevOps & Cloud",
    //   color: "text-cyan-500",
    //   skills: ["Docker", "AWS", "CI/CD", "Git"],
    // },
    {
      icon: Palette,
      title: "Design & UX",
      color: "text-pink-500",
      skills: ["Figma", "UI/UX Design", "Responsive Design", "Animations"],
    },
    // {
    //   icon: Zap,
    //   title: "Outils & Méthodologie",
    //   color: "text-yellow-500",
    //   skills: ["Agile/Scrum", "Testing", "Performance", "SEO"],
    // },
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-white dark:bg-background">
      <div className="absolute inset-0 bg-white dark:gradient-hero dark:opacity-50" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="font-display font-bold text-4xl md:text-5xl mb-4">
              Mes <span className="text-gradient">Compétences</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Technologies et outils que je maîtrise pour créer des expériences exceptionnelles
            </p>
          </div>

          {/* 🔹 Petites pastilles arrondies sans niveau */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <Card
                key={index}
                className="group relative overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-500 hover:shadow-glow animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0 gradient-card opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
                      <category.icon className={`w-6 h-6 ${category.color} group-hover:animate-pulse`} />
                    </div>
                    <h3 className="font-display font-bold text-xl text-foreground group-hover:text-primary transition-colors">
                      {category.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center px-3 py-1 rounded-full bg-muted/80 hover:bg-primary/10 text-foreground/80 hover:text-primary text-sm font-medium transition-all duration-300 border border-transparent hover:border-primary/30 hover:shadow-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* 🔹 Section additionnelle */}
          <div className="mt-16 animate-fade-in-up" style={{ animationDelay: "600ms" }}>
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm p-8">
              <h3 className="font-display font-bold text-xl text-center mb-6">
                Outils & Technologies Additionnels
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  "Redux",
                  "REST API",
                  "WebSocket",
                  "Firebase",
                  "Supabase",
                  "Vercel",
                  "Netlify",
                  "Stripe",
                  "Jest",
                  "Cypress",
                  "Webpack",
                  "Vite",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-full bg-gradient-to-r from-primary/5 to-accent/5 hover:from-primary/10 hover:to-accent/10 border border-border/50 hover:border-primary/30 text-foreground/80 hover:text-primary font-medium text-sm transition-all duration-300 hover:scale-105 hover:shadow-md cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
