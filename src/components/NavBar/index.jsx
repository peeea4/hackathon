import { NavLink } from "react-router-dom";

import { Delivery, Info, Links, NavBarWrapper, PhoneNumber } from "./styled";

export const NavBar = () => {
    return (
        <NavBarWrapper>
            <Links>
                <NavLink to="home">Главная</NavLink>
                <NavLink to="about">О компании</NavLink>
                <NavLink to="profile">Личный кабинет</NavLink>
            </Links>
            <Info>
                <Delivery>Доставка с 8:00 до 23:00</Delivery>
                <PhoneNumber>+375 29 123-45-67</PhoneNumber>
            </Info>
        </NavBarWrapper>
    );
};
