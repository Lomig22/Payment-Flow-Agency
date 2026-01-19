"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useWizardStore } from "@/lib/wizard-store";
import { ShoppingCart, Sparkles } from "lucide-react";

export function WizardPriceSummary() {
  const { getTotalPrice, getSelectedPlanDetails, getSelectedOptionsDetails } =
    useWizardStore();

  const { oneTime, monthly } = getTotalPrice();
  const plan = getSelectedPlanDetails();
  const options = getSelectedOptionsDetails();

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="sticky top-24"
    >
      <div className="p-6 bg-glass border border-glass-border rounded-2xl backdrop-blur-xl">
        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-glass-border">
          <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center">
            <ShoppingCart className="w-5 h-5 text-accent" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground">Récapitulatif</h3>
            <p className="text-sm text-foreground-muted">Votre configuration</p>
          </div>
        </div>

        {/* Plan */}
        {plan && (
          <div className="mb-4 pb-4 border-b border-glass-border">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-foreground">{plan.name}</p>
                <p className="text-sm text-foreground-muted">Offre de base</p>
              </div>
              <p className="font-semibold text-foreground">
                {plan.price ? `${plan.price.toLocaleString("fr-FR")}€` : "Devis"}
              </p>
            </div>
          </div>
        )}

        {/* Options */}
        <AnimatePresence mode="popLayout">
          {options.length > 0 && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mb-4 pb-4 border-b border-glass-border"
            >
              <p className="text-sm font-medium text-foreground-secondary mb-3">
                Options sélectionnées
              </p>
              <div className="space-y-2">
                {options.map((option) => (
                  <motion.div
                    key={option.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    className="flex items-center justify-between text-sm"
                  >
                    <span className="text-foreground-muted">{option.label}</span>
                    <span className="text-foreground">
                      {option.price}€
                      {option.priceType === "monthly" && (
                        <span className="text-foreground-muted">/mois</span>
                      )}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Total */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-foreground-secondary">Total unique</span>
            <motion.span
              key={oneTime}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-2xl font-bold text-foreground"
            >
              {oneTime.toLocaleString("fr-FR")}€
              <span className="text-sm font-normal text-foreground-muted ml-1">
                HT
              </span>
            </motion.span>
          </div>

          <AnimatePresence>
            {monthly > 0 && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="flex items-center justify-between"
              >
                <span className="text-foreground-secondary">Mensuel</span>
                <motion.span
                  key={monthly}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-lg font-semibold text-accent"
                >
                  +{monthly.toLocaleString("fr-FR")}€
                  <span className="text-sm font-normal text-foreground-muted ml-1">
                    /mois
                  </span>
                </motion.span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Savings badge */}
        {options.length >= 3 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mt-4 p-3 bg-success/10 border border-success/20 rounded-xl flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-success" />
            <span className="text-sm text-success">
              Pack de 3+ options : -10% appliqué
            </span>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
