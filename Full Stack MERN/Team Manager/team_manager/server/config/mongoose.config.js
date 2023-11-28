const mongoose = require("mongoose");   // import mongoose


module.exports = (DB_NAME) => {   // to export  to here from server

    mongoose.connect(`mongodb://localhost/${DB_NAME}`)                                              // connect to data base
        .then(() => { console.log(`Established a connection to the database ${DB_NAME} ----go go go `) })  //  if server connect 
        .catch((err) => { console.log(`There was a problem connecting to ${DB_NAME}`) })           // if data dase not conncet consol log the err 
}