import React from 'react'
import CardTitle from './CardTitle' 
import Paragraph from './CardParagraph' 
import CardImage from '../Images/Image' 
import Button from '../Buttons/Button' 

const Card = ({titulo,img,info,btnUrl,msg}) =>{
  return(
    <div className="card" style={{width: "18rem"}}>
       <CardImage url={img} alt={titulo}  />
         <div className="card-body">        
             <CardTitle titulo={titulo}/>
             <Paragraph info={info}/>
             <Button url={btnUrl} msg={msg} />     
        </div>
   </div>  
  )
}
export default Card