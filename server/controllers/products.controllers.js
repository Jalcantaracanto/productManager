const Product = require("../models/products.model")

module.exports.createNewProduct = (req, res) => {
    Product.create(req.body)
        .then((newProduct) => res.json({ product: newProduct }))
        .catch((err) => res.json({ message: "Couldn't create Product", error: err }))
}

module.exports.findAllProducts = (req, res) => {
    Product.find()
        .then((allProducts) => res.json({ product: allProducts }))
        .catch((err) => res.json({ message: "I don't know could find all the products", error: err }))
}

module.exports.findOneProduct = (req, res) => {
    Product.findOne({ _id: req.params.id })
        .then((oneProduct) => res.json({ product: oneProduct }))
        .catch((err) => res.json({ message: "I don't know could find the product", error: err }))
}

module.exports.updateProduct = (req, res) => {
    Product.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
        .then((updateOneProduct) => res.json({ product: updateOneProduct }))
        .catch((err) => res.json({ message: "I don't know could update the product", error: err }))
}

module.exports.deleteProduct = (req, res) => {
    Product.deleteOne({ _id: req.params.id })
        .then((deletedProduct) => res.json({ product: deletedProduct }))
        .catch((err) => res.json({ message: "I don't know could delete the product", error: err }))
}
