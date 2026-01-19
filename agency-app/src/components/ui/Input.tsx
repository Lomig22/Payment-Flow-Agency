"use client";

import { forwardRef, InputHTMLAttributes, TextareaHTMLAttributes } from "react";
import { clsx } from "clsx";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, helperText, className, id, ...props }, ref) => {
    const inputId = id || label?.toLowerCase().replace(/\s+/g, "-");

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={inputId}
            className="block text-sm font-medium text-foreground mb-2"
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          className={clsx(
            "w-full px-4 py-3 bg-glass border rounded-xl text-foreground placeholder-foreground-muted transition-all duration-300",
            "focus:outline-none focus:ring-2",
            error
              ? "border-error/50 focus:border-error focus:ring-error/20"
              : "border-glass-border focus:border-accent/50 focus:ring-accent/20",
            className
          )}
          {...props}
        />
        {(error || helperText) && (
          <p
            className={clsx(
              "mt-1.5 text-sm",
              error ? "text-error" : "text-foreground-muted"
            )}
          >
            {error || helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, helperText, className, id, ...props }, ref) => {
    const textareaId = id || label?.toLowerCase().replace(/\s+/g, "-");

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={textareaId}
            className="block text-sm font-medium text-foreground mb-2"
          >
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          id={textareaId}
          className={clsx(
            "w-full px-4 py-3 bg-glass border rounded-xl text-foreground placeholder-foreground-muted transition-all duration-300 resize-none",
            "focus:outline-none focus:ring-2",
            error
              ? "border-error/50 focus:border-error focus:ring-error/20"
              : "border-glass-border focus:border-accent/50 focus:ring-accent/20",
            className
          )}
          {...props}
        />
        {(error || helperText) && (
          <p
            className={clsx(
              "mt-1.5 text-sm",
              error ? "text-error" : "text-foreground-muted"
            )}
          >
            {error || helperText}
          </p>
        )}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";
