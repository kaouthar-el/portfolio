import { useState } from "react";
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";
import { sendForm } from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      e.currentTarget,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
      .then(() => {
        toast.success("Message envoyé avec succès ! Je vous répondrai bientôt.");
        setFormData({ name: "", email: "", subject: "", message: "" });
      })
      .catch((err) => {
        toast.error("Erreur lors de l'envoi du message.");
        console.error(err);
      });
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: "kaoutharelmansouri@gmail.com", href: "mailto:kaoutharelmansouri@gmail.com" },
    { icon: Phone, label: "Téléphone", value: "+212 623914489", href: "tel:+212623449189" },
    { icon: MapPin, label: "Localisation", value: "Casablanca, Maroc", href: "#" },
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/kaouthar-el/", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/elmansouri-kaouthar-56585b260", label: "LinkedIn" },
    { icon: Mail, href: "https://kaoutharelmansouri@gmail.com", label: "Email" },
  ];

  return (
    <section id="contact" className="relative py-24 overflow-hidden bg-background dark:bg-background">
      <div className="absolute inset-0 gradient-hero opacity-90" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />

      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="font-display font-bold text-4xl md:text-5xl mb-4 text-white">
              Contactez-<span className="text-gradient">moi</span>
            </h2>
            <p className="text-white/70 text-lg">Discutons de votre prochain projet</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Infos de contact */}
            <div className="space-y-8 animate-fade-in-up">
              <h3 className="font-display font-bold text-2xl mb-4 text-white">Restons en contact</h3>
              <p className="text-white/80 leading-relaxed mb-8">
                Vous avez un projet en tête ? Une question sur mes services ? N'hésitez pas à me contacter.
              </p>

              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="p-4 border border-white/20 bg-white/10 backdrop-blur-md shadow-glow hover:border-primary/50 transition-all duration-300 group">
                    <a href={info.href} className="flex items-center gap-4">
                      <div className="p-3 rounded-lg bg-primary/20 group-hover:bg-primary/30 transition-colors">
                        <info.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-white/70 font-medium">{info.label}</p>
                        <p className="text-white font-semibold">{info.value}</p>
                      </div>
                    </a>
                  </Card>
                ))}
              </div>

              {/* Liens sociaux */}
              <div className="mt-8">
                <p className="text-white font-semibold mb-4">Retrouvez-moi sur :</p>
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-lg bg-white/10 hover:bg-primary/30 text-white transition-all duration-300 hover:scale-110"
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Formulaire */}
            <Card className="p-8 border border-white/20 bg-white/10 backdrop-blur-md shadow-glow animate-fade-in-up" style={{ animationDelay: "200ms" }}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-white mb-2">Nom complet</label>
                  <Input
                    id="name"
                    name="user_name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Kawtar El Mansouri"
                    required
                    className="bg-white/20 text-white placeholder:text-white/60 border-white/30"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-white mb-2">Email</label>
                  <Input
                    id="email"
                    name="user_email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="kawtar.el@example.com"
                    required
                    className="bg-white/20 text-white placeholder:text-white/60 border-white/30"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-white mb-2">Sujet</label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Nouveau projet web"
                    required
                    className="bg-white/20 text-white placeholder:text-white/60 border-white/30"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-white mb-2">Message</label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Décrivez votre projet..."
                    rows={6}
                    required
                    className="bg-white/20 text-white placeholder:text-white/60 border-white/30 resize-none"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full gradient-primary text-white font-semibold shadow-glow hover:opacity-90 transition-opacity">
                  <Send className="w-4 h-4 mr-2" />
                  Envoyer le message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
