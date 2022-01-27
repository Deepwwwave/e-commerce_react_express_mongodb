import { getProducts } from "../../service/index";

const INITIAL_STATE = {
  products: [],
};

function productsReducer(state = INITIAL_STATE, action) {
  // La fonction qui est le Reducer
  switch (action.type) {
    case "LOADPRODUCTS": {
      return {
        ...state,
        products:action.playload,
      };
    }
  }

  return state;
}
export default productsReducer;

//Networking - MongoDB

export const fetchProducts = () => (dispatch) => {
    getProducts()
      .then((response) => response.data)
      .then((data) => {
        dispatch({
          type: "LOADPRODUCTS",
          playload: data,
          
        });
        console.log(typeof(data)); // data is returned
        console.log(data); // data is returned
      });
};



// export const fetchProducts = () => {
//   return function (dispatch) {
//     getProducts()
//       .then(({response}) => {
//         dispatch({
//           type: "LOADPRODUCTS",
//           playload: response,
//         });
//         console.log(response); // data is returned
//       });
//   };
// };