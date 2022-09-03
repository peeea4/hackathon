import { SET_CURRENT_PRODUCT } from "@/constants/actions";

const defaultState = {
    currentProduct: {},
    currentStatus: false,
};

export const modalProductReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_CURRENT_PRODUCT:
            return {
                ...state,
                currentProduct: action.payload.product,
                currentStatus: action.payload.status,
            };
        default:
            return state;
    }
};
