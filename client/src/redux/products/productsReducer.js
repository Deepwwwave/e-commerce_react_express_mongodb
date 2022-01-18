import {getProducts} from "../../service/index";

const INITIAL_STATE = {
  products: [],
};

function productsReducer(state = INITIAL_STATE, action) {
  // La fonction qui est le Reducer
  switch (action.type) {
    case "LOADPRODUCTS": {
      return {
        ...state,
        products: action.payload
      };
    }
  }

  return state;
}
export default productsReducer;

//Networking - MongoDB

export const fetchProducts = () => {
  return function (dispatch) {
    getProducts()
      .then((response) => response.data)
      .then((data) => {
        dispatch({
          type: "LOADPRODUCTS",
          playload: data,
        });
        console.log(data);
      })
      
  };
};

// export const fetchProducts = () => {
//   return async function (dispatch) {
//     getProducts()
//     .then(response => response)
//     .then(data => {
//       dispatch({
//           type:'LOADPRODUCTS',
//           payload: data
//       })
//       console.log(data)
//   })}
  
// }

console.log(productsReducer.data) 