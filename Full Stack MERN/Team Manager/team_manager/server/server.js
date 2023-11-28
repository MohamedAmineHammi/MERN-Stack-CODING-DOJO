const express = require("express")         // import express
const app = express()                     // declar app
const cors = require("cors")              // import middelwere to connect tow server 
const PORT = 8000                        // porte how server youse
const DB_NAME = "players"                      // declart data base

// middelware
app.use(cors());
app.use(express.json(), express.urlencoded({ extended: true }));

// Connect to the DB ---------
require("./config/mongoose.config")(DB_NAME)

// import the toutes ---
require("./routes/players.routes")(app)


// ----------------------------------------------------------------------
app.listen(PORT, () => { console.log(`Server started on PORT ${PORT} -----  go go go ------`) })