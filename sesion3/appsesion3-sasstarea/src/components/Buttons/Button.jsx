import styles from './Button.module.scss'

const Button = ({msg}) => {
    return (
        <button class={styles.button}>{msg}</button>
    )
}

export default Button
