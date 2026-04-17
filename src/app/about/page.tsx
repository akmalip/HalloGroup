"use client";

import PageShell from "@/components/PageShell";
import { SITE, PILLARS, STATS } from "@/lib/data";


export default function AboutPage() {
  return (
    <PageShell title="About.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, marginBottom: 100 }}>
        {/* Left */}
        <div>
          <p style={{ fontSize: 20, color: "var(--dim)", lineHeight: 1.8, fontWeight: 300, marginBottom: 40 }}>
            Hallo Group is a creative consulting firm and end-to-end holding
            company for brands, organizations, agencies, and businesses in the
            creative industry.
          </p>
          <p style={{ fontSize: 16, color: "rgba(255,255,255,0.35)", lineHeight: 1.8, fontWeight: 300 }}>
            We oversee agencies and production houses in the creative economy —
            building and developing businesses under one holding company with a
            shared vision: the sustainability and progress of Indonesia's
            creative industry.
          </p>
        </div>

        {/* Right */}
        <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
          <div>
            <div style={{ fontSize: 11, color: "var(--green)", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 16 }}>
              Vision
            </div>
            <p style={{ fontSize: 16, color: "var(--dim)", lineHeight: 1.8, fontWeight: 300 }}>
              To create and develop brands, experiences, and communities rooted
              in creativity.
            </p>
          </div>
          <div style={{ borderTop: "1px solid var(--line)", paddingTop: 32 }}>
            <div style={{ fontSize: 11, color: "var(--green)", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 16 }}>
              Based in
            </div>
            <p style={{ fontSize: 16, color: "var(--dim)", lineHeight: 1.8, fontWeight: 300 }}>
              {SITE.location}, Indonesia
            </p>
          </div>
          <div style={{ borderTop: "1px solid var(--line)", paddingTop: 32 }}>
            <div style={{ fontSize: 11, color: "var(--green)", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 16 }}>
              Legal entity
            </div>
            <p style={{ fontSize: 16, color: "var(--dim)", lineHeight: 1.8, fontWeight: 300 }}>
              {SITE.legalName}
            </p>
          </div>
        </div>
      </div>

      {/* Three Pillars */}
      <div style={{ marginBottom: 100 }}>
        <div style={{ fontSize: 11, color: "var(--green)", letterSpacing: "0.15em", textTransform: "uppercase", display: "flex", alignItems: "center", gap: 12, marginBottom: 40 }}>
          <span style={{ width: 24, height: 1, background: "var(--green)", display: "block" }} />
          Three Pillars
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1px", background: "var(--line)" }}>
          {PILLARS.map((p) => (
            <div
              key={p.num}
              className="pillar-card"
              style={{ background: "var(--black)", padding: "48px 40px", position: "relative", overflow: "hidden", transition: "background 0.3s", cursor: "default" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "#131313")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "var(--black)")}
            >
              <div className="pillar-line" />
              <div style={{ fontSize: 11, color: "var(--green)", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 20 }}>{p.num}</div>
              <div style={{ fontSize: 40, fontWeight: 700, letterSpacing: "-0.04em" }}>{p.name}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div>
        <div style={{ fontSize: 11, color: "var(--green)", letterSpacing: "0.15em", textTransform: "uppercase", display: "flex", alignItems: "center", gap: 12, marginBottom: 40 }}>
          <span style={{ width: 24, height: 1, background: "var(--green)", display: "block" }} />
          By the numbers
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1px", background: "var(--line)" }}>
          {STATS.map((s) => (
            <div key={s.label} style={{ background: "var(--black)", padding: "40px 36px" }}>
              <div style={{ fontSize: 64, fontWeight: 700, letterSpacing: "-0.05em", lineHeight: 1, marginBottom: 12 }}>
                {s.num}
                {s.sup && <sup style={{ fontSize: "0.35em", color: "var(--green)" }}>{s.sup}</sup>}
              </div>
              <div style={{ fontSize: 12, color: "rgba(255,255,255,0.28)", letterSpacing: "0.1em", textTransform: "uppercase" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </PageShell>
  );
}
