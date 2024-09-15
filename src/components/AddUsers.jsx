import React, { useState } from 'react';
import NavBar from './NavBar';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import {v4 as uuid} from "uuid"
import { ROUTER } from '../constant/Router';
import { addUser } from '../reduxs/slices/userSlice';
const initialValue ={
  firstName: "",
  lastName:"",
  email:"",
  age:0,
}
const AddUsers = () => {

  const [newUser,setNewUser] = useState(initialValue);


  const dispatch =useDispatch();
  const navigate = useNavigate();


  const handleChange =(e)=>{
    const {name,value} = e.target
    setNewUser({
      ...newUser,
      [name]:value
    })
  }


  const handleAddUsers =()=>{
    if(!newUser.firstName || !newUser.lastName || !newUser.email || !newUser.age === 0  ){
      toast.error("Please fill in all fields!!!",{
        autoClose:1500
      });
      return;
    }

    const addId= {
      id:uuid(),
      ...newUser,
    };

    dispatch(addUser(addId));
    toast.success("User added successfully!!!",{
      autoClose:1000
    });
    setTimeout(()=>{
      navigate(ROUTER.Home)
    },1500);

    setNewUser(initialValue)
  };

  
  return (
    <>
      <NavBar />
      <div className="flex justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-3xl font-semibold mt-6">Add User</h1>
          <div className="mt-3 ">
            <div>
              <input
                type="text"
                placeholder="First Name"
                className="p-2 w-96 my-2 border-2 border-green-500 rounded-md mt-5"
                name="firstName"
                value={newUser.firstName}
                onChange={handleChange}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Last Name"
                name="lastName"
                className="p-2 w-96 my-2 border-2 border-green-500 rounded-md mt-5"
                value={newUser.lastName}
                onChange={handleChange}
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                name="email"
                className="p-2 w-96 my-2 border-2 border-green-500 rounded-md mt-5"
                value={newUser.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <input
                type="number"
                placeholder="Age"
                name="age"
                className="p-2 w-96 my-2 border-2 border-green-500 rounded-md mt-5"
                value={newUser.age}
                onChange={handleChange}
              />
            </div>
            <button className="bg-sky-500 text-white px-5 py-2 w-96 rounded-md mt-3" onClick={handleAddUsers}>
              Add User
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddUsers;
