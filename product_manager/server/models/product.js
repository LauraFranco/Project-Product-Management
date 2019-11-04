const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
    title: { type: String, required: [true, "Product's title is required!"], minlength: [4, "Title must have at least 4 characters"]},
    price: { type: Number, required: [true, "Price field is mandatory"] },
    image: {type: String, required: [true, "Product should display an image!"]}
}, {timestamps: true });
mongoose.model('Product', ProductSchema);
