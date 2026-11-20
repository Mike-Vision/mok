"use client";

import { motion, type Variants } from "framer-motion";
import type { SkillCategory } from "@/config/skills";
import { BrandIcon, brandColor } from "@/lib/brand-icons";
import { cn } from "@/lib/utils";

const chip: Variants = {
  hidden: { opacity: 0, y: 18, scale: 0.84, rotate: -3 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotate: 0,
    transition: { type: "spring", stiffness: 320, damping: 22 },
  },
};

export function SkillCard({ category, index, className }: { category: SkillCategory; index: number; className?: string }) {
  return (
    <div
      className={cn(
        "spotlight group/card flex h-full flex-col overflow-hidden rounded-tile bg-bg-2 p-7 sm:p-8",
        className,
      )}
    >
      <div className="flex items-baseline justify-between">
        <h3 className="text-[24px] font-semibold tracking-[-0.02em] sm:text-[28px]">{category.title}</h3>
        <span className="text-[13px] text-muted tabular-nums">
          {category.skills.length} {category.skills.length === 1 ? "tool" : "tools"}
        </span>
      </div>
      <p className="mt-1 text-[15px] text-muted sm:text-[17px]">{category.blurb}</p>

      <motion.ul
        className="mt-auto flex flex-wrap gap-2 pt-8"
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.05, delayChildren: 0.15 } } }}
      >
        {category.skills.map((s, i) => (
          <motion.li key={s.name} variants={chip} data-reveal>
            {/* Inner span floats on its own slow loop, offset per chip so they never move in sync. */}
            <span
              className="animate-float inline-block"
              style={{ animationDelay: `${-(i * 0.7 + index * 1.3)}s`, animationDuration: `${5 + (i % 3)}s` }}
            >
              <motion.span
                whileHover={{ y: -4, scale: 1.06 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 420, damping: 20 }}
                className="skill-chip group/chip relative isolate inline-flex items-center gap-2 overflow-hidden rounded-full border border-line/60 bg-bg px-3.5 py-2 text-[14px] font-medium transition-[border-color,box-shadow] duration-300 hover:border-[var(--brand)] hover:shadow-soft"
                style={{ "--brand": brandColor(s.icon) ?? "var(--fg)" } as React.CSSProperties}
              >
                {s.icon && (
                  <BrandIcon
                    name={s.icon}
                    className="relative z-10 size-4 text-muted transition-[color,rotate,scale] duration-300 group-hover/chip:rotate-[-8deg] group-hover/chip:scale-110 group-hover/chip:text-[var(--brand)]"
                  />
                )}
                <span className="relative z-10">{s.name}</span>
              </motion.span>
            </span>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
}
