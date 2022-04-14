import React, { Fragment } from "react";
import styles from "./gallerieProduits.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "../../redux/products/productsReducer";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

export default function GallerieProduits() {
  const { products } = useSelector((state) => ({
    ...state.productsReducer,
  }));
  const dispatch = useDispatch();

  useEffect(() => {
    if (products.length === 0) {
      dispatch(fetchProducts());
    }
  }, []);

  console.log(products); // returned undefined
  // console.log(typeof(products));

  return (
    <>
      <div className={styles.gallerie}>
        {products.map((item) => {
          return (
            <Fragment className={styles.containerProduit} key={uuidv4()}>
              <Link
                to={{
                  pathname: `détail-de-l'article/${item.name
                    .replace(/\s+/g, "-")
                    .trim()}`,
                  state: {
                    name: item.name,
                    price: item.price,
                  },
                }}
              >
                <div className={styles.containerImgProduit}>
                  <img src="mohair4.jpeg" alt="" class="image-produit" />
                </div>
                <div className={styles.descriptionProduit}>
                  <h2 className={styles.titreProduit}>{item.name}</h2>
                  <p className={styles.prix}>{item.price} €</p>
                </div>
              </Link>
            </Fragment>
          );
        })}
      </div>
    </>
  );
}
