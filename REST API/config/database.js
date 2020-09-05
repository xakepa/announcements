const mongoose = require('mongoose');

mongoose.set('useCreateIndex', true);

module.exports = () => {
     return mongoose.createConnection(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
};
