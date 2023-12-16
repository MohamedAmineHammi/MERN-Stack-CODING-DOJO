const { pet } = require("../models/pet.model")





module.exports.test = (req, res) => {
    res.json("the server Says hello MERN Stack")
}


//! -----------------CRUD

//? READ ALL

module.exports.findAllpets = (req, res) => {

    pet.find()
        .then(Allpets => {
            console.log(Allpets)
            res.json(Allpets)
        })
        .catch(err => { res.json({ message: "wait a minute 😏😏 " }) })

}
//? CREATE
module.exports.createNewpet = (req, res) => {

    pet.create(req.body)
        .then(Createpet => {
            console.log(Createpet)
            res.status(200).json({ Createpet })
        })
        .catch(err => { res.status(400).json({ message: "wait a minute 😏😏 ", err }) })


}
//? findOne

module.exports.getOnepet = (req, res) => {

    pet.findOne({ _id: req.params.b_id })
        .then(Onepet => {
            console.log(Onepet)
            res.json({ Onepet })
        })
        .catch(err => { res.status(400).json({ message: "wait a minute 😏😏 ", error: err }) })

}

//? UPDATE
module.exports.Updatepet = (req, res) => {
    pet.findOneAndUpdate(
        { _id: req.params.b_id },
        req.body,
        { new: true, runValidators: true }

    )
        .then(Updatedpet => {
            console.log(Updatedpet)
            res.json({ Updatedpet })
        })
        .catch(err => { res.status(400).json({ message: "wait a minute 😏😏 ", error: err }) })

}

//? DELETE
module.exports.DeleteOnepet = (req, res) => {
    pet.deleteOne({ _id: req.params.b_id })
        .then(deletepet => {
            console.log(deletepet)
            res.json({ deletepet })
        })
        .catch(err => { res.status(400).json({ message: "wait a minute 😏😏 ", error: err }) })

}