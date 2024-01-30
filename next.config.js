/** @type {import('next').NextConfig} */
const withMDX = require('@next/mdx')()

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

module.exports = withMDX(nextConfig)
