/* eslint-disable no-unreachable */
import { Link } from "react-router-dom";
import styles from "./Card.module.css";

export default function Card({ origin, destination, price, image }) {
  return (
    <div className={styles.container}>
      <Link to={`/details`}>
        <div className={styles.card}>
          <img
           
           
           
              
            
         
            alt="CITY"
            className={styles.img}
            src={
              "https://planetofhotels.com/guide/sites/default/files/styles/paragraph__live_banner__lb_image__1880bp/public/live_banner/Bonaire-Sint-Eustatiusen-Saba-2.jpg"
            }
          />
          <div className={styles.info}>
            <p className={styles.origin}>Origin: {origin} </p>
            <p className={styles.destination}>Destinacion: {destination}</p>
            <p className={styles.price}>Price: {price}</p>
          </div>
        </div>
      </Link>
    </div>
  );

  // eslint-disable-next-line no-lone-blocks
}
