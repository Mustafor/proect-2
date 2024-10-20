import React, { useState } from 'react';
import { TeamOutlined, UserOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { NavLink } from 'react-router-dom';
const items = [
  {
    label: <NavLink to={"/"}>Students</NavLink>,
    key: 'users',
    icon: <TeamOutlined />,
  },
  {
    label: <NavLink to={"/teachres"}>Teachers</NavLink>,
    key: 'teachres',
    icon: <UserOutlined />,
  },
]
const Navbar = () => {
  const [current, setCurrent] = useState('mail');
  const onClick = (e) => {
    setCurrent(e.key);
  };
  return <Menu className='p-6 flex items-center justify-center' theme='dark' onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
};
export default Navbar;