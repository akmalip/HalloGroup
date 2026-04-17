"use client";
import PageShell from "@/components/PageShell";
import Link from "next/link";

const ACCENT = "#C9A227";
const BG_PURPLE = "#7B5EA7";

const services = ["Social Media Management", "Content Creation", "Brand Strategy", "Campaign Planning", "Community Building", "Digital Marketing"];
const toneWords = ["Humanizing", "Playful", "Fun", "Serious", "Colorful"];

export default function MoulaPage() {
  return (
    <PageShell title="Moula." accent={ACCENT}>
      {/* Hero identity block */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2, background: "var(--line)", marginBottom: 80 }}>
        {/* Left — brand statement */}
        <div style={{ background: BG_PURPLE, padding: "64px 56px", display: "flex", flexDirection: "column", gap: 32 }}>
          <div style={{ fontSize: 11, color: "rgba(255,255,255,0.5)", letterSpacing: "0.18em", textTransform: "uppercase" }}>
            Social Media & Marketing Agency
          </div>
          <p style={{ fontSize: 22, color: "#fff", lineHeight: 1.65, fontWeight: 300 }}>
            Moula is the transfer of all forms of spirit, habits, and mindsets to seek fortune in an industry.
          </p>
          <p style={{ fontSize: 15, color: "rgba(255,255,255,0.55)", lineHeight: 1.8, fontWeight: 300 }}>
            Every job done with pleasure will produce maximum results. Work in the playground — serious, but never without joy.
          </p>
        </div>
        {/* Right — tone words */}
        <div style={{ background: "#1a1520", padding: "64px 56px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <div style={{ fontSize: 11, color: ACCENT, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 32 }}>Tone & Manner</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {toneWords.map((w, i) => (
              <div key={w} style={{ fontSize: "clamp(28px, 3vw, 44px)", fontWeight: 700, letterSpacing: "-0.03em", color: i === 0 ? "#fff" : `rgba(255,255,255,${0.18 + i * 0.12})`, lineHeight: 1.15, borderBottom: i < toneWords.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none", padding: "12px 0" }}>
                {w}
              </div>
            ))}
          </div>
          <div style={{ marginTop: 32, fontSize: 13, color: "rgba(255,255,255,0.2)", letterSpacing: "0.06em" }}>
            Humanizing Brand
          </div>
        </div>
      </div>

      {/* Philosophy */}
      <div style={{ padding: "64px 0", borderBottom: "1px solid var(--line)", marginBottom: 80 }}>
        <div style={{ fontSize: 11, color: ACCENT, letterSpacing: "0.15em", textTransform: "uppercase", display: "flex", alignItems: "center", gap: 12, marginBottom: 40 }}>
          <span style={{ width: 24, height: 1, background: ACCENT, display: "block" }} />
          Philosophy
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80 }}>
          <h2 style={{ fontSize: "clamp(32px, 4vw, 56px)", fontWeight: 700, letterSpacing: "-0.04em", lineHeight: 1.05 }}>
            Work in the<br /><em style={{ fontStyle: "italic", fontWeight: 300, color: ACCENT }}>playground.</em>
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <p style={{ fontSize: 16, color: "var(--dim)", lineHeight: 1.8, fontWeight: 300 }}>
              Moula believes that creativity and commerce are not opposites. The best work comes from teams that are genuinely enjoying what they're making.
            </p>
            <p style={{ fontSize: 16, color: "var(--dim)", lineHeight: 1.8, fontWeight: 300 }}>
              Colors are not too rigid (corporate) nor too playful — making a balance between Serious and Joking, Agency and Client. That balance is everything.
            </p>
          </div>
        </div>
      </div>

      {/* Services */}
      <div style={{ marginBottom: 80 }}>
        <div style={{ fontSize: 11, color: ACCENT, letterSpacing: "0.15em", textTransform: "uppercase", display: "flex", alignItems: "center", gap: 12, marginBottom: 40 }}>
          <span style={{ width: 24, height: 1, background: ACCENT, display: "block" }} />
          What We Do
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 2, background: "var(--line)" }}>
          {services.map((s) => (
            <div key={s} style={{ background: "var(--black)", padding: "36px 32px", fontSize: 17, fontWeight: 600, letterSpacing: "-0.02em", position: "relative", overflow: "hidden", transition: "background 0.3s" }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "#111"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "var(--black)"; }}>
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: BG_PURPLE, transform: "scaleX(0)", transformOrigin: "left", transition: "transform 0.4s" }}
                className="service-bar" />
              <div style={{ width: 6, height: 6, borderRadius: "50%", background: ACCENT, marginBottom: 20, opacity: 0.7 }} />
              {s}
            </div>
          ))}
        </div>
      </div>

      {/* Back */}
      <div style={{ paddingTop: 40, borderTop: "1px solid var(--line)" }}>
        <Link href="/networks/creative-communication" style={{ display: "inline-flex", alignItems: "center", gap: 12, fontSize: 13, color: "rgba(255,255,255,0.3)", textDecoration: "none", letterSpacing: "0.08em", textTransform: "uppercase" }}>
          ← Creative & Communication
        </Link>
      </div>
    </PageShell>
  );
}
