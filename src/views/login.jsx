import React, { useState, useContext } from "react"
import { AuthContext } from "./../context/auth"
import Navbar from '../components/navigate/navbar';
import Footer from '../components/footer/footer';


const Login = () => {

  const { login } = useContext(AuthContext)

  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")




  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("DADOS DO FORM", { email, senha })
    login(email, senha)
  }
  return (
    <>
      <Navbar />
      <main className="d-flex justify-content-center align-items-center form-box">
        {/* FORMUL�RIO */}
        <section className="login">
          <h2>LOGIN</h2>
          <form className="form" onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email"
              className="form-control"
              name="email"
              id="email"
              value={email}
              placeholder="Email@email.com"
              onChange={(e) => setEmail(e.target.value)} required></input>
          </div>
            <div className="mb-3">
              <label htmlFor="inputSenha" className="form-label">Senha</label>
              <input type="password"
              className="form-control"
              name="password"
              id="password"
              value={senha}
              placeholder="**********"
              onChange={(e) => setSenha(e.target.value)}/>
            </div>
            <div className="form-check mb-3">
              <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
              <label className="form-check-label" htmlFor="flexCheckChecked">
                Manter conectado
              </label>
            </div>
            <div className="d-grid">
              <button type="submit"
              className="btn btn-primary">Conectar</button>
            </div>
            <div className="d-flex justify-content-around mt-3">
              <a href="../HTML/cadastro.html" className="text-black">Cadastrar conta</a>
              <p className="text-black">Esqueci minha senha</p>
            </div>
          </form>
        </section>
        {/* FORMUL�RIO */}
      </main>
      <Footer />
    </>
  )
}
export default Login;
