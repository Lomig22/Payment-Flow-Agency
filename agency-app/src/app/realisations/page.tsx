"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { projects, projectCategories } from "@/data/projects";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ArrowUpRight, ExternalLink, Filter } from "lucide-react";

export default function RealisationsPage() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen pt-32 pb-20">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <SectionHeader
          badge="Portfolio"
          title={
            <>
              Nos <span className="gradient-text-accent">réalisations</span>
            </>
          }
          description="Découvrez nos projets et les résultats concrets que nous avons obtenus pour nos clients."
        />

        {/* Category filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-12"
        >
          <Filter className="w-5 h-5 text-foreground-muted mr-2" />
          {projectCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-accent text-white"
                  : "bg-glass border border-glass-border text-foreground-secondary hover:text-foreground hover:border-accent/30"
              }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="group"
              >
                <Link href={`/realisations/${project.id}`}>
                  <div className="relative h-full bg-glass border border-glass-border rounded-2xl overflow-hidden transition-all duration-500 hover:border-accent/30 hover:-translate-y-2 hover:shadow-glow-sm">
                    {/* Image placeholder */}
                    <div className="relative h-52 bg-gradient-to-br from-background-tertiary to-background-secondary overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-24 h-24 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                          <span className="text-3xl font-bold text-accent">
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
                      {/* Featured badge */}
                      {project.featured && (
                        <div className="absolute top-3 right-3 px-2.5 py-1 bg-accent text-white text-xs font-medium rounded-full">
                          Featured
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      {/* Category badge */}
                      <span className="inline-block px-3 py-1 text-xs font-medium text-accent bg-accent/10 border border-accent/20 rounded-full mb-3">
                        {projectCategories.find((c) => c.id === project.category)?.label}
                      </span>

                      <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                        {project.title}
                        <ArrowUpRight className="w-4 h-4 text-foreground-muted opacity-0 group-hover:opacity-100 transition-opacity" />
                      </h3>

                      <p className="text-foreground-muted text-sm mb-1">
                        {project.client}
                      </p>

                      <p className="text-foreground-secondary text-sm mb-4 line-clamp-2">
                        {project.description}
                      </p>

                      {/* Metrics */}
                      <div className="flex flex-wrap gap-3 pt-4 border-t border-glass-border">
                        {project.metrics.slice(0, 2).map((metric, idx) => (
                          <div key={idx} className="flex items-center gap-1.5 text-xs">
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
          </AnimatePresence>
        </motion.div>

        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-foreground-muted">
              Aucun projet trouvé dans cette catégorie.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
