import React from 'react'

const Button= ({url,msg}) =>{
    return(
       <a href={url} className="btn btn-primary">{msg}</a>     
    )
  }  
  export default Button

