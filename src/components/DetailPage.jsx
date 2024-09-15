import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import NavBar from './NavBar';
const DetailPage = () => {
  const { id } = useParams();
  console.log("ID from params:", id); 

  const users = useSelector((state) => state.user.users);


  const user = users.find(user => user.id === id);

  if (!user) {
    return <p>User not found!</p>; 
  }

  return (
    <>
    <NavBar/>
    <div className="flex  flex-col items-center justify-center mt-16">
      <h1 className="text-3xl font-semibold">User Detail</h1>
      <div className='bg-white rounded-md p-5 text-3xl mt-3'>
      <p><strong>Datas of<span className='text-red-600 ml-3'>{user.firstName}</span></strong></p>
      <p className='mt-3'><strong>First Name:</strong> {user.firstName}</p>
      <p className='mt-3'><strong>Last Name:</strong> {user.lastName}</p>
      <p className='mt-3'><strong>Email:</strong> {user.email}</p>
      <p className='mt-3'><strong>Age:</strong> {user.age}</p>
      </div>
    </div>
    </>
  );
}

export default DetailPage;
