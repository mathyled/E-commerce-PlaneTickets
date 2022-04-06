import axios from "axios";
import { TYPES } from "./types";

export const changePage = (number) => {
  return {
    type: TYPES.CHANGE_PAGE,
    payload: number,
  };
};

export const sortTickets = (category, price, time, ascending) => {
  return {
    type: TYPES.SORT_CITIES,
    payload: { category, price, time, ascending },
  };
};

export const filterTickets = (departure, ret, price, time) => {
  return {
    type: TYPES.FILTER_CITIES,
    payload: { departure, ret, price, time },
  };
};

export const getCities = () => {
  //LANDING
  return async (dispatch) => {
    var json = await axios.get(`http://localhost:3001/api/cities`);
    // console.log("JSON",json)
    return dispatch({
      type: TYPES.GET_CITIES,
      payload: json.data,
    });
  };
};

// getCity debería cambiar de nombre a getOffer.
// Y el type también debería cambiar a GET_OFFER.
export const getOffers = (origin, destination, departureDate, adults) => {
  //HOME
  return async (dispatch) => {
    var json = await axios.get(
      `http://localhost:3001/api/flights?origin=${origin}&destination=${destination}&departureDate=${departureDate}&adults=${adults}`
    );
    // console.log("JSON",json)
    return dispatch({
      type: TYPES.GET_OFFERS,
      payload: json.data,
    });
  };
};

export const getOfferDetails = (id) => {
  //DETAILS
  return async (dispatch) => {
    var json = await axios.get(
      `http://localhost:3001/api/flights/detailspage/${id}`
    );
    // console.log("JSON",json)
    return dispatch({
      type: TYPES.GET_OFFER_DETAILS,
      payload: json.data,
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
