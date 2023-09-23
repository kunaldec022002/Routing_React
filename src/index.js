import React, { Component } from 'react';
import { RouterProvider,createBrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import About from './Views/About/about';
import Contact from"./Views/Contact/contact";
import Home from"./Views/Home/home";



const router =createBrowserRouter(
  [
        {
          path:'/',
          element:<Home/>
        },
        {
          path:'/About',
          element:<About/>
        },
        {
          path:'/Contact',
          element: <Contact/>
        }
  ]
  );


const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  
  <>
  
    <RouterProvider router={router}/>

  </>

);

