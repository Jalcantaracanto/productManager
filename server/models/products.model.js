const { Schema, model} = require("mongoose");

const ProductsSchema = new Schema({
	title: {
        type: String,
        required: [true, 'you must enter the title'],
        minlength: [3, 'Title must have at least 3 characters']
    }, 
    price: {
        type: Number,
        required: [true, 'you must enter the number'],
        minlength: [1, 'Products must have a price']
    },
    description: {
        type: String,
        required: [true, 'you must enter the description'],
        minlength: [5, 'Description must have at least 5 characters']
    },
});

const Product = model("Product", ProductsSchema);

module.exports = Product;