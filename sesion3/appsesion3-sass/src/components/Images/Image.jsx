const Image= ({url,alt}) =>{
    return(
        <img 
             src={url} 
             className="card-img-top"
             alt= {alt} 
             width= "150px"
             height="200px"
        />     
    )
  }  
  export default Image




