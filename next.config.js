/** @type {import('next').NextConfig} */
const withMDX = require('@next/mdx')()
const withPWA = require("@ducanh2912/next-pwa").default({
    dest: "public",
    cacheOnFrontEndNav: true,
    aggressiveFrontEndNavCaching: true,
    reloadOnOnline: true,
    swcMinify: true,
    disable: false,
    workboxOptions: {
        disableDevLogs: true
    }
});

const nextConfig = {
    webpack(config) {
        config.module.rules.push({
            loader: '@svgr/webpack',
            issuer: /\.(js|ts)x?$/,
            options:{
                prettier: false,
                svgo: true,
                svgoConfig: {
                    plugins: [{
                        name: 'preset-default',
                        params: {
                            override: {
                                removeViewBox: false
                            }
                        }
                    }]
                },
                titleProp: true,
            },
            test: /\.svg$/
        });

        return config;
    },
    pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
    images: { unoptimized: true },
    experimental: {
        typedRoutes: true,
    }
}

module.exports = withPWA(withMDX(nextConfig))
