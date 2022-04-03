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
    type: TYPES.SORT_TICKETS,
    payload: { category, price, time, ascending },
  };
};

export const filterTickets = (departure, ret, price, time) => {
  return {
    type: TYPES.FILTER_CITIES,
    payload: { departure, ret, price, time },
  };
};

export const getCity = (city) => {
  return async (dispatch) => {
    var json = await axios.get(
      `http://localhost:3001/api/flights/inspiration?origin=${city}`
    );
    // console.log("JSON",json)
    return dispatch({
      type: TYPES.GET_CITY,
      payload: json.data,
    });
  };
};

export const getCityDetails = (id) => {
  return async (dispatch) => {
    var json = await axios.get(`http://localhost:3001/detailspage/${id}`);
    // console.log("JSON",json)
    return dispatch({
      type: TYPES.GET_CITY_DETAILS,
      payload: json.data,
    });
  };
};
