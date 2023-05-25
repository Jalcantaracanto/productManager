import React, { useState, useEffect } from "react"
import { getProducts } from "../services/product-service"
import { ProductForm } from "../components/ProductForm"
import { ProductList } from "../components/ProductList"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

export const Home = () => {
    const [products, setProducts] = useState([])

    const getProductsFromService = async () => {
        try {
            const list = await getProducts()
            console.log(list.data)
            setProducts(list.data.product)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getProductsFromService()
    }, [])

    return (
        <>
            <Container>
                <Row>
                    <Col></Col>
                    <Col xs={6}>
                        <ProductForm products={products} setProducts={setProducts} />
                    </Col>
                    <Col></Col>
                </Row>
                <Row>
                    <Col></Col>
                    <Col xs={5}>
                        <ProductList products={products} setProducts={setProducts} />
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        </>
    )
}
