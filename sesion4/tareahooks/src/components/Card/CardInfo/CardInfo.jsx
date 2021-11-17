import styles from './CardInfo.module.scss'

const CardInfo = ({price,total}) => {
    return (
        <div className={styles.conteninfotamal}>
            <div  className={styles.infoprice}> <span>Precio: $</span> {price}</div>   
            <div className={styles.infototal}>  <span>Total: $</span>{total} </div>            
      </div>
    )
 }
 
export default CardInfo