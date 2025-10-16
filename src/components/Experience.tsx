import { Briefcase, Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";

const Experience = () => {
  const experiences = [
    {
      title: "Développeur Full Stack Senior",
      company: "Tech Innovate",
      period: "2022 - Présent",
      description:
        "Développement d'applications web et mobile complexes. Lead technique sur des projets critiques avec React, Node.js et React Native.",
      achievements: [
        "Migration complète vers une architecture microservices",
        "Amélioration des performances de 60%",
        "Formation et mentorat de 5 développeurs juniors",
      ],
    },
    {
      title: "Développeur Mobile",
      company: "Digital Solutions",
      period: "2020 - 2022",
      description:
        "Création d'applications mobiles natives et cross-platform pour iOS et Android avec React Native et Flutter.",
      achievements: [
        "Développement de 8+ applications mobiles",
        "4.8/5 étoiles moyenne sur les stores",
        "Implémentation de CI/CD pour releases automatisées",
      ],
    },
    {
      title: "Développeur Web",
      company: "StartUp Studio",
      period: "2018 - 2020",
      description:
        "Développement frontend avec React et Vue.js. Collaboration étroite avec les équipes design et backend.",
      achievements: [
        "Refonte complète de 3 applications web",
        "Réduction du temps de chargement de 40%",
        "Mise en place de tests automatisés",
      ],
    },
  ];

  return (
    <section id="experience" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="font-display font-bold text-4xl md:text-5xl mb-4">
              Mon <span className="text-gradient">Expérience</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Parcours professionnel et réalisations clés
            </p>
          </div>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className="p-6 md:p-8 border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow animate-fade-in-up bg-card/80 backdrop-blur-sm group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-start gap-3 mb-2">
                      <div className="p-2 rounded-lg bg-primary/10 mt-1 group-hover:bg-primary/20 transition-colors">
                        <Briefcase className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-display font-bold text-xl text-foreground mb-1">
                          {exp.title}
                        </h3>
                        <p className="text-primary font-semibold">{exp.company}</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground mt-2 md:mt-0">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm font-medium">{exp.period}</span>
                  </div>
                </div>

                <p className="text-foreground/80 mb-4 leading-relaxed">
                  {exp.description}
                </p>

                <div className="space-y-2">
                  <p className="text-sm font-semibold text-foreground mb-2">
                    Réalisations principales :
                  </p>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <span className="text-primary mt-1">▹</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
