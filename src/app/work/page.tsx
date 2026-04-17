"use client";

import PageShell from "@/components/PageShell";


const clients = [
  "Traveloka", "KAI", "Wardah", "Emina", "SK-II",
  "L'Oreal", "Shopee Pay", "Xiaomi", "By.U", "Pertamina",
  "Bank BRI", "Telkom Indonesia", "Gojek", "Tokopedia", "Grab",
  "Samsung", "Pocari Sweat", "Unilever", "Indomie", "Garuda Indonesia",
];

export default function WorkPage() {
  return (
    <PageShell title="Work.">
      <p style={{ fontSize: 18, color: "var(--dim)", lineHeight: 1.8, fontWeight: 300, maxWidth: 560, marginBottom: 80 }}>
        Over 100 clients served across branding, campaigns, spatial design,
        production, and beyond.
      </p>

      {/* Clients grid */}
      <div style={{ marginBottom: 80 }}>
        <div style={{ fontSize: 11, color: "var(--green)", letterSpacing: "0.15em", textTransform: "uppercase", display: "flex", alignItems: "center", gap: 12, marginBottom: 40 }}>
          <span style={{ width: 24, height: 1, background: "var(--green)", display: "block" }} />
          Selected clients
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "1px",
            background: "var(--line)",
            border: "1px solid var(--line)",
          }}
        >
          {clients.map((name) => (
            <div
              key={name}
              style={{
                background: "var(--black)",
                padding: "32px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minHeight: 100,
                transition: "background 0.2s",
                cursor: "default",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "#131313")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "var(--black)")}
            >
              <span
                style={{
                  fontSize: 14,
                  fontWeight: 500,
                  color: "rgba(255,255,255,0.28)",
                  letterSpacing: "0.04em",
                  textAlign: "center",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--white)")}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "rgba(255,255,255,0.28)")}
              >
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Coming soon placeholder for case studies */}
      <div
        style={{
          border: "1px solid var(--line)",
          padding: "80px 48px",
          textAlign: "center",
        }}
      >
        <div style={{ fontSize: 11, color: "var(--green)", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 16 }}>
          Case studies
        </div>
        <p style={{ fontSize: 16, color: "rgba(255,255,255,0.2)", fontWeight: 300 }}>
          Coming soon.
        </p>
      </div>
    </PageShell>
  );
}
