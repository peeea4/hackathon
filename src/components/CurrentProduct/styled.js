import styled from "styled-components";

import { BG_COLOR } from "@/styles";

export const CurrentProductWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(125, 125, 125, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const CurrentProductModal = styled.div`
    position: relative;
    background-color: white;
    color: ${BG_COLOR.button};
    width: 350px;
    height: 400px;
`;

export const BtnClose = styled.button`
    color: white;
    background-color: ${BG_COLOR.button};
    padding: 6px 12px;
    font-size: 16px;
    border: 0;
    border-radius: 12px;
`;

export const PhoneNumber = styled.p`
    color: black;
`;

export const Image = styled.img`
    width: 350px; ;
`;
