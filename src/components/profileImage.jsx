import React from 'react';
import'./ProfileImage.css';

function ProfileImage({ src, alt}) {
  return (
    <img className="profile" src={src} alt={alt} />
  );
}

export default ProfileImage;