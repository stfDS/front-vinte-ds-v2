/* eslint-disable no-console */
import axios from "axios"
import { useEffect } from "react"
import { createContext } from "react"
import { useState } from "react"

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [user, setUser] = useState()
  const [update, setUpdate] = useState(false)

  useEffect(() => {
    const fetchuser = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_APP_BASE_URL}/fetchuser`,
          {
            withCredentials: true
          }
        )
        setIsAuthenticated(true)
        setUser(res.data)
        console.log(res)

        setUpdate(true)
      } catch (error) {
        console.log("Error loading ,no User found", error)
      }
    }
    fetchuser()
  }, [update, isAuthenticated])

  const handleLogout = () => {
    axios.delete(`${import.meta.env.VITE_APP_BASE_URL}/user/logout`, {
      withCredentials: true
    })
    setIsAuthenticated(false)
    setUpdate(!update)
  }

  return (
    <AuthContext.Provider
      value={{
        handleLogout,
        setIsAuthenticated,
        isAuthenticated,
        user,
        setUser,
        update,
        setUpdate
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
