"use client";
import Link from "next/link";
import { ReactNode } from "react";
import { NAV_LINKS } from "@/lib/data";
import PageType from "@/components/PageType";

export default function PageShell({ children, title, accent = "var(--green)" }: { children: ReactNode; title: string; accent?: string }) {
  return (
    <>
      <PageType type="inner" />
      <div style={{ minHeight: "100vh", background: "var(--black)", color: "var(--white)" }}>
        <nav style={{ position: "sticky", top: 0, zIndex: 100, padding: "26px 48px", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid var(--line)", background: "var(--black)" }}>
          <Link href="/" style={{ fontSize: 14, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--white)", textDecoration: "none", display: "flex", alignItems: "center", gap: 8 }}>
            <div className="logo-dot" style={{ width: 6, height: 6, background: "var(--green)", borderRadius: "50%" }} />
            Hallo Group
          </Link>
          <div style={{ display: "flex", alignItems: "center", gap: 36 }}>
            <ul style={{ display: "flex", gap: 32, listStyle: "none" }}>
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} style={{ color: "var(--dim)", textDecoration: "none", fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase" }}>{l.label}</Link>
                </li>
              ))}
            </ul>
            <Link href="/contact" style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--black)", background: "var(--green)", padding: "10px 20px", textDecoration: "none" }}>
              Get in Touch
            </Link>
          </div>
        </nav>
        <div style={{ padding: "80px 48px 56px", borderBottom: "1px solid var(--line)" }}>
          <div style={{ fontSize: 11, color: accent, letterSpacing: "0.15em", textTransform: "uppercase", display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
            <span style={{ width: 24, height: 1, background: accent, display: "block" }} />
            Hallo Group
          </div>
          <h1 style={{ fontSize: "clamp(40px, 6vw, 88px)", fontWeight: 700, letterSpacing: "-0.04em", lineHeight: 0.92 }}>{title}</h1>
        </div>
        <div style={{ padding: "80px 48px 120px" }}>{children}</div>
        <div style={{ borderTop: "1px solid var(--line)", padding: "32px 48px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontSize: 12, color: "rgba(255,255,255,0.15)", letterSpacing: "0.08em", textTransform: "uppercase" }}>© 2025 CV. Kreativitas Anak Bangsa</span>
          <Link href="/" style={{ fontSize: 11, color: "rgba(255,255,255,0.25)", textDecoration: "none", letterSpacing: "0.1em", textTransform: "uppercase" }}>← Back to Home</Link>
        </div>
      </div>
    </>
  );
}
