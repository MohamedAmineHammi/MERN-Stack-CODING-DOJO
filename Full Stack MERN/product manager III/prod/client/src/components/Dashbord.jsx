import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios"
import { Link } from "react-router-dom"

export const Dashbord = (props) => {
    const [allProduct, setAllProduct] = useState([])
    const { refreshState, refresh } = props
    useEffect(() => {
        axios.get("http://localhost:5000/api/product/")
        .then(res => {
            console.log(res.data)
            setAllProduct(res.data)
        })
        .catch(err => {
            console.log(err)
        })

    },[refreshState])



    const deleteHandler = (id) => {
        axios.delete(`http://localhost:5000/api/product/${id}`)
            .then(res => { refresh() })
            .catch(err => {
                console.log(err)
            })
    }





  return (
    <div>
      <fieldset>
      All Products:

        {
            allProduct.map((product) =>{
                return <div key={product._id}>
                

                    <Link to={("/oneProduct/" + product._id)} type="submit" >{product.title}</Link>
                    <button onClick={(e) => { deleteHandler(product._id) }}>Delete</button>
                            <hr />                </div>
            }
            )
        }
        </fieldset>
    </div>
  );
};
