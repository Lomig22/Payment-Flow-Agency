"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Twitter, 
  Instagram,
  ArrowUpRight
} from "lucide-react";

const footerLinks = {
  services: [
    { label: "Site Web & SEO", href: "/#services" },
    { label: "Marketing Digital", href: "/#services" },
    { label: "Automatisation IA", href: "/#services" },
    { label: "Analytics & Tracking", href: "/#services" },
  ],
  company: [
    { label: "À propos", href: "/about" },
    { label: "Réalisations", href: "/realisations" },
    { label: "Blog", href: "/blog" },
    { label: "Carrières", href: "/careers" },
  ],
  legal: [
    { label: "Mentions légales", href: "/legal" },
    { label: "CGV", href: "/cgv" },
    { label: "Politique de confidentialité", href: "/privacy" },
  ],
};

const socialLinks = [
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
];

export function Footer() {
  return (
    <footer className="relative bg-background-secondary border-t border-glass-border">
      {/* Glow effect */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
      
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <span className="text-xl font-semibold text-foreground">
                Agency
              </span>
            </Link>
            <p className="text-foreground-secondary mb-6 max-w-sm">
              Des sites web qui vendent. Du SEO qui performe. Du marketing qui scale.
              Votre partenaire digital pour une croissance durable.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-glass border border-glass-border flex items-center justify-center text-foreground-secondary hover:text-foreground hover:border-accent/50 transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-foreground-secondary hover:text-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">Entreprise</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-foreground-secondary hover:text-foreground transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-foreground font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:contact@agency.com"
                  className="flex items-center gap-2 text-foreground-secondary hover:text-foreground transition-colors text-sm"
                >
                  <Mail className="w-4 h-4" />
                  contact@agency.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+33123456789"
                  className="flex items-center gap-2 text-foreground-secondary hover:text-foreground transition-colors text-sm"
                >
                  <Phone className="w-4 h-4" />
                  +33 1 23 45 67 89
                </a>
              </li>
              <li className="flex items-start gap-2 text-foreground-secondary text-sm">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span>
                  123 Avenue des Champs-Élysées<br />
                  75008 Paris, France
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-glass-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-foreground-muted text-sm">
            © {new Date().getFullYear()} Agency Premium. Tous droits réservés.
          </p>
          <div className="flex gap-6">
            {footerLinks.legal.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-foreground-muted hover:text-foreground transition-colors text-sm"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
