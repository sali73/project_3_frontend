import React from 'react'

function Show(props) {
    
    const product = props.location.aboutProps;
    // const { _id } = product
    
    return (
        <div className="Show">
            {product}
        </div>
    )
}

export default Show
