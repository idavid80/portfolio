import React, { useState, useEffect } from 'react';
/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
/* eslint-enable no-unused-vars */
import { useTranslation } from "react-i18next";

const getPos = (angle, radius, center) => ({
  x: center + radius * Math.cos(angle) || center,
  y: center - radius * Math.sin(angle) || center,
});

const Crest = ({ count = 8, radius = 0, center = 100, delay = 0, dotSize = 2.8, isDark = false }) => {
  const theta = (2 * Math.PI) / count;

  const colorExpanded = isDark ? "#22d3ee" : "#4f46e5";
  const colorContracted = isDark ? "#1e40af" : "#c7d2fe";

  return (
    <g>
      {Array.from({ length: count }).map((_, i) => {
        const start = getPos(theta * i, radius, center);
        const end = getPos(theta * i, radius * 0.4, center);

        return (
          <motion.circle
            key={i}
            initial={{
              cx: start.x,
              cy: start.y,
              r: dotSize,
              fill: colorExpanded
            }}
            animate={{
              cx: [start.x, end.x],
              cy: [start.y, end.y],
              r: [dotSize, dotSize / 3],
              fill: [colorExpanded, colorContracted],
              opacity: [1, 0.7]
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: delay,
            }}
          />
        );
      })}
    </g>
  );
};

export default function Spinner({ size = 300, showLabel = false }) {
  const [isDark, setIsDark] = useState(false);
const { t } = useTranslation();
  useEffect(() => {
    const checkTheme = () => setIsDark(document.documentElement.classList.contains('dark'));
    checkTheme();
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  const center = 100;
  const baseDotSize = 2.8;
  const gap = 15;
  const rings = [
    { count: 8, r: gap },
    { count: 12, r: gap * 2 },
    { count: 16, r: gap * 3 },
    { count: 20, r: gap * 4 },
  ];

  return (
    <div className="flex flex-col items-center justify-center">
      <div style={{ width: size, height: size }}>
        <motion.svg
          viewBox="0 0 200 200"
          className="w-full h-full drop-shadow-sm dark:drop-shadow-[0_0_8px_rgba(34,211,238,0.2)]"
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        >
          {/* Núcleo Central Protegido */}
          <motion.circle
            cx={center}
            cy={center}
            initial={{ r: baseDotSize }}
            animate={{ 
              r: [baseDotSize * 1.5, baseDotSize / 2],
              fill: isDark ? ["#fff", "#0891b2"] : ["#4f46e5", "#312e81"]
            }}
            transition={{ duration: 1.8, repeat: Infinity, repeatType: "reverse" }}
          />

          {rings.map((ring, idx) => (
            <Crest
              key={idx}
              count={ring.count}
              radius={ring.r}
              center={center}
              dotSize={baseDotSize}
              delay={idx * 0.12}
              isDark={isDark}
            />
          ))}
        </motion.svg>
      </div>
      {showLabel && (
        <p className="mt-6 font-mono text-xs font-bold tracking-[0.4em] uppercase 
                      text-indigo-600 dark:text-cyan-400 animate-pulse">
          {t("spinner.text")}
        </p>
        )}
    </div>
  );
}