import { AddProduct } from "../AddProduct";
import { Home } from "../Home";
import { Profile } from "../Profile";
import { LayoutWrapper } from "./styled";

export const Layout = () => {
    return (
        <LayoutWrapper>
            <Home />
            <Profile />
            <AddProduct />
        </LayoutWrapper>
    );
};
