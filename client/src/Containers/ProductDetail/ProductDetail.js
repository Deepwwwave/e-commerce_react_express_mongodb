import React from "react";
import { useLocation, Link } from "react-router-dom";
import "./ProductDetail.css";

export default function ProductDetail() {
  const location = useLocation();
  console.log(location);

  return (
    <div className="container-product-detail">
      <div className="container-zoom-product">
        <div id="img-container">
          <div id="lens"></div>
          <img src="/mohair4.jpeg" alt="" id="featured" />
        </div>
        <div className="description">
          <h2>{location.state.name}</h2>
          <hr />
          <h3>{location.state.price}</h3>

          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>

          <div className="container-form-detail-produit">
            <input value={1} type="number" />
            <Link>
              <btn className="btn-ajouter-au-pannier">Ajouter au panier</btn>
            </Link>
          </div>
        </div>
      </div>
      <div className="notice">
        * Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil alias blanditiis, ipsam officia impedit eveniet, dolore suscipit dolorum quas nemo reiciendis optio! Similique fugit laborum, numquam saepe quidem qui omnis.
      </div>
    </div>
  );
}
