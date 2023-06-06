/* eslint-disable no-undef */
/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    experimental: {
        appDir: true,
    },
    images: {
        domains: ['api.accredible.com'],
    },
};

module.exports = nextConfig;
