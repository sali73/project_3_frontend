import React from 'react'
import Form from '../Form';

function New () {
    const initialState = {
        initialName: '',
        initialDescription: '',
        initialImage: '',
        initialPrice: 0,
        initialQuantity: 0,
    }

    return (
        <>
            <h1>Add New Product:</h1>
            <Form initialState={initialState} callMethod="POST" />  
        </>
    )
}

export default New 
