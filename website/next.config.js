/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['api.kinos-engine.ai', 'storage.googleapis.com'],
  },
  output: 'standalone'
}

module.exports = nextConfig
