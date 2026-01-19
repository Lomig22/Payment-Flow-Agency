"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { useWizardStore } from "@/lib/wizard-store";

const steps = [
  { id: 1, label: "Offre" },
  { id: 2, label: "Options" },
  { id: 3, label: "Coordonnées" },
  { id: 4, label: "Paiement" },
];

export function WizardProgress() {
  const { currentStep, setCurrentStep } = useWizardStore();

  return (
    <div className="mb-12">
      <div className="flex items-center justify-between max-w-2xl mx-auto">
        {steps.map((step, index) => (
          <div key={step.id} className="flex items-center">
            {/* Step indicator */}
            <button
              onClick={() => step.id < currentStep && setCurrentStep(step.id)}
              disabled={step.id > currentStep}
              className="flex flex-col items-center gap-2 group"
            >
              <motion.div
                initial={false}
                animate={{
                  scale: currentStep === step.id ? 1.1 : 1,
                  backgroundColor:
                    step.id < currentStep
                      ? "rgb(34 197 94)" // success
                      : step.id === currentStep
                      ? "rgb(99 102 241)" // accent
                      : "rgba(255, 255, 255, 0.03)", // glass
                }}
                className={`relative w-10 h-10 rounded-full flex items-center justify-center border transition-colors ${
                  step.id <= currentStep
                    ? "border-transparent"
                    : "border-glass-border"
                } ${
                  step.id < currentStep
                    ? "cursor-pointer hover:opacity-80"
                    : ""
                }`}
              >
                {step.id < currentStep ? (
                  <Check className="w-5 h-5 text-white" />
                ) : (
                  <span
                    className={`text-sm font-medium ${
                      step.id === currentStep
                        ? "text-white"
                        : "text-foreground-muted"
                    }`}
                  >
                    {step.id}
                  </span>
                )}

                {/* Pulse effect for current step */}
                {step.id === currentStep && (
                  <motion.div
                    initial={{ scale: 1, opacity: 0.5 }}
                    animate={{ scale: 1.5, opacity: 0 }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                    }}
                    className="absolute inset-0 bg-accent rounded-full"
                  />
                )}
              </motion.div>

              <span
                className={`text-xs font-medium hidden sm:block ${
                  step.id <= currentStep
                    ? "text-foreground"
                    : "text-foreground-muted"
                }`}
              >
                {step.label}
              </span>
            </button>

            {/* Connector line */}
            {index < steps.length - 1 && (
              <div className="flex-1 mx-2 sm:mx-4 h-[2px] bg-glass-border relative overflow-hidden min-w-[40px] sm:min-w-[60px]">
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{
                    width: step.id < currentStep ? "100%" : "0%",
                  }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-y-0 left-0 bg-success"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
