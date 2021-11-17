import styles from "./CardTitle.module.scss";

const CardTitle = ({ title, oferta }) => {
  
  console.log(title)
  const titleMayusculas = title.toUpperCase();
  const classOferta = oferta ? "text-success" : "";
  return (
    <h5 className={`card-title ${styles.primaryTitle} ${classOferta}`}>
      {titleMayusculas}
    </h5>
  );
};

export default CardTitle;
