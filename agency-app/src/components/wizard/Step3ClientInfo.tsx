"use client";

import { motion } from "framer-motion";
import { useWizardStore } from "@/lib/wizard-store";
import { Input } from "@/components/ui/Input";
import { ArrowRight, ArrowLeft, User, Building, Mail, Phone, MapPin } from "lucide-react";

export function Step3ClientInfo() {
  const { clientInfo, setClientInfo, nextStep, prevStep } = useWizardStore();

  const handleChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setClientInfo({ [field]: e.target.value });
  };

  const isFormValid = () => {
    return (
      clientInfo.firstName.trim() !== "" &&
      clientInfo.lastName.trim() !== "" &&
      clientInfo.company.trim() !== "" &&
      clientInfo.email.trim() !== "" &&
      clientInfo.phone.trim() !== ""
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
          Vos coordonnées
        </h2>
        <p className="text-foreground-secondary">
          Ces informations seront utilisées pour établir votre devis et contrat
        </p>
      </div>

      <div className="max-w-2xl mx-auto space-y-6">
        {/* Personal info */}
        <div className="p-6 bg-glass border border-glass-border rounded-2xl space-y-4">
          <div className="flex items-center gap-2 text-foreground mb-2">
            <User className="w-5 h-5 text-accent" />
            <span className="font-medium">Informations personnelles</span>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <Input
              label="Prénom"
              placeholder="Jean"
              value={clientInfo.firstName}
              onChange={handleChange("firstName")}
              required
            />
            <Input
              label="Nom"
              placeholder="Dupont"
              value={clientInfo.lastName}
              onChange={handleChange("lastName")}
              required
            />
          </div>
        </div>

        {/* Company info */}
        <div className="p-6 bg-glass border border-glass-border rounded-2xl space-y-4">
          <div className="flex items-center gap-2 text-foreground mb-2">
            <Building className="w-5 h-5 text-accent" />
            <span className="font-medium">Entreprise</span>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <Input
              label="Nom de l'entreprise"
              placeholder="Ma Société SAS"
              value={clientInfo.company}
              onChange={handleChange("company")}
              required
            />
            <Input
              label="SIRET"
              placeholder="123 456 789 00012"
              value={clientInfo.siret}
              onChange={handleChange("siret")}
              helperText="Optionnel - pour la facturation"
            />
          </div>
        </div>

        {/* Contact info */}
        <div className="p-6 bg-glass border border-glass-border rounded-2xl space-y-4">
          <div className="flex items-center gap-2 text-foreground mb-2">
            <Mail className="w-5 h-5 text-accent" />
            <span className="font-medium">Contact</span>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <Input
              label="Email"
              type="email"
              placeholder="jean@masociete.fr"
              value={clientInfo.email}
              onChange={handleChange("email")}
              required
            />
            <Input
              label="Téléphone"
              type="tel"
              placeholder="06 12 34 56 78"
              value={clientInfo.phone}
              onChange={handleChange("phone")}
              required
            />
          </div>
        </div>

        {/* Address */}
        <div className="p-6 bg-glass border border-glass-border rounded-2xl space-y-4">
          <div className="flex items-center gap-2 text-foreground mb-2">
            <MapPin className="w-5 h-5 text-accent" />
            <span className="font-medium">Adresse du siège</span>
          </div>
          <Input
            label="Adresse"
            placeholder="123 rue de la République"
            value={clientInfo.address}
            onChange={handleChange("address")}
          />
          <div className="grid md:grid-cols-2 gap-4">
            <Input
              label="Code postal"
              placeholder="75001"
              value={clientInfo.postalCode}
              onChange={handleChange("postalCode")}
            />
            <Input
              label="Ville"
              placeholder="Paris"
              value={clientInfo.city}
              onChange={handleChange("city")}
            />
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between pt-4 max-w-2xl mx-auto">
        <button
          onClick={prevStep}
          className="inline-flex items-center gap-2 px-6 py-3 bg-glass border border-glass-border text-foreground font-medium rounded-xl transition-all duration-300 hover:bg-glass-hover"
        >
          <ArrowLeft className="w-5 h-5" />
          Retour
        </button>
        <button
          onClick={nextStep}
          disabled={!isFormValid()}
          className="group inline-flex items-center gap-2 px-8 py-4 bg-accent hover:bg-accent-hover text-white font-medium rounded-xl transition-all duration-300 hover:shadow-glow-sm disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-none"
        >
          Continuer vers le paiement
          <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </motion.div>
  );
}
