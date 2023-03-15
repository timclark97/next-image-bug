/** @type {import("next").NextConfig} */
module.exports = {
  images: {
    loader: "custom",
    loaderFile: "./lib/imageLoader.js",
  },
  experimental: {
    runtime: "experimental-edge",
  },
  reactStrictMode: true,
};
