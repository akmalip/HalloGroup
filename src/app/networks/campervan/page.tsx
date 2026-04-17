"use client";
import PageShell from "@/components/PageShell";
import Link from "next/link";
const ACCENT = "#4A9E6B";
export default function CampervanPage() {
  return (
    <PageShell title="Campervan" accent={ACCENT}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2, background: "var(--line)", marginBottom: 80 }}>
        <div style={{ background: "#051a0d", padding: "64px 56px", display: "flex", flexDirection: "column", gap: 32 }}>
          <div style={{ fontSize: 11, color: "rgba(74,158,107,0.6)", letterSpacing: "0.18em", textTransform: "uppercase" }}>Travel & Hospitality · Cluster 03</div>
          <p style={{ fontSize: 22, color: "#fff", lineHeight: 1.65, fontWeight: 300 }}>A travel and hospitality concept bringing creative experiences to the open road. Exploring West Java through a new lens.</p>
        </div>
        <div style={{ background: "#111", padding: "64px 56px", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ fontSize: "clamp(48px, 6vw, 80px)", fontWeight: 700, letterSpacing: "-0.05em", lineHeight: 1, color: "transparent", WebkitTextStroke: `1px ${ACCENT}` }}>EXPLORE.</div>
        </div>
      </div>
      <div style={{ paddingTop: 40, borderTop: "1px solid var(--line)" }}><Link href="/networks/lifestyle-retail-hospitality" style={{ display: "inline-flex", alignItems: "center", gap: 12, fontSize: 13, color: "rgba(255,255,255,0.3)", textDecoration: "none", letterSpacing: "0.08em", textTransform: "uppercase" }}>← Lifestyle, Retail & Hospitality</Link></div>
    </PageShell>
  );
}
