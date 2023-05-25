import React from "react"
import { Link } from "react-router-dom"
import Table from "react-bootstrap/Table"
import { ProductDelete } from "./ProductDelete"

export const ProductList = ({ products, setProducts }) => {
    return (
        <div>
            <Table striped size="sm">
                <thead>
                    <tr>
                        <th>Producto</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, index) => {
                        return (
                            <tr key={index}>
                                <td>
                                    <Link to={`/${product._id}`} key={product._id}>
                                        {product.title}
                                    </Link>
                                </td>
                                <td>
                                    <ProductDelete productId={product._id} setProducts={setProducts} products={products}/>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </div>
    )
}
