"use client";
import PageShell from "@/components/PageShell";
import Link from "next/link";

const ACCENT = "#5EF220";
const services = ["Video Production", "Photography", "Content Production", "Post-Production", "Motion Design", "Studio Rental"];

export default function HalloStudiosPage() {
  return (
    <PageShell title="Hallo Studios" accent={ACCENT}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2, background: "var(--line)", marginBottom: 80 }}>
        <div style={{ background: "#0d0d0d", padding: "64px 56px", display: "flex", flexDirection: "column", gap: 32, borderLeft: `3px solid ${ACCENT}` }}>
          <div style={{ fontSize: 11, color: "rgba(94,242,32,0.5)", letterSpacing: "0.18em", textTransform: "uppercase" }}>Production House · Hallo Group</div>
          <p style={{ fontSize: 22, color: "#fff", lineHeight: 1.65, fontWeight: 300 }}>
            The production arm of Hallo Group. Video, photography, and content production for brands that demand quality and craft.
          </p>
        </div>
        <div style={{ background: "#111", padding: "64px 56px" }}>
          <div style={{ fontSize: 80, fontWeight: 700, letterSpacing: "-0.06em", lineHeight: 1, color: "rgba(255,255,255,0.06)", marginBottom: 32 }}>STUDIO</div>
          <p style={{ fontSize: 15, color: "rgba(255,255,255,0.35)", lineHeight: 1.8, fontWeight: 300 }}>Full-service production capabilities — from concept to final delivery.</p>
        </div>
      </div>
      <div style={{ marginBottom: 80 }}>
        <div style={{ fontSize: 11, color: ACCENT, letterSpacing: "0.15em", textTransform: "uppercase", display: "flex", alignItems: "center", gap: 12, marginBottom: 40 }}>
          <span style={{ width: 24, height: 1, background: ACCENT, display: "block" }} />
          Capabilities
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 2, background: "var(--line)" }}>
          {services.map((s) => (
            <div key={s} style={{ background: "var(--black)", padding: "36px 32px", position: "relative", overflow: "hidden", transition: "background 0.3s" }}
              onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.background = "#111"}
              onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.background = "var(--black)"}>
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: ACCENT, transform: "scaleX(0)", transformOrigin: "left", transition: "transform 0.4s" }} />
              <div style={{ width: 6, height: 6, borderRadius: "50%", background: ACCENT, marginBottom: 20, opacity: 0.7 }} />
              <div style={{ fontSize: 17, fontWeight: 600, letterSpacing: "-0.02em" }}>{s}</div>
            </div>
          ))}
        </div>
      </div>
      <div style={{ paddingTop: 40, borderTop: "1px solid var(--line)" }}>
        <Link href="/networks/creative-communication" style={{ display: "inline-flex", alignItems: "center", gap: 12, fontSize: 13, color: "rgba(255,255,255,0.3)", textDecoration: "none", letterSpacing: "0.08em", textTransform: "uppercase" }}>← Creative & Communication</Link>
      </div>
    </PageShell>
  );
}
