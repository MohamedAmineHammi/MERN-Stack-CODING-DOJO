import React, { useState } from "react";
import axios from "axios";

export const Form = (props) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const {refresh} = props

  const submitHandler = (e) => {
    e.preventDefault()

    const newProduct = {
        title: title,
        price: price,
        description: description
    }
    axios.post("http://localhost:5000/api/product", newProduct)
    .then(res => {
        console.log(res)
        refresh()
        setTitle("")
        setPrice('')
        setDescription('')
    })
    .catch(err => {
        console.log(err)
    })
  }

  return (
    <div>
      <h3>Product Manager</h3>
      <form onSubmit={submitHandler}>
        <label>Title :</label> 
        <input
          onChange={(e) => {
            setTitle(e.target.value);
          }} value={title}
        /><br />
        <label>Price :</label> 
        <input
          onChange={(e) => {
            setPrice(e.target.value);
          }} value={price}
        /><br />
        <label>Description :</label> 
        <input
          onChange={(e) => {
            setDescription(e.target.value);
          }} value={description}
        /><br />
        <input type="submit" /> <br /><br />
      </form>
    </div>
  );
};
