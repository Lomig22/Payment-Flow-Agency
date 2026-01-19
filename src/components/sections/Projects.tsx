"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { featuredProjects } from "@/data/projects";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ArrowRight, ArrowUpRight, ExternalLink } from "lucide-react";

export function Projects() {
  return (
    <section className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        <SectionHeader
          badge="Nos réalisations"
          title={
            <>
              Des projets qui <span className="gradient-text-accent">performent</span>
            </>
          }
          description="Découvrez comment nous avons aidé nos clients à atteindre leurs objectifs business."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <Link href={`/realisations/${project.id}`}>
                <div className="relative h-full bg-glass border border-glass-border rounded-2xl overflow-hidden transition-all duration-500 hover:border-accent/30 hover:-translate-y-2 hover:shadow-glow-sm">
                  {/* Image placeholder */}
                  <div className="relative h-48 bg-gradient-to-br from-background-tertiary to-background-secondary overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                        <span className="text-2xl font-bold text-accent">
                          {project.title.charAt(0)}
                        </span>
                      </div>
                    </div>
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-accent/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex items-center gap-2 text-white font-medium">
                        <span>Voir le projet</span>
                        <ExternalLink className="w-5 h-5" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Category badge */}
                    <span className="inline-block px-3 py-1 text-xs font-medium text-accent bg-accent/10 border border-accent/20 rounded-full mb-3">
                      {project.category}
                    </span>

                    <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                      {project.title}
                      <ArrowUpRight className="w-4 h-4 text-foreground-muted opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h3>

                    <p className="text-foreground-secondary text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Metrics */}
                    <div className="flex flex-wrap gap-3">
                      {project.metrics.slice(0, 2).map((metric, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-1.5 text-xs"
                        >
                          <span className="text-accent font-semibold">
                            {metric.value}
                          </span>
                          <span className="text-foreground-muted">
                            {metric.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
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
            href="/realisations"
            className="inline-flex items-center gap-2 px-6 py-3 bg-glass border border-glass-border text-foreground font-medium rounded-xl transition-all duration-300 hover:bg-glass-hover hover:border-accent/30 group"
          >
            Voir tous les projets
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
