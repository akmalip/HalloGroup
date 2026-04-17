"use client";
import { useEffect } from "react";
export default function PageType({ type }: { type: "home" | "inner" }) {
  useEffect(() => {
    document.documentElement.setAttribute("data-page", type);
    return () => document.documentElement.removeAttribute("data-page");
  }, [type]);
  return null;
}
