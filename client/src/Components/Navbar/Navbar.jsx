import React, { useState, useEffect } from "react";
import styles from "./navbar.module.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [largeur, setLargeur] = useState(window.innerWidth);

  const changeToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  };


  useEffect(() => {
    const changeWidth = () => {
      setLargeur(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  return (
    <nav className= {toggleMenu && styles.menuTransition}>
      {(toggleMenu || largeur > 480) && (
        <ul className={styles.liste}>
          <Link to="/">
            <li className={styles.item} onClick={changeToggleMenu}>Boutique</li>
          </Link>
          <Link to="/le-mohair">
            <li className={styles.item} onClick={changeToggleMenu}>Le Mohair</li>
          </Link>
          <Link to="/la-ferme">
            <li className={styles.item} onClick={changeToggleMenu}>La Ferme</li>
          </Link>
          <Link to="/visite-à-la-ferme">
            <li className={styles.item} onClick={changeToggleMenu}>Visite à la ferme</li>
          </Link>
          <Link to="/contact">
            <li className={styles.item} onClick={changeToggleMenu}>Contact</li>
          </Link>
        </ul>
      )}

      <div onClick={changeToggleMenu} className={styles.btn}>
        <div className={toggleMenu ?styles.contLigneActive: styles.contLigne}>
          <div className={styles.ligneUnique}></div>
        </div>
      </div>
    </nav>
  );
}
