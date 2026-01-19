"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { clsx } from "clsx";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
  animate?: boolean;
  delay?: number;
}

export function Card({
  children,
  className,
  hover = true,
  glow = false,
  animate = true,
  delay = 0,
}: CardProps) {
  const CardComponent = animate ? motion.div : "div";

  const animationProps = animate
    ? {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.5, delay },
      }
    : {};

  return (
    <CardComponent
      {...animationProps}
      className={clsx(
        "relative p-6 bg-glass border border-glass-border rounded-2xl backdrop-blur-xl",
        hover && "transition-all duration-300 hover:bg-glass-hover hover:border-white/12 hover:-translate-y-1",
        glow && "hover:shadow-glow-sm",
        className
      )}
    >
      {children}
    </CardComponent>
  );
}

interface CardHeaderProps {
  children: ReactNode;
  className?: string;
}

export function CardHeader({ children, className }: CardHeaderProps) {
  return (
    <div className={clsx("mb-4", className)}>
      {children}
    </div>
  );
}

interface CardTitleProps {
  children: ReactNode;
  className?: string;
}

export function CardTitle({ children, className }: CardTitleProps) {
  return (
    <h3 className={clsx("text-xl font-semibold text-foreground", className)}>
      {children}
    </h3>
  );
}

interface CardDescriptionProps {
  children: ReactNode;
  className?: string;
}

export function CardDescription({ children, className }: CardDescriptionProps) {
  return (
    <p className={clsx("text-foreground-secondary text-sm mt-1", className)}>
      {children}
    </p>
  );
}

interface CardContentProps {
  children: ReactNode;
  className?: string;
}

export function CardContent({ children, className }: CardContentProps) {
  return <div className={clsx("", className)}>{children}</div>;
}
