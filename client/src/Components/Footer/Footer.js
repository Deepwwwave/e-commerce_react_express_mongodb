import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import CustomMap from "../CustomMap/CustomMap";


export default function Footer() {
  
  return (
    <footer>
      <div className="contact-footer">
        <div className="adresse-postale">
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
        <div className="coordonnées">
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

        <div className="mentions">
          <br />
          <Link to="Mentions-légales" Style={"text-decoration:white underline"}>
            <b className="mentions-style" >Mentions Légales</b>
          </Link>
          
          <br />
          <br />
           <Link to="CGV" Style={"text-decoration:white underline"}>
            <b className="mentions-style">Conditions générales de ventes</b>
          </Link>
        </div>
      </div>
      <div className="map">
        <CustomMap />
      </div>

      <p className ="copyright">© Copyright 2022 L.Nandan</p>
    </footer>
  );
}
