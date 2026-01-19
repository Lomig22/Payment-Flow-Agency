"use client";

import { motion } from "framer-motion";
import { detailedServices } from "@/data/services";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        <SectionHeader
          badge="Nos services"
          title={
            <>
              Solutions <span className="gradient-text-accent">sur-mesure</span>
            </>
          }
          description="Des offres adaptées à vos besoins, de la startup à l'entreprise établie."
        />

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {detailedServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full p-6 bg-glass border border-glass-border rounded-2xl backdrop-blur-xl transition-all duration-300 hover:bg-glass-hover hover:border-accent/30 flex items-start gap-4">
                {/* Icon */}
                <div className="w-12 h-12 shrink-0 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent group-hover:scale-110 transition-transform">
                  <service.icon className="w-6 h-6" />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    {service.title}
                  </h3>
                  <p className="text-foreground-secondary text-sm mb-3">
                    {service.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-accent font-medium text-sm">
                      {service.price}
                    </span>
                    <ArrowRight className="w-4 h-4 text-foreground-muted opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <Link
            href="/pricing"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent-hover text-white font-medium rounded-xl transition-all duration-300 hover:shadow-glow-sm group"
          >
            Voir toutes nos offres
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
