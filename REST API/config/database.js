const mongoose = require('mongoose');
process.env.DB_URL = 'mongodb+srv://admin:cacolucia@trips-4jw5l.mongodb.net/ads?retryWrites=true&w=majority'

mongoose.set('useCreateIndex', true);

module.exports = () => {
     return mongoose.createConnection(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
};
