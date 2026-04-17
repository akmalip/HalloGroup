"use client";
import { notFound } from "next/navigation";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import { CLUSTERS } from "@/lib/data";

const clusterMeta: Record<string, { color: string; desc: string; longDesc: string }> = {
  "creative-communication": { color: "#5EF220", desc: "The core creative engine of Hallo Group.", longDesc: "Branding, visual communication, content production, and everything in between. This cluster is where most ideas are born — and where they're brought to life with intention and craft." },
  "experiential-event": { color: "#F2A020", desc: "Experiences that outlive the moment.", longDesc: "From brand activations to large-scale events, this cluster specializes in creating physical and experiential moments that connect brands with people in memorable ways." },
  "lifestyle-retail-hospitality": { color: "#E05050", desc: "Creativity embedded in everyday life.", longDesc: "Retail concepts, food and beverage, and travel — this cluster builds lifestyle brands and spaces where creativity is part of the daily experience." },
  "learning-talent": { color: "#5090E8", desc: "Growing the next generation of creatives.", longDesc: "Talent development, education, and mentorship. This cluster invests in people — building the skills, mindset, and community that the creative industry in Indonesia needs to thrive." },
  "media-ip": { color: "#9060E0", desc: "Stories rooted in local culture.", longDesc: "Media production and intellectual property built around Indonesian identity. This cluster creates content, stories, and IP that are locally meaningful and globally relevant." },
};

export default function ClusterPage({ params }: { params: { slug: string } }) {
  const cluster = CLUSTERS.find((c) => c.slug === params.slug);
  if (!cluster) notFound();
  const meta = clusterMeta[cluster.slug];

  return (
    <PageShell title={cluster.name.replace("\n", " ")} accent={meta.color}>
      <div style={{ height: 3, background: meta.color, width: 64, marginBottom: 48 }} />
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, marginBottom: 96 }}>
        <div>
          <p style={{ fontSize: 22, color: "var(--white)", lineHeight: 1.6, fontWeight: 300, marginBottom: 24 }}>{meta.desc}</p>
          <p style={{ fontSize: 16, color: "var(--dim)", lineHeight: 1.8, fontWeight: 300 }}>{meta.longDesc}</p>
        </div>
        <div style={{ border: "1px solid var(--line)", padding: "36px", display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ fontSize: 11, color: meta.color, letterSpacing: "0.15em", textTransform: "uppercase" }}>Cluster {cluster.idx}</div>
          <div style={{ fontSize: 13, color: "rgba(255,255,255,0.25)", letterSpacing: "0.1em", textTransform: "uppercase" }}>Part of Hallo Group</div>
          <div style={{ borderTop: "1px solid var(--line)", paddingTop: 24, fontSize: 13, color: "rgba(255,255,255,0.2)" }}>{cluster.networks.length} active network{cluster.networks.length > 1 ? "s" : ""}</div>
        </div>
      </div>

      {/* Networks — now clickable */}
      <div>
        <div style={{ fontSize: 11, color: meta.color, letterSpacing: "0.15em", textTransform: "uppercase", display: "flex", alignItems: "center", gap: 12, marginBottom: 40 }}>
          <span style={{ width: 24, height: 1, background: meta.color, display: "block" }} />
          Networks in this cluster
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 2, background: "var(--line)" }}>
          {cluster.networks.map((n) => (
            <Link key={n.slug} href={`/networks/${n.slug}`} style={{ textDecoration: "none" }}>
              <div style={{ background: "var(--black)", padding: "48px 40px", display: "flex", flexDirection: "column", gap: 20, position: "relative", overflow: "hidden", transition: "background 0.3s", minHeight: 200 }}
                onMouseEnter={(e) => { const el = e.currentTarget as HTMLElement; el.style.background = "#111"; const bar = el.querySelector(".nw-bar") as HTMLElement; if (bar) bar.style.transform = "scaleX(1)"; }}
                onMouseLeave={(e) => { const el = e.currentTarget as HTMLElement; el.style.background = "var(--black)"; const bar = el.querySelector(".nw-bar") as HTMLElement; if (bar) bar.style.transform = "scaleX(0)"; }}>
                <div className="nw-bar" style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: meta.color, transform: "scaleX(0)", transformOrigin: "left", transition: "transform 0.4s cubic-bezier(0.4,0,0.2,1)" }} />
                <div style={{ width: 6, height: 6, borderRadius: "50%", background: meta.color, opacity: 0.6 }} />
                <div style={{ fontSize: 24, fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1.1, marginTop: "auto", color: "var(--white)" }}>{n.name}</div>
                <div style={{ fontSize: 11, color: "rgba(255,255,255,0.25)", letterSpacing: "0.08em", textTransform: "uppercase" }}>View →</div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div style={{ marginTop: 80, paddingTop: 40, borderTop: "1px solid var(--line)" }}>
        <Link href="/networks" style={{ display: "inline-flex", alignItems: "center", gap: 12, fontSize: 13, color: "rgba(255,255,255,0.3)", textDecoration: "none", letterSpacing: "0.08em", textTransform: "uppercase" }}>← All Networks</Link>
      </div>
    </PageShell>
  );
}
