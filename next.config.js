/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: { ignoreBuildErrors: true }, // TS-Fehler blockieren den Build nicht
  eslint: { ignoreDuringBuilds: true },    // ESLint-Fehler blockieren den Build nicht
  experimental: { typedRoutes: false },
};
module.exports = nextConfig;
