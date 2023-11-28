// import the controller 
const PlayerController = require("../controller/players.controller")

// =============================creat routs

module.exports =(app)=>{ //  we should be group all routes 
    // create route for get all 
    app.get("/api/players", PlayerController.findAllplayer) // ok

    // create route to add one
    app.post("/api/players", PlayerController.CreatePlayer); // ok

    // create route for get one by id
    app.get("/api/players/:_id", PlayerController.findOneById);// ok

    // create route to update one
    app.put("/api/players/:_id", PlayerController.updatePlayer);// ok

    // create route to delete one
    app.delete("/api/players/:_id", PlayerController.deletePlayer);// ok
} 
