import { NavLink } from "react-router-dom";

import logo from "../../assets/logo.png";
import user from "../../assets/user.png";
import { Logo, ToolBarWrapper } from "./styled";

export const ToolBar = () => {
    return (
        <ToolBarWrapper>
            <Logo src={logo} />
            <NavLink to="/profile">
                <img src={user} alt="" />
            </NavLink>
        </ToolBarWrapper>
    );
};
