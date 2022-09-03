import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import { Delivery, Info, Links, NavBarWrapper, PhoneNumber } from "./styled";

export const NavBar = () => {
    const user = useSelector((state) => state.userState.user);
    return (
        <NavBarWrapper>
            <Links>
                <NavLink to="home">Главная</NavLink>
                <NavLink to="about">О компании</NavLink>
                <NavLink to="profile">Личный кабинет</NavLink>
                <NavLink to="catalog">Каталог</NavLink>
                {user.username ? <NavLink to="add">Подать объявление</NavLink> : null}
            </Links>
            <Info>
                <Delivery>Доставка с 8:00 до 23:00</Delivery>
                <PhoneNumber>+375 29 123-45-67</PhoneNumber>
            </Info>
        </NavBarWrapper>
    );
};
