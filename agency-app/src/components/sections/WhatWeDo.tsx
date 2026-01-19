"use client";

import { motion } from "framer-motion";
import { mainServices } from "@/data/services";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export function WhatWeDo() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background-secondary/50 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <SectionHeader
          badge="Ce que nous faisons"
          title={
            <>
              Une expertise <span className="gradient-text-accent">360°</span> pour votre croissance
            </>
          }
          description="Des solutions digitales complètes, de la conception à l'acquisition, pour transformer votre business."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6"
        >
          {mainServices.map((service, index) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="group relative"
            >
              <Link href={`/#${service.id}`}>
                <div className="h-full p-8 bg-glass border border-glass-border rounded-2xl backdrop-blur-xl transition-all duration-500 hover:bg-glass-hover hover:border-accent/30 hover:-translate-y-2 hover:shadow-glow-sm">
                  {/* Icon */}
                  <div className="w-14 h-14 mb-6 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent group-hover:scale-110 group-hover:bg-accent/20 transition-all duration-300">
                    <service.icon className="w-7 h-7" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-foreground mb-3 flex items-center gap-2">
                    {service.title}
                    <ArrowUpRight className="w-5 h-5 text-foreground-muted opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>

                  {/* Description */}
                  <p className="text-foreground-secondary mb-6">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 text-sm text-foreground-muted"
                      >
                        <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Hover glow effect */}
                  <div className="absolute inset-0 rounded-2xl bg-card-glow opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
