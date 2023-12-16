const express = require("express")
const cors = require("cors")


const app = express()

const port = 5000;


app.use(cors(), express.json(), express.urlencoded({ extends: true }))
require("./config/mongoose.config")

require("./routes/pet.routes")(app)

 const AllpetControlles = require("./routes/pet.routes")
 AllpetControlles(app)





app.listen(port, console.log(`You server is running smoothly at ${port}`))