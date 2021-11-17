import styles from "./CardTitle.module.scss"

const CardTitle = ({titleCard}) => {
    return (
        <h3 className={styles.titlecard}> {titleCard}</h3>
    )
}

export default CardTitle




