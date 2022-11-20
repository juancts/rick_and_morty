import styles from './Card.module.css';

export function Card(props) {
   return (
      <div className={styles.container}>
         <div className={styles.buttonContainer}>
            <button className={styles.boton} onClick={props.onClose}>X</button>

         </div>

         <h2>{props.name}</h2>
         <img className={styles.image} src={props.image} alt={props.name} />
         <div className={styles.data}>
            <h4>{props.species}</h4>
            <h4>{props.gender}</h4>
         </div>


      </div>
   );
}
