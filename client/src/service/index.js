import axios from "axios";

const getProducts = () => {
  return new Promise((onSuccess, onFail) => {
    axios
    .get("/api/products")
    .then((response, error) => {
      if (!response || error) {
        return onFail(`Response failure : ${error}`);
      }
      onSuccess(response);
    });
  });
};

export default getProducts
