const { NextFederationPlugin } = require("@module-federation/nextjs-mf");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, options) => {
    config.experiments = { topLevelAwait: true };

    config.plugins.push(
      new NextFederationPlugin({
        name: "engine",
        filename: "static/chunks/engine.js",
        exposes: {
          "./components/Engine": "./src/components/Engine",
        },
      })
    );

    return config;
  },
};

module.exports = nextConfig;
