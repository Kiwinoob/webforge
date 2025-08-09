// components/ui/fade-in.tsx
"use client";
import { JSX, ReactNode } from "react";
import { motion } from "framer-motion";

type Direction = "up" | "down" | "left" | "right" | "none";

const getOffset = (direction: Direction, distance = 16) => {
  switch (direction) {
    case "up":
      return { y: distance };
    case "down":
      return { y: -distance };
    case "left":
      return { x: distance };
    case "right":
      return { x: -distance };
    default:
      return {};
  }
};

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  direction?: Direction;
  distance?: number;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  once?: boolean;
}

export default function FadeIn({
  children,
  delay = 0,
  duration = 0.5,
  direction = "none",
  distance = 24,
  className,
  as: Tag = "div",
  once = true,
}: FadeInProps) {
  const initial = { opacity: 0, ...getOffset(direction, distance) };
  const animate = { opacity: 1, x: 0, y: 0 };

  return (
    <motion.div
      initial={initial}
      whileInView={animate}
      viewport={{ once, margin: "0px 0px -10% 0px" }}
      transition={{ delay, duration, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      <Tag className="contents">{children}</Tag>
    </motion.div>
  );
}
