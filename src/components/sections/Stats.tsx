"use client";

import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { useRef, useEffect } from "react";
import { stats } from "@/data/stats";

// Composant de compteur animé sophistiqué
function AnimatedNumber({ 
  value, 
  suffix = "", 
  prefix = "",
  duration = 2 
}: { 
  value: number; 
  suffix?: string;
  prefix?: string;
  duration?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const spring = useSpring(0, { 
    stiffness: 50, 
    damping: 30,
    duration: duration * 1000 
  });
  
  const display = useTransform(spring, (current) => {
    if (value >= 1000) {
      return `${prefix}${(current / 1000).toFixed(1)}k${suffix}`;
    }
    return `${prefix}${Math.floor(current)}${suffix}`;
  });
  
  useEffect(() => {
    if (isInView) {
      spring.set(value);
    }
  }, [isInView, spring, value]);
  
  return <motion.span ref={ref}>{display}</motion.span>;
}

// Parser pour extraire le nombre et le format des stats
function parseStatValue(value: string): { number: number; prefix: string; suffix: string } {
  // Patterns: "+150", "98%", "48h", "x3", "150+"
  const match = value.match(/^([+x]?)(\d+(?:\.\d+)?)(.*?)$/);
  if (match) {
    return {
      prefix: match[1] || "",
      number: parseFloat(match[2]),
      suffix: match[3] || ""
    };
  }
  return { prefix: "", number: 0, suffix: value };
}

export function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section 
      ref={ref} 
      className="py-24 md:py-32 relative overflow-hidden"
      aria-labelledby="stats-heading"
    >
      {/* Background amélioré */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background-secondary/70 to-background" />
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      {/* Glow effects */}
      <motion.div
        animate={{
          opacity: [0.3, 0.5, 0.3],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-accent/10 rounded-full blur-[150px]"
        aria-hidden="true"
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 id="stats-heading" className="sr-only">Nos résultats en chiffres</h2>
          <p className="text-lg text-foreground-secondary max-w-2xl mx-auto">
            Des <strong className="text-foreground">résultats concrets</strong> qui parlent d&apos;eux-mêmes
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => {
            const { number, prefix, suffix } = parseStatValue(stat.value);
            
            return (
              <motion.article
                key={stat.id}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="relative group text-center"
              >
                {/* Card background */}
                <div className="absolute inset-0 bg-glass rounded-2xl border border-glass-border opacity-0 group-hover:opacity-100 transition-all duration-200" />
                
                <div className="relative p-6 lg:p-8">
                  {/* Animated Number */}
                  <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={isInView ? { scale: 1, opacity: 1 } : {}}
                    transition={{
                      type: "spring",
                      stiffness: 200,
                      damping: 15,
                      delay: index * 0.05 + 0.1,
                    }}
                    className="relative mb-4"
                  >
                    <span className="text-5xl md:text-6xl lg:text-7xl font-bold gradient-text-accent">
                      {number > 0 ? (
                        <AnimatedNumber 
                          value={number} 
                          prefix={prefix} 
                          suffix={suffix}
                          duration={1.5 + index * 0.1}
                        />
                      ) : (
                        stat.value
                      )}
                    </span>
                    
                    {/* Glow effect behind number */}
                    <div 
                      className="absolute inset-0 blur-2xl bg-accent/20 scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-200" 
                      aria-hidden="true"
                    />
                  </motion.div>

                  {/* Label */}
                  <motion.h3
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.4, delay: index * 0.1 + 0.4 }}
                    className="text-lg font-semibold text-foreground mb-2"
                  >
                    {stat.label}
                  </motion.h3>

                  {/* Description */}
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.4, delay: index * 0.1 + 0.5 }}
                    className="text-sm text-foreground-muted leading-relaxed"
                  >
                    {stat.description}
                  </motion.p>
                </div>

                {/* Decorative line */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.1 + 0.6 }}
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent"
                  aria-hidden="true"
                />
              </motion.article>
            );
          })}
        </div>

        {/* Bottom trust indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-foreground-muted text-sm">
            Données basées sur nos réalisations des 12 derniers mois
          </p>
        </motion.div>
      </div>
    </section>
  );
}
