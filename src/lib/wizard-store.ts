"use client";

import { create } from "zustand";
import { pricingPlans, pricingOptions } from "@/data/services";

export interface ClientInfo {
  firstName: string;
  lastName: string;
  company: string;
  siret: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  postalCode: string;
}

export interface WizardState {
  // Step 1: Plan selection
  selectedPlan: string;
  
  // Step 2: Options
  selectedOptions: string[];
  
  // Step 3: Client info
  clientInfo: ClientInfo;
  
  // Current step
  currentStep: number;
  
  // Actions
  setSelectedPlan: (planId: string) => void;
  toggleOption: (optionId: string) => void;
  setClientInfo: (info: Partial<ClientInfo>) => void;
  setCurrentStep: (step: number) => void;
  nextStep: () => void;
  prevStep: () => void;
  
  // Computed
  getTotalPrice: () => { oneTime: number; monthly: number };
  getSelectedPlanDetails: () => typeof pricingPlans[0] | undefined;
  getSelectedOptionsDetails: () => typeof pricingOptions;
  reset: () => void;
}

const initialClientInfo: ClientInfo = {
  firstName: "",
  lastName: "",
  company: "",
  siret: "",
  email: "",
  phone: "",
  address: "",
  city: "",
  postalCode: "",
};

export const useWizardStore = create<WizardState>((set, get) => ({
  selectedPlan: "starter",
  selectedOptions: [],
  clientInfo: initialClientInfo,
  currentStep: 1,

  setSelectedPlan: (planId) => set({ selectedPlan: planId }),

  toggleOption: (optionId) =>
    set((state) => ({
      selectedOptions: state.selectedOptions.includes(optionId)
        ? state.selectedOptions.filter((id) => id !== optionId)
        : [...state.selectedOptions, optionId],
    })),

  setClientInfo: (info) =>
    set((state) => ({
      clientInfo: { ...state.clientInfo, ...info },
    })),

  setCurrentStep: (step) => set({ currentStep: step }),

  nextStep: () =>
    set((state) => ({
      currentStep: Math.min(state.currentStep + 1, 4),
    })),

  prevStep: () =>
    set((state) => ({
      currentStep: Math.max(state.currentStep - 1, 1),
    })),

  getTotalPrice: () => {
    const state = get();
    const plan = pricingPlans.find((p) => p.id === state.selectedPlan);
    const basePrice = plan?.price || 0;

    let oneTimeTotal = basePrice;
    let monthlyTotal = 0;

    state.selectedOptions.forEach((optionId) => {
      const option = pricingOptions.find((o) => o.id === optionId);
      if (option) {
        if (option.priceType === "monthly") {
          monthlyTotal += option.price;
        } else {
          oneTimeTotal += option.price;
        }
      }
    });

    return { oneTime: oneTimeTotal, monthly: monthlyTotal };
  },

  getSelectedPlanDetails: () => {
    const state = get();
    return pricingPlans.find((p) => p.id === state.selectedPlan);
  },

  getSelectedOptionsDetails: () => {
    const state = get();
    return pricingOptions.filter((o) => state.selectedOptions.includes(o.id));
  },

  reset: () =>
    set({
      selectedPlan: "starter",
      selectedOptions: [],
      clientInfo: initialClientInfo,
      currentStep: 1,
    }),
}));
