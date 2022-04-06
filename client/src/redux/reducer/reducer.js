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

    case TYPES.GET_OFFER_DETAILS:
      return {
        ...state,
        city_details: action.payload.data,
      };

    case TYPES.SORT_CITIES:
      let sortedData = [];
      console.log("LE STATES");
      //console.log(state.city[0].arrival.nameCity);
      if (action.payload.to === true) {
        action.payload.ascending
          ? (sortedData = state.city.sort((a, b) => {
              if (a.arrival.nameCity === undefined) {
                return 1;
              }
              if (b.arrival.nameCity === undefined) {
                return -1;
              }
              if (a.arrival.nameCity.area === null) {
                return 1;
              }
              if (b.arrival.nameCity === null) {
                return -1;
              }
              return a.arrival.nameCity.charAt(0) < b.arrival.nameCity.charAt(0)
                ? -1
                : 1;
            }))
          : (sortedData = state.city.sort((a, b) => {
              if (a.arrival.nameCity === undefined) {
                return 1;
              }
              if (b.arrival.nameCity === undefined) {
                return -1;
              }
              if (a.arrival.nameCity.area === null) {
                return 1;
              }
              if (b.arrival.nameCity === null) {
                return -1;
              }
              return a.arrival.nameCity.charAt(0) > b.arrival.nameCity.charAt(0)
                ? -1
                : 1;
            }));
      }
      if (action.payload.price === true) {
        action.payload.ascending
          ? (sortedData = state.city.sort((a, b) => {
              if (a.price === undefined) {
                return 1;
              }
              if (b.price === undefined) {
                return -1;
              }
              if (a.price === null) {
                return 1;
              }
              if (b.price === null) {
                return -1;
              }
              return parseFloat(a.price) < parseFloat(b.price) ? -1 : 1;
            }))
          : (sortedData = state.city.sort((a, b) => {
              if (a.price === undefined) {
                return 1;
              }
              if (b.price === undefined) {
                return -1;
              }
              if (a.price === null) {
                return 1;
              }
              if (b.price === null) {
                return -1;
              }
              return parseFloat(a.price) > parseFloat(b.price) ? -1 : 1;
            }));
      }
      if (action.payload.schedule != "") {
        action.payload.ascending
          ? state.city.sort((a, b) => {
              if (a.departure.scheduledTime === undefined) {
                return 1;
              }
              if (b.departure.scheduledTime === undefined) {
                return -1;
              }
              if (a.departure.scheduledTimee === null) {
                return 1;
              }
              if (b.departure.scheduledTime === null) {
                return -1;
              }
              return a.departure.scheduledTime < b.price.departure.scheduledTime
                ? -1
                : 1;
            })
          : state.city.sort((a, b) => {
              if (a.departure.scheduledTime === undefined) {
                return 1;
              }
              if (b.departure.scheduledTime === undefined) {
                return -1;
              }
              if (a.departure.scheduledTime === null) {
                return 1;
              }
              if (b.departure.scheduledTime === null) {
                return -1;
              }
              return a.departure.scheduledTime > b.price.departure.scheduledTime
                ? -1
                : 1;
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
