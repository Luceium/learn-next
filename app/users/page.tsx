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
      <table className='table table-bordered'>
        <thead>
          <tr>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user =>
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  )
}

export default usersPage