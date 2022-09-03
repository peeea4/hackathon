import { Contacts, Content, FooterWrapper, Links, PrivatePolicy } from "./styled";

export const Footer = () => {
    return (
        <FooterWrapper>
            <Content>
                <Links />
                <Contacts />
            </Content>
            <PrivatePolicy />
        </FooterWrapper>
    );
};
    