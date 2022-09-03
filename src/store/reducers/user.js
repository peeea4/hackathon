import { CREATE_USER } from "@/constants/actions";

const defaultState = {
    user: {},
};

export const userReducer = (state = defaultState, action) => {
    switch (action.type) {
        case CREATE_USER:
            return {
                ...state,
                user: action.payload,
            };
        default:
            return state;
    }
};
