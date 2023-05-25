import React, { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { getProduct } from "../services/product-service"
import { Link } from "react-router-dom"
import { ProductDelete } from "./ProductDelete"

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
    }, [])

    return (
        <div>
            <h1>Product Detail</h1>
            <p>Title: {product.title}</p>
            <p>Price: {product.price}</p>
            <p>Description: {product.description}</p>
            <Link to={`/${product._id}/edit`}>
                <input type="button" value="Edit" />
            </Link>

            <input type="button" value="Back" onClick={() => navigate(-1)} />
            <ProductDelete productId={product._id}/>
        </div>
    )
}
