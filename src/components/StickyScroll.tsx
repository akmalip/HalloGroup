"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";

const variants = {
  enter: (dir: number) => ({
    y: dir > 0 ? 50 : -50,
    opacity: 0,
  }),
  center: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.65, ease: [0.4, 0, 0.2, 1] },
  },
  exit: (dir: number) => ({
    y: dir > 0 ? -50 : 50,
    opacity: 0,
    transition: { duration: 0.65, ease: [0.4, 0, 0.2, 1] },
  }),
};

interface Props {
  slides: React.ReactNode[];
}

export default function StickyScroll({ slides }: Props) {
  const [current, setCurrent] = useState(0);
  const [dir, setDir] = useState(1);
  const locked = useRef(false);
  const lastWheel = useRef(0);
  const touchStart = useRef(0);
  const total = slides.length;

  const goTo = useCallback(
    (n: number) => {
      if (n === current || locked.current || n < 0 || n >= total) return;
      locked.current = true;
      setDir(n > current ? 1 : -1);
      setCurrent(n);
      setTimeout(() => { locked.current = false; }, 800);
    },
    [current, total]
  );

  useEffect(() => {
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      const now = Date.now();
      if (now - lastWheel.current < 950) return;
      lastWheel.current = now;
      if (e.deltaY > 0) goTo(current + 1);
      else goTo(current - 1);
    };

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown") goTo(current + 1);
      if (e.key === "ArrowUp") goTo(current - 1);
    };

    const onTouchStart = (e: TouchEvent) => {
      touchStart.current = e.touches[0].clientY;
    };
    const onTouchEnd = (e: TouchEvent) => {
      const dy = touchStart.current - e.changedTouches[0].clientY;
      if (Math.abs(dy) < 40) return;
      if (dy > 0) goTo(current + 1);
      else goTo(current - 1);
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("keydown", onKey);
    window.addEventListener("touchstart", onTouchStart);
    window.addEventListener("touchend", onTouchEnd);
    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, [current, goTo]);

  return (
    <>
      {/* Slide viewport */}
      <div style={{ position: "fixed", inset: 0, overflow: "hidden" }}>
        <AnimatePresence custom={dir} mode="wait">
          <motion.div
            key={current}
            custom={dir}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            style={{ position: "absolute", inset: 0 }}
          >
            {slides[current]}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Progress dots */}
      <div
        style={{
          position: "fixed",
          right: 36,
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 300,
          display: "flex",
          flexDirection: "column",
          gap: 10,
        }}
      >
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            style={{
              width: i === current ? 5 : 4,
              height: i === current ? 5 : 4,
              borderRadius: "50%",
              background:
                i === current ? "var(--green)" : "rgba(255,255,255,0.18)",
              border: "none",
              cursor: "pointer",
              padding: 0,
              transition: "background 0.3s, transform 0.3s, width 0.3s, height 0.3s",
              transform: i === current ? "scale(1.4)" : "scale(1)",
            }}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </>
  );
}
