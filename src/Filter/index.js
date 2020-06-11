// import React, { Component } from 'react';


// class Filter extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//         products: products,
//       filterProducts: []
//     }
//   }
 
//   componentDidMount(){
//     this.setState({
//       filterProducts: this.state.products
//     })
//   }


//   handleClick = event => {
    
//     let filterProducts = []
//     if(event.target.value === 'all'){
//       filterProducts = this.state.products
//     } else{
//       filterProducts = this.state.products.filter(product => product.name === event.target.value)
//     }
    
//     this.setState({filterProducts: filterProducts})

//   }

//   render() {
//     const renderAll = this.state.filterProducts.map(product => <li key={product.name}>{product.name} {product.description}</li>)
//     return (
//       <div>
//         <button value='all' onClick={this.handleClick}>All</button>
//         <button value='tote' onClick={this.handleClick}>Tote</button>
//         <button value='purse' onClick={this.handleClick}>Purse</button>
//         <button value='shopping bag' onClick={this.handleClick}>Shopping Bag</button>
        


//         <div> {renderAll}</div>
        

//       </div>
//     );
//   }
// }

// export default Filter
