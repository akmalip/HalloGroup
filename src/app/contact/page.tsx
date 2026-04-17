"use client";

import PageShell from "@/components/PageShell";
import { SITE } from "@/lib/data";


export default function ContactPage() {
  return (
    <PageShell title="Get in Touch.">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80 }}>
        {/* Left */}
        <div>
          <p style={{ fontSize: 20, color: "var(--dim)", lineHeight: 1.8, fontWeight: 300, marginBottom: 56 }}>
            Whether you want to collaborate, join the ecosystem, or just say
            hallo — we're here.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
            {/* Email */}
            <div>
              <div style={{ fontSize: 11, color: "var(--green)", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 12 }}>
                Email
              </div>
              <a
                href={`mailto:${SITE.email}`}
                style={{
                  fontSize: 20,
                  color: "var(--white)",
                  textDecoration: "none",
                  fontWeight: 500,
                  letterSpacing: "-0.01em",
                  borderBottom: "1px solid var(--line)",
                  paddingBottom: 4,
                  transition: "border-color 0.2s",
                }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.borderColor = "var(--green)")}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.borderColor = "var(--line)")}
              >
                {SITE.email}
              </a>
            </div>

            {/* Location */}
            <div style={{ borderTop: "1px solid var(--line)", paddingTop: 40 }}>
              <div style={{ fontSize: 11, color: "var(--green)", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 12 }}>
                Location
              </div>
              <p style={{ fontSize: 18, color: "var(--dim)", fontWeight: 300 }}>
                {SITE.location}
                <br />
                Indonesia
              </p>
            </div>

            {/* Socials */}
            <div style={{ borderTop: "1px solid var(--line)", paddingTop: 40 }}>
              <div style={{ fontSize: 11, color: "var(--green)", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 20 }}>
                Follow
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {Object.entries(SITE.socials).map(([key, url]) => (
                  <a
                    key={key}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontSize: 15,
                      color: "var(--dim)",
                      textDecoration: "none",
                      textTransform: "capitalize",
                      fontWeight: 400,
                      display: "flex",
                      alignItems: "center",
                      gap: 12,
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--white)")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--dim)")}
                  >
                    <span style={{ width: 16, height: 1, background: "currentColor", display: "block" }} />
                    {key}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right — simple CTA block */}
        <div
          style={{
            border: "1px solid var(--line)",
            padding: "56px 48px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            minHeight: 400,
          }}
        >
          <div>
            <div style={{ fontSize: 11, color: "var(--green)", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 24 }}>
              Work with us
            </div>
            <h2
              style={{
                fontSize: "clamp(28px, 3.5vw, 48px)",
                fontWeight: 700,
                letterSpacing: "-0.04em",
                lineHeight: 1.05,
                marginBottom: 24,
              }}
            >
              Got a project
              <br />
              in mind?
            </h2>
            <p style={{ fontSize: 15, color: "var(--dim)", lineHeight: 1.75, fontWeight: 300 }}>
              Tell us what you're building. We'll figure out which part of the
              ecosystem is the right fit.
            </p>
          </div>

          <a
            href={`mailto:${SITE.email}`}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 14,
              background: "var(--green)",
              color: "var(--black)",
              padding: "16px 28px",
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              textDecoration: "none",
              alignSelf: "flex-start",
              marginTop: 40,
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
            Send an Email
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7h10M8 3l4 4-4 4" stroke="#0F0F0F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </PageShell>
  );
}
