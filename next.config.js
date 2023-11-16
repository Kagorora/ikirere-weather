/** @type {import('next').NextConfig} */
const nextConfig = {
    appDir: true,
    serverComponentsExternalPackages: [
        '@tremor/react',
    ]
}

module.exports = nextConfig
