import { TYPES } from "../actions/types";

const initialState = {
  city: [],
  cityBackUp: [],
  actualPage: 1,
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case TYPES.CHANGE_PAGE:
      return {
        ...state,
        actualPage: action.payload,
      };

    case TYPES.GET_CITY:
      console.log(action.payload.data.offer);
      return {
        ...state,
        city: action.payload.data.offer,
        cityBackUp: action.payload.data.offer,
      };

    case TYPES.SORT_TICKETS:
      if (action.payload.category != "") {
        action.payload.ascending
          ? state.tickets.sort((a, b) => {
              if (a > b) {
                return 1;
              } else if (a < b) {
                return -1;
              }
            })
          : state.tickets.sort((a, b) => {
              if (a < b) {
                return 1;
              } else if (a > b) {
                return -1;
              }
            });
      }
      if (action.payload.price != "") {
        action.payload.ascending
          ? state.tickets.sort((a, b) => {
              if (a > b) {
                return 1;
              } else if (a < b) {
                return -1;
              }
            })
          : state.tickets.sort((a, b) => {
              if (a < b) {
                return 1;
              } else if (a > b) {
                return -1;
              }
            });
      }
      if (action.payload.time != "") {
        action.payload.ascending
          ? state.tickets.sort((a, b) => {
              if (a > b) {
                return 1;
              } else if (a < b) {
                return -1;
              }
            })
          : state.tickets.sort((a, b) => {
              if (a < b) {
                return 1;
              } else if (a > b) {
                return -1;
              }
            });
      }
      return { ...state };
    case TYPES.FILTER_TICKETS:
      if (action.payload.dep !== "") {
        state.tickets = state.tickets.filter(
          (fly) => fly.property === action.payload.dep
        );
      }
      if (action.payload.ret !== "") {
        state.tickets = state.tickets.filter(
          (fly) => fly.property === action.payload.ret
        );
      }
      if (action.payload.price !== "0" || action.payload.price !== "") {
        state.tickets = state.tickets.filter(
          (fly) => fly.property === action.payload.price
        );
      }
      if (action.payload.time !== "") {
        state.tickets = state.tickets.filter(
          (fly) => fly.property === action.payload.time
        );
      }
      return { ...state };

    default:
      return { ...state };
  }
}

export default rootReducer;
