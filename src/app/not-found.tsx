import Link from "next/link";

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "var(--black)",
        color: "var(--white)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "0 48px",
      }}
    >
      <div
        style={{
          fontSize: "clamp(120px, 20vw, 240px)",
          fontWeight: 700,
          letterSpacing: "-0.06em",
          lineHeight: 1,
          color: "transparent",
          WebkitTextStroke: "1px rgba(255,255,255,0.06)",
          userSelect: "none",
          marginBottom: 48,
        }}
      >
        404
      </div>
      <h1
        style={{
          fontSize: "clamp(32px, 5vw, 64px)",
          fontWeight: 700,
          letterSpacing: "-0.04em",
          marginBottom: 24,
        }}
      >
        Page not found.
      </h1>
      <p style={{ fontSize: 16, color: "var(--dim)", fontWeight: 300, marginBottom: 48 }}>
        This page doesn't exist or has been moved.
      </p>
      <Link
        href="/"
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
        }}
      >
        ← Back to Home
      </Link>
    </div>
  );
}
