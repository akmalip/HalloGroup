"use client";
import PageShell from "@/components/PageShell";
import Link from "next/link";
const ACCENT = "#B85C38";
export default function CherryCoffeePage() {
  return (
    <PageShell title="Cherry Coffee Roastery" accent={ACCENT}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2, background: "var(--line)", marginBottom: 80 }}>
        <div style={{ background: "#1a0a05", padding: "64px 56px", display: "flex", flexDirection: "column", gap: 32 }}>
          <div style={{ fontSize: 11, color: "rgba(184,92,56,0.6)", letterSpacing: "0.18em", textTransform: "uppercase" }}>Coffee Roastery · Cluster 03</div>
          <p style={{ fontSize: 22, color: "#fff", lineHeight: 1.65, fontWeight: 300 }}>A coffee roastery born from the creative culture of Hallo Group — where good craft meets good community.</p>
          <p style={{ fontSize: 15, color: "rgba(255,255,255,0.4)", lineHeight: 1.8, fontWeight: 300 }}>Specialty coffee, thoughtfully roasted. A space to slow down and connect.</p>
        </div>
        <div style={{ background: "#111", padding: "64px 56px", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: 72, marginBottom: 16 }}>☕</div>
            <div style={{ fontSize: 13, color: "rgba(255,255,255,0.2)", letterSpacing: "0.1em", textTransform: "uppercase" }}>Specialty Roastery</div>
          </div>
        </div>
      </div>
      <div style={{ paddingTop: 40, borderTop: "1px solid var(--line)" }}><Link href="/networks/lifestyle-retail-hospitality" style={{ display: "inline-flex", alignItems: "center", gap: 12, fontSize: 13, color: "rgba(255,255,255,0.3)", textDecoration: "none", letterSpacing: "0.08em", textTransform: "uppercase" }}>← Lifestyle, Retail & Hospitality</Link></div>
    </PageShell>
  );
}
