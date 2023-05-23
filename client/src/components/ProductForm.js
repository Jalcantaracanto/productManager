// import React, {useState} from "react"
// import axios from 'axios'

// export const ProductForm = () => {
//     const [title, setTitle] = useState("")
//     const [price, setPrice] = useState("")
//     const [description, setDescription] = useState("")

//     const onSubmitHandle = e =>{
//         e.preventDefault()
//         axios.post('http://localhost:8080/api/product/new', {
//             title, price, description
//         })
//             .then(res => {
//                 console.log("Response: ", res)
//                 clearFields()
//             })
//             .catch(err => console.log("Error: ", err))
//     }

//     const clearFields = () =>{
//                 setTitle("")
//                 setPrice("")
//                 setDescription("")
//             }

//     return (
//         <form onSubmit={onSubmitHandle}>
//             <h1>Product Manager</h1>
//             <div>
//                 <label htmlFor="title">Title</label>
//                 <input type="text" onChange={e=>setTitle(e.target.value)}/>
//             </div>
//             <div>
//                 <label htmlFor="price">Price</label>
//                 <input type="text" onChange={e=>setPrice(e.target.value)}/>
//             </div>
//             <div>
//                 <label htmlFor="description">Description</label>
//                 <input type="text" onChange={e=>setDescription(e.target.value)}/>
//             </div>
//             <input type="submit" value="Create" />
//         </form>
//     )
// }

import React, { useState } from "react"
import axios from "axios"
import styles from "./ProductForm.module.css"

export const ProductForm = () => {
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
            <form onSubmit={onSubmitHandle}>
                <h1>Product Manager</h1>
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
                <input type="submit" value="Create" className={styles.btn}/>
            </form>
        </div>
    )
}
