import { TYPES } from "../actions/types";

const initialState = {
  city: [],
  city_details: {},
  cityBackUp: [],
  search: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    // case TYPES.GET_OFFERS:
    //   return {
    //     ...state,
    //     city: action.payload.data,
    //     cityBackUp: action.payload.data,
    //   };

    case TYPES.RESET_STATES:
      return {
        ...state,
        city_details: action.payload,
      };

    // case TYPES.GET_OFFER_DETAILS:
    //   console.log("AA");
    //   console.log(action.payload.data.offer[0]);
    //   return {
    //     ...state,
    //     city_details: action.payload.data.offer[0],
    //   };

    case TYPES.SORT_CITIES:
      let sortedData = [];
      console.log(state.city);
      if (action.payload.to === true) {
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
      if (action.payload.schedule != "") {
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
          (fly) => fly.departureDate === action.payload.to
        );
      }
      if (action.payload.ret !== "") {
        state.city = state.city.filter(
          (fly) => fly.returnDate === action.payload.airline
        );
      }

      /*
      if (action.payload.time !== "") {
        state.city = state.city.filter(
          (fly) => fly.property === action.payload.time
        );
      }*/
      return { ...state };

    // case TYPES.GET_CITIES:
    //   return {
    //     ...state,
    //     city: action.payload.data,
    //     cityBackUp: action.payload.data,
    //   };
    case TYPES.GET_FLIGHTS:
      return {
        ...state,
        city: action.payload,
        cityBackUp: action.payload,
      };

    case TYPES.GET_CITIES:
      return {
        ...state,
        search: action.payload,
      };
    case TYPES.POST_FLIGHT:
      return {
        ...state,
      };

    default:
      return { ...state };
  }
}

export default rootReducer;
