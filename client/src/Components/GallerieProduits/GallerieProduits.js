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

    console.log(products)

  return (
    <>
      <div class="gallerie">
        <div class="container-produit">
          <div class="container-image-produit">
            <img src="mohair4.jpeg" alt="" class="image-produit" />
          </div>
          <div class="container-titre-prix-produit">
            <h2 class="titre-produit">Titre du produit</h2>
            <p>160€</p>
          </div>
        </div>
        <div class="container-produit">
          <div class="container-image-produit">
            <img src="mohair4.jpeg" alt="" class="image-produit" />
          </div>
          <div class="container-titre-prix-produit">
            <h2 class="titre-produit">Titre du produit</h2>
            <p>160€</p>
          </div>
        </div>
        <div class="container-produit">
          <div class="container-image-produit">
            <img src="mohair4.jpeg" alt="" class="image-produit" />
          </div>
          <div class="container-titre-prix-produit">
            <h2 class="titre-produit">Titre du produit</h2>
            <p>160€</p>
          </div>
        </div>
        <div class="container-produit">
          <div class="container-image-produit">
            <img src="mohair4.jpeg" alt="" class="image-produit" />
          </div>
          <div class="container-titre-prix-produit">
            <h2 class="titre-produit">Titre du produit</h2>
            <p>160€</p>
          </div>
        </div>
        <div class="container-produit">
          <div class="container-image-produit">
            <img src="mohair4.jpeg" alt="" class="image-produit" />
          </div>
          <div class="container-titre-prix-produit">
            <h2 class="titre-produit">Titre du produit</h2>
            <p>160€</p>
          </div>
        </div>
        <div class="container-produit">
          <div class="container-image-produit">
            <img src="mohair4.jpeg" alt="" class="image-produit" />
          </div>
          <div class="container-titre-prix-produit">
            <h2 class="titre-produit">Titre du produit</h2>
            <p>160€</p>
          </div>
        </div>
      </div>
    </>
  )
  }

