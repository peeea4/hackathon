import { SET_CURRENT_PRODUCT } from "@/constants/actions";

export const setProduct = (product, status) => {
    return async (dispatch) => {
        dispatch({
            type: SET_CURRENT_PRODUCT,
            payload: {
                product,
                status,
            },
        });
    };
};
