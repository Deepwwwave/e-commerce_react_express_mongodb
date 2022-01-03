import getProducts from "../../service/index";

const INITIAL_STATE = {
  products: [],
};

function productsReducer(state = INITIAL_STATE, action) {
  // La fonction qui est le Reducer
  switch (action.type) {
    case "LOADPRODUCTS": {
      return {
        ...state,
        products: action.payload,
      };
    }
  }

  return state;
}
export default productsReducer;

// Networking - MongoDB

// export const fetchProducts = () => {
//   return async function (dispatch) {
//     getProducts()
//       .then((response) => response.json)
//       .then((data) => {
//         dispatch({
//           type: "LOADPRODUCTS",
//           playload: data,
//         });
//       })
//       .then(console.log(getProducts().data));
//   };
// };

export const fetchProducts = () => dispatch => {
  fetch(getProducts())
  .then(response => response.json())
  .then(data => {
    dispatch({
        type:'LOADARTICLES',
        payload: data
    })
})
}