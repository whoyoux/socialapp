const withImages = require('next-images');

module.exports = withImages({
    images: {
        domains: ['tailwindui.com', 'lh3.googleusercontent.com']
    },
    reactStrictMode: true,
    webpack(config, options) {
        return config;
    }
});
