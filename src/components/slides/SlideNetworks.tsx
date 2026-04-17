"use client";

import { STATS, CLUSTERS } from "@/lib/data";
import Link from "next/link";

export default function SlideNetworks() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        padding: "100px 48px 80px",
      }}
    >
      {/* Stats row */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          borderBottom: "1px solid var(--line)",
          marginBottom: 0,
        }}
      >
        {STATS.map((s, i) => (
          <div
            key={s.label}
            style={{
              padding: "32px 0 24px",
              paddingLeft: i > 0 ? 40 : 0,
              borderRight: i < STATS.length - 1 ? "1px solid var(--line)" : "none",
            }}
          >
            <div
              style={{
                fontSize: "clamp(40px, 5vw, 68px)",
                fontWeight: 700,
                letterSpacing: "-0.05em",
                lineHeight: 1,
                marginBottom: 8,
              }}
            >
              {s.num}
              {s.sup && (
                <sup style={{ fontSize: "0.38em", color: "var(--green)", fontWeight: 500 }}>
                  {s.sup}
                </sup>
              )}
            </div>
            <div
              style={{
                fontSize: 11,
                color: "rgba(255,255,255,0.25)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              {s.label}
            </div>
          </div>
        ))}
      </div>

      {/* Network header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          padding: "28px 0",
          borderBottom: "1px solid var(--line)",
        }}
      >
        <div>
          <div
            style={{
              fontSize: 11,
              color: "var(--green)",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              display: "flex",
              alignItems: "center",
              gap: 12,
            }}
          >
            <span
              style={{ width: 24, height: 1, background: "var(--green)", display: "block" }}
            />
            Our Networks
          </div>
          <div
            style={{
              fontSize: "clamp(22px, 2.8vw, 38px)",
              fontWeight: 700,
              letterSpacing: "-0.035em",
              lineHeight: 1.1,
              marginTop: 10,
            }}
          >
            Five Clusters. One Ecosystem.
          </div>
        </div>
        <Link
          href="/networks"
          style={{
            fontSize: 12,
            color: "rgba(255,255,255,0.2)",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            textDecoration: "none",
            transition: "color 0.2s",
          }}
          onMouseEnter={(e) =>
            ((e.target as HTMLElement).style.color = "var(--green)")
          }
          onMouseLeave={(e) =>
            ((e.target as HTMLElement).style.color = "rgba(255,255,255,0.2)")
          }
        >
          Explore all →
        </Link>
      </div>

      {/* Clusters */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          flex: 1,
          borderRight: "1px solid var(--line)",
        }}
      >
        {CLUSTERS.map((c) => (
          <div
            key={c.idx}
            className="cluster-card hoverable"
            style={{
              padding: "28px 24px",
              borderLeft: "1px solid var(--line)",
              display: "flex",
              flexDirection: "column",
              position: "relative",
              overflow: "hidden",
              transition: "background 0.3s",
              cursor: "default",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.background = "#131313")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.background = "transparent")
            }
          >
            <div className="cluster-line" />
            <div
              style={{
                fontSize: 10,
                color: "rgba(255,255,255,0.1)",
                letterSpacing: "0.1em",
                marginBottom: "auto",
                paddingBottom: 20,
              }}
            >
              {c.idx}
            </div>
            <div
              style={{
                fontSize: 14,
                fontWeight: 600,
                letterSpacing: "-0.02em",
                lineHeight: 1.35,
                whiteSpace: "pre-line",
              }}
            >
              {c.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
