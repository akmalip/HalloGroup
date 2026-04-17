"use client";

import { useEffect, useRef } from "react";

export default function Cursor() {
  const curRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ mx: -40, my: -40, rx: -40, ry: -40 });
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      pos.current.mx = e.clientX;
      pos.current.my = e.clientY;
      if (curRef.current) {
        curRef.current.style.left = e.clientX - 4 + "px";
        curRef.current.style.top = e.clientY - 4 + "px";
      }
    };

    const lerp = () => {
      const p = pos.current;
      p.rx += (p.mx - p.rx) * 0.12;
      p.ry += (p.my - p.ry) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.left = p.rx - 17 + "px";
        ringRef.current.style.top = p.ry - 17 + "px";
      }
      rafRef.current = requestAnimationFrame(lerp);
    };

    window.addEventListener("mousemove", onMove);
    rafRef.current = requestAnimationFrame(lerp);

    const onEnter = () => {
      if (curRef.current) { curRef.current.style.width = "18px"; curRef.current.style.height = "18px"; }
      if (ringRef.current) ringRef.current.style.opacity = "0";
    };
    const onLeave = () => {
      if (curRef.current) { curRef.current.style.width = "8px"; curRef.current.style.height = "8px"; }
      if (ringRef.current) ringRef.current.style.opacity = "1";
    };

    const attach = () => {
      document.querySelectorAll("a, button, .hoverable").forEach((el) => {
        el.addEventListener("mouseenter", onEnter);
        el.addEventListener("mouseleave", onLeave);
      });
    };

    attach();
    const obs = new MutationObserver(attach);
    obs.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafRef.current);
      obs.disconnect();
    };
  }, []);

  return (
    <>
      <div ref={curRef} className="cursor" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  );
}
