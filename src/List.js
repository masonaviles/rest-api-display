import React, { useEffect, useState } from "react";
import UserListItem from "./UserListItem";

const API_URL = 'https://reqres.in/api/users';

const List = () => {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(API_URL);
      const jsonData = await response.json();
      setUsers(jsonData.data);

    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }


  return (
    <ul>
      {users.map((user) => (
        <UserListItem key={user.id} user={user} />
      ))}
    </ul>
  );
};

export default List;
