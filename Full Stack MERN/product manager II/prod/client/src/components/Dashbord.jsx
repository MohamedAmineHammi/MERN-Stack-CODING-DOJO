import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios"
import { Link } from "react-router-dom"

export const Dashbord = (props) => {
    const [allProduct, setAllProduct] = useState([])
    const { refreshState } = props
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
  return (
    <div>
      <fieldset>
      All Products:

        {
            allProduct.map((product) =>{
                return <div key={product._id}>
                

                    <Link to={("/oneProduct/" + product._id)} type="submit" >{product.title}</Link>

                </div>
            }
            )
        }
        </fieldset>
    </div>
  );
};
