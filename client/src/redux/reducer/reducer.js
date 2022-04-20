import { TYPES } from "../actions/types";
const initialState = {
  city: [],
  city_details: {},
  cityBackUp: [],
  search: [],

  favoriteCard: [],

  itineraries: [],
  isSearching: false,
  errorMessage: [],
  ///CART ///////////
  products: [], // { id, origin, destination, price, image, departureTime }
  cart: [], // { id, origin, destination, price, image, departureTime, quantity }
  currentItem: null,
  qtySelect: 0,
  calculatedTotal: 0,
  user: {},
  confirm: {},
  forgot: {},
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

    case TYPES.IS_ON_SEARCH:
      return {
        ...state,
        city: [],
        isSearching: action.payload,
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
      if (action.payload.schedule !== "") {
        action.payload.ascending
          ? (sortedData = state.city.sort((a, b) => {
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
              if (a.departure.scheduledTime === "") {
                return 1;
              }
              if (b.departure.scheduledTime === "") {
                return -1;
              }

              return a.departure.scheduledTime < b.departure.scheduledTime
                ? -1
                : 1;
            }))
          : (sortedData = state.city.sort((a, b) => {
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
              return a.departure.scheduledTime > b.departure.scheduledTime
                ? -1
                : 1;
            }));
      }
      return { ...state, city: [...sortedData] };
    case TYPES.FILTER_CITIES:
      state.city = [...state.cityBackUp];
      let message = [];

      if (action.payload.to !== "") {
        state.city = state.city.filter((fly) => {
          if (fly?.arrival?.nameCity !== undefined) {
            return fly?.arrival?.nameCity
              .toLowerCase()
              .includes(action.payload.to.toLowerCase());
          }
        });
        if (state.city.length === 0) {
          message.push(
            `There isnt a destination named ${action.payload.to} on this location`
          );
        }
      }
      if (action.payload.airline !== "") {
        state.city = state.city.filter((fly) =>
          fly.airline?.name
            .toLowerCase()
            .includes(action.payload.airline.toLowerCase())
        );
        if (state.city.length === 0) {
          message.push(
            `There isnt an airport named ${action.payload.airline} on this location`
          );
        }
      }

      /*
      if (action.payload.time !== "") {
        state.city = state.city.filter(
          (fly) => fly.property === action.payload.time
        );
      }*/
      return { ...state, errorMessage: [...message] };

    case TYPES.RESET_MESSAGE_ERRORS:
      return {
        ...state,
        errorMessage: [],
      };

    case TYPES.GET_BACKUP_STATE:
      return { ...state, city: [...state.cityBackUp] };

    case TYPES.GET_FLIGHTS:
      return {
        ...state,
        isSearching: action.payload.isSearching,
        city: action.payload.data,
        cityBackUp: action.payload.data,
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

    case TYPES.ADD_FAVORITE:
      return {
        ...state,
        favoriteCard: state.favoriteCard.concat(action.payload),
      };
    case TYPES.REMOVE_FAVORITE:
      return {
        ...state,
        favoriteCard: state.favoriteCard.filter(
          (card) => card.id !== action.payload
        ),
      };

    case TYPES.GET_ITINERARIES:
      return {
        ...state,
        itineraries: action.payload,
      };
    // case TYPES.PUT_ITINERARY:
    //   return{

    //   }
    case TYPES.DELETE_ITINERARY:
      return {
        ...state.itineraries.filter((el) => el.id !== action.payload),
      };

    //// CART ////////////

    case TYPES.ADD_TO_CART:
      var newItem = state.city_details.find(
        (prod) => prod.id === action.payload.id
      );
      console.log("ADD_TO_CART", newItem);
      // Check if item is in the cart already
      var inCart = false;
      if (state.cart.length > 0) {
        inCart = state.cart.some((item) => {
          return item._id === newItem._id;
        });
      }
      console.log("INCART", inCart);
      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.id === action.payload.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            )
          : [...state.cart, { ...newItem, quantity: 1, total: newItem.price }], // [{manzana:3},{perro:1}]
      };

    case TYPES.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item._id !== action.payload),
      };

    case TYPES.UPDATE_QUANTITY:
      const cartCopy = state.cart;
      let pos = cartCopy.map((e) => e._id).indexOf(action.payload.id);
      let itemchange = cartCopy[pos];
      itemchange.quantity = action.payload.quantity;
      itemchange.total = itemchange.price * action.payload.quantity;
      cartCopy[pos] = itemchange;
      return {
        ...state,
        cart: cartCopy,
      };

    case TYPES.CALCULATE_TOTAL:
      let total = 0;
      if (state.cart.length > 0) {
        total = state.cart.reduce((prev, next) => prev + next.total, 0);
      }
      return {
        ...state,
        calculatedTotal: total,
      };

    case TYPES.SIGN_IN:
      console.log(action.payload);
      return {
        ...state,
        user: action.payload,
      };
    case TYPES.LOG_OUT:
      return {
        ...state,
        user: {},
      };

    case TYPES.SIGN_UP:
      return {
        ...state,
        user: action.payload,
      };

    case TYPES.SIGN_IN_GOOGLE:
      return {
        ...state,
        user: action.payload,
      };

    case TYPES.GET_CONFIRM:
      return {
        ...state,
        confirm: action.payload,
      };

    case TYPES.FORGOT_PASSWORD:
      return {
        ...state,
        forgot: action.payload,
      };

    case TYPES.RESET_PASSWORD:
      return {
        ...state,
        forgot: action.payload,
      };

    /*----Admin CRUD reducer-----*/
    
      case TYPES.POST_FLIGHT_ADMIN:
      return {
        ...state,
      };
    default:
      return { ...state };
  }
}

export default rootReducer;
