import React from 'react'
import CardTitle from './CardTitle' 
import Paragraph from './CardParagrap' 
import CardImage from '../Images/Image' 
import Button from '../Buttons/PrimaryButton' 



const Card = ({titulo}) =>{
  return(
    <div className="card" style={{width: "18rem"}}>
         <CardImage url={'https://dibujo.online/wp-content/uploads/2020/04/Cerveza.jpg'} alt={titulo}  />
        <div className="card-body">        
          <CardTitle titulo={titulo}/>
          <Paragraph info="vitamina para el alma"/>
          <Button msg="Aceptar" />     
        </div>
    </div>  
  )
}
export default Card