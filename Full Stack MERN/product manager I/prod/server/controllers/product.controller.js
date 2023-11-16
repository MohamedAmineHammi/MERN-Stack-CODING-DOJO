const { Product } = require ("../models/Product.model")





module.exports.test = (req, res) => {
    res.json("the server says hello Mern stack ninjas")
}

//! -----------------CRUD

//? READ ALL

module.exports.findAllProduct = (req, res) => {
    Product.find()
        .then(allProduct => {
            console.log(allProduct)
            res.json(allProduct)
        })
        .catch(err => { res.json({ message: "wait a minute 😏😏 " }) })

}
//? CREATE
module.exports.createNewProduct = (req, res) => {
    Product.create(req.body)
        .then(CreateProduct => {
            console.log(CreateProduct)
            res.status(200).json({ CreateProduct })
        })
        .catch(err => { res.status(400).json({ message: "wait a minute 😏😏 ", err }) })


}
//? findOne

module.exports.getOneProduct = (req, res) => {
    Product.findOne({ _id: req.params.p_id })
        .then(OneProduct => {
            console.log(OneProduct)
            res.json({ OneProduct })
        })
        .catch(err => { res.status(400).json({ message: "wait a minute 😏😏 ", error: err }) })

}

//? UPDATE
module.exports.UpdateProduct = (req, res) => {
    Product.findOneAndUpdate(
        { _id: req.params.p_id },
        req.body,
        { new: true, runValidators: true }

    )
        .then(UpdatedProduct => {
            console.log(UpdateProduct)
            res.json({ UpdateProduct })
        })
        .catch(err => { res.status(400).json({ message: "wait a minute 😏😏 ", error: err }) })

}

//? DELETE
module.exports.DeleteOneProduct = (req, res) => {
    Product.deleteOne({ _id: req.params.p_id })
        .then(deleteProduct => {
            console.log(deleteProduct)
            res.json({ deleteProduct })
        })
        .catch(err => { res.status(400).json({ message: "wait a minute 😏😏 ", error: err }) })

}
