const { Pirate } = require("../models/pirate.model")





module.exports.test = (req, res) => {
    res.json("the server Says hello MERN Stack Ninjas")
}


//! -----------------CRUD

//? READ ALL

module.exports.findAllPirates = (req, res) => {

    Pirate.find()
        .then(AllPirates => {
            console.log(AllPirates)
            res.json(AllPirates)
        })
        .catch(err => { res.json({ message: "wait a minute 😏😏 " }) })

}
//? CREATE
module.exports.createNewPirate = (req, res) => {

    Pirate.create(req.body)
        .then(CreatePirate => {
            console.log(CreatePirate)
            res.status(200).json({ CreatePirate})
        })
        .catch(err => { res.status(400).json({ message: "wait a minute 😏😏 ", err }) })


}
//? findOne

module.exports.getOnePirate = (req, res) => {

    Pirate.findOne({ _id: req.params.b_id })
        .then(OnePirate => {
            console.log(OnePirate)
            res.json({ OnePirate })
        })
        .catch(err => { res.status(400).json({ message: "wait a minute 😏😏 ", error: err }) })

}

//? UPDATE
module.exports.UpdatePirate = (req, res) => {
    Pirate.findOneAndUpdate(
        { _id: req.params.b_id },
        req.body,
        { new: true, runValidators: true }

    )
        .then(UpdatedPirate => {
            console.log(UpdatedPirate)
            res.json({ UpdatedPirate })
        })
        .catch(err => { res.status(400).json({ message: "wait a minute 😏😏 ", error: err }) })

}

//? DELETE
module.exports.DeleteOnePirate = (req, res) => {
    Pirate.deleteOne({ _id: req.params.b_id })
        .then(deletePirate => {
            console.log(deletePirate)
            res.json({ deletePirate })
        })
        .catch(err => { res.status(400).json({ message: "wait a minute 😏😏 ", error: err }) })

}