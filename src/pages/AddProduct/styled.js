import { BG_COLOR } from "@/styles";
import styled from "styled-components";

export const AddProductWrapper = styled.div`
    width: 1400px;
    margin: 0 auto;
    margin-top: 20px;
`;

export const Avatar = styled.input`
    width: 280px;
    height: 280px;
    background-color: black;
`;

export const Title = styled.input`
    padding: 16px 24px;
    font-size: 16px;
    width: 100%;
`;

export const Description = styled.textarea`
    padding: 16px 24px;
    font-size: 16px;
    width: 100%;
    height: 120px;
    resize: none;
`;

export const Category = styled.select`
    padding: 16px 24px;
    font-size: 16px;
    width: 100%;
`;

export const Price = styled.input`
    padding: 16px 24px;
    font-size: 16px;
    width: 100%;
`;

export const Button = styled.button`
    background-color: transparent;
    border: 0;
    background-color: ${BG_COLOR.button};
    color: white;
    padding: 10px 20px;
    margin-top: 20px;
    width: 100%;
    cursor: pointer;
`;

export const ProductContent = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 20px;
`;

export const Aside = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    gap: 25px;
    width: 400px;
`;
