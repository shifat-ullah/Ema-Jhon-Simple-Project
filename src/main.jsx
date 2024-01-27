import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './component/home/Home.jsx';
import Order from './component/order/Order.jsx';
import Login from './component/Login/Login.jsx';
import Orderreview from './component/Order review/Orderreview.jsx';
import Inventory from './component/Inventory/Inventory.jsx';
import Shop from './component/shop/Shop.jsx';
import CardProductsLoaders from './Loaders/CardProductsLoaders.js';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/",
        element: <Shop></Shop>,
      },
      {
        path: "/order",
        element: <Order></Order>,
        loader: CardProductsLoaders 
      },
      {
        path: "/review",
        element: <Orderreview></Orderreview>
      },
      {
        path: "/manageInventory",
        element: <Inventory></Inventory>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
