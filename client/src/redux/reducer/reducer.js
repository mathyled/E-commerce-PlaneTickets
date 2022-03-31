import { TYPES } from "../actions/types";

const initialState = {
    tickets: [],
    ticketsBackUp: [],
    actualPage: 1
}


function rootReducer(state = initialState, action) {
    switch (action.type) {
        case TYPES.GET_TICKETS:
            return {
                ...state,
                tickets: action.payload,
                ticketsBackUp: action.payload,
            }
        case TYPES.CHANGE_PAGE:
            return {
                ...state,
                actualPage: action.payload,
            };

        default:
            return { ...state }
    }
};

export default rootReducer;