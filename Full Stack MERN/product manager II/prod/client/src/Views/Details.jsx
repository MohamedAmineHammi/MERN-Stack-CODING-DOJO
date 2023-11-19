import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
export const Details = () => {
    const[oneProduct, setOneProduct] = useState({})
    const { product_id } = useParams()

    useEffect(() => {
        axios.get(`http://localhost:5000/api/product/${product_id}`)
            .then(res => {
                console.log(res.data)
                setOneProduct(res.data.OneProduct)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])
    return (
        <div>
            {(oneProduct) ?
                <div>
                   <h3>{oneProduct.title}</h3>
                    Price : {oneProduct.price} <br />


                    Description : {oneProduct.description}
                </div> : null}
        </div>
    )
}
