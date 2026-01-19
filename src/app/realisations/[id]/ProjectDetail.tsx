"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Project } from "@/data/projects";
import {
  ArrowLeft,
  ArrowUpRight,
  Target,
  Lightbulb,
  TrendingUp,
  Code,
} from "lucide-react";

interface ProjectDetailProps {
  project: Project;
  categoryLabel: string;
}

export function ProjectDetail({ project, categoryLabel }: ProjectDetailProps) {
  return (
    <div className="min-h-screen pt-32 pb-20">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Back button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Link
            href="/realisations"
            className="inline-flex items-center gap-2 text-foreground-secondary hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Retour aux réalisations
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <span className="inline-block px-3 py-1 text-xs font-medium text-accent bg-accent/10 border border-accent/20 rounded-full mb-4">
            {categoryLabel}
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {project.title}
          </h1>
          <p className="text-lg text-foreground-secondary max-w-3xl">
            {project.description}
          </p>
          <p className="text-foreground-muted mt-2">Client: {project.client}</p>
        </motion.div>

        {/* Hero image placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="relative h-[400px] md:h-[500px] bg-gradient-to-br from-background-tertiary to-background-secondary rounded-3xl overflow-hidden mb-16"
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 rounded-3xl bg-accent/10 border border-accent/20 flex items-center justify-center">
              <span className="text-5xl font-bold text-accent">
                {project.title.charAt(0)}
              </span>
            </div>
          </div>
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Objective */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="p-8 bg-glass border border-glass-border rounded-2xl"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                  <Target className="w-5 h-5 text-accent" />
                </div>
                <h2 className="text-xl font-semibold text-foreground">Objectif</h2>
              </div>
              <p className="text-foreground-secondary">{project.objective}</p>
            </motion.div>

            {/* Solution */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="p-8 bg-glass border border-glass-border rounded-2xl"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                  <Lightbulb className="w-5 h-5 text-accent" />
                </div>
                <h2 className="text-xl font-semibold text-foreground">Solution</h2>
              </div>
              <p className="text-foreground-secondary">{project.solution}</p>
            </motion.div>

            {/* Result */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="p-8 bg-glass border border-glass-border rounded-2xl"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-success/10 border border-success/20 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-success" />
                </div>
                <h2 className="text-xl font-semibold text-foreground">Résultat</h2>
              </div>
              <p className="text-foreground-secondary">{project.result}</p>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Metrics */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="p-6 bg-glass border border-glass-border rounded-2xl"
            >
              <h3 className="text-lg font-semibold text-foreground mb-6">
                Résultats clés
              </h3>
              <div className="space-y-4">
                {project.metrics.map((metric, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between py-3 border-b border-glass-border last:border-0"
                  >
                    <span className="text-foreground-muted">{metric.label}</span>
                    <span className="text-xl font-bold text-accent">
                      {metric.value}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Technologies */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="p-6 bg-glass border border-glass-border rounded-2xl"
            >
              <div className="flex items-center gap-2 mb-4">
                <Code className="w-5 h-5 text-accent" />
                <h3 className="text-lg font-semibold text-foreground">
                  Technologies
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 text-sm bg-accent/10 border border-accent/20 text-accent rounded-lg"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="p-6 bg-accent/10 border border-accent/20 rounded-2xl"
            >
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Un projet similaire ?
              </h3>
              <p className="text-foreground-secondary text-sm mb-4">
                Discutons de vos objectifs et voyons comment nous pouvons vous aider.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 w-full justify-center px-6 py-3 bg-accent hover:bg-accent-hover text-white font-medium rounded-xl transition-all duration-300 hover:shadow-glow-sm group"
              >
                Parlons de votre projet
                <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
