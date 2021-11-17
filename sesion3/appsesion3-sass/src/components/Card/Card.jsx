import CardTitle from './CardTitle/CardTitle' 
import Paragraph from './CardParagraph' 
import CardImage from '../Images/Image' 
import Button from '../Buttons/Button' 

const Card = ({title,imgUrl,text,linkBtn,oferta}) =>{
  return(
    <div className="card" style={{width: "18rem"}}>
       <CardImage url={imgUrl} alt={title}  />
         <div className="card-body">        
             <CardTitle title={title} oferta={oferta}/>
             <Paragraph info={text}/>
             <Button url={linkBtn} msg={"Comprar"} />     
        </div>
   </div>  
  )
}
export default Card