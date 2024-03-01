import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FristPage from '../pages/FristPage';
import Login from '../pages/Login';
import Main from '../pages/Main';
import ProfileEdit from '../pages/ProfileEdit';
import MyProfile from '../pages/MyProfile';
import TopBar from '../layout/TopBar';

function Router() {
  return (
    <BrowserRouter>
      <TopBar />
      <Routes>
        <Route path='/' element={<FristPage />} />
        <Route path='login' element={<Login />} />
        <Route path='main' element={<Main />} />
        <Route path='myProfile' element={<MyProfile />} />
        <Route path='profileEdit' element={<ProfileEdit />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
