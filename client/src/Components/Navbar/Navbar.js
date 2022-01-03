import React, { useState, useEffect } from "react";
import "./Navbar.css";
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
    <nav className= {toggleMenu && 'menu-transtion'}>
      {(toggleMenu || largeur > 480) && (
        <ul className="liste">
          <Link to="/">
            <li className="items" onClick={changeToggleMenu}>Boutique</li>
          </Link>
          <Link to="le-mohair">
            <li className="items" onClick={changeToggleMenu}>Le Mohair</li>
          </Link>
          <Link to="la-ferme">
            <li className="items" onClick={changeToggleMenu}>La Ferme</li>
          </Link>
          <Link to="visite-à-la-ferme">
            <li className="items" onClick={changeToggleMenu}>Visite à la ferme</li>
          </Link>
          <Link to="contact">
            <li className="items" onClick={changeToggleMenu}>Contact</li>
          </Link>
        </ul>
      )}

      <div onClick={changeToggleMenu} className="btn">
        <div className={toggleMenu ?'cont-ligne-active': 'cont-ligne'}>
          <div class="ligne-unique"></div>
        </div>
      </div>
    </nav>
  );
}
