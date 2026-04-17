"use client";
import { useEffect } from "react";

export default function ScrollableBody() {
  useEffect(() => {
    document.body.classList.add("scrollable");
    return () => document.body.classList.remove("scrollable");
  }, []);
  return null;
}
