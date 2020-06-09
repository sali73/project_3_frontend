import React, { useState } from 'react'

function New () {

    const [name, setName] = useState('')

    function handleSubmit() {
        console.log('submit')
    }

    return (
        <div className="New">
            <form onSumbit={handleSubmit} className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    className="form-control"
                    value={name}
                    onChange={event => setName(event.target.value)}
                />
            </form>
        </div>
    )
}

export default New;
