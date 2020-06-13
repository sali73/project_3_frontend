import React, { Component } from 'react'  
import Carousel from 'react-bootstrap/Carousel'  
import { Link } from 'react-router-dom';
export class BootstrapCarousel extends Component {  
        render() {  
  
                return (  
                        <div>  
                          
                         <div className='container-fluid' style={{'display':"flex", 'justifyContent':"space-around"}} >  
                         <Carousel style={{'height':"63vh", 'width':"110vh"}}>  
                         <Carousel.Item style={{'height':"63vh"}} >  
                         <img style={{'height':"63vh"}}  
                         className="d-block w-100"  
                        src="https://trello-attachments.s3.amazonaws.com/5ede57555674e50a6d53b5b8/5ee19ed8ed7850157b41932f/7691ef6c6f2896705fc54cdd14a33107/33.jpg"  />  
                           <Carousel.Caption>  
                           <Link style={{backgroundColor:" rgba(150,192,230,0.4)"}}class="btn btn-light btn-lg" to="/shop">Shop</Link>
                                 </Carousel.Caption>  
                                 </Carousel.Item  >  
                                 <Carousel.Item style={{'height':"63vh"}}>  
                                 <img style={{'height':"63vh"}}  
                                   className="d-block w-100"  
                                    src="https://trello-attachments.s3.amazonaws.com/5ede57555674e50a6d53b5b8/5ee19ed8ed7850157b41932f/5e418d32f0c1d8e0332c73026c7c58d4/31.jpg"    />  
                                       <Carousel.Caption>  
                                       <Link style={{backgroundColor:" rgba(150,192,230,0.4)"}}class="btn btn-light btn-lg" to="/shop">Shop</Link>
                                      </Carousel.Caption>  
                                         </Carousel.Item>  
                                       <Carousel.Item style={{'height':"63vh"}}>  
                                       <img style={{'height':"63vh"}}  
                                        className="d-block w-100"  
                                         src="https://trello-attachments.s3.amazonaws.com/5ede57555674e50a6d53b5b8/5ee19ed8ed7850157b41932f/ff285dfe41bddaf0f948f16593be5efd/30.jpg"   />  
                                        <Carousel.Caption>  
                                        <Link style={{backgroundColor:" rgba(150,192,230,0.4)"}}class="btn btn-light btn-lg" to="/shop">Shop</Link>  
                                          </Carousel.Caption>  
                                         </Carousel.Item>  
                                        </Carousel>  
                                </div>  
                        </div>  
                )  
        }  
}  
  
export default BootstrapCarousel  