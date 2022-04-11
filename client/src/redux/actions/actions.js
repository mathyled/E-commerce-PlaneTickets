import axios from "axios";
import { TYPES } from "./types";

export const changePage = (number) => {
  return {
    type: TYPES.CHANGE_PAGE,
    payload: number,
  };
};

export const sortTickets = (to, price, schedule, ascending) => {
  return {
    type: TYPES.SORT_CITIES,
    payload: { to, price, schedule, ascending },
  };
};

export const filterTickets = (to, airline) => {
  return {
    type: TYPES.FILTER_CITIES,
    payload: { to, airline },
  };
};

// export const getCities = () => {
//   //LANDING
//   return async (dispatch) => {
//     var json = await axios.get(`http://localhost:3001/api/cities`);
//     // console.log("JSON",json)
//     return dispatch({
//       type: TYPES.GET_CITIES,
//       payload: json.data,
//     });
//   };
// };

// getCity debería cambiar de nombre a getOffer.
// Y el type también debería cambiar a GET_OFFER.
// export const getOffers = (origin, destination, departureDate, adults) => {
//   //HOME
//   return async (dispatch) => {
//     var json = await axios.get(
//       `http://localhost:3001/api/flights?origin=${origin}&destination=${destination}&departureDate=${departureDate}&adults=${adults}`
//     );
//     // console.log("JSON",json)
//     return dispatch({
//       type: TYPES.GET_OFFERS,
//       payload: json.data,
//     });
//   };
// };

export const getOfferDetails = (id) => {
  //DETAILS
  return async (dispatch) => {
    var json = await axios.get(
      `http://localhost:3001/api/flights/detail/${id}`
    );
    // console.log("JSON",json)
    return dispatch({
      type: TYPES.GET_OFFER_DETAILS,
      payload: json.data,
    });
  };
};

export const getFlights = ({ airline, date }) => {
  console.log(airline, date);

  return async (dispatch) => {
    var { data } = await axios.get(
      `http://localhost:3001/api/flights?city=${airline}&date=${date}`
    );
    // console.log("JSON",json)
    return dispatch({
      type: TYPES.GET_FLIGHTS,
      payload: { data: data.data, isSearching: false }, // [{}]
    });
  };
};

// http://localhost:3001/api/cities

export const getCities = () => {
  return async (dispatch) => {
    var { data } = await axios.get(`http://localhost:3001/api/cities`);
    return dispatch({
      type: TYPES.GET_CITIES,
      payload: data.data, // [{}]
    });
  };
};

export const resetStates = () => {
  //DETAILS
  return {
    type: TYPES.RESET_STATES,
    payload: {},
  };
};

export const postFlight = (payload) => {
  return async (dispatch) => {
    var res = await axios.post(
      "http://localhost:3001/api/createFlight",
      payload
    );
    return res;
  };
};

export const isOnSearch = (boolean) => {
  return {
    type: TYPES.IS_ON_SEARCH,
    payload: boolean,
  };
};

/////////////////ACTIONS CART ////////////////////////////////////

export const addToCart = (id) => {
  return {
    type: TYPES.ADD_TO_CART,
    payload: id,
  };
};
export const removeFromCart = (id) => {
  // console.log("action id",id)
  return {
    type: TYPES.REMOVE_FROM_CART,
    payload: id,
  };
};

export const addQuatity = (id, total) => {
  // console.log("action total", id, total)
  return {
    type: TYPES.ADD_QUANTITY,
    payload: {id, total}
  };
};

export const calculateTotal = () => {
  return {
    type: TYPES.CALCULATE_TOTAL,
  };
};
// export const addCart = () => {
//   return {
//     type: TYPES.RESET_STATES,
//     payload: {},
//   };
// };

export const loadCurrentItem = (item) => {
  return {
    type: TYPES.LOAD_CURRENT_ITEM,
    payload: item,
  };
};
