"use client";

import PageShell from "@/components/PageShell";
import { CLUSTERS } from "@/lib/data";


const clusterColors: Record<string, string> = {
  "creative-communication": "#5EF220",
  "experiential-event": "#E8A020",
  "lifestyle-retail-hospitality": "#E05050",
  "learning-talent": "#5090E8",
  "media-ip": "#9060E0",
};

export default function NetworksPage() {
  return (
    <PageShell title="Networks.">
      {/* Intro */}
      <p style={{ fontSize: 18, color: "var(--dim)", lineHeight: 1.8, fontWeight: 300, maxWidth: 600, marginBottom: 80 }}>
        Five distinct clusters. Each with its own identity, discipline, and
        energy — united under one ecosystem.
      </p>

      {/* Clusters */}
      <div style={{ display: "flex", flexDirection: "column", gap: 0, borderTop: "1px solid var(--line)" }}>
        {CLUSTERS.map((c, i) => (
          <div
            key={c.idx}
            style={{
              borderBottom: "1px solid var(--line)",
              padding: "48px 0",
              display: "grid",
              gridTemplateColumns: "80px 1fr 1fr",
              gap: 40,
              alignItems: "start",
              transition: "background 0.3s",
              cursor: "default",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "#111")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "transparent")}
          >
            {/* Index */}
            <div style={{ fontSize: 12, color: "rgba(255,255,255,0.2)", letterSpacing: "0.1em", paddingTop: 4 }}>{c.idx}</div>

            {/* Name */}
            <div>
              <div
                style={{
                  display: "inline-block",
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: clusterColors[c.slug] || "var(--green)",
                  marginBottom: 16,
                }}
              />
              <h2
                style={{
                  fontSize: "clamp(24px, 3vw, 40px)",
                  fontWeight: 700,
                  letterSpacing: "-0.035em",
                  lineHeight: 1.1,
                  whiteSpace: "pre-line",
                }}
              >
                {c.name}
              </h2>
            </div>

            {/* Networks list */}
            <div style={{ paddingTop: 4 }}>
              <div style={{ fontSize: 11, color: "var(--green)", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 16 }}>
                Networks
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {c.networks.map((n) => (
                  <div
                    key={n}
                    style={{
                      fontSize: 15,
                      color: "var(--dim)",
                      fontWeight: 400,
                      display: "flex",
                      alignItems: "center",
                      gap: 12,
                    }}
                  >
                    <span style={{ width: 16, height: 1, background: "var(--line)", display: "block" }} />
                    {n}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </PageShell>
  );
}
