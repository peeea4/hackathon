import axios from "axios";

import { CREATE_USER } from "@/constants/actions";
import { url } from "@/constants/url";

export const createUser = (user) => {
    return async (dispatch) => {
        const response = await axios.post(`${url}/user/save`, user);
        console.log(response, "action");
        dispatch({ type: CREATE_USER, payload: response.data });
    };
};

export const login = (user) => {
    return async (dispatch) => {
        const response = await axios.get(`${url}/user/login`, user);
        console.log(response, "action");
        dispatch({ type: CREATE_USER, payload: response.data });
    };
};
