import axios from "axios";

import { CREATE_USER } from "@/constants/actions";

export const createUser = () => {
    return async (dispatch) => {
        const response = await axios.post(
            "http://ec2-18-185-127-15.eu-central-1.compute.amazonaws.com:8080/user/save",
        );
        console.log(response, "action");
        dispatch({ type: CREATE_USER, payload: response.data });
    };
};
