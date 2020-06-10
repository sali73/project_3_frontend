import React, { useState } from 'react'
import FormControl from '../FormControl'
import { Redirect } from 'react-router';

function Form ({ initialState, callMethod, productId }) {

    const {
        initialName,
        initialDescription,
        initialImage,
        initialPrice,
        initialQuantity,
    } = initialState

    const [name, setName] = useState(initialName);
    const [description, setDescription] = useState(initialDescription);
    const [image, setImage] = useState(initialImage);
    const [price, setPrice] = useState(initialPrice);
    const [quantity, setQuantity] = useState(initialQuantity);
    const [isRedirect, setIsRedirect] = useState(false);

    async function handleSubmit(event) {
        event.preventDefault();
        const product = {
            name,
            description,
            image,
            price,
            quantity,
        }
        let fetchUrl = 'http://localhost:3001/products/';
        if (callMethod === 'PUT') {
            fetchUrl += productId;
        }
        const response = await fetch(fetchUrl, {
            method: callMethod,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        })
        console.log(response)
        setIsRedirect(true);
    }

    return (
        <div className="Form">
            <form onSubmit={handleSubmit} className="form-group">
                <label htmlFor="name">Name:</label>
                <FormControl formValue={name} formHandler={setName} />
                <label htmlFor="description">Description:</label>
                <FormControl formValue={description} formHandler={setDescription} />
                <label htmlFor="image">Image:</label>
                <FormControl formValue={image} formHandler={setImage} />
                <label htmlFor="price">Price:</label>
                <FormControl formValue={price} formHandler={setPrice} inputType="number" />
                <label htmlFor="quantity">Quantity:</label>
                <FormControl formValue={quantity} formHandler={setQuantity} inputType="number" />
                <button className="btn btn-primary">Submit</button>
            </form>
            {isRedirect ? <Redirect to="/shop" /> : ''}
        </div>
    )
}

export default Form;
