"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Link from "next/link";
import { featuredProjects } from "@/data/projects";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ArrowRight, ArrowUpRight, TrendingUp, Eye, MousePointer } from "lucide-react";
import { useRef } from "react";

// Composant pour créer un visuel de projet dynamique
function ProjectVisual({ 
  title, 
  category, 
  index 
}: { 
  title: string; 
  category: string;
  index: number;
}) {
  const gradients = [
    "from-accent/30 via-purple-500/20 to-pink-500/30",
    "from-emerald-500/30 via-teal-500/20 to-cyan-500/30",
    "from-orange-500/30 via-amber-500/20 to-yellow-500/30",
    "from-rose-500/30 via-pink-500/20 to-fuchsia-500/30",
    "from-blue-500/30 via-indigo-500/20 to-violet-500/30",
    "from-lime-500/30 via-green-500/20 to-emerald-500/30",
  ];
  
  const gradient = gradients[index % gradients.length];
  
  return (
    <div className="relative h-52 overflow-hidden">
      {/* Animated gradient background */}
      <motion.div 
        className={`absolute inset-0 bg-gradient-to-br ${gradient}`}
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      {/* Floating elements */}
      <motion.div
        animate={{ y: [0, -8, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-4 right-4 w-16 h-12 bg-glass backdrop-blur-sm rounded-lg border border-white/10 flex items-center justify-center"
      >
        <TrendingUp className="w-6 h-6 text-success" />
      </motion.div>
      
      <motion.div
        animate={{ y: [0, 6, 0], rotate: [0, -3, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-4 left-4 w-20 h-10 bg-glass backdrop-blur-sm rounded-lg border border-white/10 flex items-center gap-2 px-3"
      >
        <Eye className="w-4 h-4 text-accent" />
        <span className="text-xs text-foreground font-medium">+247%</span>
      </motion.div>
      
      {/* Main visual element */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div 
          className="relative"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          {/* Browser mockup */}
          <div className="w-48 h-32 bg-background-secondary/90 backdrop-blur-xl rounded-lg border border-white/10 shadow-2xl overflow-hidden">
            {/* Browser header */}
            <div className="h-6 bg-background-tertiary/80 flex items-center gap-1.5 px-3 border-b border-white/5">
              <div className="w-2 h-2 rounded-full bg-red-500/60" />
              <div className="w-2 h-2 rounded-full bg-yellow-500/60" />
              <div className="w-2 h-2 rounded-full bg-green-500/60" />
            </div>
            {/* Content area */}
            <div className="p-3 space-y-2">
              <div className="h-2 bg-accent/30 rounded w-3/4" />
              <div className="h-2 bg-white/10 rounded w-full" />
              <div className="h-2 bg-white/10 rounded w-5/6" />
              <div className="flex gap-2 mt-3">
                <div className="h-6 bg-accent/40 rounded flex-1" />
                <div className="h-6 bg-white/10 rounded flex-1" />
              </div>
            </div>
          </div>
          
          {/* Floating cursor */}
          <motion.div
            animate={{ 
              x: [20, 40, 20],
              y: [10, 25, 10],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-2 -right-2"
          >
            <MousePointer className="w-5 h-5 text-white drop-shadow-lg" />
          </motion.div>
        </motion.div>
      </div>
      
      {/* Category label */}
      <div className="absolute top-4 left-4">
        <span className="px-2 py-1 text-[10px] font-medium text-white/80 bg-black/30 backdrop-blur-sm rounded-md">
          {category}
        </span>
      </div>
    </div>
  );
}

// Card avec effet 3D au hover
function ProjectCard({ 
  project, 
  index 
}: { 
  project: typeof featuredProjects[0]; 
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x, { stiffness: 400, damping: 25 });
  const mouseYSpring = useSpring(y, { stiffness: 400, damping: 25 });
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);
  
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };
  
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };
  
  // Trouver le label de la catégorie
  const categoryLabels: Record<string, string> = {
    'website': 'Site Web',
    'ecommerce': 'E-commerce',
    'saas': 'SaaS',
    'marketing': 'Marketing',
    'automation': 'Automatisation',
  };
  
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group"
    >
      <Link href={`/realisations/${project.id}`} aria-label={`Voir le projet ${project.title}`}>
        <motion.div
          ref={ref}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
          }}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
          className="relative h-full bg-glass border border-glass-border rounded-2xl overflow-hidden transition-all duration-200 hover:border-accent/40 hover:shadow-glow"
        >
          {/* Project Visual */}
          <ProjectVisual 
            title={project.title} 
            category={categoryLabels[project.category] || project.category}
            index={index}
          />

          {/* Content */}
          <div className="p-6" style={{ transform: "translateZ(30px)" }}>
            {/* Category badge */}
            <span className="inline-block px-3 py-1 text-xs font-medium text-accent bg-accent/10 border border-accent/20 rounded-full mb-3">
              {categoryLabels[project.category] || project.category}
            </span>

            <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2 group-hover:text-accent transition-colors">
              {project.title}
              <ArrowUpRight className="w-4 h-4 text-foreground-muted opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </h3>

            <p className="text-foreground-secondary text-sm mb-4 line-clamp-2">
              {project.description}
            </p>

            {/* Metrics with animation */}
            <div className="flex flex-wrap gap-4 pt-4 border-t border-glass-border">
              {project.metrics.slice(0, 2).map((metric, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.3 + idx * 0.1 }}
                  className="flex items-center gap-2"
                >
                  <span className="text-lg font-bold text-accent">
                    {metric.value}
                  </span>
                  <span className="text-xs text-foreground-muted">
                    {metric.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Hover gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        </motion.div>
      </Link>
    </motion.article>
  );
}

export function Projects() {
  return (
    <section 
      className="py-24 md:py-32 relative overflow-hidden"
      aria-labelledby="projects-heading"
    >
      {/* Subtle background */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      <div className="container mx-auto px-6 relative z-10">
        <SectionHeader
          badge="Nos réalisations"
          title={
            <>
              Des projets qui <span className="gradient-text-accent">performent</span>
            </>
          }
          description="Découvrez comment nous avons aidé nos clients à atteindre leurs objectifs business grâce à des solutions digitales sur-mesure."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* CTA amélioré */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <Link
            href="/realisations"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-glass border border-glass-border text-foreground font-semibold rounded-xl transition-all duration-300 hover:bg-glass-hover hover:border-accent/40 hover:shadow-glow-sm"
          >
            <span>Voir tous nos projets</span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowRight className="w-5 h-5 text-accent" />
            </motion.div>
          </Link>
          
          <p className="mt-4 text-sm text-foreground-muted">
            Plus de 20 projets réalisés avec succès
          </p>
        </motion.div>
      </div>
    </section>
  );
}
