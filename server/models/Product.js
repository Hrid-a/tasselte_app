const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({

    name: {
        type: String,
        trim: true,
        required: [true, "The product name is required"],
        unique: [true, "The product name should be unique"],
        minLength: [4, 'The product name must be at least 4 characters'],
        maxLength: [30, "The product name shouldn't exceed 30 characters"]
    },
    price: {
        type: Number,
        required: [true, "Please provide the product price"],

    },
    description: {
        type: String,
        required: [true, "Please provide the product description"],
        minLength: [10, "The Product description must be at least 10 characters long"],
        maxLength: [270, "The Product description must be at most 270 characters long"],
    },
    stock: {
        type: Number,
        required: [true, "Please provide the product price"],
    },
    // id, src;
    images: {},
    user: {
        type: mongoose.Schema.ObjectId,
        ref: "",
        required: true

    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

module.exports = mongoose.model('Product', productSchema);
