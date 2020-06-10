import React from 'react'

function Show(props) {

    const product = props.location.aboutProps;
    const { _id } = product

    const initialState = {
        initialName: product.name,
        initialDescription: product.description,
        initialImage: product.image,
        initialPrice: product.price,
        initialQuantity: product.quantity,
    }
    return (
        <>
            <h1>Show Product:</h1>
            
        </>
    )
}

export default Show