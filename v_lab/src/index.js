import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import Login from './routes/login/Login';
import Register from './routes/register/Register';
import User from './routes/user/User';
import ErrorPage from './routes/errorPage/ErrorPage';




const router = createBrowserRouter([
  {
    path: "/v_lab-practice-/v_lab",
    element: <Navigate to="login"/>,
    errorElement: <ErrorPage/>,
  },
  {
    path: "/v_lab-practice-/v_lab/login",
    element: <Login/>,
  },
  {
    path: "/v_lab-practice-/v_lab/register",
    element: <Register/>,
  },
  {
    path: "/v_lab-practice-/v_lab/user",
    element: <User/>,
  },
  
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

