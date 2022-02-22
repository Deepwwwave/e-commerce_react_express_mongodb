import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="mentions-legales">
        <br/>
        <b>Mentions Légales</b>
        <br />
        <br />
        <br />
        <b>Conditions générales de ventes</b>
      </div>
      <div className="adresse-footer">
        <p>
          <b>Mail:</b> mohairdesquatresaisons@gmail.com
        </p>
        <p>
          <b>Téléphone:</b> 0648810994
        </p>
        <p>
          <br/>
          <b>Adresse:</b>
          <br />
          La maison neuve
          <br />
          85150
          <br />
          St Julien des landes
        </p>

        <div className="map"></div>
      </div>
    </footer>
  );
}
