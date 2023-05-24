import React, { useState, useEffect } from "react"
import { getProducts } from "../services/product-service"
import { ProductForm } from "../components/ProductForm"
import { ProductList } from "../components/ProductList"

export const Home = () => {
    const [products, setProducts] = useState([])

    const getProductsFromService = async () => {
        try {
            const list = await getProducts()
            console.log(list.data)
            setProducts(list.data.product)
        } catch (error){
            console.log(error)
        }
    }

    useEffect(() => {
        getProductsFromService();
        
    },[])

    return (
        <>
            <ProductForm/>
            <ProductList products={products}/>
        </>
    )
}
