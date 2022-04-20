import axios from "axios";
import { TYPES } from "./types";
let baseUrl = "http://localhost:3001/";

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

export const getOfferDetails = (id) => {
  //DETAILS
  return async (dispatch) => {
    var json = await axios.get(`${baseUrl}api/flights/detail/${id}`);
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
      `${baseUrl}api/flights?city=${airline}&date=${date}`
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
    var { data } = await axios.get(`${baseUrl}api/cities`);
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

export const resetMessageErrors = () => {
  return { type: TYPES.RESET_MESSAGE_ERRORS, payload: {} };
};

export function addFavorite(payload) {
  return {
    type: TYPES.ADD_FAVORITE,
    payload: payload,
  };
}

export function removeFavorite(payload) {
  return {
    type: TYPES.REMOVE_FAVORITE,
    payload: payload,
  };
}

export const postFlight = (payload) => {
  return async (dispatch) => {
    var res = await axios.post(`${baseUrl}api/itineraries`, payload);
    return res;
  };
};

export const getItineraries = () => {
  return async (dispatch) => {
    var res = await axios.get(`${baseUrl}api/itineraries`);
    console.log("Info from db...", res.data.data);
    return dispatch({
      type: TYPES.GET_ITINERARIES,
      payload: res.data.data,
    });
  };
};

export const updateItinerary = (id) => {
  return {
    type: TYPES.PUT_ITINERARY,
    payload: id,
  };
};

export const deleteItinerary = (id) => {
  return {
    type: TYPES.DELETE_ITINERARY,
    payload: id,
  };
};

export const isOnSearch = (boolean) => {
  return {
    type: TYPES.IS_ON_SEARCH,
    payload: boolean,
  };
};

export const getBackUpState = () => {
  return {
    type: TYPES.GET_BACKUP_STATE,
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

export const updateQuantity = (id, quantity) => {
  // console.log("ACTION", id, quantity)
  return {
    type: TYPES.UPDATE_QUANTITY,
    payload: { id, quantity },
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

export const signUp = (inputs) => {
  return async (dispatch) => {
    try {

      const response = await axios.post(`${baseUrl}api/auth/register`, inputs);

      dispatch({
        type: TYPES.SIGN_UP,
        payload: response.data,
      });
      console.log(response.data.message);
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };
};

export const signIn = (inputs) => {
  // console.log(inputs)
  return async (dispatch) => {
    try {

      const response = await axios.post(`${baseUrl}api/auth/login`, inputs);

      dispatch({
        type: TYPES.SIGN_IN,
        payload: response.data,
      });
      // console.log(response.data.message);
      // console.log(response);
    } catch (err) {
      console.log(err);
    }
  };
};

export const signInGoogle = () => {
  // console.log(userGoogle)
  return async (dispatch) => {
    try {
      const response = await axios.get(
        "http://localhost:3001/api/auth/login/success",
        { withCredentials: true }
      );
      dispatch({
        type: TYPES.SIGN_IN_GOOGLE,
        payload: response.data,
      });
      // console.log(response.data.message);
      console.log("GOOGLE", response.data);
    } catch (err) {
      console.log(err);
    }
  };
};

export const logOut = () => {
  return {
    type: TYPES.LOG_OUT,
  };
};

export const getConfirm = (token) => {
  return async (dispatch) => {

    var json = await axios.get(`${baseUrl}api/auth/confirm/${token}`);

    console.log("TOKEN", token);
    return dispatch({
      type: TYPES.GET_CONFIRM,
      payload: json.data,
    });
  };
};

export const forgotPassword = (email) => {
  return async (dispatch) => {
    try {
      console.log("EMAIL", email);
      const response = await axios.post(
        "http://localhost:3001/api/auth/recover/",
        email
      );
      dispatch({
        type: TYPES.FORGOT_PASSWORD,
        payload: response.data,
      });
      console.log(response.data.message);
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };
};

export const resetPassword = (token, password) => {
  console.log(password, token);
  return async (dispatch) => {
    try {
      const response = await axios.put(
        `http://localhost:3001/api/auth/recover/${token}`,
        password
      );
      dispatch({
        type: TYPES.RESET_PASSWORD,
        payload: response.data,
      });
      console.log(response.data.message);
    } catch (err) {
      console.log(err);
    }
  };
};


/*------------------Admin CRUD actions-----------------*/
export const postFlightAdmin = (payload) => {
  return async (dispatch) => {
    var res = await axios.post("http://localhost:3001/api/create", payload);
    return res;
  };
};

///////////////// ACTIONS ORDER ////////////////////////////////////

export const createFlightOffer = (payload) => {
  return async function () {
    try {
      const json = await axios.post(
        `http://localhost:3001/api/flightsOffer/create`,
        payload
      );
      return json;
    } catch (err) {
      console.log(err);
    }
  };
};

export const getFlightOffer = (id) => {
  return async (dispatch) => {
    const json = await axios.get(
      `http://localhost:3001/api/flightsOffer/${id}`
    );
    return dispatch({
      type: TYPES.GET_FLIGHT_OFFER,
      payload: json.data,
    });
  };
};

export const createOrder = (payload) => {
  return async function () {
    try {
      const json = await axios.post(`http://localhost:3001/api/Order`, payload);
      return json;
    } catch (err) {
      console.log(err);
    }
  };
};

export const getAllOrders = () => {
  return async (dispatch) => {
    const json = await axios.get(`http://localhost:3001/api/Order`);
    return dispatch({
      type: TYPES.GET_ALL_ORDERS,
      payload: json.data,
    });
  };
};

export const getOrder = (id) => {
  return async (dispatch) => {
    const json = await axios.get(`http://localhost:3001/api/Order/${id}`);
    return dispatch({
      type: TYPES.GET_ORDER,
      payload: json.data,
    });
  };
};


export const dispatchUser = (item) => {
  console.log("%cUSER","background:blue",item)
  return {
    type: TYPES.USER,
    payload: item,
  };
};

