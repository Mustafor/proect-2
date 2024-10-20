import { UploadOutlined } from '@ant-design/icons'
import { Button, Input } from 'antd'
import axios from 'axios'
import React, { useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

function AddUsers() {
  const navigate = useNavigate()
  const [name, setName] = useState("")
  const [surname, setSurname] = useState("")
  const [img, setImg] = useState("")
  const [age, setAge] = useState("")
  const [study, setSutdy] = useState("")

  function handleSubmit(e){
    e.preventDefault()
    const data = { img, name, surname, age, study }
    axios.post("https://localhost:3000/users", data).then(res => {
      toast.success("Succesfully")
      setTimeout(() => navigate(-1), 1000)
    })
  }

  return (
    <form onSubmit={handleSubmit} className='p-5'>
      <Toaster position='top-center' reverseOrder={false}/>
      <div className='flex items-center justify-between'>
        <h2 className='text-[22px] font-bold'>Add Users</h2>
        <Button htmlType='submit' type='primary' size='large'>Save</Button>
      </div>
      <div className='flex space-x-5 mt-5'>
        <div className='w-[49%] p-2 rounded-md border-[2px] border-slate-500'>
          <label className='flex flex-col'>
            <span>Name</span>
          <Input value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter name' size='large' className='mt-1'/>  
          </label>
          <label className='flex flex-col'>
            <span>Surname</span>
          <Input value={surname} onChange={(e) => setSurname(e.target.value)} placeholder='Enter surname' size='large' className='mt-1'/>  
          </label>  
          <label className='flex flex-col'>
            <span>Age</span>
          <Input value={age} onChange={(e) => setAge(e.target.value)} type='number' placeholder='Enter age' size='large' className='mt-1'/>  
          </label>
          <label className='flex flex-col'>
            <span>Study</span>
          <Input value={study} onChange={(e) => setSutdy(e.target.value)} placeholder='Enter study' size='large' className='mt-1'/>  
          </label>          
        </div>
        <div className='w-[49%] p-2 rounded-md border-[2px] border-slate-500'>
          <label>
          <Input onChange={(e) => setImg(URL.createObjectURL(e.target.files[0]))} className='hidden' type='file'/>
          {img ? <img className='w-full' src={img} alt="img" /> : 
          <div className='flex cursor-pointer items-center space-x-5'>
            <span className='text-[26px]'>Choose img</span>
            <UploadOutlined className='scale-[1.5]'/>
          </div>
          }
          </label>
        </div>
      </div>
    </form>
  )
}

export default AddUsers