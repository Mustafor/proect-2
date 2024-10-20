import React from 'react';
import { DeleteOutlined, EditOutlined, EllipsisOutlined } from '@ant-design/icons';
import { Card } from 'antd';
const { Meta } = Card;
const UserCard = ({item}) => (
  <Card
    style={{
      width: 300,
    }}
    cover={
      <img
        alt="example"
        src={item.img}
      />
    }
    actions={[
        <DeleteOutlined className='scale-[1.8] !text-red-500' key={"delete"}/>,
      <EditOutlined className='scale-[1.8] !text-green-500' key="edit" />,
      <EllipsisOutlined className='scale-[1.8] !text-blue-500' key="ellipsis" />,
    ]}
  >
    <Meta
      title={<h2 className='text-[20px]'>{`${item.name} ${item.surname}`}</h2>}
      description={<p className='text-[18px]'>{`Study:${item.study} - Age:${item.age}`}</p>}
    />
  </Card>
);
export default UserCard;