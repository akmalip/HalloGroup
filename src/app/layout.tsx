import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hallo Group — Creative Lifestyle Ecosystem",
  description:
    "Creative consulting firm and end-to-end holding company building a creative ecosystem across Indonesia.",
  keywords: [
    "Hallo Group",
    "creative agency",
    "Sukabumi",
    "Indonesia",
    "creative ecosystem",
    "holding company",
  ],
  openGraph: {
    title: "Hallo Group — Creative Lifestyle Ecosystem",
    description:
      "Creative consulting firm and end-to-end holding company building a creative ecosystem across Indonesia.",
    url: "https://hallogroup.id",
    siteName: "Hallo Group",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hallo Group — Creative Lifestyle Ecosystem",
    description:
      "Creative consulting firm and end-to-end holding company building a creative ecosystem across Indonesia.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
