import React from 'react'


const Image= ({url,alt}) =>{
    return(
        <img 
             src={url} 
             className="card-img-top"
             alt= {alt} 
        />     
    )
  }  
  export default Image




