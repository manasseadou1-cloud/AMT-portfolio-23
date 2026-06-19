"use client";

import { useEffect, useRef, useState, ReactNode } from "react";
import styles from "./Reveal.module.css";

type RevealProps = {
  children: ReactNode;
  width?: "fit-content" | "100%";
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
};

export function Reveal({ children, width = "100%", delay = 0, direction = "up" }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Once visible, stop observing to keep rendering performant
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        }
      },
      {
        threshold: 0.05, // Trigger as soon as 5% of the element is visible
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const directionClass =
    direction === "up"
      ? styles.slideUp
      : direction === "down"
      ? styles.slideDown
      : direction === "left"
      ? styles.slideLeft
      : direction === "right"
      ? styles.slideRight
      : styles.fadeOnly;

  return (
    <div
      ref={ref}
      style={{
        width,
        position: "relative",
        display: width === "fit-content" ? "inline-block" : "block",
      }}
    >
      <div
        className={`${styles.revealContent} ${isVisible ? styles.visible : styles.hidden} ${directionClass}`}
        style={{ transitionDelay: `${delay}ms` }}
      >
        {children}
      </div>
    </div>
  );
}
