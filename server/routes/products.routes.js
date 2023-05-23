const ProductController = require("../controllers/products.controllers")

module.exports = (app) => {
    app.get("/api/products", ProductController.findAllProducts)
    app.post("/api/product/new", ProductController.createNewProduct)
}
