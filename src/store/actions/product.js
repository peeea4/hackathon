import axios from "axios";

import {
    DELETE_ID_PRODUCT,
    GET_CATEGORY_PRODUCT,
    GET_FILTERED_LIST,
    GET_ID_PRODUCT,
    GET_PRODUCT_LIST,
    GET_USER_PRODUCT,
    SET_PRODUCT,
} from "@/constants/actions";
import { url } from "@/constants/url";

export const getProductList = () => {
    return async (dispatch) => {
        const response = await axios.get(`${url}/product/getAllProducts`);
        dispatch({ type: GET_PRODUCT_LIST, payload: response.data });
    };
};

export const getProductById = (id) => {
    return async (dispatch) => {
        const response = await axios.get(`${url}/product/getProductById/${id}`);
        dispatch({ type: GET_ID_PRODUCT, payload: response.data });
    };
};

export const getProductByUser = () => {
    return async (dispatch) => {
        const response = await axios.get(`${url}/product/getUserProduct/`);
        dispatch({ type: GET_USER_PRODUCT, payload: response.data });
    };
};

export const getProductByCategory = (category) => {
    return async (dispatch) => {
        const response = await axios.get(`${url}/product/getCategoryProduct/${category}`);
        dispatch({ type: GET_CATEGORY_PRODUCT, payload: response.data });
    };
};

export const getProductByFilter = (filter) => {
    console.log(filter);
    return async (dispatch) => {
        const response = await axios.get(`${url}/product/productStartWith/${filter}`);
        dispatch({ type: GET_FILTERED_LIST, payload: response.data });
    };
};

export const deleteProduct = (id) => {
    return async (dispatch) => {
        const response = await axios.post(`${url}/product/deleteProduct/${id}`);
        dispatch({ type: DELETE_ID_PRODUCT, payload: response.data });
    };
};

export const addProduct = (product) => {
    return async (dispatch) => {
        const response = await axios.post(`${url}/product/save`, product);
        dispatch({ type: SET_PRODUCT, payload: response.data });
    };
};
