const mongoose = require("mongoose");
const JokeSchema = new mongoose.Schema(
    {
        setup: String,
        punchline: String,
    },
    { timesTamps: true}
)
const Joke = mongoose.model("Joke", JokeSchema);
module.exports = Joke;