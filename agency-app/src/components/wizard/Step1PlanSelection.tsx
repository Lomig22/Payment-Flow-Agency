"use client";

import { motion } from "framer-motion";
import { useWizardStore } from "@/lib/wizard-store";
import { pricingPlans } from "@/data/services";
import { Check, Star, ArrowRight } from "lucide-react";

export function Step1PlanSelection() {
  const { selectedPlan, setSelectedPlan, nextStep } = useWizardStore();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-8"
    >
      <div className="text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
          Choisissez votre offre
        </h2>
        <p className="text-foreground-secondary">
          Sélectionnez l'offre qui correspond le mieux à vos besoins
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {pricingPlans.map((plan, index) => (
          <motion.button
            key={plan.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            onClick={() => setSelectedPlan(plan.id)}
            className={`relative text-left p-6 rounded-2xl transition-all duration-300 ${
              selectedPlan === plan.id
                ? "bg-accent/10 border-2 border-accent shadow-glow-sm"
                : "bg-glass border border-glass-border hover:border-accent/30 hover:bg-glass-hover"
            }`}
          >
            {/* Popular badge */}
            {plan.popular && (
              <div className="absolute -top-3 left-4">
                <div className="flex items-center gap-1 px-2.5 py-0.5 bg-accent text-white text-xs font-medium rounded-full">
                  <Star className="w-3 h-3 fill-current" />
                  Recommandé
                </div>
              </div>
            )}

            {/* Selection indicator */}
            <div
              className={`absolute top-4 right-4 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                selectedPlan === plan.id
                  ? "bg-accent border-accent"
                  : "border-glass-border"
              }`}
            >
              {selectedPlan === plan.id && (
                <Check className="w-4 h-4 text-white" />
              )}
            </div>

            {/* Plan name */}
            <h3 className="text-lg font-semibold text-foreground mb-2 pr-8">
              {plan.name}
            </h3>

            {/* Description */}
            <p className="text-sm text-foreground-secondary mb-4">
              {plan.description}
            </p>

            {/* Price */}
            <div className="mb-4">
              {plan.price ? (
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-foreground">
                    {plan.price.toLocaleString("fr-FR")}€
                  </span>
                  <span className="text-foreground-muted text-sm">HT</span>
                </div>
              ) : (
                <div className="text-2xl font-bold gradient-text-accent">
                  Sur devis
                </div>
              )}
            </div>

            {/* Features */}
            <ul className="space-y-2">
              {plan.features.slice(0, 4).map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm">
                  <div className="w-4 h-4 shrink-0 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center mt-0.5">
                    <Check className="w-2.5 h-2.5 text-accent" />
                  </div>
                  <span className="text-foreground-muted">{feature}</span>
                </li>
              ))}
            </ul>
          </motion.button>
        ))}
      </div>

      {/* Next button */}
      <div className="flex justify-center pt-4">
        <button
          onClick={nextStep}
          className="group inline-flex items-center gap-2 px-8 py-4 bg-accent hover:bg-accent-hover text-white font-medium rounded-xl transition-all duration-300 hover:shadow-glow-sm"
        >
          Continuer avec les options
          <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </motion.div>
  );
}
