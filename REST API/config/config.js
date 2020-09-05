const env = process.env.NODE_ENV || 'development';

const config = {
    development: {
        port: process.env.PORT || 6666,
        dbURL: process.env.MONGODB_URI,
        authCookieName: 'jwt-token'
    },
    production: {
        port: process.env.PORT || 8000,
        dbURL: process.env.MONGODB_URI,
        authCookieName: 'jwt-token'
    }
};

module.exports = config[env];