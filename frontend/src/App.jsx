import React, { useContext } from 'react'
import './App.scss'
import { createBrowserRouter, Navigate, Outlet, RouterProvider } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import Leftbar from './components/leftbar/Leftbar'
import Rightbar from './components/rightbar/Rightbar'
import Home from './pages/home/Home'
import Profile from './pages/profile/Profile'
import { AuthContext } from './context/authContext'
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient()

function App() {

  const { currentUser } = useContext(AuthContext)

  const Layout = ({ children }) => {

    return (
      <>
        <Navbar />
        <div style={{ display: 'flex' }}>
          <Leftbar />
          <div className="outlet">
            <Outlet />
          </div>
          <Rightbar />
        </div>
      </>
    )
  }

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" replace />;
    }
    return children;
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <ProtectedRoute>
        <Layout />
      </ProtectedRoute>,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "profile/:id",
          element: <Profile />
        }
      ]
    },
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/register",
      element: <Register />
    }
  ])

  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </div>
  )
}

export default App
