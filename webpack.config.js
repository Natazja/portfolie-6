const path = require('path');

module.exports = {
    entry: './src/register.js',
    output: {
        filename: 'server.js',
        path: path.resolve(__dirname, 'dist'),
    },
};