import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { createUser, login } from "@/store/actions/user";

import {
    AuthWrapper,
    Avatar,
    Btn,
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
    console.log(user);
    const userProducts = useSelector((state) => state.userState.userProducts);
    const dispatch = useDispatch();
    const [isRegister, setIsRegister] = useState(true);

    const [email, setEmail] = useState();
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [firstName, setFirstname] = useState("");
    const [lastName, setSecondname] = useState("");
    const [phoneNumber, setPhonenumber] = useState("");

    const register = () => {
        dispatch(createUser({ username, password, email, firstName, lastName, phoneNumber }));
    };
    const loginAuth = () => {
        dispatch(login({ password, email }));
    };

    return user.username ? (
        <ProfileWrapper>
            <UserInfo>
                <Avatar></Avatar>
                <Name>{user.username}</Name>
            </UserInfo>
        </ProfileWrapper>
    ) : isRegister ? (
        <AuthWrapper>
            <EmailContainer>
                <p>Email</p>
                <Email onChange={(e) => setEmail(e.target.value)} />
            </EmailContainer>
            <UserPasswordContainer>
                <p>Password</p>
                <UserPassword onChange={(e) => setPassword(e.target.value)} />
            </UserPasswordContainer>
            <UserNameContainer>
                <p>User Name</p>
                <UserName onChange={(e) => setUsername(e.target.value)} />
            </UserNameContainer>
            <FirstNameContainer>
                <p>First Name</p>
                <FirstName onChange={(e) => setFirstname(e.target.value)} />
            </FirstNameContainer>
            <LastNameContainer>
                <p>Last Name</p>
                <LastName onChange={(e) => setSecondname(e.target.value)} />
            </LastNameContainer>
            <PhoneNumberContainer>
                <p>Phone Number</p>
                <PhoneNumber onChange={(e) => setPhonenumber(e.target.value)} />
            </PhoneNumberContainer>
            <Btn onClick={register}>Зарегистрироваться</Btn>
            <p>
                Уже зарегистрированы? <span onClick={() => setIsRegister(false)}>Войти</span>
            </p>
        </AuthWrapper>
    ) : (
        <AuthWrapper>
            <EmailContainer>
                <p>Email</p>
                <Email onChange={(e) => setEmail(e.target.value)} />
            </EmailContainer>
            <UserPasswordContainer>
                <p>Password</p>
                <UserPassword onChange={(e) => setPassword(e.target.value)} />
            </UserPasswordContainer>
            <Btn onClick={loginAuth}>Войти</Btn>
            <p>
                Ещё не зарегистрированы?
                <span onClick={() => setIsRegister(true)}>Зарегистрироваться</span>
            </p>
        </AuthWrapper>
    );
};
