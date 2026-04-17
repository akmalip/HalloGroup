"use client";

import Link from "next/link";
import PageShell from "@/components/PageShell";
import { CLUSTERS } from "@/lib/data";

const clusterMeta: Record<string, { color: string; desc: string }> = {
  "creative-communication": {
    color: "#5EF220",
    desc: "The core creative engine. Branding, communication, design, and production — where ideas take shape.",
  },
  "experiential-event": {
    color: "#F2A020",
    desc: "Creating moments that live beyond the screen. Events, activations, and experiences people remember.",
  },
  "lifestyle-retail-hospitality": {
    color: "#E05050",
    desc: "Where creativity meets everyday life. Retail, food, travel, and the spaces in between.",
  },
  "learning-talent": {
    color: "#5090E8",
    desc: "Building the next generation of creative talent. Education, mentorship, and skill development.",
  },
  "media-ip": {
    color: "#9060E0",
    desc: "Stories, media, and intellectual property rooted in local culture and global ambition.",
  },
};

export default function NetworksPage() {
  return (
    <PageShell title="Networks.">
      <p style={{ fontSize: 18, color: "var(--dim)", lineHeight: 1.8, fontWeight: 300, maxWidth: 520, marginBottom: 96 }}>
        Five clusters. Each with its own discipline, energy, and identity. All growing under one roof.
      </p>

      <div style={{ display: "flex", flexDirection: "column" }}>
        {CLUSTERS.map((c) => {
          const meta = clusterMeta[c.slug];
          return (
            <Link key={c.slug} href={`/networks/${c.slug}`} style={{ textDecoration: "none" }}>
              <div
                className="hoverable"
                style={{ display: "grid", gridTemplateColumns: "64px 1fr 1fr auto", alignItems: "center", gap: 48, padding: "40px 0", borderTop: "1px solid var(--line)", transition: "background 0.3s", cursor: "pointer", position: "relative", overflow: "hidden" }}
                onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.background = "#111"; const bar = el.querySelector(".hover-bar") as HTMLElement; if (bar) bar.style.transform = "scaleX(1)"; }}
                onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.background = "transparent"; const bar = el.querySelector(".hover-bar") as HTMLElement; if (bar) bar.style.transform = "scaleX(0)"; }}
              >
                <div className="hover-bar" style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: meta.color, transform: "scaleX(0)", transformOrigin: "left", transition: "transform 0.4s cubic-bezier(0.4,0,0.2,1)" }} />
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  <div style={{ width: 8, height: 8, borderRadius: "50%", background: meta.color }} />
                  <span style={{ fontSize: 11, color: "rgba(255,255,255,0.2)", letterSpacing: "0.1em" }}>{c.idx}</span>
                </div>
                <h2 style={{ fontSize: "clamp(22px, 2.8vw, 38px)", fontWeight: 700, letterSpacing: "-0.035em", lineHeight: 1.1, color: "var(--white)", whiteSpace: "pre-line" }}>{c.name}</h2>
                <p style={{ fontSize: 14, color: "rgba(255,255,255,0.35)", lineHeight: 1.7, fontWeight: 300, maxWidth: 360 }}>{meta.desc}</p>
                <div style={{ width: 44, height: 44, border: "1px solid var(--line)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3l4 4-4 4" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
              </div>
            </Link>
          );
        })}
        <div style={{ borderTop: "1px solid var(--line)" }} />
      </div>
    </PageShell>
  );
}
