import { useSelector } from "react-redux";

import { Avatar, Location, MyProducts, Name, ProfileWrapper, UserInfo } from "./styled";

export const Profile = () => {
    const user = useSelector((state) => state.userState.user);
    return (
        <ProfileWrapper>
            <UserInfo>
                <Avatar></Avatar>
                <Name></Name>
                <Location></Location>
            </UserInfo>
            <MyProducts></MyProducts>
        </ProfileWrapper>
    );
};
