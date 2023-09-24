import React from 'react'

type User = {
  id: number;
  name: string;
  username: string;
  email: string;

}

const usersPage = async () => {
  const users : User[] = await fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json());

  return (
    <>
      <h1>User Page</h1>
      <ul>
        {users.map(user => <li>{user.name}</li>)}
      </ul>
    </>
  )
}

export default usersPage