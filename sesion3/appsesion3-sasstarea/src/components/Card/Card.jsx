import styles from "./Card.module.scss";
import CardTitle from "./CardTitle/CardTitle";
import CardInfo from "./CardInfo/CardInfo";
import Button from "../Buttons/Button";
import CardImg from "./CardImg";

const Card = ({title,imgUrl,text,linkBtn,oferta}) =>{
    return(
    
           <div className={ `${styles.card}`}>          
              <div className={ `${styles.content}`}>             
                    <CardTitle title={title}/>
                    <CardImg imgUrl={imgUrl} alt={title}/>
                    <CardInfo text={text}/>
                    <Button  msg={"ver info,"}/>
               </div>     
           </div>          
 
    )
  }
  export default Card