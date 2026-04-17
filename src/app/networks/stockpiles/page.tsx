"use client";
import PageShell from "@/components/PageShell";
import Link from "next/link";
const ACCENT = "#E05050";
export default function StockpilesPage() {
  return (
    <PageShell title="Stockpiles" accent={ACCENT}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2, background: "var(--line)", marginBottom: 80 }}>
        <div style={{ background: "#1a0505", padding: "64px 56px", display: "flex", flexDirection: "column", gap: 32 }}>
          <div style={{ fontSize: 11, color: "rgba(224,80,80,0.6)", letterSpacing: "0.18em", textTransform: "uppercase" }}>Lifestyle Retail · Cluster 03</div>
          <p style={{ fontSize: 22, color: "#fff", lineHeight: 1.65, fontWeight: 300 }}>A creative lifestyle retail concept rooted in culture and community. Curating products and experiences at the intersection of creativity and everyday life.</p>
        </div>
        <div style={{ background: "#111", padding: "64px 56px", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ fontSize: "clamp(56px, 7vw, 96px)", fontWeight: 700, letterSpacing: "-0.05em", lineHeight: 1, color: "transparent", WebkitTextStroke: `1px ${ACCENT}` }}>STORE.</div>
        </div>
      </div>
      <div style={{ paddingTop: 40, borderTop: "1px solid var(--line)" }}><Link href="/networks/lifestyle-retail-hospitality" style={{ display: "inline-flex", alignItems: "center", gap: 12, fontSize: 13, color: "rgba(255,255,255,0.3)", textDecoration: "none", letterSpacing: "0.08em", textTransform: "uppercase" }}>← Lifestyle, Retail & Hospitality</Link></div>
    </PageShell>
  );
}
