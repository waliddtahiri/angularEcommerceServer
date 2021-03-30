const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    /* category : {
        type: Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    } */
})

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;
