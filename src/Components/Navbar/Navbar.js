import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [largeur, setLargeur] = useState(window.innerWidth);

  const ChangeToggleMenu = () => {
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
    <nav>
      {(toggleMenu || largeur > 500) && (
        <ul className="liste">
          <Link to="/">
            <li className="items">Boutique</li>
          </Link>
          <Link to="le-mohair">
            <li className="items">Le Mohair</li>
          </Link>
          <Link to="la-ferme">
            <li className="items">La Ferme</li>
          </Link>
          <Link to="visite-à-la-ferme">
            <li className="items">Visite à la ferme</li>
          </Link>
          <Link to="contact">
            <li className="items">Contact</li>
          </Link>
        </ul>
      )}

      <div onClick={ChangeToggleMenu} className="btn">
        <div class={toggleMenu ?'cont-ligne-active': 'cont-ligne'}>
          <div class="ligne-unique"></div>
        </div>
      </div>
    </nav>
  );
}
