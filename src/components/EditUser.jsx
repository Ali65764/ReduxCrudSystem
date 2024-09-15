import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { updateUser } from '../reduxs/slices/userSlice';
import NavBar from './NavBar';
import { ROUTER } from '../constant/Router';
import { toast } from 'react-toastify';

const initialValue = {
  firstName: '',
  lastName: '',
  email: '',
  age: ''
}
const EditUser = () => {
  const { id } = useParams();
  const users = useSelector((state) => state.user.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [userData, setUserData] = useState(initialValue);


  useEffect(() => {
    const existingUser = users.find(user => user.id === id);
    setUserData(existingUser);
  }, [id, users]);


  const handleChange = (e) => {
    const { name, value } = e.target
    setUserData({
      ...userData,
      [name]: value
    });
  };


  const handleUpdate = () => {
    if(!userData.firstName || !userData.lastName || !userData.email || !userData.age ){
      toast.error("Please fill in all fields!!!",{
        autoClose:1500
      });
      return;
    }
    dispatch(updateUser({ id, ...userData }));
    toast.success("User edited successfully!!!", {
      autoClose: 1000
    })
    setTimeout(() => {
      navigate(ROUTER.Home);
    }, 1500)
  };

  return (
    <>
      <NavBar />
      <div className="flex justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-3xl font-semibold mt-6">Edit User</h1>
          <div className="mt-3 ">
            <div>
              <input
                type="text"
                placeholder="First Name"
                className="p-2 w-96 my-2 border-2 border-green-500 rounded-md mt-5"
                name="firstName"
                value={userData.firstName}
                onChange={handleChange}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Last Name"
                name="lastName"
                className="p-2 w-96 my-2 border-2 border-green-500 rounded-md mt-5"
                value={userData.lastName}
                onChange={handleChange}
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                name="email"
                className="p-2 w-96 my-2 border-2 border-green-500 rounded-md mt-5"
                value={userData.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <input
                type="number"
                placeholder="Age"
                name="age"
                className="p-2 w-96 my-2 border-2 border-green-500 rounded-md mt-5"
                value={userData.age}
                onChange={handleChange}
              />
            </div>
            <button
              className="bg-sky-500 text-white px-5 py-2 w-96 rounded-md mt-3"
              onClick={handleUpdate}
            >
              Update User
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditUser;
