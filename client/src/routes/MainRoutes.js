import React, { useEffect, useState } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ProductForm } from "../components/ProductForm"
import { ProductList } from "../components/ProductList"
import axios from "axios"

export const MainRoutes = () => {
    // const [product, setProduct] = useState([])

    // useEffect(() => {
    //     axios.get("http://localhost:8080/api/products")
    //         .then((res) => setProduct(res.data))
    //         .catch((err) => console.log("Error: ", err))
    // }, [])

    // console.log(product)
    return (
        <BrowserRouter>
            
            {/* <ProductList product = {product}/> */}
            <Routes>
                <Route path="/" element={<ProductForm />} />
                <Route path="people/:id" element={""} />
            </Routes>
        </BrowserRouter>
    )
}
