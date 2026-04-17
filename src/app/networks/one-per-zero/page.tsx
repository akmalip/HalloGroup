"use client";
import PageShell from "@/components/PageShell";
import Link from "next/link";

const ACCENT = "#DC2F02";
const services = ["Visual Communication", "Spatial Design", "Product Design", "Fashion Design", "Brand Identity"];
const colors = [
  { name: "Red Bell Pepper", hex: "#DC2F02" },
  { name: "Spanish Orange", hex: "#E85D04" },
  { name: "Fire Yellow", hex: "#FFBA08" },
  { name: "Darkest Dungeon", hex: "#6A040F" },
  { name: "Black Metal", hex: "#070707" },
];

export default function OnePerZeroPage() {
  return (
    <PageShell title="One Per Zero" accent={ACCENT}>
      {/* Hero block */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2, background: "var(--line)", marginBottom: 80 }}>
        {/* Left — red bg, concept */}
        <div style={{ background: ACCENT, padding: "64px 56px", display: "flex", flexDirection: "column", gap: 32 }}>
          <div style={{ fontSize: 11, color: "rgba(255,255,255,0.6)", letterSpacing: "0.18em", textTransform: "uppercase" }}>
            Design Consultant · Sukabumi
          </div>
          {/* Logo mark visual — two parallelograms */}
          <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
            {[0, 1].map((i) => (
              <div key={i} style={{ width: 48, height: 28, background: "rgba(255,255,255,0.25)", transform: "skewX(-16deg)", borderRadius: 2 }} />
            ))}
          </div>
          <p style={{ fontSize: 22, color: "#fff", lineHeight: 1.65, fontWeight: 300 }}>
            The name 1/0 comes from the mathematical concept of infinity — our creative process is limitless.
          </p>
          <p style={{ fontSize: 15, color: "rgba(255,255,255,0.6)", lineHeight: 1.8, fontWeight: 300 }}>
            Based in Sukabumi, spanning visual communication, spatial, product, and fashion design.
          </p>
        </div>
        {/* Right — name concept */}
        <div style={{ background: "#111", padding: "64px 56px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <div style={{ fontSize: 11, color: ACCENT, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 32 }}>The Name</div>
          <div>
            <div style={{ fontSize: "clamp(64px, 8vw, 96px)", fontWeight: 700, letterSpacing: "-0.05em", lineHeight: 1, color: "#fff", marginBottom: 8 }}>1/0</div>
            <div style={{ fontSize: 16, color: "rgba(255,255,255,0.3)", fontWeight: 300, marginBottom: 32 }}>= Infinity</div>
            <p style={{ fontSize: 14, color: "rgba(255,255,255,0.4)", lineHeight: 1.8, fontWeight: 300 }}>
              We believe the process of creating and being creative is infinite and limitless. That spirit lives in everything we make.
            </p>
          </div>
          <div style={{ fontSize: 12, color: "rgba(255,255,255,0.15)", letterSpacing: "0.08em", textTransform: "uppercase", fontFamily: "'Space Grotesk', sans-serif" }}>
            Space Grotesk — Primary Typeface
          </div>
        </div>
      </div>

      {/* Color palette from KV */}
      <div style={{ marginBottom: 80 }}>
        <div style={{ fontSize: 11, color: ACCENT, letterSpacing: "0.15em", textTransform: "uppercase", display: "flex", alignItems: "center", gap: 12, marginBottom: 40 }}>
          <span style={{ width: 24, height: 1, background: ACCENT, display: "block" }} />
          Color Palette
        </div>
        <div style={{ display: "flex", gap: 2 }}>
          {colors.map((c) => (
            <div key={c.hex} style={{ flex: 1, background: c.hex, height: 120, display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "16px 20px" }}>
              <div style={{ fontSize: 10, color: "rgba(255,255,255,0.7)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 4 }}>{c.name}</div>
              <div style={{ fontSize: 11, color: "rgba(255,255,255,0.5)", fontFamily: "monospace" }}>{c.hex}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Services */}
      <div style={{ marginBottom: 80 }}>
        <div style={{ fontSize: 11, color: ACCENT, letterSpacing: "0.15em", textTransform: "uppercase", display: "flex", alignItems: "center", gap: 12, marginBottom: 40 }}>
          <span style={{ width: 24, height: 1, background: ACCENT, display: "block" }} />
          Disciplines
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 2, background: "var(--line)" }}>
          {services.map((s) => (
            <div key={s} style={{ background: "var(--black)", padding: "40px 28px", position: "relative", overflow: "hidden", transition: "background 0.3s" }}
              onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.background = "#111"}
              onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.background = "var(--black)"}>
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: ACCENT, transform: "scaleX(0)", transformOrigin: "left", transition: "transform 0.4s" }} />
              <div style={{ width: 4, height: 4, borderRadius: "50%", background: ACCENT, marginBottom: 24 }} />
              <div style={{ fontSize: 14, fontWeight: 600, letterSpacing: "-0.02em", lineHeight: 1.3 }}>{s}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ paddingTop: 40, borderTop: "1px solid var(--line)" }}>
        <Link href="/networks/creative-communication" style={{ display: "inline-flex", alignItems: "center", gap: 12, fontSize: 13, color: "rgba(255,255,255,0.3)", textDecoration: "none", letterSpacing: "0.08em", textTransform: "uppercase" }}>
          ← Creative & Communication
        </Link>
      </div>
    </PageShell>
  );
}
