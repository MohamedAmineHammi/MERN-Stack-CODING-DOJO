import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios"

export const Dashbord = () => {
    const [allProduct, setAllProduct] = useState([])
    useEffect(() => {
        axios.get("http://localhost:5000/api/product/")
        .then(res => {
            console.log(res.data)
            setAllProduct(res.data)
        })
        .catch(err => {
            console.log(err)
        })

    },[])
  return (
    <div>
      <h3>Dashbord</h3>
      <fieldset>
        {
            allProduct.map((product) =>{
                return <div key={product._id}>
                    Title : <h5>{product.title}</h5>
                    Price : <h5>{product.price}</h5>
                    Description : <h5>{product.description}</h5>
                </div>
            }
            )
        }
        </fieldset>
    </div>
  );
};
