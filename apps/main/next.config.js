const { NextFederationPlugin } = require("@module-federation/nextjs-mf");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, options) => {
    const { isServer } = options;

    config.experiments = { topLevelAwait: true };

    config.plugins.push(
      new NextFederationPlugin({
        name: "main",
        filename: "static/chunks/main.js",
        remotes: {
          engine: `engine@http://localhost:7000/_next/static/${
            isServer ? "ssr" : "chunks"
          }/engine.js`,
        },
      })
    );

    return config;
  },
};

module.exports = nextConfig;
