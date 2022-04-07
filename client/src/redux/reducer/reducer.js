import { TYPES } from "../actions/types";

const initialState = {
  city: [],
  city_details: {},
  cityBackUp: [],
  search: [],
  products: [ {
    "_id": "624e4eea4c930e75e9452693",
 
    "departure": {
      "iataCode": "aep",
      "icaoCode": "sabe",
      "scheduledTime": "04:50",
      "nameCity": "Buenos Aires",
      "image": "https://www.lugaresturisticos.pro/wp-content/uploads/2019/06/image2-1024x790.png"
    },
    "arrival": {
      "iataCode": "juj",
      "scheduledTime": "07:05",
      "nameCity": "Jujuy",
      "image": "https://www.lugaresturisticos.pro/wp-content/uploads/2019/06/image2-1024x790.png"
    },

  
    "codeshared": {
      "airline": {
        "name": "aerolineas argentinas (retro livery)",
      },

    },
    "price": 372,
  
  }],
  cart: [],
  currentItem: null,
};

function rootReducer(state = initialState, action) {
  switch (action.type) {

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

    //// CART ////////////

    case TYPES.ADD_TO_CART:
      return {}
      case TYPES.REMOVE_FROM_CART:
        return {}
    case TYPES.ADD_QUANTITY:
      return {}
    case TYPES.LOAD_CURRENT_ITEM:
      return {}
    default:
      return { ...state };
  }
}

export default rootReducer;
