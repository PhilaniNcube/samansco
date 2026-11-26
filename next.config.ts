import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Core legacy samansco.com pages -> Samansco Industries or Contact
      { source: "/about-us", destination: "/samansco-industries", permanent: true },
      { source: "/projects", destination: "/samansco-industries", permanent: true },
      { source: "/projects/:path*", destination: "/samansco-industries", permanent: true },
      { source: "/products-catalog", destination: "/samansco-industries", permanent: true },
      { source: "/products-catalog/:path*", destination: "/samansco-industries", permanent: true },
      { source: "/product-category/:path*", destination: "/samansco-industries", permanent: true },
      { source: "/wp-content/uploads/:path*", destination: "/samansco-industries", permanent: true },

      // Retired news/blog & Sales Agent sign-up funnel
      { source: "/latest-news", destination: "/", permanent: true },
      { source: "/latest-news/:path*", destination: "/", permanent: true },
      { source: "/register", destination: "/contact", permanent: true },
      { source: "/contact-us", destination: "/contact", permanent: true },

      // Malformed relative .html footer links from old WordPress site
      { source: "/:path*/:file(.*\\.html)", destination: "/samansco-industries", permanent: true },
      { source: "/:file(.*\\.html)", destination: "/samansco-industries", permanent: true },
    ];
  },
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
