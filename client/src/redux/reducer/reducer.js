import { TYPES } from "../actions/types";

const initialState = {
  city: [],
  cityBackUp: [],
  actualPage: 1,
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case TYPES.SORT_CITIES:
      let sortedData = [];
      if (action.payload.category === true) {
        action.payload.ascending
          ? (sortedData = state.city.sort((a, b) => {
              if (a > b) {
                return 1;
              } else if (a < b) {
                return -1;
              }
              return 0;
            }))
          : (sortedData = state.city.sort((a, b) => {
              if (a < b) {
                return 1;
              } else if (a > b) {
                return -1;
              }
              return 0;
            }));
      }
      if (action.payload.price === true) {
        action.payload.ascending
          ? (sortedData = state.city.sort((a, b) => {
              if (parseFloat(a.price.total) > parseFloat(b.price.total)) {
                return 1;
              } else if (
                parseFloat(a.price.total) < parseFloat(b.price.total)
              ) {
                return -1;
              }
              return 0;
            }))
          : (sortedData = state.city.sort((a, b) => {
              if (parseFloat(a.price.total) < parseFloat(b.price.total)) {
                return 1;
              } else if (
                parseFloat(a.price.total) > parseFloat(b.price.total)
              ) {
                return -1;
              }
              return 0;
            }));
      }
      if (action.payload.time != "") {
        action.payload.ascending
          ? state.city.sort((a, b) => {
              if (a > b) {
                return 1;
              } else if (a < b) {
                return -1;
              }
              return 0;
            })
          : state.city.sort((a, b) => {
              if (a < b) {
                return 1;
              } else if (a > b) {
                return -1;
              }
              return 0;
            });
      }
      return { ...state, city: [...sortedData] };
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
