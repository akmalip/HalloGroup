import { MARQUEE_NETWORKS } from "@/lib/data";

export default function Marquee() {
  const items = [...MARQUEE_NETWORKS, ...MARQUEE_NETWORKS];

  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 150,
        borderTop: "1px solid var(--line)",
        padding: "14px 0",
        overflow: "hidden",
        background: "var(--black)",
      }}
    >
      <div className="marquee-track" style={{ display: "flex", width: "max-content" }}>
        {items.map((name, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", whiteSpace: "nowrap" }}>
            <span
              style={{
                fontSize: 10,
                color: "rgba(255,255,255,0.18)",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                padding: "0 24px",
              }}
            >
              {name}
            </span>
            <span
              style={{
                width: 3,
                height: 3,
                background: "var(--green)",
                borderRadius: "50%",
                opacity: 0.45,
                flexShrink: 0,
                display: "block",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
