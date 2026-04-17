"use client";

import { PILLARS } from "@/lib/data";

export default function SlideAbout() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 80,
        alignItems: "center",
        padding: "0 48px",
      }}
    >
      {/* Left */}
      <div>
        <div
          style={{
            fontSize: 11,
            color: "rgba(255,255,255,0.12)",
            letterSpacing: "0.15em",
            marginBottom: 40,
          }}
        >
          — 001
        </div>
        <h2
          style={{
            fontSize: "clamp(52px, 7vw, 96px)",
            fontWeight: 700,
            letterSpacing: "-0.045em",
            lineHeight: 0.9,
          }}
        >
          <span style={{ color: "var(--white)" }}>One home.</span>
          <br />
          <span style={{ color: "var(--white)" }}>Many</span>
          <br />
          <em
            style={{
              fontStyle: "italic",
              fontWeight: 300,
              color: "var(--green)",
            }}
          >
            worlds.
          </em>
        </h2>
      </div>

      {/* Right */}
      <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
        <p
          style={{
            fontSize: 16,
            color: "var(--dim)",
            lineHeight: 1.8,
            fontWeight: 300,
          }}
        >
          Hallo Group is the home for creators, brands, and communities who
          believe creativity is a force. We build ecosystems — not just
          portfolios.
        </p>

        {/* Pillars */}
        <div
          style={{
            display: "flex",
            border: "1px solid var(--line)",
          }}
        >
          {PILLARS.map((p, i) => (
            <div
              key={p.num}
              className="pillar-card hoverable"
              style={{
                flex: 1,
                padding: "22px 24px",
                borderRight: i < PILLARS.length - 1 ? "1px solid var(--line)" : "none",
                position: "relative",
                overflow: "hidden",
                transition: "background 0.3s",
                cursor: "default",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.background =
                  "rgba(94,242,32,0.04)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.background = "transparent")
              }
            >
              <div className="pillar-line" />
              <div
                style={{
                  fontSize: 10,
                  color: "var(--green)",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  marginBottom: 6,
                }}
              >
                {p.num}
              </div>
              <div
                style={{
                  fontSize: 17,
                  fontWeight: 600,
                  letterSpacing: "-0.02em",
                }}
              >
                {p.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
