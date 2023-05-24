import React, { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { getProduct } from "../services/product-service"

export const ProductDetail = () => {
    const { id } = useParams()
    const [product, setProduct] = useState({})
    const navigate = useNavigate()

    const getOneProductFromService = async () => {
        try {
            const response = await getProduct(id)
            console.log(response.data)
            setProduct(response.data.product)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getOneProductFromService()
    }, [id])

    const goBack = () => {
        navigate(-1)
    }

    return (
        <div>
            <h1>Product Detail</h1>
            <p>Title: {product.title}</p>
            <p>Price: {product.price}</p>
            <p>Description: {product.description}</p>
            <button onClick={goBack}>Go Back</button>
        </div>
    )
}
