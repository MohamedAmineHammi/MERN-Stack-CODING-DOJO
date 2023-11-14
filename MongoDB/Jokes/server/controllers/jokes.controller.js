const Joke = require("../models/jokes.model");
//find All jokes
const getAllJokes = (req, res) => {
  Joke.find()
  .then((allJokes) => res.json(allJokes))
  .catch((err) => console.log(err));
};

//find one joke
const getJokeById = (req, res) => {
    const { params } = req;
    Joke.findOne({ _id: params._id })
      .then((joke) => res.json(joke))
      .catch((err) => console.log(err));
  };


  //create new Joke
   const createNewJoke = (req, res) => {
    const { body } = req;
    Joke.create(body)
    .then((newJoke) => res.json(newJoke))
    .catch((err) => console.log(err));
   };

   //update new Joke
   const updateJoke = (req, res) => {
    Joke.findByIdAndUpdate({_id: req.params._id}, req.body, {
        new: true,
        runValidators: true,

    })
    .then((updatedJoke) => res.json(updatedJoke))
    .catch((err) => console.log(err));
   
   };


   //delete a joke

   const deleteJoke = (req, res) => {
    Joke.deleteOne({_id: req.params._id})
    .then((result) => res.json(result))
    .catch((err) => console.log(err));
   }


  module.exports = {
    getAllJokes,
    getJokeById,
    createNewJoke,
    updateJoke,
    deleteJoke,
  }
