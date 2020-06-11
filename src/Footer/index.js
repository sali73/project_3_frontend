import React from 'react';
const Footer = () =>{
    return(
        <div style={{ backgroundColor:'gray',height:'50px'}} >
            <ul style={{display:'flex',justifyContent:'center',paddingTop:'12px'}}>
                <li style={{marginRight: "8vh", listStyle:'none'}}><a style={{color:'black'}} href='#'>facebook</a></li>
                <li style={{marginRight: "8vh",listStyle:'none'}}><a style={{color:'black'}} href='#'>twitter</a></li>
                <li style={{marginRight: "8vh" , listStyle:'none'}}><a style={{color:'black'}} href='#' style={{color:'black'}}>instagram</a></li>
            </ul>
        </div>
    )
}
export default Footer;