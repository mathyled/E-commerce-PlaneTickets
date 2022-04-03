import { TYPES } from "../actions/types";

const initialState = {
  city: [],
  cityBackUp: [],
  actualPage: 1,
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case TYPES.GET_TICKETS:
      return {
        ...state,
        tickets: action.payload,
        ticketsBackUp: action.payload,
      };
    case TYPES.CHANGE_PAGE:
      return {
        ...state,
        actualPage: action.payload,
      };
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
