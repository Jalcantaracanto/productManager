import React, { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { getProduct, updateProduct } from "../services/product-service"

export const ProductUpdate = () => {
    const { id } = useParams()
    const [product, setProduct] = useState({
        title: "",
        price: "",
        description: "",
    })
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

    const updateProductFromService = async (e) => {
        e.preventDefault()
        try {
            const response = await updateProduct(id, product)
            console.log(response.data)
            setProduct(response.data.product)
            returnHome()
        } catch (error) {
            console.log(error)
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setProduct({
            ...product,
            [name]: value,
        })
    }

    useEffect(() => {
        getOneProductFromService()
    }, [])

    const returnHome = () => {
        navigate("/home")
    }

    return (
        <div>
            <form onSubmit={updateProductFromService}>
                <h1>Product Manager</h1>
                <div>
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" value={product.title} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="price">Price</label>
                    <input type="text" name="price" value={product.price} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="description">Description</label>
                    <input type="text" name="description" value={product.description} onChange={handleChange} />
                </div>
                <input type="submit" value="Update" />
                <input type="button" value="Back" onClick={() => navigate(-1)} />
            </form>
        </div>
    )
}
