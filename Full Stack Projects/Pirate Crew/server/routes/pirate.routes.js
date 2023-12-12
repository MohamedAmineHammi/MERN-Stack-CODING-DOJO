const PirateControllers = require("../controllers/pirate.controller")

module.exports = (app) => {
    app.get("/api/test", PirateControllers.test)
    app.get("/api/Pirate", PirateControllers.findAllPirates)
    app.get("/api/Pirate/:b_id", PirateControllers.getOnePirate)
    app.post("/api/Pirate", PirateControllers.createNewPirate)
    app.put("/api/Pirate/:b_id", PirateControllers.UpdatePirate)
    app.delete("/api/Pirate/:b_id", PirateControllers.DeleteOnePirate)
}