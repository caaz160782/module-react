import styles from "./ConAtole.module.scss"
import SaborAtole from "../SaborAtole/SaborAtole"

const ConAtole = ({incluyeAtole, setIncluyeAtole}) => {

    const handlerNoIncluyeAtole = () => setIncluyeAtole(false);
    const handlerSiIncluyeAtole = () => setIncluyeAtole(true);

    return (
    <div className={styles.contencompra}>
       <div className={styles.infoAtole}> 
          <div> <span>Precio:</span>$15</div>
          <div> <span>Atole?</span>  
            <button  onClick={handlerSiIncluyeAtole}> Si </button>
            <button  onClick={handlerNoIncluyeAtole}> no </button>
           </div>
       </div>      

       <div>
         { incluyeAtole && <SaborAtole /> }
       </div>     
     </div>  
     

    
    )
}

export default ConAtole
