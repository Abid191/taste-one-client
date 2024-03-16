import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddItem from './Components/AddItem.jsx';
import UpdateItem from './Components/UpdateItem.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader:()=> fetch('https://dummyjson.com/products')
  },
  {
    path: "addItem",
    element: <AddItem></AddItem>,
  },
  {
    path: "updateItem/:id",
    element: <UpdateItem></UpdateItem>,
    loader:({params})=> fetch(`https://dummyjson.com/products/${params.id}`)
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
