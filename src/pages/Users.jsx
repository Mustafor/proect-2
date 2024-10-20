import axios from 'axios'
import React, { useEffect, useState } from 'react'
import UserCard from '../components/UserCards'
import { Button } from 'antd'
import { useNavigate } from 'react-router-dom'

function Users() {
    const navigate = useNavigate()
    const [users, setUsers] = useState([])

    useEffect(() => {
        axios("https://localhost:3000.users").then(res => {
            setUsers(res.data)
        })
    }, [])


  return (
    <div>
        <div className='p-5 flex items-center gap-[15px] justify-center'>
            <h2 className='text-[25px] font-bold'>Students</h2>
            <Button onClick={() => navigate("add")} size='large' type='primary'>Add Student</Button>
        </div>
        <div className='p-10'>
            {users.map(item => <UserCard key={item.id} item={item}/>)}
        </div>
    </div>
  )
}

export default Users