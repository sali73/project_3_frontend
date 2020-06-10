import React from 'react'
import Form from '../Form';

function Edit (props) {

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
            <h1>Update Product:</h1>
            <Form initialState={initialState} callMethod="PUT" productId={_id} />  
        </>
    )
}

export default Edit;
