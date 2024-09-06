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
    path: "https://andrey-voytova.github.io/v_lab-practice-/",
    element: <Navigate to="login"/>,
    errorElement: <ErrorPage/>,
  },
  {
    path: "https://andrey-voytova.github.io/v_lab-practice-/login",
    element: <Login/>,
  },
  {
    path: "https://andrey-voytova.github.io/v_lab-practice-/register",
    element: <Register/>,
  },
  {
    path: "https://andrey-voytova.github.io/v_lab-practice-/user",
    element: <User/>,
  },
  
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

