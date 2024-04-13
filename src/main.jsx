import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import LandingPage from './pages/landing'


const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
    errorElement: <h1 className=''>Error Loading Page</h1>,

    children: [
      {
        index: true,
        path: ''
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
