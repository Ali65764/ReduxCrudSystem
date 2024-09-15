import React from 'react'
import { Link } from 'react-router-dom';
import {ROUTER} from "../constant/Router"
import { useLocation } from 'react-router-dom';
const NavBar = () => {
    const {pathname} = useLocation();
  return (
    <>
        <div className='bg-white flex justify-center text-3xl py-6'>
            <div>
                <Link to={ROUTER.Home} className={`font-bold ${pathname === ROUTER.Home ? "text-red-600" : "text-blue-800 hover:text-red-600 duration-500"}`}>Home</Link>
            </div>
            <div>
                <Link to={ROUTER.AddUsers} className={`mx-11 font-bold ${pathname === ROUTER.AddUsers ? "text-red-600" : "text-blue-800 hover:text-red-600 duration-500"}`}>Add User</Link>
            </div>
            <div>
                <Link to={ROUTER.Counter} className={`font-bold ${pathname === ROUTER.Counter ? "text-red-600" : "text-blue-800 hover:text-red-600 duration-500"}`}>Counter</Link>
            </div>
        </div>
    </>
  )
}

export default NavBar