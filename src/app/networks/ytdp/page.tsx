"use client";
import PageShell from "@/components/PageShell";
import Link from "next/link";
const ACCENT = "#5090E8";
const programs = ["Creative Mentorship", "Portfolio Development", "Industry Workshops", "Talent Placement", "Skill Bootcamps"];
export default function YTDPPage() {
  return (
    <PageShell title="YTDP" accent={ACCENT}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2, background: "var(--line)", marginBottom: 80 }}>
        <div style={{ background: "#050d1a", padding: "64px 56px", display: "flex", flexDirection: "column", gap: 32 }}>
          <div style={{ fontSize: 11, color: "rgba(80,144,232,0.6)", letterSpacing: "0.18em", textTransform: "uppercase" }}>Learning & Talent Dev · Cluster 04</div>
          <p style={{ fontSize: 22, color: "#fff", lineHeight: 1.65, fontWeight: 300 }}>Building the next generation of Indonesian creative talent. Education, mentorship, and the development of skills that the industry actually needs.</p>
        </div>
        <div style={{ background: "#111", padding: "64px 56px", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ fontSize: "clamp(56px, 8vw, 96px)", fontWeight: 700, letterSpacing: "-0.05em", lineHeight: 1, color: ACCENT }}>Next<br /><span style={{ color: "transparent", WebkitTextStroke: `1px ${ACCENT}` }}>Gen.</span></div>
        </div>
      </div>
      <div style={{ marginBottom: 80 }}>
        <div style={{ fontSize: 11, color: ACCENT, letterSpacing: "0.15em", textTransform: "uppercase", display: "flex", alignItems: "center", gap: 12, marginBottom: 40 }}><span style={{ width: 24, height: 1, background: ACCENT, display: "block" }} />Programs</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 2, background: "var(--line)" }}>
          {programs.map((s) => (<div key={s} style={{ background: "var(--black)", padding: "36px 32px", position: "relative", overflow: "hidden", transition: "background 0.3s" }} onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.background = "#111"} onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.background = "var(--black)"}><div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: ACCENT, transform: "scaleX(0)", transformOrigin: "left", transition: "transform 0.4s" }} /><div style={{ width: 6, height: 6, borderRadius: "50%", background: ACCENT, marginBottom: 20, opacity: 0.7 }} /><div style={{ fontSize: 17, fontWeight: 600, letterSpacing: "-0.02em" }}>{s}</div></div>))}
        </div>
      </div>
      <div style={{ paddingTop: 40, borderTop: "1px solid var(--line)" }}><Link href="/networks/learning-talent" style={{ display: "inline-flex", alignItems: "center", gap: 12, fontSize: 13, color: "rgba(255,255,255,0.3)", textDecoration: "none", letterSpacing: "0.08em", textTransform: "uppercase" }}>← Learning & Talent Dev</Link></div>
    </PageShell>
  );
}
