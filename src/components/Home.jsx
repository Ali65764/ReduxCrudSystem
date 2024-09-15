import React from 'react';
import NavBar from './NavBar';
import { useSelector } from 'react-redux';
import { FaRegEye } from "react-icons/fa";
import { BiSolidEdit } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { removeUser } from "../reduxs/slices/userSlice"
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { ROUTER } from '../constant/Router';
const Home = () => {
  const users = useSelector((state => state.user.users))
  const dispatch = useDispatch()
  const handleDelete = (id) => {
    dispatch(removeUser(id))
    toast.success("User deleted successfully!!!", {
      autoClose: 1500
    })
  };

  return (
    <>
      <NavBar />
      <div className="p-10">
        <div className="flex justify-around mt-">
          <table className="table-auto w-full text-center border-collapse bg-red-300">
            <thead>
              <tr className="border-b border-black text-3xl">
                <th className="p-3">First Name</th>
                <th className="p-3">Last Name</th>
                <th className="p-3">Email</th>
                <th className="p-3">Age</th>
                <th className="">Detail</th>
                <th className="p-3">Actions</th>
              </tr>
            </thead>
            <tbody className='bg-yellow-100  text-[25px] '>
              {
                users.map((user) => (
                  <tr key={user.id} className="border-2 border-rose-200 hover:bg-rose-200 duration-500">
                    <td className="p-3 border-r border-rose-200">{user.firstName}</td>
                    <td className="p-3 border-r border-rose-200">{user.lastName}</td>
                    <td className="p-3 border-r border-rose-200">{user.email}</td>
                    <td className="p-3 border-r border-rose-200">{user.age}</td>
                    <td className=' border-r border-rose-200'>
                      <button className='px-3 py-2 text-3xl text-white bg-green-700 rounded-md '  >
                        <Link to={`${ROUTER.DetailPage}/${user.id}`}><FaRegEye /></Link>
                      </button>
                    </td>
                    <td>
                      <button className='px-3 py-2 text-3xl text-white bg-blue-600 rounded-md'>
                        <Link to={`${ROUTER.EditUser}/${user.id}`}><BiSolidEdit /></Link>
                      </button>
                      <button className='px-3 py-2 text-3xl text-white bg-red-600 rounded-md ml-3' onClick={() => handleDelete(user.id)}><RiDeleteBin6Line /></button>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Home;
