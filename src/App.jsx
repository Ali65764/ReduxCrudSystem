import React from "react";
import { ROUTER } from "./constant/Router";
import { Route, Routes } from 'react-router-dom';
import Home from "./components/Home";
import Counter from "./components/Counter";
import DetailPage from "./components/DetailPage";
import EditUser from "./components/EditUser";
import AddUsers from "./components/AddUsers";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <Routes>
        <Route path={ROUTER.Home} element={<Home />} />
        <Route path={ROUTER.Counter} element={<Counter />} />
        <Route path={ROUTER.AddUsers} element={<AddUsers />} />
        <Route path={`${ROUTER.DetailPage}/:id`} element={<DetailPage />} /> 
        <Route path={`${ROUTER.EditUser}/:id`} element={<EditUser />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
