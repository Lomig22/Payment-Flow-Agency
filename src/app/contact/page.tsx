"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Input, Textarea } from "@/components/ui/Input";
import { SectionHeader } from "@/components/ui/SectionHeader";
import {
  Send,
  Mail,
  Phone,
  MapPin,
  Calendar,
  MessageCircle,
  Clock,
  CheckCircle,
  Loader2,
} from "lucide-react";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
    budget: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log("Form submitted:", formState);
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const budgetOptions = [
    { value: "", label: "Sélectionnez un budget" },
    { value: "1k-3k", label: "1 000€ - 3 000€" },
    { value: "3k-5k", label: "3 000€ - 5 000€" },
    { value: "5k-10k", label: "5 000€ - 10 000€" },
    { value: "10k+", label: "+ de 10 000€" },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[50%] bg-gradient-to-b from-accent/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <SectionHeader
          badge="Contact"
          title={
            <>
              Parlons de votre <span className="gradient-text-accent">projet</span>
            </>
          }
          description="Que vous ayez une idée précise ou juste une envie de digitaliser votre business, nous sommes là pour vous accompagner."
        />

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="order-2 lg:order-1"
          >
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center p-12 bg-glass border border-glass-border rounded-2xl"
              >
                <div className="w-20 h-20 mb-6 rounded-full bg-success/10 border border-success/20 flex items-center justify-center">
                  <CheckCircle className="w-10 h-10 text-success" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  Message envoyé !
                </h3>
                <p className="text-foreground-secondary max-w-sm">
                  Merci pour votre message. Nous vous répondrons dans les 24 heures.
                </p>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormState({
                      name: "",
                      email: "",
                      company: "",
                      phone: "",
                      message: "",
                      budget: "",
                    });
                  }}
                  className="mt-6 text-accent hover:text-accent-hover transition-colors"
                >
                  Envoyer un autre message
                </button>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="p-8 bg-glass border border-glass-border rounded-2xl space-y-6"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">
                      Envoyez-nous un message
                    </h3>
                    <p className="text-sm text-foreground-muted">
                      Réponse sous 24h
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <Input
                    label="Nom complet"
                    name="name"
                    placeholder="Jean Dupont"
                    value={formState.name}
                    onChange={handleChange}
                    required
                  />
                  <Input
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="jean@entreprise.fr"
                    value={formState.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <Input
                    label="Entreprise"
                    name="company"
                    placeholder="Ma Société"
                    value={formState.company}
                    onChange={handleChange}
                  />
                  <Input
                    label="Téléphone"
                    name="phone"
                    type="tel"
                    placeholder="06 12 34 56 78"
                    value={formState.phone}
                    onChange={handleChange}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Budget estimé
                  </label>
                  <select
                    name="budget"
                    value={formState.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-glass border border-glass-border rounded-xl text-foreground transition-all duration-300 focus:outline-none focus:border-accent/50 focus:ring-2 focus:ring-accent/20 appearance-none cursor-pointer"
                  >
                    {budgetOptions.map((option) => (
                      <option
                        key={option.value}
                        value={option.value}
                        className="bg-background-secondary"
                      >
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>

                <Textarea
                  label="Votre message"
                  name="message"
                  placeholder="Décrivez votre projet, vos objectifs, vos délais..."
                  value={formState.message}
                  onChange={handleChange}
                  rows={5}
                  required
                />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full group inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent hover:bg-accent-hover text-white font-medium rounded-xl transition-all duration-300 hover:shadow-glow-sm disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Envoyer le message
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>

          {/* Contact Info & Calendly */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="order-1 lg:order-2 space-y-6"
          >
            {/* Calendly Card */}
            <div className="p-6 bg-accent/10 border border-accent/20 rounded-2xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-accent/20 border border-accent/30 flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">
                    Réservez un appel
                  </h3>
                  <p className="text-sm text-foreground-muted">
                    30 min • Gratuit • Sans engagement
                  </p>
                </div>
              </div>
              <p className="text-foreground-secondary text-sm mb-4">
                Discutons de votre projet lors d'un appel découverte gratuit. 
                Nous analyserons vos besoins et vous proposerons une solution sur-mesure.
              </p>
              {/* Calendly embed placeholder */}
              <div className="relative h-[400px] bg-background-tertiary rounded-xl overflow-hidden">
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                  <Calendar className="w-12 h-12 text-accent mb-4" />
                  <p className="text-foreground-secondary text-sm mb-4">
                    Widget Calendly intégré ici
                  </p>
                  <a
                    href="https://calendly.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent-hover text-white font-medium rounded-xl transition-all duration-300"
                  >
                    <Calendar className="w-5 h-5" />
                    Ouvrir Calendly
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="p-6 bg-glass border border-glass-border rounded-2xl space-y-4">
              <h3 className="text-lg font-semibold text-foreground mb-4">
                Autres moyens de contact
              </h3>

              <a
                href="mailto:contact@agency.com"
                className="flex items-center gap-4 p-4 bg-glass-hover border border-glass-border rounded-xl hover:border-accent/30 transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-foreground-muted">Email</p>
                  <p className="text-foreground font-medium">contact@agency.com</p>
                </div>
              </a>

              <a
                href="tel:+33123456789"
                className="flex items-center gap-4 p-4 bg-glass-hover border border-glass-border rounded-xl hover:border-accent/30 transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-foreground-muted">Téléphone</p>
                  <p className="text-foreground font-medium">+33 1 23 45 67 89</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 bg-glass-hover border border-glass-border rounded-xl">
                <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-foreground-muted">Adresse</p>
                  <p className="text-foreground font-medium">
                    123 Avenue des Champs-Élysées, Paris
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-glass-hover border border-glass-border rounded-xl">
                <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-foreground-muted">Horaires</p>
                  <p className="text-foreground font-medium">Lun - Ven : 9h - 18h</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
