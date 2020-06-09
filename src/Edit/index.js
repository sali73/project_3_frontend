import React from 'react'
import Form from '../Form';

function Edit () {
    const initialState = {
        initialName: 'test item',
        initialDescription: 'test description',
        initialImage: 'test image',
        initialPrice: 500,
        initialQuantity: 30,
    }
    return (
        <>
            <h1>Update Product:</h1>
            <Form initialState={initialState} callMethod="PUT" />  
        </>
    )
}

export default Edit;
