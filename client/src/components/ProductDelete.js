import React from "react"
import { deleteProduct } from "../services/product-service"

export const ProductDelete = ({ productId, products, setProducts }) => {
    console.log(productId)

    const deleteProductFromService = async () => {
        try {
            await deleteProduct(productId)
            const newList = products.filter((product) => product._id !== productId)
            setProducts(newList)
            
            // console.log(response)
        } catch (error) {
            console.log(error)
        }
    }

    return <input type="submit" value="Eliminar" onClick={deleteProductFromService} />
}
