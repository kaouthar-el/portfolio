import { Code2, Smartphone, Palette, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Développement Web",
      description: "Applications web modernes avec React, Vue.js et les dernières technologies",
    },
    {
      icon: Smartphone,
      title: "Apps Mobile",
      description: "Applications natives et cross-platform pour iOS et Android",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Interfaces utilisateur élégantes et expériences fluides",
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimisation et rapidité pour une expérience optimale",
    },
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="font-display font-bold text-4xl md:text-5xl mb-4">
              À propos de <span className="text-gradient">moi</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Développeur passionné avec une expertise en création d'expériences
              digitales innovantes
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-6 animate-fade-in-up">
              <p className="text-foreground/80 leading-relaxed">
                Passionné par le développement, je
                transforme des concepts en solutions digitales performantes et
                esthétiques. Mon approche combine créativité technique et souci
                du détail pour créer des expériences utilisateur exceptionnelles.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                Spécialisé dans le développement web et mobile, j'utilise les
                technologies les plus récentes pour concevoir des applications
                modernes, rapides et évolutives qui répondent aux besoins
                spécifiques de chaque projet.
              </p>
              <div className="flex flex-wrap gap-3">
                {["React", "TypeScript", "Node.js", "React Native", "Flutter"].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <Card
                  key={index}
                  className="p-6 border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow group animate-fade-in-up bg-card/50 backdrop-blur-sm"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <item.icon className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="font-display font-semibold mb-2 text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
