import React from 'react';
// import "./css/style.css";

export default (props) => {
    const [formData, setFormData] = React.useState(props.initial);

    React.useEffect(() => {
        setFormData(props.initial);
    }, [props.initial]);

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    return (
        <>
            <input
                type="text"
                name="name"
                value={formData.name}
                placeholder="name"
                onChange={handleChange}
                class="form-control"
            />
            <input
                type="text"
                name="description"
                value={formData.description}
                placeholder="description"
                onChange={handleChange}
                class="form-control"
            />
              <input
                type="text"
                name="image"
                value={formData.image}
                placeholder="image"
                onChange={handleChange}
                class="form-control"
            />
              <input
                type="text"
                name="price"
                value={formData.price}
                placeholder="price"
                onChange={handleChange}
                class="form-control"
            />
                <input
                type="text"
                name="quantity"
                value={formData.quantity}
                placeholder="quantity"
                onChange={handleChange}
                class="form-control"
            />
            <button
                class="btn btn-secondary"
                onClick={() => {
                    props.handleSubmit(formData);
                    setFormData(props.initial);
                }}
            >
                SUBMIT
            </button>
        </>
    );
}