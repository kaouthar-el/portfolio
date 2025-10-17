import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";
import profilePhoto from "@/assets/dev.jpeg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* 🔹 Image de fond avec overlay */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Developer workspace"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 gradient-hero opacity-90" />
      </div>

      {/* 🔹 Cercles décoratifs flous */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-float" />
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "1s" }}
      />

      {/* 🔹 Contenu principal */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="animate-fade-in">
          {/* Métier */}
          <p className="text-primary font-semibold mb-2 tracking-wider uppercase text-sm md:text-base">
            Développeur Web & Mobile
          </p>

          {/* Profile Photo */}
          <div className="mb-6 flex justify-center">
            <img
              src={profilePhoto}
              alt="Profile"
              className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-white/20 shadow-glow object-cover"
            />
          </div>

          {/* Nom et prénom */}
          <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">
            Kaouthar El Mansouri
          </h2>

          {/* Titre principal */}
          <h1 className="font-display font-bold text-4xl md:text-6xl lg:text-7xl mb-6 text-white">
            Transformez vos idées en{" "}
            <span className="text-gradient">expériences digitales</span>
          </h1>

          {/* Description */}
          <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
            Création d'applications web et mobiles modernes, performantes et
            élégantes qui captivent vos utilisateurs.
          </p>

          {/* Boutons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              onClick={() => scrollToSection("#contact")}
              size="lg"
              className="gradient-primary text-white font-semibold shadow-glow hover:opacity-90 transition-opacity px-8"
            >
              Démarrer un projet
            </Button>
            <Button
              onClick={() => scrollToSection("#about")}
              size="lg"
              variant="outline"
              className="border-white/30 hover:bg-white/10 backdrop-blur-sm px-8 "
            >
              En savoir plus
            </Button>
          </div>

          {/* Liens sociaux */}
          <div className="flex gap-4 justify-center">
            <a
              href="https://github.com/kaouthar-el"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all hover:scale-110"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/elmansouri-kaouthar-56585b260/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all hover:scale-110"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:kaoutharelmansouri@gmail.com"
              className="p-3 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all hover:scale-110"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Flèche vers la section suivante */}
        <button
          onClick={() => scrollToSection("#about")}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
        >
          <ArrowDown className="w-6 h-6 text-white/60" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
