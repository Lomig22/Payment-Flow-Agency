"use client";

import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles, Calendar, CheckCircle, Clock, Shield } from "lucide-react";
import { useRef } from "react";

export function FinalCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const benefits = [
    { icon: Clock, text: "Appel de 30 min" },
    { icon: CheckCircle, text: "Sans engagement" },
    { icon: Shield, text: "100% gratuit" },
  ];

  return (
    <section 
      ref={ref}
      className="py-24 md:py-32 relative overflow-hidden"
      aria-labelledby="cta-heading"
    >
      {/* Enhanced background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background-secondary/50 to-background" />
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      {/* Animated glowing orbs */}
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
          x: [0, 20, 0],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-accent/15 rounded-full blur-[150px]"
        aria-hidden="true"
      />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.35, 0.15],
          x: [0, -20, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[180px]"
        aria-hidden="true"
      />
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.1, 0.25, 0.1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-pink-500/10 rounded-full blur-[200px]"
        aria-hidden="true"
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative p-8 md:p-12 lg:p-16 bg-glass backdrop-blur-xl border border-glass-border rounded-3xl overflow-hidden"
          >
            {/* Decorative gradient border */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-accent/20 via-transparent to-purple-500/20 opacity-50" />
            
            {/* Content */}
            <div className="relative z-10 text-center">
              {/* Animated Icon */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={isInView ? { scale: 1, rotate: 0 } : {}}
                transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
                className="inline-flex items-center justify-center w-20 h-20 mb-8 rounded-2xl bg-accent/10 border border-accent/30"
              >
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Sparkles className="w-10 h-10 text-accent" />
                </motion.div>
              </motion.div>

              {/* Headline with animation */}
              <motion.h2
                id="cta-heading"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight mb-6"
              >
                Prêt à <span className="gradient-text-accent">transformer</span> votre business ?
              </motion.h2>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-lg md:text-xl text-foreground-secondary max-w-2xl mx-auto mb-10"
              >
                Réservez un <strong className="text-foreground">appel découverte gratuit</strong> pour discuter 
                de votre projet et découvrir comment nous pouvons vous aider à atteindre vos objectifs.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
              >
                <Link
                  href="/contact"
                  className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 bg-accent hover:bg-accent-hover text-white font-semibold text-lg rounded-xl transition-all duration-300 hover:shadow-glow overflow-hidden w-full sm:w-auto"
                  aria-label="Réserver une consultation gratuite"
                >
                  <Calendar className="w-5 h-5 relative z-10" />
                  <span className="relative z-10">Réserver ma consultation</span>
                  <ArrowRight className="w-5 h-5 relative z-10 transition-transform group-hover:translate-x-1" />
                  
                  {/* Animated gradient background */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-accent via-purple-500 to-accent bg-[length:200%_100%]"
                    animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    style={{ opacity: 0.6 }}
                  />
                </Link>
                
                <Link
                  href="/pricing"
                  className="group inline-flex items-center justify-center gap-2 px-8 py-5 bg-glass border border-glass-border text-foreground font-semibold rounded-xl transition-all duration-300 hover:bg-glass-hover hover:border-accent/30 w-full sm:w-auto"
                >
                  Voir les tarifs
                  <ArrowRight className="w-5 h-5 text-accent transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>

              {/* Trust indicators */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="flex flex-wrap items-center justify-center gap-6"
              >
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit.text}
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                    className="flex items-center gap-2 text-foreground-secondary"
                  >
                    <benefit.icon className="w-5 h-5 text-success" />
                    <span className="text-sm font-medium">{benefit.text}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Floating decorative elements */}
            <motion.div
              animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-8 right-8 w-16 h-16 bg-accent/10 rounded-full blur-xl"
              aria-hidden="true"
            />
            <motion.div
              animate={{ y: [0, 8, 0], rotate: [0, -3, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-8 left-8 w-20 h-20 bg-purple-500/10 rounded-full blur-xl"
              aria-hidden="true"
            />
          </motion.div>

          {/* Bottom testimonial/social proof */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-12 text-center"
          >
            <div className="flex items-center justify-center gap-3 mb-3">
              {/* Avatar stack */}
              <div className="flex -space-x-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-accent/40 to-purple-500/40 border-2 border-background flex items-center justify-center"
                  >
                    <span className="text-xs font-medium text-white">
                      {String.fromCharCode(65 + i - 1)}
                    </span>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
            <p className="text-foreground-muted text-sm">
              Rejoint par <strong className="text-foreground">150+ entrepreneurs</strong> qui nous font confiance
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
