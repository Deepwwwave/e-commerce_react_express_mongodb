import React from "react";
import { removeProducts } from "../../redux/products/productsReducer";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

export default function Mohair() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(removeProducts());
  }, []);

  return (
    <div>
      <h1>Le mohair</h1>
    </div>
  );
}
