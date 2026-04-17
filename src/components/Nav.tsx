"use client";

import Link from "next/link";
import { NAV_LINKS } from "@/lib/data";

export default function Nav() {
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 200,
        padding: "26px 48px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Link
        href="/"
        style={{
          fontSize: 14,
          fontWeight: 700,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "var(--white)",
          textDecoration: "none",
          display: "flex",
          alignItems: "center",
          gap: 8,
        }}
      >
        <div
          className="logo-dot"
          style={{
            width: 6,
            height: 6,
            background: "var(--green)",
            borderRadius: "50%",
          }}
        />
        Hallo Group
      </Link>

      <div style={{ display: "flex", alignItems: "center", gap: 36 }}>
        <ul style={{ display: "flex", gap: 32, listStyle: "none" }}>
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                style={{
                  color: "var(--dim)",
                  textDecoration: "none",
                  fontSize: 12,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLElement).style.color = "var(--white)")
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLElement).style.color = "var(--dim)")
                }
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/contact"
          style={{
            fontSize: 12,
            fontWeight: 600,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "var(--black)",
            background: "var(--green)",
            padding: "10px 20px",
            textDecoration: "none",
            transition: "opacity 0.2s",
          }}
          onMouseEnter={(e) =>
            ((e.target as HTMLElement).style.opacity = "0.85")
          }
          onMouseLeave={(e) =>
            ((e.target as HTMLElement).style.opacity = "1")
          }
        >
          Get in Touch
        </Link>
      </div>
    </nav>
  );
}
