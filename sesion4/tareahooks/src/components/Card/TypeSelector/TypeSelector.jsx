import styles from "./TypeSelector.module.scss"
const TypeSelector = ({oaxaqueno, setOaxaqueno,setVal}) => {

    const handlerClickMaiz = () => setOaxaqueno(false);
    
    const handlerClickOaxaqueno = () => setOaxaqueno(true);
 
   // const [val, setVal] = useState("");
     //console.log(oaxaqueno)
   const handleInput = (event) => {
        setVal(event.target.value)
      }
  // console.log(val)

    return (
        <div className={styles.contenbotton}>

            <button className={styles.btntamal} 
                    onClick={handlerClickOaxaqueno }
                    style={{ backgroundColor: oaxaqueno ? "green":"" }}>  Oaxaqueño</button>       
            <button className={styles.btntamal}
                    onClick={handlerClickMaiz}
                    style={{ backgroundColor: oaxaqueno ? "":"green" }}
                    >
             Clasico</button>                         

             <div>
                 <span>Cantidad : </span>
                 <input type="text"  size="3" onChange={handleInput}></input>
            </div>           
        </div>
    )
}

export default TypeSelector
