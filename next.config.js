// next.config.js
const withCSS = require('@zeit/next-css');
const withLess = require('@zeit/next-less');

const nextConfig = {
    async headers() {
        return [
            {
                source: '/.well-known/apple-app-site-association',
                headers: [
                    {
                        key: 'Content-Type',
                        value: 'application/json',
                    },
                    {
                        key: 'Content-Disposition',
                        value: 'inline'
                    }
                ]
            },
            {
                source: '/.well-known/test.json',
                headers: [
                    {
                        key: 'Content-Type',
                        value: 'application/json',
                    },
                ]
            }
        ]
    },
    async redirects() {
        return [
            {
                source: '/support/',
                destination: '/de/kontakt',
                permanent: false
            },
            {
                source: '/en/support/',
                destination: '/en/contact',
                permanent: false
            },
            {
                source: '/de/support/',
                destination: '/de/kontakt',
                permanent: false
            }
        ]
    },
    async rewrites() {
        return [
            {
                source: '/selbst-upload/',
                destination: '/media/selfupload_explained.mp4'
            },
            {
                source: '/selbst-upload',
                destination: '/media/selfupload_explained.mp4'
            }
        ]
    },
    target: 'serverless',
    api: {
        bodyParser: true
    },
    webpack: function (config) {
        config.module.rules.push({
            test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
            use: {
                loader: 'url-loader',
                options: {
                    limit: 100000,
                    name: '[name].[ext]'
                }
            }
        })
        return config
    },
    // css/less specific configs
    cssModules: false,
    cssLoaderOptions: {
        importLoaders: 1,
        localIdentName: "[local]___[hash:base64:5]",
    },
    // add trailing slash and index.html files per folder
    trailingSlash: true
}

module.exports = withLess(withCSS({
    ...nextConfig
}));
