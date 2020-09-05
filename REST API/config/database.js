const mongoose = require('mongoose');

mongoose.set('useCreateIndex', true);

module.exports = () => {
     return mongoose.createConnection(process.env.MONGODB_URI || 'mongodb+srv://admin:cacolucia@trips-4jw5l.mongodb.net/ads?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });
};
