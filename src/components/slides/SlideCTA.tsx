"use client";

import { SITE } from "@/lib/data";

export default function SlideCTA() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "0 48px",
      }}
    >
      <h2
        style={{
          fontSize: "clamp(72px, 10vw, 152px)",
          fontWeight: 700,
          letterSpacing: "-0.05em",
          lineHeight: 0.9,
          marginBottom: 56,
        }}
      >
        <span style={{ color: "var(--white)" }}>Ready</span>
        <br />
        <span style={{ color: "var(--white)" }}>to </span>
        <em
          style={{
            fontStyle: "italic",
            fontWeight: 300,
            color: "var(--green)",
          }}
        >
          grow?
        </em>
      </h2>

      <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
        <a
          href={`mailto:${SITE.email}`}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 14,
            background: "var(--green)",
            color: "var(--black)",
            padding: "18px 32px",
            fontSize: 13,
            fontWeight: 700,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            textDecoration: "none",
            transition: "gap 0.3s, opacity 0.2s",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.gap = "22px";
            (e.currentTarget as HTMLElement).style.opacity = "0.9";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.gap = "14px";
            (e.currentTarget as HTMLElement).style.opacity = "1";
          }}
        >
          Get in Touch
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path
              d="M2 7h10M8 3l4 4-4 4"
              stroke="#0F0F0F"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
        <span
          style={{
            fontSize: 13,
            color: "rgba(255,255,255,0.25)",
            letterSpacing: "0.04em",
          }}
        >
          {SITE.email}
        </span>
      </div>

      {/* Footer line */}
      <div
        style={{
          position: "absolute",
          bottom: 80,
          left: 48,
          right: 48,
          borderTop: "1px solid var(--line)",
          paddingTop: 24,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span
          style={{
            fontSize: 12,
            color: "rgba(255,255,255,0.15)",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          © 2025 {SITE.legalName}
        </span>
        <div style={{ display: "flex", gap: 24 }}>
          {Object.entries(SITE.socials).map(([key, url]) => (
            <a
              key={key}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: 11,
                color: "rgba(255,255,255,0.22)",
                textDecoration: "none",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.color = "var(--green)")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.color = "rgba(255,255,255,0.22)")
              }
            >
              {key}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
