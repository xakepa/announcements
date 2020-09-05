const env = process.env.NODE_ENV || 'development';

const config = {
    development: {
        port: process.env.PORT || 6666,
        dbURL: process.env.DB_URL,
        authCookieName: 'jwt-token'
    },
    production: {}
};

module.exports = config[env];