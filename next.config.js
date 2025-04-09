// Import the bundle analyzer
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  reactStrictMode: true,
  images: {
    imageSizes: [48, 64, 88, 96, 128, 256, 384, 416],
  },
  webpack(config, { isServer }) {
    if (!isServer) {
      // Adjust max chunk size for the client-side build
      config.optimization.splitChunks.maxSize = 250000; // Adjust chunk size as needed
    }
    return config;
  },
});
