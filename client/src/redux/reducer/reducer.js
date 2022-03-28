import { TYPES } from "../actions/types";

const initialState = {
    tickets: {}
}


function rootReducer(state = initialState, action) {
    switch (action.type) {
        case TYPES.GET_TICKETS:
            return {
                ...state,
                tickets: action.payload
            }

        default:
            return { ...state }
    }
};

export default rootReducer;