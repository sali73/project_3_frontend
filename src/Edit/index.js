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
            <head>
                <link href="https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:wght@300&family=Prata&display=swap" rel="stylesheet"/>
            </head>
            <div style={{ margin:'50px 500px 100px 60px' , fontFamily: 'Barlow Semi Condensed'}}>
            <h1 style={{fontSize:"2rem", color:'blue'}}>Update Product:</h1>
            <Form initialState={initialState} callMethod="PUT" productId={_id} />  
            </div>
        </>
    )
}

export default Edit;
