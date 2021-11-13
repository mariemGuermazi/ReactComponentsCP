import React from 'react';
import myPic from "./profilePic.jpg";

const ProfilePhoto = () => {
    return (
        <div>
            <img src={myPic} alt="this is a profile pic" />
        </div>
    )
}

export default ProfilePhoto
