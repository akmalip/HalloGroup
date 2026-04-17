"use client";
import PageShell from "@/components/PageShell";
import Link from "next/link";
const ACCENT = "#9060E0";
export default function SukabumiDiscoveryPage() {
  return (
    <PageShell title="Sukabumi Discovery" accent={ACCENT}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2, background: "var(--line)", marginBottom: 80 }}>
        <div style={{ background: "#0d0519", padding: "64px 56px", display: "flex", flexDirection: "column", gap: 32 }}>
          <div style={{ fontSize: 11, color: "rgba(144,96,224,0.6)", letterSpacing: "0.18em", textTransform: "uppercase" }}>Media & IP · Cluster 05</div>
          <p style={{ fontSize: 22, color: "#fff", lineHeight: 1.65, fontWeight: 300 }}>A media platform dedicated to uncovering and sharing the stories, people, and places that make Sukabumi one of West Java's most compelling cities.</p>
          <p style={{ fontSize: 15, color: "rgba(255,255,255,0.4)", lineHeight: 1.8, fontWeight: 300 }}>Local stories. Global perspective.</p>
        </div>
        <div style={{ background: "#111", padding: "64px 56px", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ fontSize: "clamp(40px, 5vw, 64px)", fontWeight: 700, letterSpacing: "-0.04em", lineHeight: 1.1, color: "transparent", WebkitTextStroke: `1px ${ACCENT}` }}>DISCOVER<br />SUKABUMI.</div>
        </div>
      </div>
      <div style={{ paddingTop: 40, borderTop: "1px solid var(--line)" }}><Link href="/networks/media-ip" style={{ display: "inline-flex", alignItems: "center", gap: 12, fontSize: 13, color: "rgba(255,255,255,0.3)", textDecoration: "none", letterSpacing: "0.08em", textTransform: "uppercase" }}>← Media & IP</Link></div>
    </PageShell>
  );
}
