import { GET_PRODUCT_LIST } from "@/constants/actions";

const defaultState = {
    productList: [],
};

export const productReducer = (state = defaultState, action) => {
    switch (action.type) {
        case GET_PRODUCT_LIST:
            return {
                ...state,
                productList: action.payload,
            };
        default:
            return state;
    }
};
