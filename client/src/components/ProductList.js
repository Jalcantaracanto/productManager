import React from "react"

export const ProductList = (props) => {
    // console.log(props)
    return (
        <div>
            {props.products.map((product, index) => {
                return (
                    <p key={index}>
                        {product.title}
                    </p>
                )
            })}
        </div>
    )
}
