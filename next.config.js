/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
    // Disable ALL image optimization to preserve full quality - images will display exactly as in /img folder
    unoptimized: true,
    // Keep SVG support
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    // Remove format conversion and size optimization to prevent any quality loss
    // formats: ['image/avif', 'image/webp'], // Removed - prevents format conversion
    // deviceSizes and imageSizes removed - not needed when unoptimized
  },
  // Optimize for production
  swcMinify: true,
  // Prevent memory leaks
  experimental: {
    optimizePackageImports: ['@/components'],
  },
}

module.exports = nextConfig

