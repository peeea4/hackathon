import { Route, Routes } from "react-router-dom";

import { About } from "@/pages/About";

import { AddProduct } from "../AddProduct";
import { Home } from "../Home";
import { Layout } from "../Layout";
import { Profile } from "../Profile";

export const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path="home" element={<Home />} />
                <Route path="profile" element={<Profile />} />
                <Route path="addproduct" element={<AddProduct />} />
                <Route path="about" element={<About />} />
            </Route>
        </Routes>
    );
};
