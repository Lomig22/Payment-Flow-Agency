"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, MessageCircle, ChevronRight } from "lucide-react";

export function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 500px
      if (window.scrollY > 500 && !isDismissed) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDismissed]);

  const handleDismiss = () => {
    setIsDismissed(true);
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3"
        >
          {/* Floating CTA Button */}
          <div className="relative group">
            <div className="absolute inset-0 bg-accent/30 rounded-full blur-xl opacity-60 group-hover:opacity-100 transition-opacity" />
            <Link
              href="/contact"
              className="relative flex items-center gap-3 bg-accent hover:bg-accent-hover text-white px-6 py-4 rounded-full shadow-lg transition-all duration-300 group-hover:scale-105"
            >
              <MessageCircle className="w-5 h-5" />
              <span className="font-medium hidden sm:block">
                Consultation gratuite
              </span>
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            
            {/* Dismiss button */}
            <button
              onClick={handleDismiss}
              className="absolute -top-2 -right-2 w-6 h-6 bg-background-tertiary border border-glass-border rounded-full flex items-center justify-center text-foreground-muted hover:text-foreground transition-colors"
              aria-label="Fermer"
            >
              <X className="w-3 h-3" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
