import { Category } from "@/components/Category";
import { NewProducts } from "@/components/NewProducts";
import { Slider } from "@/components/Slider";
import { ToolBar } from "@/components/ToolBar";

import { HomeWrapper } from "./styled";

export const Home = () => {
    return (
        <HomeWrapper>
            <ToolBar />
            <Slider />
            <NewProducts />
            <Category />
        </HomeWrapper>
    );
};
