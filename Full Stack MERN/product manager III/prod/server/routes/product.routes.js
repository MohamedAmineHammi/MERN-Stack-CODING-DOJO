const ProductControllers = require("../controllers/product.controller")

module.exports = (app) => {
    app.get("/api/test",ProductControllers.test)
    app.get("/api/product", ProductControllers.findAllProduct)
    app.get("/api/product/:p_id", ProductControllers.getOneProduct)
    app.post("/api/product", ProductControllers.createNewProduct)
    app.put("/api/product/:p_id", ProductControllers.UpdateProduct)
    app.delete("/api/product/:p_id", ProductControllers.DeleteOneProduct)

}