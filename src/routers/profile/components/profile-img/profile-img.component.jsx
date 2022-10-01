import React from "react";

import { useSelector } from "react-redux";
import { selectUser } from "../../../../App/slices/user.slice";

import { Img } from "./profile-img.style";

const ProfileImg = () => {
    const zero = useSelector(selectUser);

    return (
        <Img alt="logo" src={zero.userImage} />
    )
}

export default ProfileImg;