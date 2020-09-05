const mongoose = require('mongoose');
<<<<<<< HEAD

=======
>>>>>>> ae9f09851712e1c236c3b7ba7b5eff6a621aba39

mongoose.set('useCreateIndex', true);

module.exports = () => {
     return mongoose.createConnection(process.env.MONGODB_URI || 'mongodb+srv://admin:cacolucia@trips-4jw5l.mongodb.net/ads?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });
};
