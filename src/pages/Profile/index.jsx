import { useSelector } from "react-redux";

import {
    AuthWrapper,
    Avatar,
    Email,
    EmailContainer,
    FirstName,
    FirstNameContainer,
    LastName,
    LastNameContainer,
    Location,
    MyProducts,
    Name,
    PhoneNumber,
    PhoneNumberContainer,
    ProfileWrapper,
    UserInfo,
    UserName,
    UserNameContainer,
    UserPassword,
    UserPasswordContainer,
} from "./styled";

export const Profile = () => {
    const user = useSelector((state) => state.userState.user);

    return user.username ? (
        <ProfileWrapper>
            <UserInfo>
                <Avatar></Avatar>
                <Name></Name>
                <Location></Location>
            </UserInfo>
            <MyProducts></MyProducts>
        </ProfileWrapper>
    ) : (
        <AuthWrapper>
            <EmailContainer>
                <p>Email</p>
                <Email />
            </EmailContainer>
            <UserPasswordContainer>
                <p>Password</p>
                <UserPassword />
            </UserPasswordContainer>
            <UserNameContainer>
                <p>User Name</p>
                <UserName />
            </UserNameContainer>
            <FirstNameContainer>
                <p>First Name</p>
                <FirstName />
            </FirstNameContainer>
            <LastNameContainer>
                <p>Last Name</p>
                <LastName />
            </LastNameContainer>
            <PhoneNumberContainer>
                <p>Phone Number</p>
                <PhoneNumber />
            </PhoneNumberContainer>
        </AuthWrapper>
    );
};
