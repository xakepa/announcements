const models = require('../models');

module.exports = {
    get: (req, res, next) => {
        const limitation = +req.query
        models.Ads.find().limit(limitation).populate('user').lean()
            .then((ads) => res.send(ads))
            .catch(next);
    },

    post: (req, res, next) => {
        const { title, category, location, imageUrl, condition, description, phoneNumber, price } = req.body;
        console.log(req.body);
        //const { _id } = req.user;
        const { _id } = req.body.user;

        models.Ads.create({
            title,
            category,
            location,
            imageUrl,
            condition,
            description,
            phoneNumber,
            price,
            owner: _id,
            createdAt: new Date().toString().slice(0, 24),
        })
            .then((createdAd) => {
                return Promise.all([
                    models.User.updateOne({ _id }, { $push: { userAds: createdAd } }),
                    models.Ads.findOne({ _id: createdAd._id })
                ]);
            })
            .then(([modifiedObj, adObj]) => {
                res.send(adObj);
            })
            .catch(next);
    },

    put: (req, res, next) => {
        const id = req.params.id;
        const { description } = req.body;
        models.Ads.updateOne({ _id: id }, { description })
            .then((updatedAd) => res.send(updatedAd))
            .catch(next)
    },

    delete: (req, res, next) => {
        const id = req.params.id;
        models.Ads.deleteOne({ _id: id })
            .then((deleteAd) => res.send(deleteAd))
            .catch(next)
    }
};