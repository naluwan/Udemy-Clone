/** @type {import('next').NextConfig} */

const debug = process.env.NODE_ENV !== 'production';
const nextConfig = {
  images: {
    domains: ['utfs.io'],
  },
  assetPrefix: !debug ? 'https://naluwan.github.io/Udemy-Clone/' : '',
};

module.exports = nextConfig;
