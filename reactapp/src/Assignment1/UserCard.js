// Create a functional component named UserCard that accepts the following props: name, email, and avatarURL.
// Use the props to display the user's name, email, and an image (avatar) in the UserCard component.
// Create multiple instances of the UserCard component with different user data.

import React from "react";

function UserCard({ userinfo }) {
  return (
    <div>
      <h1>{userinfo.name}</h1>
      <h2>{userinfo.email}</h2>
      <img src={userinfo.avatarURL} alt="alt1" />
    </div>
  );
}

export default UserCard;
