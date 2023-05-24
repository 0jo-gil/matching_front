const path = require('path');

module.exports = {
    webpack: {
        alias: {
            '@': path.resolve(__dirname, 'src/'),
            '@services': path.resolve(__dirname, 'src/services'),
            '@hooks': path.resolve(__dirname, 'src/hooks'),
            '@utils': path.resolve(__dirname, 'src/common/utils'),
            '@components': path.resolve(__dirname, 'src/components'),
            '@pages': path.resolve(__dirname, 'src/pages'),
            '@styled': path.resolve(__dirname, 'src/common/styled'),
            '@state': path.resolve(__dirname, 'src/state'),
        },
    },
};
