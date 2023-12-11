const express = require('express');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
//Configure dotenv files above using any other library and files
dotenv.config({ path: './config/config.env' });
//Creating an app from express
const app = express();
const cors = require("cors");
const db_name = 'users';
//Middleware
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }), express.json(), express.urlencoded({ extended: true }));

//listening to the server
app.listen(process.env.PORT, () => {
    console.log(`Server is listening at ${process.env.PORT}`);
})

// Authentication middleware
require('./config/jwt.config')
// database connection
require("./config/mongoose.config")(db_name);
require('./routes/user.routes')(app);
require('./routes/pirate.routes')(app);