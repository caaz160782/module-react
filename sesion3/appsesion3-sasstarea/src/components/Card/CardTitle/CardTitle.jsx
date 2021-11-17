import styles from './CardTitle.module.scss'

const CardTitle =({title})=>{
   return  ( 
      <h3 className={styles.cardheader}>{title}</h3>
   )
}


export default CardTitle