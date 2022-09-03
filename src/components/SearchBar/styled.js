import styled from "styled-components";

import { BG_COLOR } from "@/styles";

export const SearchBarWrapper = styled.div`
    display: flex;
    align-items: center;
`;

export const SearchBarInput = styled.input`
    color: black;
    border: 1px solid black;
    padding: 14px 20px;
    width: 650px;
    height: 50px;
    border-radius: 12px 0 0 12px;
    &:focus {
        border: 1px solid black;
        outline: 0;
    }
    font-size: 16px;
`;

export const SearchBarButton = styled.button`
    background-color: ${BG_COLOR.button};
    border: 0;
    height: 50px;
    width: 50px;
    border-radius: 0 12px 12px 0;
    cursor: pointer;
`;
