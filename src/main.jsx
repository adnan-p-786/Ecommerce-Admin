import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AddProduct from './pages/AddProduct.jsx'
import ProductList from './pages/ProductList.jsx'
import Users from './pages/Users.jsx'



const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/AddProduct',
        element: <AddProduct />
      },
      {
        path: '/ProductList',
        element: <ProductList />
      },
      {
        path: '/Users',
        element: <Users />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
