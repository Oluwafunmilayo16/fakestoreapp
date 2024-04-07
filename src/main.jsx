import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"
import './index.css'
import Home from "./components/Home"
import ProductDetails from './components/ProductDetails'

const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/:id/details",
    Component: ProductDetails,
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
