"use client";

import { useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { AnimatePresence } from "framer-motion";
import { useWizardStore } from "@/lib/wizard-store";
import {
  WizardProgress,
  WizardPriceSummary,
  Step1PlanSelection,
  Step2Options,
  Step3ClientInfo,
  Step4Payment,
} from "@/components/wizard";
import { Loader2 } from "lucide-react";

function PricingContent() {
  const searchParams = useSearchParams();
  const { currentStep, setSelectedPlan } = useWizardStore();

  // Handle plan selection from URL params
  useEffect(() => {
    const planParam = searchParams.get("plan");
    if (planParam && ["starter", "business", "custom"].includes(planParam)) {
      setSelectedPlan(planParam);
    }
  }, [searchParams, setSelectedPlan]);

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <Step1PlanSelection />;
      case 2:
        return <Step2Options />;
      case 3:
        return <Step3ClientInfo />;
      case 4:
        return <Step4Payment />;
      default:
        return <Step1PlanSelection />;
    }
  };

  return (
    <>
      {/* Progress bar */}
      <WizardProgress />

      {/* Main content */}
      <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Wizard steps */}
        <div className="lg:col-span-2">
          <AnimatePresence mode="wait">{renderStep()}</AnimatePresence>
        </div>

        {/* Price summary - hidden on step 4 (already shown there) */}
        {currentStep < 4 && (
          <div className="hidden lg:block">
            <WizardPriceSummary />
          </div>
        )}
      </div>
    </>
  );
}

function LoadingFallback() {
  return (
    <div className="flex items-center justify-center py-20">
      <Loader2 className="w-8 h-8 animate-spin text-accent" />
    </div>
  );
}

export default function PricingPage() {
  return (
    <div className="min-h-screen pt-32 pb-20 relative">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[50%] bg-gradient-to-b from-accent/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Page header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Configurez votre <span className="gradient-text-accent">offre</span>
          </h1>
          <p className="text-lg text-foreground-secondary max-w-2xl mx-auto">
            Personnalisez votre projet en quelques clics et obtenez votre prix en temps réel
          </p>
        </div>

        <Suspense fallback={<LoadingFallback />}>
          <PricingContent />
        </Suspense>
      </div>
    </div>
  );
}
