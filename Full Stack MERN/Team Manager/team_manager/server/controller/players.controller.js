// CRUD operation 
// imprta models
const Player =require("../models/player.model")

//============================ bild function ------all this function is a promess so evry one need .then and .catch 


// bild function to get all --------------------------------
module.exports.findAllplayer = (request, response) =>{
    Player.find()
    
    .then((allPlayer)=>{ 
        response.json(allPlayer) }) // array of object  i can use just objet and sand other parameter   response.json({allPlayer , status :"ok" })
    .catch((err)=>{ 
        response.status(400).json({message :"something wnt wrong with get all --findAllplayer-- DB" , serverError : err})})

}

// bild function to get one by id --------------------------------
module.exports.findOneById = (request, response) =>{
    Player.findById({_id : request.params._id})
    .then((OnePlayer)=>{ 
        response.json(OnePlayer) }) // array of object  i can use just objet and sand other parameter   response.json({OnePlayer , status :"ok" })
    .catch((err)=>{ 
        response.status(400).json({message :"something wnt wrong" , serverError : err})})
}

// bild function to create new Player --------------------------------
module.exports.CreatePlayer = (request, response) =>{
    Player.create(request.body)
    .then((NewPlayer)=>{ 
        response.json({NewPlayer})}) // array of object  i can use just objet and sand other parameter   response.json({NewPlayer: Player })
    .catch((err)=>{response.status(400).json({message :"something wnt wrong" , serverError : err})})
}

// bild function to update Player ----------------------------------
module.exports.updatePlayer = (request, response) => {
    Player.findByIdAndUpdate(
        { _id: request.params._id },
        request.body,
        { new: true, runValidators: true }
    )
        .then(upPlayer => response.json(upPlayer ))
        .catch(err => response.status(400).json({ message: 'Something went wrong update Player', error: err }));
}

// bild function to delete Player ----------------------------------
module.exports.deletePlayer = (request, response) => {
    Player.findByIdAndDelete({ _id: request.params._id })
        .then(delPlayer => response.json(delPlayer ))
        .catch(err =>response.status(400).json({ message: 'Something went wrong', error: err }));
}