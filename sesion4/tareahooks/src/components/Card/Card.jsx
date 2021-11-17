import { useState } from 'react'
import styles from "./Card.module.scss"
import CardTitle from "./CardTitle/CardTitle"
import CardImg from "./CardImg/CardImg"
import CardInfo from "./CardInfo/CardInfo"
import TypeSelector from "./TypeSelector/TypeSelector"
import ConAtole from "./ConAtole/ConAtole"


const Card = ({imgUrl,titleCard,precio,text}) => {

    const [oaxaqueno, setOaxaqueno] = useState(false);
    const [incluyeAtole, setIncluyeAtole] = useState(false);
    
    const [val, setVal] = useState(0);

    const typePrice = oaxaqueno ? 10 : 0
    const atolePrice = incluyeAtole ? 15 : 0



    const priceTamal= precio + typePrice 
    //+atolePrice

    const totalPrice = priceTamal *val +atolePrice

    return (
        <div className={styles.cardContainer}>               
               <CardImg imgUrl={imgUrl}  />  
               <CardTitle titleCard={titleCard}  />
               <CardInfo  price={priceTamal} total={totalPrice}/>
               <TypeSelector oaxaqueno={oaxaqueno} setOaxaqueno={setOaxaqueno} setVal={setVal} />
               <ConAtole  incluyeAtole={incluyeAtole} setIncluyeAtole={setIncluyeAtole}  />
               
          

        </div>
    )
}

export default Card
