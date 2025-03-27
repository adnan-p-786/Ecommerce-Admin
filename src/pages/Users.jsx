import React, { useEffect, useState } from 'react'
import { getData } from '../utils/Users';

function Users() {
  const [users, setUsers] = useState([])

  const fetchInfo = async () => {
    const response = await getData()
    console.log(response.data)
    if (response.data) {
      setUsers(response.data);
    }
  };

  useEffect(() => {
    fetchInfo();
  }, []);


  return (
    <div className="p-5 ml-65 bg-slate-200 -mt-150 mr-10 h-[600px] overflow-y-auto">
  <h1 className="text-2xl font-bold border-b-3 mb-4">Users</h1>

  <table className="mt-5 border-2 w-full mx-auto border-collapse text-center">
    <thead>
      <tr className="bg-slate-300">
        <th className="border-2 p-2">Name</th>
        <th className="border-2 p-2">Email</th>
      </tr>
    </thead>
    <tbody>
      {users.map((user, index) => (
        <tr key={index} className="hover:bg-slate-100">
          <td className="border-2 p-2">{user.name}</td>
          <td className="border-2 p-2">{user.email}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

  )
}

export default Users
