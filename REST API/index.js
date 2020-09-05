require('dotenv').config()
const dbConnection = require('./config/database');

const app = require('express')()



dbConnection().then(() => {

    require('./config/express')(app);

    require('./config/routes')(app);

    app.use(function (err, req, res, next) {
        console.error(err);
        res.status(500).send(err.message);
        console.log('*'.repeat(90))
    });

    app.listen(process.env.PORT || 8000, console.log(`Listening on port ${process.env.PORT}!`))

}).catch(console.error);
