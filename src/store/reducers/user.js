import { GET_PRODUCT_LIST, GET_USER } from "@/constants/actions";

const defaultState = {
    user: {},
};

export const userReducer = (state = defaultState, action) => {
    switch (action.type) {
        case GET_USER:
            return {
                ...state,
                user: [...state.productList, ...action.payload],
            };
        default:
            return state;
    }
};
