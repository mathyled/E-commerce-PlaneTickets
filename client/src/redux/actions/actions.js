import axios from "axios";
import { TYPES } from "./types";

export const changePage = (number) => {
  return {
    type: TYPES.CHANGE_PAGE,
    payload: number,
  };
};

export const searchLanding = (searchCity) => {
  return {
    type: TYPES.SEARCH_CITY,
    payload: searchCity,
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
