import React from 'react';

function ProfileImage({ image, alt }) {
  return (
    <img className="profile" src={image} alt={alt} />
  );
}

export default ProfileImage;