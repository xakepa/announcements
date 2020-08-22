const models = require('../models');

module.exports = {
    get: (req, res, next) => {
        const limitation = +req.query
        models.Ads.find().limit(limitation).populate('user').lean()
            .then(ads => res.send(ads))
            .catch(next);
    },

    getSingleAd: (req, res, next) => {
        console.log();
        console.log(req.query);

        models.Ads.findById(req.query.id).lean()
            .then(ad => res.send(ad))
            .catch(next);
    },


    post: (req, res, next) => {
        const { title, category, location, imageUrl, condition, description, phoneNumber, price, user } = req.body;
        const _id = user.id

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
                    models.User.updateOne({ _id }, { $push: { userAds: createdAd }, }, { upsert: true }),
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