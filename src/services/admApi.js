import axios from "axios"

export const admApi = axios.create({

  baseURL: "http://localhost:8080/",
})
export const createAuth = async (email, senha) => {

  return admApi.post("/user/auth", { email, senha })
}

