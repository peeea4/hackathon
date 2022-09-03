import styled from "styled-components";

import { BG_COLOR } from "@/styles";

export const ProductItemWrapper = styled.div`
    padding: 16px 0;
`;

export const Title = styled.h3`
    font-size: 20px;
    margin-bottom: 10px;
    font-weight: 400;
`;

export const Picture = styled.img`
    width: 220px;
`;

export const Price = styled.p`
    margin-bottom: 10px;
    font-size: 20px;
    font-weight: 600;
`;

export const Category = styled.p``;

export const Loaction = styled.p``;

export const Description = styled.p``;

export const Buy = styled.button`
    background-color: ${BG_COLOR.button};
    color: white;
    border: 0px;
    padding: 8px 16px;
    border-radius: 12px;
    font-size: 16px;
`;
