import React from 'react';
const Footer = () =>{
    const testLink = 'http://localhost:3000/shop';
    return(
        <div style={{ backgroundColor:'gray',height:'50px'}} >
            <ul style={{display:'flex',justifyContent:'center',paddingTop:'12px'}}>
                <li style={{marginRight: "8vh", listStyle:'none'}}><a style={{color:'black'}} href={testLink}>facebook</a></li>
                <li style={{marginRight: "8vh",listStyle:'none'}}><a style={{color:'black'}} href={testLink}>twitter</a></li>
                <li style={{marginRight: "8vh" , listStyle:'none', color: 'black'}}><a style={{color:'black'}} href={testLink}>instagram</a></li>
            </ul>
        </div>
    )
}
export default Footer;