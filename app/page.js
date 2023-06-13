import Users from '@/components/Users';
import React from 'react'

async function fetchUsers() {
  const res = await fetch('https://reqres.in/api/users');
  const data = await res.json();
  return data.data;
}

const IndexPage = async () => {
  const users = await fetchUsers();
  return (
    <div>
      <Users users={users} />
    </div>
  )
}

export default IndexPage