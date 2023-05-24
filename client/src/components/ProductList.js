import React from "react"
import { Link } from "react-router-dom"

export const ProductList = ({ products }) => {
    return (
        <div>
            {products.map((product, index) => {
                return (
                    <ol key={index}>
                        <Link to={`/${product._id}`} key={product._id}>
                            {product.title}
                        </Link>
                    </ol>
                )
            })}
        </div>
    )
}
