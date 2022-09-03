import { useDispatch } from "react-redux";

import { getProductByFilter } from "@/store/actions/product";

import search from "../../assets/search.png";
import { SearchBarButton, SearchBarInput, SearchBarWrapper } from "./styled";

export const SearchBar = () => {
    const dispatch = useDispatch();
    const changeHandler = (e) => {
        dispatch(getProductByFilter(e.target.value));
    };

    return (
        <SearchBarWrapper>
            <SearchBarInput onChange={changeHandler}></SearchBarInput>
            <SearchBarButton>
                <img src={search} alt="search" />
            </SearchBarButton>
        </SearchBarWrapper>
    );
};
