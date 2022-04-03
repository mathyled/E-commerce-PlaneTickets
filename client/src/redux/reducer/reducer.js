import { TYPES } from "../actions/types";

const initialState = {
  city: [],
  cityBackUp: [],
  actualPage: 1,
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case TYPES.SORT_CITIES:
      if (action.payload.category != "") {
        action.payload.ascending
          ? state.city.sort((a, b) => {
              console.log(a);
              if (a > b) {
                return 1;
              } else if (a < b) {
                return -1;
              }
            })
          : state.city.sort((a, b) => {
              if (a < b) {
                return 1;
              } else if (a > b) {
                return -1;
              }
            });
      }
      if (action.payload.price != "") {
        action.payload.ascending
          ? state.city.sort((a, b) => {
              if (a > b) {
                return 1;
              } else if (a < b) {
                return -1;
              }
            })
          : state.city.sort((a, b) => {
              if (a < b) {
                return 1;
              } else if (a > b) {
                return -1;
              }
            });
      }
      if (action.payload.time != "") {
        action.payload.ascending
          ? state.city.sort((a, b) => {
              if (a > b) {
                return 1;
              } else if (a < b) {
                return -1;
              }
            })
          : state.city.sort((a, b) => {
              if (a < b) {
                return 1;
              } else if (a > b) {
                return -1;
              }
            });
      }
      return { ...state };
    case TYPES.FILTER_CITIES:
      if (action.payload.departure !== "") {
        // EL PROBLEMA ESTA ACA

        state.city = state.city.filter(
          (fly) => fly.departureDate === action.payload.departure
        );
      }
      if (action.payload.ret !== "") {
        state.city = state.city.filter(
          (fly) => fly.returnDate === action.payload.ret
        );
      }
      if (action.payload.price !== "") {
        state.city = state.city.filter((fly) => {
          return fly.price.total === action.payload.price;
        });
      }
      /*
      if (action.payload.time !== "") {
        state.city = state.city.filter(
          (fly) => fly.property === action.payload.time
        );
      }*/
      return { ...state };

    case TYPES.GET_CITY:
      return {
        ...state,
        city: action.payload.data.offer,
        cityBackUp: action.payload.data.offer,
      };

    default:
      return { ...state };
  }
}

export default rootReducer;
