import React from "react";

const UserListItem = ({ user }) => (
  <li>
    <img src={user.avatar} alt={user.first_name} className=""/>
    <p class="firstName">{user.first_name}</p>
    <p class="lastName">{user.last_name}</p>
  </li>
);

export default UserListItem;