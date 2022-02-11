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
        products: action.playload,
      };
    }
    case "LOADBONNET": {
      return {
        ...state,
        products: action.playload,
      };
    }
    case "LOADTOURDECOU": {
      return {
        ...state,
        products: action.playload,
      };
    }
    case "LOADPULL": {
      return {
        ...state,
        products: action.playload,
      };
    }
    case "LOADGANT": {
      return {
        ...state,
        products: action.playload,
      };
    }
    case "LOADCHAUSSETTE": {
      return {
        ...state,
        products: action.playload,
      };
    }
    case "LOADCHAUSSON": {
      return {
        ...state,
        products: action.playload,
      };
    }
    case "LOADPLAIDE": {
      return {
        ...state,
        products: action.playload,
      };
    }
    case "LOADPELOTE": {
      return {
        ...state,
        products: action.playload,
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
      console.log(typeof data); // data is returned
      console.log(data); // data is returned
    });
};

export const fetchBonnet = () => (dispatch) => {
  getProducts()
    .then((response) => response.data)
    .then((data) => {
      let tab = [];
      for (let i = 0; i < data.length; i++) {
        if (data[i].category === "Bonnet") {
          tab.push(data[i]);
        }
      }
      dispatch({
        type: "LOADBONNET",
        playload: tab,
      });
    });
};

export const fetchTourDeCou = () => (dispatch) => {
  getProducts()
    .then((response) => response.data)
    .then((data) => {
      let tab = [];
      for (let i = 0; i < data.length; i++) {
        if (data[i].category === "Tour de cou") {
          tab.push(data[i]);
        }
      }
      dispatch({
        type: "LOADTOURDECOU",
        playload: tab,
      });
    });
};

export const fetchPull = () => (dispatch) => {
  getProducts()
    .then((response) => response.data)
    .then((data) => {
      let tab = [];
      for (let i = 0; i < data.length; i++) {
        if (data[i].category === "Pull") {
          tab.push(data[i]);
        }
      }
      dispatch({
        type: "LOADPULL",
        playload: tab,
      });
    });
};

export const fetchGant = () => (dispatch) => {
  getProducts()
    .then((response) => response.data)
    .then((data) => {
      let tab = [];
      for (let i = 0; i < data.length; i++) {
        if (data[i].category === "Gant") {
          tab.push(data[i]);
        }
      }
      dispatch({
        type: "LOADGANT",
        playload: tab,
      });
    });
};

export const fetchChaussette = () => (dispatch) => {
  getProducts()
    .then((response) => response.data)
    .then((data) => {
      let tab = [];
      for (let i = 0; i < data.length; i++) {
        if (data[i].category === "Chaussette") {
          tab.push(data[i]);
        }
      }
      dispatch({
        type: "LOADCHAUSSETTE",
        playload: tab,
      });
    });
};

export const fetchChausson = () => (dispatch) => {
  getProducts()
    .then((response) => response.data)
    .then((data) => {
      let tab = [];
      for (let i = 0; i < data.length; i++) {
        if (data[i].category === "Chausson") {
          tab.push(data[i]);
        }
      }
      dispatch({
        type: "LOADCHAUSSON",
        playload: tab,
      });
    });
};

export const fetchPlaide = () => (dispatch) => {
  getProducts()
    .then((response) => response.data)
    .then((data) => {
      let tab = [];
      for (let i = 0; i < data.length; i++) {
        if (data[i].category === "Plaide") {
          tab.push(data[i]);
        }
      }
      dispatch({
        type: "LOADPLAIDE",
        playload: tab,
      });
    });
};

export const fetchPelote = () => (dispatch) => {
  getProducts()
    .then((response) => response.data)
    .then((data) => {
      let tab = [];
      for (let i = 0; i < data.length; i++) {
        if (data[i].category === "pelote") {
          tab.push(data[i]);
        }
      }
      dispatch({
        type: "LOADPELOTE",
        playload: tab,
      });
    });
};

export const remooveProducts = () => (dispatch) => {
  let tab = [];
  dispatch({
    type: "REMOOVEPRODUCTS",
    playload: tab,
  });
};
