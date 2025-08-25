  const mongoose = require('mongoose');
    
    const productSchema = new mongoose.Schema({
        name: {
            type: String,
            required: true
        },
        category: {
            type: String,
            required: true,
            enum: ['electronics', 'fashion', 'home', 'books']
        },
        price: {
            type: Number,
            required: true,
            min: 1
        },
        inStock: {
            type: Boolean,
            default: true
        },
        releaseDate: {
            type: Date,
        },
        reviews: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'review'
        }],
    });

    const reviewSchema = new mongoose.Schema({
            user: {
                type: String,
                required: true
            },
            rating: {
                type: Number,
                required: true,
                min: 1,
                max: 5
            },
            comment: {
                type: String,
            },
            createdAt: {
                type: Date,
                default: Date.now
            },
            product: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'product',
                required: true
            },
        });

    const product = mongoose.model('product', productSchema);
    const review = mongoose.model('review', reviewSchema);  
    module.exports = { product, review };
