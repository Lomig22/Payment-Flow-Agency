"use client";

import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Play, Sparkles, Check, Zap, Globe, TrendingUp } from "lucide-react";
import { useEffect, useState } from "react";

// Composant pour le visuel 3D animé
function HeroVisual() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const rotateX = useSpring(useTransform(mouseY, [-300, 300], [10, -10]), { stiffness: 100, damping: 30 });
  const rotateY = useSpring(useTransform(mouseX, [-300, 300], [-10, 10]), { stiffness: 100, damping: 30 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const rect = document.querySelector('.hero-visual-container')?.getBoundingClientRect();
      if (rect) {
        mouseX.set(e.clientX - rect.left - rect.width / 2);
        mouseY.set(e.clientY - rect.top - rect.height / 2);
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div 
      className="hero-visual-container relative w-full h-[400px] md:h-[500px] lg:h-[600px]"
      style={{ perspective: 1000 }}
    >
      {/* Main Dashboard Card */}
      <motion.div
        style={{ rotateX, rotateY }}
        className="absolute inset-0 flex items-center justify-center"
      >
        {/* Browser Window */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative w-[90%] max-w-[500px] bg-background-secondary/80 backdrop-blur-xl border border-glass-border rounded-2xl overflow-hidden shadow-2xl"
        >
          {/* Browser Header */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-glass-border bg-background-tertiary/50">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <div className="flex-1 mx-4">
              <div className="flex items-center gap-2 px-3 py-1.5 bg-glass rounded-lg">
                <div className="w-3 h-3 rounded-full bg-success" />
                <span className="text-xs text-foreground-muted font-mono">votre-site.fr</span>
              </div>
            </div>
          </div>
          
          {/* Browser Content - Dashboard Preview */}
          <div className="p-4 space-y-4">
            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { label: "Visiteurs", value: "12.4k", change: "+24%", color: "text-success" },
                { label: "Conversions", value: "847", change: "+18%", color: "text-accent" },
                { label: "Revenus", value: "€34.2k", change: "+32%", color: "text-purple-400" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                  className="p-3 bg-glass rounded-xl border border-glass-border"
                >
                  <p className="text-[10px] text-foreground-muted mb-1">{stat.label}</p>
                  <p className="text-lg font-bold text-foreground">{stat.value}</p>
                  <p className={`text-[10px] font-medium ${stat.color}`}>{stat.change}</p>
                </motion.div>
              ))}
            </div>
            
            {/* Chart Placeholder */}
            <motion.div
              initial={{ opacity: 0, scaleY: 0 }}
              animate={{ opacity: 1, scaleY: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="h-32 bg-glass rounded-xl border border-glass-border p-3 overflow-hidden"
              style={{ transformOrigin: 'bottom' }}
            >
              <div className="flex items-end justify-around h-full gap-1">
                {[40, 60, 45, 80, 55, 90, 70, 85, 65, 95, 75, 100].map((height, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    animate={{ height: `${height}%` }}
                    transition={{ duration: 0.5, delay: 1 + i * 0.05 }}
                    className="flex-1 bg-gradient-to-t from-accent to-purple-500 rounded-t-sm opacity-80"
                  />
                ))}
              </div>
            </motion.div>
            
            {/* Action Row */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="flex items-center gap-3"
            >
              <div className="flex-1 h-10 bg-accent/20 rounded-lg flex items-center justify-center">
                <span className="text-xs font-medium text-accent">Performance SEO : Excellente</span>
              </div>
              <div className="w-10 h-10 bg-success/20 rounded-lg flex items-center justify-center">
                <Check className="w-5 h-5 text-success" />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
      
      {/* Floating Elements */}
      <motion.div
        animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 right-10 md:top-20 md:right-20"
      >
        <div className="p-3 bg-accent/20 backdrop-blur-xl rounded-xl border border-accent/30">
          <Zap className="w-6 h-6 text-accent" />
        </div>
      </motion.div>
      
      <motion.div
        animate={{ y: [0, 12, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-20 left-5 md:bottom-32 md:left-10"
      >
        <div className="p-3 bg-purple-500/20 backdrop-blur-xl rounded-xl border border-purple-500/30">
          <Globe className="w-6 h-6 text-purple-400" />
        </div>
      </motion.div>
      
      <motion.div
        animate={{ y: [0, -10, 0], x: [0, 5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-1/3 left-0 md:left-5"
      >
        <div className="p-3 bg-success/20 backdrop-blur-xl rounded-xl border border-success/30">
          <TrendingUp className="w-6 h-6 text-success" />
        </div>
      </motion.div>
      
      {/* Notification Popup */}
      <motion.div
        initial={{ opacity: 0, x: 50, y: 20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.6, delay: 1.5 }}
        className="absolute bottom-10 right-0 md:bottom-16 md:right-5"
      >
        <motion.div
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="flex items-center gap-3 px-4 py-3 bg-background-secondary/90 backdrop-blur-xl rounded-xl border border-glass-border shadow-lg"
        >
          <div className="w-8 h-8 bg-success/20 rounded-full flex items-center justify-center">
            <Check className="w-4 h-4 text-success" />
          </div>
          <div>
            <p className="text-xs font-medium text-foreground">Nouvelle conversion !</p>
            <p className="text-[10px] text-foreground-muted">Il y a 2 minutes</p>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

// Compteur animé pour les stats
function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    
    return () => clearInterval(timer);
  }, [target]);
  
  return <span>{count}{suffix}</span>;
}

export function Hero() {
  return (
    <section 
      className="relative min-h-screen flex items-center overflow-hidden pt-20 pb-12"
      aria-labelledby="hero-heading"
      itemScope 
      itemType="https://schema.org/Organization"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 grid-pattern opacity-30" aria-hidden="true" />
      <div className="hero-glow" aria-hidden="true" />
      
      {/* Animated Gradient Orbs */}
      <motion.div
        animate={{
          y: [0, -30, 0],
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[150px]"
        aria-hidden="true"
      />
      <motion.div
        animate={{
          y: [0, 25, 0],
          scale: [1, 1.15, 1],
          opacity: [0.15, 0.35, 0.15],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-purple-500/15 rounded-full blur-[180px]"
        aria-hidden="true"
      />
      <motion.div
        animate={{
          x: [0, 20, 0],
          opacity: [0.1, 0.25, 0.1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
        className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-pink-500/10 rounded-full blur-[120px]"
        aria-hidden="true"
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-glass border border-glass-border rounded-full backdrop-blur-sm"
            >
              <Sparkles className="w-4 h-4 text-accent" aria-hidden="true" />
              <span className="text-sm text-foreground-secondary" itemProp="slogan">
                Agence digitale premium • Paris
              </span>
            </motion.div>

            {/* Main Headline - Optimisé SEO avec structure sémantique */}
            <motion.h1
              id="hero-heading"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl font-bold tracking-tight mb-6"
              itemProp="name"
            >
              <span className="text-foreground">Des sites web qui </span>
              <span className="gradient-text-accent">vendent.</span>
              <br />
              <span className="text-foreground">Du SEO qui </span>
              <span className="gradient-text-accent">performe.</span>
              <br />
              <span className="text-foreground">Du marketing qui </span>
              <span className="gradient-text-accent">scale.</span>
            </motion.h1>

            {/* Subtitle - Description pour SEO */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-foreground-secondary max-w-xl mx-auto lg:mx-0 mb-8"
              itemProp="description"
            >
              Transformez votre présence digitale en <strong>machine de croissance</strong>.
              Sites performants, acquisition qualifiée, résultats mesurables.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10"
            >
              <Link
                href="/pricing"
                className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent hover:bg-accent-hover text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-glow overflow-hidden w-full sm:w-auto"
                aria-label="Découvrir nos offres et tarifs"
              >
                <span className="relative z-10">Voir les offres</span>
                <ArrowRight className="w-5 h-5 relative z-10 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-accent via-purple-500 to-accent bg-[length:200%_100%]"
                  animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  style={{ opacity: 0.5 }}
                  aria-hidden="true"
                />
              </Link>
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-glass border border-glass-border text-foreground font-semibold rounded-xl transition-all duration-300 hover:bg-glass-hover hover:border-white/20 w-full sm:w-auto"
                aria-label="Réserver une consultation gratuite"
              >
                <Play className="w-5 h-5 text-accent" aria-hidden="true" />
                <span>Consultation gratuite</span>
              </Link>
            </motion.div>

            {/* Trust Indicators avec vraies données */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-3"
            >
              {[
                { icon: Check, text: "150+ clients satisfaits", color: "text-success" },
                { icon: Zap, text: "Livraison 48-72h", color: "text-accent" },
                { icon: TrendingUp, text: "ROI garanti", color: "text-purple-400" },
              ].map((item, i) => (
                <motion.div 
                  key={item.text}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
                  className="flex items-center gap-2 text-sm text-foreground-secondary"
                >
                  <item.icon className={`w-4 h-4 ${item.color}`} aria-hidden="true" />
                  <span>{item.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Column - Visual */}
          <motion.div 
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <HeroVisual />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:block"
        aria-label="Faire défiler vers le bas"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-7 h-12 border-2 border-foreground-muted/30 rounded-full flex justify-center pt-3"
        >
          <motion.div
            animate={{ opacity: [0.3, 1, 0.3], y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-2 h-2 bg-accent rounded-full"
          />
        </motion.div>
      </motion.div>

      {/* Schema.org structured data - invisible */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "Agency Premium",
            "description": "Agence digitale premium spécialisée en création de sites web, SEO et marketing digital à Paris",
            "url": "https://agency-premium.fr",
            "logo": "https://agency-premium.fr/logo.png",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Paris",
              "addressCountry": "FR"
            },
            "priceRange": "€€€",
            "openingHours": "Mo-Fr 09:00-18:00",
            "sameAs": [
              "https://linkedin.com/company/agency-premium",
              "https://twitter.com/agencypremium"
            ],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Services digitaux",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Création de site web",
                    "description": "Sites vitrines et e-commerce performants"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Référencement SEO",
                    "description": "Optimisation pour les moteurs de recherche"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Marketing Digital",
                    "description": "Stratégies d'acquisition et conversion"
                  }
                }
              ]
            }
          })
        }}
      />
    </section>
  );
}
