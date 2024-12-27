import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import About from './components/About.jsx'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom"

const router = createBrowserRouter([
  {
    path : "/",
    element : <App />
  },
  {
    path : "/About",
    element : <About />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router} />
  </StrictMode>,
)
