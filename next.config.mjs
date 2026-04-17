/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        // Static HTML pages in /public subfolders — serve with no interference
        source: "/(herocommerce|cherry-ops|SukabumiDiscovery|DapurKita)/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
        ],
      },
    ];
  },
};
export default nextConfig;
