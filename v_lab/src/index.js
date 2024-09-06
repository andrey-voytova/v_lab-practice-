import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { createBrowserRouter,  HashRouter,  Link,  Navigate, Route, RouterProvider, Routes } from 'react-router-dom';
import Login from './routes/login/Login';
import Register from './routes/register/Register';
import User from './routes/user/User';
import ErrorPage from './routes/errorPage/ErrorPage';




const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="login"/>,
    errorElement: <ErrorPage/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/register",
    element: <Register/>,
  },
  {
    path: "/user",
    element: <User/>,
  },
  
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <HashRouter >  
            <Routes>
                <Route path="/" element={<ErrorPage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/user" element={<User />} />
            </Routes>
      </HashRouter>
  </React.StrictMode>
);


