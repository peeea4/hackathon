import styled from "styled-components";

import { BG_COLOR, FONT_SIZE } from "@/styles";

export const NavBarWrapper = styled.nav`
    background-color: ${BG_COLOR.navbar};
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 1400px;
    margin: 0 auto;
    gap: 20px;
    a {
        font-size: ${FONT_SIZE.nav};
        color: black;
        text-decoration: none;
        font-weight: 500;
        &:active {
            color: ${BG_COLOR.button};
        }
    }
`;

export const Links = styled.div`
    display: flex;
    gap: 20px;
`;

export const Info = styled.div`
    display: flex;
    gap: 20px;
`;

export const Delivery = styled.div``;

export const PhoneNumber = styled.div``;
