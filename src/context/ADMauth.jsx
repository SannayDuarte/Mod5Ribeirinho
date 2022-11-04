import React, { createContext, useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { admApi, createAuth } from "../services/admApi";
export const ADMAuthContext = createContext()



export const ADMAuthProvider = ({ children }) => {
  const navigate = useNavigate()
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)


  useEffect(() => {

    const recoverUser = localStorage.getItem('user')

    if (recoverUser) {
      setUser(JSON.parse(recoverUser))
    }

    setLoading(false)
  }, [])

  const login = async (email, password) => {

    console.log('login', { email, password })

    const response = await createAuth(email, password)
    const token = response.data.token
    console.log(response.data)

    // api

    const loggedUser = {

      id: response.data.idUser,
      email: response.data.emailUser,
      token: token
    }

    localStorage.setItem("user", JSON.stringify(loggedUser))
    admApi.defaults.headers.Authorization = `Bearer ${token}`
    setUser({ loggedUser })

    navigate("/adm/cliente")


  }

  const logout = () => {
    console.log('logout')
    localStorage.removeItem('user')
    admApi.defaults.headers.Authorization = null
    setUser(null)
    navigate("/adm")
  }


  return (

    <ADMAuthContext.Provider value={{ authenticated: !!user, user, login, logout, loading }} >
      {children}
    </ADMAuthContext.Provider>

  )

}