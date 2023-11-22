import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const Update = () => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");

const navigate = useNavigate()


  const { product_id } = useParams();


  useEffect(() => {
    axios.get(`http://localhost:5000/api/product/${product_id}`)
        .then(res => {
            console.log(res.data.OneProduct)
            const { title, price, description } = res.data.OneProduct
            setTitle(title)
            setPrice(price)
            setDescription(description)

        })
        .catch(err => {
            console.log(err)
        })
}, [])


  const UpdateHandler = (e) => {
    e.preventDefault();

    const updateProduct = {
        title,
        price,
        description
        

    }

    
    axios
      .put(`http://localhost:5000/api/product/${product_id}`, updateProduct)
      .then((res) => {
        console.log(res);
        navigate("/")

      })
      .catch((err) => {
        console.log(err);
      })
  }







  return (

    <div>
        <h3>Update Product</h3>
       
      <form onSubmit={UpdateHandler}>
        <label>Title :</label>
        <input
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value={title}
        />
        <br />
        <label>Price :</label>
        <input
          onChange={(e) => {
            setPrice(e.target.value);
          }}
          value={price}
        />
        <br />
        <label>Description :</label>
        <input
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          value={description}
        />
        <br />
        <input type="submit" value="Update" />

      </form>
    </div>
    )
        }


export default Update