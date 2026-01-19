"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-purple-500/5 to-pink-500/5" />
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      {/* Glowing orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-1/2 left-1/4 -translate-y-1/2 w-64 h-64 bg-accent/20 rounded-full blur-[100px]"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        className="absolute top-1/2 right-1/4 -translate-y-1/2 w-80 h-80 bg-purple-500/15 rounded-full blur-[120px]"
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Icon */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="inline-flex items-center justify-center w-16 h-16 mb-8 rounded-2xl bg-accent/10 border border-accent/20"
          >
            <Sparkles className="w-8 h-8 text-accent" />
          </motion.div>

          {/* Headline */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight mb-6">
            Prêt à <span className="gradient-text-accent">digitaliser</span> votre business ?
          </h2>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-foreground-secondary max-w-2xl mx-auto mb-10">
            Réservez un appel découverte gratuit de 30 minutes pour discuter de votre projet
            et découvrir comment nous pouvons vous aider à atteindre vos objectifs.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent hover:bg-accent-hover text-white font-medium rounded-xl transition-all duration-300 hover:shadow-glow overflow-hidden"
            >
              <span className="relative z-10">Réserver ma consultation</span>
              <ArrowRight className="w-5 h-5 relative z-10 transition-transform group-hover:translate-x-1" />
              <div className="absolute inset-0 bg-gradient-to-r from-accent via-purple-500 to-accent bg-[length:200%_100%] animate-gradient opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-glass border border-glass-border text-foreground font-medium rounded-xl transition-all duration-300 hover:bg-glass-hover hover:border-white/15"
            >
              Voir les tarifs
            </Link>
          </div>

          {/* Trust note */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-8 text-foreground-muted text-sm"
          >
            Sans engagement • Réponse sous 24h • 100% gratuit
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
