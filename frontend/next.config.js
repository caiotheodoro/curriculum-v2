/** @type {import('next').NextConfig} */
const nextConfig = {
  // transpilePackages: ['@nextui-org/react'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'robohash.org',
      },
    ],
  },
}

module.exports = nextConfig
