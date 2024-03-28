import React from "react";

function UserCard(props) {
  return (
    <div>
      <h1> {props.name}</h1>
      <h2>{props.email}</h2>
      <img src={props.avatarURL} alt="alt1" />
    </div>
  );
}

export default UserCard;
