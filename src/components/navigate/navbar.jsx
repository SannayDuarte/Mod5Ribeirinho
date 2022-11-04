import React, { useContext } from "react"
import { AuthContext } from "../../context/auth";
import logo from '../../assets/img/Viagens.png';
import user from '../../assets/img/Ativo 1.png';

export default function Navbar() {
    const { authenticated, logout } = useContext(AuthContext)
    const handleLogout = () => {
        logout()
    }

    return (
        <header>
            <div className="container">
                <div className="row">
                    <nav className="navbar navbar-expand-md navbar-light col-10">
                        <a className="navbar-brand" href="./">
                            <img src={logo} alt="" />
                        </a>
                        <button className="navbar-toggler d-lg-none" type="button"
                            data-bs-toggle="collapse" data-bs-target="#collapsibleNavId"
                            aria-controls="collapsibleNavId" aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="collapsibleNavId">
                            <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link txcolor" href="./">Pacotes</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link txcolor" href="./voos">Voos</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link txcolor" href="./hospedagens">Hospedagens</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link txcolor" href="./ofertas-voo">Ofertas</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <div className="col-1 mt-3">
                        <div className="dropdown">
                            <button className="btn dropdown" type="button" id="dropdownMenuButton1"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                <img src={user} alt="" />
                            </button>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                {authenticated
                                    ?
                                    <p className="dropdown-item" onClick={handleLogout}>Sair</p>
                                    :
                                    <>
                                        <li>
                                            <a className="dropdown-item" href="./login">Acessar conta</a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="./cadastro">Criar conta</a>
                                        </li>
                                        <li>
                                            <a className="dropdown-item" href="./contato">Entre em contato</a>
                                        </li>
                                    </>
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
