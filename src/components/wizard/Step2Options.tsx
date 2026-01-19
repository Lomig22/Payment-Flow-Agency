"use client";

import { motion } from "framer-motion";
import { useWizardStore } from "@/lib/wizard-store";
import { pricingOptions } from "@/data/services";
import { Check, ArrowRight, ArrowLeft } from "lucide-react";

const categories = [
  { id: "tools", label: "Outils & Intégrations" },
  { id: "marketing", label: "Marketing & SEO" },
  { id: "support", label: "Support & Maintenance" },
];

export function Step2Options() {
  const { selectedOptions, toggleOption, nextStep, prevStep } = useWizardStore();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-8"
    >
      <div className="text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
          Personnalisez votre offre
        </h2>
        <p className="text-foreground-secondary">
          Ajoutez des options pour renforcer votre projet
        </p>
      </div>

      {/* Categories */}
      <div className="space-y-8">
        {categories.map((category) => {
          const categoryOptions = pricingOptions.filter(
            (o) => o.category === category.id
          );

          return (
            <div key={category.id}>
              <h3 className="text-lg font-semibold text-foreground mb-4">
                {category.label}
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {categoryOptions.map((option) => {
                  const isSelected = selectedOptions.includes(option.id);

                  return (
                    <motion.button
                      key={option.id}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => toggleOption(option.id)}
                      className={`relative text-left p-4 rounded-xl transition-all duration-300 ${
                        isSelected
                          ? "bg-accent/10 border-2 border-accent"
                          : "bg-glass border border-glass-border hover:border-accent/30 hover:bg-glass-hover"
                      }`}
                    >
                      {/* Selection indicator */}
                      <div
                        className={`absolute top-3 right-3 w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all ${
                          isSelected
                            ? "bg-accent border-accent"
                            : "border-glass-border"
                        }`}
                      >
                        {isSelected && <Check className="w-3 h-3 text-white" />}
                      </div>

                      {/* Icon */}
                      <div className="w-10 h-10 mb-3 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                        <option.icon className="w-5 h-5" />
                      </div>

                      {/* Content */}
                      <h4 className="font-medium text-foreground mb-1 pr-6">
                        {option.label}
                      </h4>
                      <p className="text-sm text-foreground-muted mb-2">
                        {option.description}
                      </p>

                      {/* Price */}
                      <div className="flex items-baseline gap-1">
                        <span className="text-lg font-semibold text-accent">
                          +{option.price}€
                        </span>
                        {option.priceType === "monthly" && (
                          <span className="text-sm text-foreground-muted">
                            /mois
                          </span>
                        )}
                      </div>
                    </motion.button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between pt-4">
        <button
          onClick={prevStep}
          className="inline-flex items-center gap-2 px-6 py-3 bg-glass border border-glass-border text-foreground font-medium rounded-xl transition-all duration-300 hover:bg-glass-hover"
        >
          <ArrowLeft className="w-5 h-5" />
          Retour
        </button>
        <button
          onClick={nextStep}
          className="group inline-flex items-center gap-2 px-8 py-4 bg-accent hover:bg-accent-hover text-white font-medium rounded-xl transition-all duration-300 hover:shadow-glow-sm"
        >
          Continuer
          <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </motion.div>
  );
}
