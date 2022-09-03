import { combineReducers } from "redux";

import { modalProductReducer } from "./modalProduct";
import { productReducer } from "./product";
import { userReducer } from "./user";

export const rootReducer = combineReducers({
    productList: productReducer,
    userState: userReducer,
    modalState: modalProductReducer,
});
