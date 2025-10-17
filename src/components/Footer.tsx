import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden py-10 text-center">
      {/* 🔹 Fond dégradé identique au Hero */}
      <div className="absolute inset-0 gradient-hero opacity-90" />

      {/* 🔹 Cercles flous décoratifs */}
      <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-float" />
      <div
        className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "1s" }}
      />

      {/* 🔹 Contenu principal */}
      <div className="relative z-10 container mx-auto px-4">
        <p className="flex items-center justify-center gap-2 text-white/80 font-medium text-lg">
         
          <span className="text-gradient font-semibold">Kawtar El Mansouri</span> © {currentYear}
        </p>
        <p className="text-white/60 text-sm mt-3">
          Tous droits réservés
        </p>
      </div>
    </footer>
  );
};

export default Footer;
