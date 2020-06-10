import React from 'react'
import Form from '../Form';

function Edit (props) {
    const product = props.location.aboutProps; 
    console.log(product)
    const initial = {
        initialName: product.name,
        initialDescription: product.description,
        initialImage: product.image,
        initialPrice: product.price,
        initialQuantity: product.quantity,
    }
    return (
        <>
            <h1>Update Product:</h1>
            <Form initialState={initial} callMethod="PUT" />  

        </>
    )
}

export default Edit;
