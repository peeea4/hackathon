import { GET_FILTERED_LIST, GET_PRODUCT_LIST } from "@/constants/actions";

const defaultState = {
    productList: [],
    filteredList: [],
};

export const productReducer = (state = defaultState, action) => {
    switch (action.type) {
        case GET_PRODUCT_LIST:
            return {
                ...state,
                productList: action.payload,
            };
        case GET_FILTERED_LIST:
            return {
                ...state,
                filteredList: action.payload,
            };
        default:
            return state;
    }
};
