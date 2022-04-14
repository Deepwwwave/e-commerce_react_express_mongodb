import React from "react";
import styles from "./footer.module.css";
import { Link } from "react-router-dom";
import CustomMap from "../CustomMap/CustomMap";


export default function Footer() {
  
  return (
    <footer>
      <div className={styles.contact}>
        <div className={styles.adresse}>
          <p>
            <b>Adresse:</b>
            <br />
            EARL Les quatre saisons
            <br />
            La maison neuve
            <br />
            85150
            <br />
            St Julien des landes
          </p>
        </div>
        <div className={styles.coordonnee}>
          <p>
            <b>Mail:</b>
            <br />
            mohairdesquatresaisons@gmail.com
          </p>
          <p>
            <b>Téléphone:</b>
            <br />
            0648810994
          </p>
        </div>

        <div className={styles.mentions}>
          <br />
          <Link to="Mentions-légales" Style={"text-decoration:white underline"}>
            <b className={styles.mentionStyle} >Mentions Légales</b>
          </Link>
          
          <br />
          <br />
           <Link to="CGV" Style={"text-decoration:white underline"}>
            <b className={styles.mentionStyle}>Conditions générales de ventes</b>
          </Link>
        </div>
      </div>
      <div className={styles.map}>
        <CustomMap />
      </div>

      <p className ={styles.copyright}>© Copyright 2022 L.Nandan</p>
    </footer>
  );
}
