const petControllers = require("../controllers/pet.controller")

module.exports = (app) => {
    app.get("/api/test", petControllers.test)
    app.get("/api/pet", petControllers.findAllpets)
    app.get("/api/pet/:b_id", petControllers.getOnepet)
    app.post("/api/pet", petControllers.createNewpet)
    app.put("/api/pet/:b_id", petControllers.Updatepet)
    app.delete("/api/pet/:b_id", petControllers.DeleteOnepet)
}