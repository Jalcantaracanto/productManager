const ProductController = require("../controllers/products.controllers")

module.exports = (app) => {
    app.get("/api/products", ProductController.findAllProducts)
    app.get("/api/product/:id", ProductController.findOneProduct)
    app.post("/api/product/new", ProductController.createNewProduct)
    app.put("/api/product/update/:id", ProductController.updateProduct)
    app.delete("/api/product/delete/:id", ProductController.deleteProduct)
}
