const models = require('../models');

module.exports = {
    get: (req, res, next) => {
        const limitation = +req.query
        models.Ads.find().limit(limitation).populate('author').lean()
            .then((ads) => res.send(ads))
            .catch(next);
    },

    post: (req, res, next) => {
        const { description } = req.body;
        const { _id } = req.user;

        models.Ads.create({ description, author: _id })
            .then((createdAd) => {
                return Promise.all([
                    models.User.updateOne({ _id }, { $push: { posts: createdAd } }),
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