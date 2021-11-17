import styles from './CardInfo.module.scss'

const CardInfo = ({text}) => {
    return (
        <p className={styles.info}> {text} </p>
    )
 }
 
export default CardInfo