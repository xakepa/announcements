const env = process.env.NODE_ENV || 'development';

const config = {
    development: {
        port: process.env.PORT || 6666,
        dbURL: process.env.DB_URL || 'mongodb+srv://admin:cacolucia@trips-4jw5l.mongodb.net/ads?retryWrites=true&w=majority',
        authCookieName: 'jwt-token'
    },
    production: {}
};

module.exports = config[env];