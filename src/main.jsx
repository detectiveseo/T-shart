import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Components/Home/Home';
import Products from './Components/Products/Products';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
const router = createBrowserRouter([
  {path: "/",
  element: <App />,
  children: [
    {path: "/",
    element: <Home></Home>   
  },
  {
    path: "shop",
    element: <Products></Products>,
    loader: () => fetch("products.json")
  },
  {
    path: "about-us",
    element: <About></About>
  },
  {
    path: "contact-us",
    element: <Contact></Contact>
  }
  ]  
}
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
