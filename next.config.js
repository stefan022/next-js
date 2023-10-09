const withMDX = require('@next/mdx')()

/** @type {import('next').NextConfig} */
const nextConfig = {
    skipTrailingSlashRedirect: true,
    pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
    compress: false,
}

module.exports = withMDX(nextConfig);
