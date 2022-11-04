import React, { useContext } from "react"
import { ADMAuthContext } from "../../context/ADMauth";

export default function NavbarADM() {
    const { authenticated, logout } = useContext(ADMAuthContext)
    const handleLogout = () => {
        logout()
    }

    return (

        <header>
            <div className="container">
                <nav className="navbar">
                    <div className="container">
                        <a className="navbar-brand txcolor" href="./cliente">ADMINISTRADOR</a>
                        <button className="navbar-toggler" type="button"
                            data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
                            aria-controls="offcanvasNavbar">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="offcanvas offcanvas-end" tabIndex="-1"
                            id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                            <div className="offcanvas-header">
                                <h5 className="offcanvas-title" id="offcanvasNavbarLabel">MENU</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="offcanvas"
                                    aria-label="Close"></button>
                            </div>
                            <div className="offcanvas-body">
                                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                    {authenticated
                                        ?
                                        <>
                                            <li className="nav-item"><a className="nav-link" href="./cliente">Clientes</a></li>
                                            <li className="nav-item"><a className="nav-link" href="./aeroporto">Aeroportos</a></li>
                                            <li className="nav-item"><a className="nav-link" href="./hospedagem">Hospedagens</a></li>
                                            <li className="nav-item"><a className="nav-link" href="./companhia">Companhias</a></li>
                                            <li className="nav-item"><a className="nav-link" href="./pacote">Pacotes</a></li>
                                            <li className="nav-item"><a className="nav-link" href="./voo">Voos</a></li>
                                            <li className="nav-item"><a className="nav-link" href="./reserva">Reserva</a></li>
                                            <li className="nav-item" onClick={handleLogout}>Sair</li>
                                            </>
                                        :
                                        ""
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}
