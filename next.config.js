/** @type {import('next').NextConfig} */
// const nextConfig = {}

// module.exports = nextConfig
// next.config.js
module.exports = {
    eslint: {
      dirs: ['pages', 'components', 'lib'], // Optional: Specify directories to lint
      ignoreDuringBuilds: true, // Optional: Ignore linting during build (only for builds)
    },
  };
