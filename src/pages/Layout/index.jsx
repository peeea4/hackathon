import { Outlet } from "react-router-dom";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

import { LayoutWrapper } from "./styled";

export const Layout = () => {
    return (
        <LayoutWrapper>
            <Header />
            <Outlet />
            <Footer />
        </LayoutWrapper>
    );
};
