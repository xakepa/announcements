const mongoose = require('mongoose');
const config = require('./config');

mongoose.set('useCreateIndex', true);

module.exports = () => {
     return mongoose.connect('mongodb+srv://admin:cacolucia@trips-4jw5l.mongodb.net/ads?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });
};
