"use client";
import PageShell from "@/components/PageShell";
import Link from "next/link";
const ACCENT = "#9060E0";
export default function JournPage() {
  return (
    <PageShell title="Journ" accent={ACCENT}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2, background: "var(--line)", marginBottom: 80 }}>
        <div style={{ background: "#0d0519", padding: "64px 56px", display: "flex", flexDirection: "column", gap: 32 }}>
          <div style={{ fontSize: 11, color: "rgba(144,96,224,0.6)", letterSpacing: "0.18em", textTransform: "uppercase" }}>Media & IP · Cluster 05</div>
          <p style={{ fontSize: 22, color: "#fff", lineHeight: 1.65, fontWeight: 300 }}>A media and storytelling platform. Long-form, thoughtful content rooted in Indonesian culture — built for audiences who want depth over noise.</p>
        </div>
        <div style={{ background: "#111", padding: "64px 56px", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ fontSize: "clamp(72px, 10vw, 128px)", fontWeight: 700, letterSpacing: "-0.06em", lineHeight: 1, color: ACCENT, fontStyle: "italic" }}>Journ</div>
        </div>
      </div>
      <div style={{ paddingTop: 40, borderTop: "1px solid var(--line)" }}><Link href="/networks/media-ip" style={{ display: "inline-flex", alignItems: "center", gap: 12, fontSize: 13, color: "rgba(255,255,255,0.3)", textDecoration: "none", letterSpacing: "0.08em", textTransform: "uppercase" }}>← Media & IP</Link></div>
    </PageShell>
  );
}
