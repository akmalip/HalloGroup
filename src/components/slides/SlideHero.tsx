"use client";

export default function SlideHero() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        padding: "0 48px 80px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Ghost BG word */}
      <div
        className="text-outline-strong"
        style={{
          position: "absolute",
          bottom: "-0.08em",
          left: "-0.04em",
          fontSize: "clamp(180px, 26vw, 360px)",
          fontWeight: 700,
          letterSpacing: "-0.05em",
          lineHeight: 1,
          pointerEvents: "none",
          userSelect: "none",
          whiteSpace: "nowrap",
          zIndex: 0,
        }}
      >
        HALLO.
      </div>

      {/* Content */}
      <div style={{ position: "relative", zIndex: 2 }}>
        {/* Eyebrow */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            marginBottom: 32,
          }}
        >
          <div style={{ width: 24, height: 1, background: "var(--green)" }} />
          <span
            style={{
              fontSize: 11,
              color: "var(--green)",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
            }}
          >
            Creative Lifestyle Ecosystem
          </span>
        </div>

        {/* Headline */}
        <h1
          style={{
            fontSize: "clamp(80px, 11.5vw, 168px)",
            fontWeight: 700,
            lineHeight: 0.88,
            letterSpacing: "-0.045em",
            marginBottom: 52,
          }}
        >
          <div style={{ color: "var(--white)" }}>Grow</div>
          <div className="text-outline" style={{ fontStyle: "italic", fontWeight: 300 }}>
            with
          </div>
          <div style={{ color: "var(--green)" }}>
            Hallo<span style={{ color: "var(--white)" }}>.</span>
          </div>
        </h1>

        {/* Bottom row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr auto",
            alignItems: "flex-end",
            gap: 40,
            borderTop: "1px solid var(--line)",
            paddingTop: 28,
          }}
        >
          <p
            style={{
              maxWidth: 380,
              fontSize: 15,
              color: "var(--dim)",
              lineHeight: 1.75,
              fontWeight: 300,
            }}
          >
            Creative consulting firm and end-to-end holding company building a
            creative ecosystem across Indonesia.
          </p>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 12 }}>
            <span
              style={{
                fontSize: 11,
                color: "rgba(255,255,255,0.16)",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
              }}
            >
              Sukabumi, West Java
            </span>
            {/* Scroll indicator */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                fontSize: 11,
                color: "var(--dim)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              <div
                style={{
                  width: 36,
                  height: 1,
                  background: "rgba(255,255,255,0.08)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div
                  className="scroll-thumb"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    height: "100%",
                    width: "40%",
                    background: "var(--green)",
                  }}
                />
              </div>
              Scroll
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
