"use client";

import { motion } from "framer-motion";
import { useWizardStore } from "@/lib/wizard-store";
import { ArrowLeft, CreditCard, Shield, Check, Sparkles } from "lucide-react";

export function Step4Payment() {
  const {
    prevStep,
    getTotalPrice,
    getSelectedPlanDetails,
    getSelectedOptionsDetails,
    clientInfo,
  } = useWizardStore();

  const { oneTime, monthly } = getTotalPrice();
  const plan = getSelectedPlanDetails();
  const options = getSelectedOptionsDetails();

  // Generate Stripe Payment Link (mock)
  const handlePayment = () => {
    // In production, this would generate a dynamic Stripe Payment Link
    // based on the selected options and prices
    const paymentData = {
      plan: plan?.id,
      options: options.map((o) => o.id),
      client: clientInfo,
      total: { oneTime, monthly },
    };
    
    console.log("Payment data:", paymentData);
    
    // For demo, redirect to a placeholder
    alert(
      `Redirection vers Stripe avec un montant de ${oneTime}€ HT` +
        (monthly > 0 ? ` + ${monthly}€/mois` : "")
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-8"
    >
      <div className="text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
          Finalisez votre commande
        </h2>
        <p className="text-foreground-secondary">
          Vérifiez votre récapitulatif et procédez au paiement
        </p>
      </div>

      <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Order summary */}
        <div className="p-6 bg-glass border border-glass-border rounded-2xl">
          <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-accent" />
            Récapitulatif de commande
          </h3>

          {/* Plan */}
          {plan && (
            <div className="py-3 border-b border-glass-border">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-foreground">{plan.name}</p>
                  <p className="text-sm text-foreground-muted">Offre de base</p>
                </div>
                <p className="font-semibold text-foreground">
                  {plan.price ? `${plan.price.toLocaleString("fr-FR")}€` : "Sur devis"}
                </p>
              </div>
            </div>
          )}

          {/* Options */}
          {options.length > 0 && (
            <div className="py-3 border-b border-glass-border space-y-2">
              <p className="text-sm font-medium text-foreground-secondary mb-2">
                Options ({options.length})
              </p>
              {options.map((option) => (
                <div key={option.id} className="flex items-center justify-between text-sm">
                  <span className="text-foreground-muted">{option.label}</span>
                  <span className="text-foreground">
                    +{option.price}€
                    {option.priceType === "monthly" && "/mois"}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Totals */}
          <div className="py-4 space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-foreground-secondary">Total unique</span>
              <span className="text-2xl font-bold text-foreground">
                {oneTime.toLocaleString("fr-FR")}€
                <span className="text-sm font-normal text-foreground-muted ml-1">HT</span>
              </span>
            </div>
            {monthly > 0 && (
              <div className="flex items-center justify-between">
                <span className="text-foreground-secondary">Mensuel</span>
                <span className="text-lg font-semibold text-accent">
                  +{monthly.toLocaleString("fr-FR")}€
                  <span className="text-sm font-normal text-foreground-muted ml-1">/mois</span>
                </span>
              </div>
            )}
          </div>

          {/* Deposit note */}
          <div className="p-3 bg-accent/10 border border-accent/20 rounded-xl">
            <p className="text-sm text-foreground">
              <strong>Acompte de 50%</strong> à la commande :{" "}
              <span className="text-accent font-semibold">
                {Math.ceil(oneTime / 2).toLocaleString("fr-FR")}€
              </span>
            </p>
          </div>
        </div>

        {/* Client info summary & payment */}
        <div className="space-y-6">
          {/* Client info */}
          <div className="p-6 bg-glass border border-glass-border rounded-2xl">
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Vos informations
            </h3>
            <div className="space-y-2 text-sm">
              <p>
                <span className="text-foreground-muted">Nom :</span>{" "}
                <span className="text-foreground">
                  {clientInfo.firstName} {clientInfo.lastName}
                </span>
              </p>
              <p>
                <span className="text-foreground-muted">Entreprise :</span>{" "}
                <span className="text-foreground">{clientInfo.company}</span>
              </p>
              <p>
                <span className="text-foreground-muted">Email :</span>{" "}
                <span className="text-foreground">{clientInfo.email}</span>
              </p>
              <p>
                <span className="text-foreground-muted">Téléphone :</span>{" "}
                <span className="text-foreground">{clientInfo.phone}</span>
              </p>
            </div>
          </div>

          {/* Payment button */}
          <button
            onClick={handlePayment}
            className="w-full group inline-flex items-center justify-center gap-3 px-8 py-5 bg-accent hover:bg-accent-hover text-white font-medium text-lg rounded-xl transition-all duration-300 hover:shadow-glow"
          >
            <CreditCard className="w-6 h-6" />
            Payer et lancer mon projet
          </button>

          {/* Security badges */}
          <div className="flex items-center justify-center gap-4 text-foreground-muted text-sm">
            <div className="flex items-center gap-1.5">
              <Shield className="w-4 h-4 text-success" />
              <span>Paiement sécurisé</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-success" />
              <span>SSL 256-bit</span>
            </div>
          </div>

          {/* Stripe logo mock */}
          <div className="text-center">
            <p className="text-xs text-foreground-muted">
              Paiement sécurisé par{" "}
              <span className="font-semibold text-foreground">Stripe</span>
            </p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-start pt-4 max-w-3xl mx-auto">
        <button
          onClick={prevStep}
          className="inline-flex items-center gap-2 px-6 py-3 bg-glass border border-glass-border text-foreground font-medium rounded-xl transition-all duration-300 hover:bg-glass-hover"
        >
          <ArrowLeft className="w-5 h-5" />
          Modifier mes informations
        </button>
      </div>
    </motion.div>
  );
}
