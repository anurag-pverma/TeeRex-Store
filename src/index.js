import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Constex from './Context/Constex';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Cart from './Components/Cart';
const router = createBrowserRouter([
  {
    path: "/",
    element:<App />,
  },
  {
    path: "/cart",
    element:<Cart/>,
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Constex>
    <RouterProvider router={router} />
    </Constex>
  </React.StrictMode>
);


 