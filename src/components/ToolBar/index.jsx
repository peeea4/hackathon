import { NavLink } from "react-router-dom";

import logo from "../../assets/logo.png";
import user from "../../assets/user.png";
import { SearchBar } from "../SearchBar";
import { Logo, ToolBarWrapper } from "./styled";

export const ToolBar = () => {
    return (
        <ToolBarWrapper>
            <Logo src={logo} />
            <SearchBar />
            <NavLink to="/profile">
                <img src={user} alt="" />
            </NavLink>
        </ToolBarWrapper>
    );
};
