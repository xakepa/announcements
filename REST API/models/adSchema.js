const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Model = mongoose.model;
const { String, Number, Boolean, ObjectId } = Schema.Types;

const Ads = new Schema({

    title: {
        type: String,
        required: true
    },

    category: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: false
    },
    location: {
        type: String,
        required: true
    },
    condition: {
        type: String,
        required: false
    },
    createdAt: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    owner: {
        type: ObjectId,
        ref: "User"
    },
});

module.exports = new Model('Ads', Ads);