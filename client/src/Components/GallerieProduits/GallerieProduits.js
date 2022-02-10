import React from "react";
import "./GallerieProduits.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { fetchProducts } from "../../redux/products/productsReducer";
import { v4 as uuidv4 } from "uuid";

export default function GallerieProduits() {
  const { products } = useSelector((state) => ({
    ...state.productsReducer,
  }));
  const dispatch = useDispatch(); // A revoir

  useEffect(() => {
    if (products.length === 0) {
      dispatch(fetchProducts());
    }
  }, []);

  console.log(products); // returned undefined
  // console.log(typeof(products));

  return (
    <>
      <div className="gallerie">
        {products.map((item) => {
          return (
            <div className="container-produit" key={uuidv4()}>
              <div className="container-image-produit">
                <img src="mohair4.jpeg" alt="" class="image-produit" />
              </div>
              <div className="description-produit">
                <h2 className="titre-produit">{item.name}</h2>
                <p>{item.price}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
