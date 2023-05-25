import React, {  useState } from "react"
import axios from "axios"
import styles from "./ProductForm.module.css"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"

export const ProductForm = ({products, setProducts}) => {
    const [product, setProduct] = useState({
        title: "",
        price: "",
        description: "",
    })

    const { title, price, description } = product

    const onSubmitHandle = (e) => {
        e.preventDefault()
        console.log(product)
        axios
            .post("http://localhost:8080/api/product/new", product)
            .then((res) => {
                console.log("Response: ", res)
                clearFields()
                setProducts([...products, product])
            })
            .catch((err) => console.log("Error: ", err))
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setProduct((prevProduct) => ({
            ...prevProduct,
            [name]: value,
        }))
    }

    const clearFields = () => {
        setProduct({
            title: "",
            price: "",
            description: "",
        })
    }

    return (
        <div className={styles.main}>
            {/* <form onSubmit={onSubmitHandle}>
                <h3>Product Manager</h3>
                <div className={styles.box}>
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" value={title} onChange={handleInputChange} />
                </div>
                <div className={styles.box}>
                    <label htmlFor="price">Price</label>
                    <input type="text" name="price" value={price} onChange={handleInputChange} />
                </div>
                <div className={styles.box}>
                    <label htmlFor="description">Description</label>
                    <input type="text" name="description" value={description} onChange={handleInputChange} />
                </div>
                <input type="submit" value="Create" className={styles.btn} />
            </form> */}
            <Form onSubmit={onSubmitHandle}>
                <h1>Product Manager</h1>
                <Form.Group className="mb-3" controlId="formBasicTitle">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" name="title" placeholder="Title" value={title} onChange={handleInputChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPrice">
                    <Form.Label>Price</Form.Label>
                    <Form.Control type="text" name="price" placeholder="Price" value={price} onChange={handleInputChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicTDescription">
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" name="description" placeholder="Description" value={description} onChange={handleInputChange} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Create
                </Button>
            </Form>
        </div>
    )
}
