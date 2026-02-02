"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { pricingPlans } from "@/data/services";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Check, ArrowRight, Star } from "lucide-react";

export function Pricing() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background-secondary/50 via-transparent to-background-secondary/50" />
      
      <div className="container mx-auto px-6 relative z-10">
        <SectionHeader
          badge="Nos offres"
          title={
            <>
              Des tarifs <span className="gradient-text-accent">transparents</span>
            </>
          }
          description="Choisissez l'offre adaptée à vos besoins et configurez-la selon vos objectifs."
        />

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`relative group ${plan.popular ? "md:-mt-4 md:mb-4" : ""}`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <motion.div 
                  className="absolute -top-3 left-1/2 -translate-x-1/2 z-10"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                >
                  <div className="flex items-center gap-1 px-3 py-1 bg-accent text-white text-xs font-medium rounded-full shadow-lg">
                    <Star className="w-3 h-3 fill-current" />
                    Recommandé
                  </div>
                </motion.div>
              )}

              <div
                className={`h-full p-8 rounded-2xl backdrop-blur-xl transition-all duration-200 ${
                  plan.popular
                    ? "bg-glass border-2 border-accent/50 shadow-glow-sm"
                    : "bg-glass border border-glass-border hover:border-accent/30 hover:shadow-glow-sm"
                }`}
              >
                {/* Header */}
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-foreground-secondary text-sm">
                    {plan.description}
                  </p>
                </div>

                {/* Price */}
                <div className="mb-6">
                  {plan.price ? (
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-bold text-foreground">
                        {plan.price.toLocaleString("fr-FR")}€
                      </span>
                      <span className="text-foreground-muted">HT</span>
                    </div>
                  ) : (
                    <div className="text-4xl font-bold gradient-text-accent">
                      Sur devis
                    </div>
                  )}
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-5 h-5 shrink-0 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center mt-0.5">
                        <Check className="w-3 h-3 text-accent" />
                      </div>
                      <span className="text-foreground-secondary text-sm">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link
                  href={`/pricing?plan=${plan.id}`}
                  className={`w-full inline-flex items-center justify-center gap-2 px-6 py-3 font-medium rounded-xl transition-all duration-300 group ${
                    plan.popular
                      ? "bg-accent hover:bg-accent-hover text-white hover:shadow-glow-sm"
                      : "bg-glass border border-glass-border text-foreground hover:bg-glass-hover hover:border-accent/30"
                  }`}
                >
                  {plan.cta}
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 text-center text-foreground-muted text-sm"
        >
          Tous les prix sont HT. Options et modules complémentaires disponibles.
          <br />
          Paiement sécurisé par Stripe. Acompte de 50% à la commande.
        </motion.p>
      </div>
    </section>
  );
}
