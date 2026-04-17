"use client";
import PageShell from "@/components/PageShell";
import Link from "next/link";

const ACCENT = "#5EF220";
const services = ["Brand Strategy", "Creative Direction", "Art Direction", "Campaign Development", "Visual Identity", "Brand Consulting"];

export default function HalloCreativePage() {
  return (
    <PageShell title="Hallo Creative" accent={ACCENT}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2, background: "var(--line)", marginBottom: 80 }}>
        <div style={{ background: "#0a1a02", padding: "64px 56px", display: "flex", flexDirection: "column", gap: 32 }}>
          <div style={{ fontSize: 11, color: "rgba(94,242,32,0.5)", letterSpacing: "0.18em", textTransform: "uppercase" }}>Creative Agency · Hallo Group</div>
          <p style={{ fontSize: 22, color: "#fff", lineHeight: 1.65, fontWeight: 300 }}>
            The flagship creative agency of Hallo Group. Strategy, direction, and execution — where the group's most ambitious ideas come alive.
          </p>
        </div>
        <div style={{ background: "#111", padding: "64px 56px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <div style={{ fontSize: 11, color: ACCENT, letterSpacing: "0.15em", textTransform: "uppercase" }}>Part of</div>
          <div>
            <div style={{ fontSize: "clamp(40px, 5vw, 64px)", fontWeight: 700, letterSpacing: "-0.045em", lineHeight: 1, marginBottom: 16 }}>
              Creative &<br />Communication
            </div>
            <div style={{ fontSize: 13, color: "rgba(255,255,255,0.25)", letterSpacing: "0.06em" }}>Cluster 01</div>
          </div>
        </div>
      </div>
      <div style={{ marginBottom: 80 }}>
        <div style={{ fontSize: 11, color: ACCENT, letterSpacing: "0.15em", textTransform: "uppercase", display: "flex", alignItems: "center", gap: 12, marginBottom: 40 }}>
          <span style={{ width: 24, height: 1, background: ACCENT, display: "block" }} />
          Services
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
