import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

import Navbar from '../components/navigate/navbar';
import Footer from '../components/footer/footer';


const Cadastro = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [nome, setNome] = useState("")
    const [cpf, setCpf] = useState("")
    const [tel, setTel] = useState("")
    const [senha, setSenha] = useState("")
    const [logradouro, setLogradouro] = useState("")
    const [cidade, setCidade] = useState("")
    const [nasc, setNasc] = useState("")


    const user = {
        id: 0,
        cpf: cpf,
        nome: nome,
        tel: tel,
        senha: senha,
        email: email,
        logradouro: logradouro,
        cidade: cidade,
        nasc: nasc
    }
    const submit = async (e) => {
        e.preventDefault()
        console.log(JSON.stringify(user))
        try {
            const config = {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                
                body: JSON.stringify(user)
            }
            const response = await fetch("https://agencia-viagens.herokuapp.com/cadastrar", config)
            //const json = await response.json()
            if (response.ok) {
                console.log("deu certo")
                navigate("/login")
                return response
            } else {
                alert("email já cadastrado !")
            }
            
        } catch (error) {
            console.log(error)
        }
    }

    const [municipios, setMunicipios] = useState([]);
    // API
    useEffect(() => {
        async function fetchMyAPI() {
            const response = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/municipios');
            setMunicipios(await response.json());
        }
        fetchMyAPI();
    }, []);


    return (
        <>
            <Navbar />
            <main
                className="d-flex justify-content-center align-items-center form-box">
                {/* FORMULÁRIO */}
                <section className="login my-5">
                    <h2>CRIAR CONTA</h2>
                    <form action="form" onSubmit={submit}>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Nome Completo</label>
                            <input type="text" className="form-control"
                                id="name"
                                name="name"
                                onChange={(e) => setNome(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="cpf" className="form-label">CPF</label>
                            <input type="text"
                                className="form-control"
                                id="cpf"
                                name="cpf"
                                placeholder="xxx.xxx.xxx-xx"
                                onChange={(e) => setCpf(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="date" className="form-label">Data de nascimento</label>
                            <input type="date" className="form-control"
                                id="date"
                                name="date"
                                placeholder="dd/mm/aaaa"
                                onChange={(e) => setNasc(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="tel" className="form-label">Telefone</label>
                            <input type="tel" className="form-control"
                                id="tel"
                                name="tel"
                                placeholder="(xx) xxxxx-xxxx"
                                onChange={(e) => setTel(e.target.value)} />
                        </div>
                        
                        <div className="mb-3">
                            <label htmlFor="cidade" className="form-label"> Cidade </label>
                            <select className="form-control"
                                id="cidade"
                                name="cidade"
                                onChange={(e) => setCidade(e.target.value)}>
                                {municipios.map(municipio => (
                                    <option key={municipio.id} value={municipio.id}>{municipio.nome} - {municipio.microrregiao.mesorregiao.UF.sigla}</option>
                                ))}
                            </select>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="logradouro" className="form-label">Logradouro</label>
                            <input type="text" className="form-control"
                            id="logradouro"
                            name="logradouro"
                            onChange={(e) => setLogradouro(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className="form-control"
                            id="email"
                            name="email"
                            onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Senha</label>
                            <input type="password" className="form-control"
                            name="password"
                            id="password"
                            placeholder="*********"
                            onChange={(e) => setSenha(e.target.value)} />
                        </div>
                        <div className="col-lg-4 mb-2 d-grid">
                            <button type="submit" className="btn btn-primary">Cadastrar</button>
                        </div>
                    </form>
                </section>
                {/* FORMULÁRIO */}
            </main>
            <Footer />
        </>
    )
}
export default Cadastro;
