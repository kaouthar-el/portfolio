import { Briefcase, Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";

const Experience = () => {
  const experiences = [
    {
      title: "Stage PFE",
      company: "Présidence Moulay Ismaïl, Meknès",
      period: "2023",
      description:
        "Participation au développement et à la maintenance de plusieurs sites web internes, notamment la création d’une page de maintenance et de modules simples pour la communication interne. Dans la partie réseaux et support technique, j’ai contribué à :",
      achievements: [
        "Le formatage et la configuration de postes informatiques",
        "Le câblage RJ45 et l’organisation du réseau local",
        "L’installation et la configuration de systèmes Linux (Ubuntu)",
        "Renforcement des compétences en développement web et maintenance informatique",
        "Acquisition d’une bonne compréhension de l’infrastructure réseau en milieu professionnel",
      ],
    },
    {
  title: "Développeur Mobile",
  company: "Entreprise Jbel Ennour",
  period: "Novembre 2024 - Présent",
  description:
    "Participation au développement d’applications mobiles innovantes avec Flutter et React Native au sein de l’entreprise Jbel Ennour. Cette expérience m’a permis de renforcer mes compétences en développement mobile et de travailler sur des projets concrets répondant aux besoins internes de l’entreprise.",
  achievements: [
    "Conception et développement d’applications mobiles facilitant la gestion interne",
    "Création d’applications permettant la génération et la consultation de fichiers PDF",
    "Contribution à l’optimisation des processus administratifs grâce à des solutions numériques",
    "Apprentissage continu des bonnes pratiques de développement et de gestion de projet",
    "Collaboration étroite avec l’équipe technique pour la mise en production des applications",
  ],
},

    {
  title: "Développeur Web",
  company: "Projets Personnels & Collaboratifs",
  period: "2025 - 2026",
  description:
    "Réalisation de plusieurs sites web modernes et responsives en utilisant React et TypeScript. Ces projets m’ont permis de renforcer mes compétences en développement frontend et en conception d’interfaces utilisateur attractives et performantes.",
  achievements: [
    "Création d’un site web complet pour un fast-food avec interface de commande et menu interactif",
    "Développement d’un site portfolio personnel pour présenter mes projets et compétences",
    "Conception d’un site web élégant dédié à une marque de parfums",
    "Utilisation avancée de React et TypeScript pour assurer performance et maintenabilité du code",
    "Amélioration continue de l’expérience utilisateur à travers un design moderne et fluide",
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
