import React from 'react'

export default function Footer() {
    return (
        <footer>
            <div className="nav justify-content-between container">
                <div className="col-6 col-sm-5 col-lg-4">
                    <h6 className="tx-cinzae">Centrais de atendimento</h6>
                    <ul className="nav flex-column">
                        <li>Av. Borges de Medeiros, 159
                            <br />
                            Porto Alegre/RS
                        </li>
                        <li>(51)3456-5555</li>
                        <li className="nav-item"><a href="./Site/HTML/contato.html"
                            className="nav-link p-0 text-white">Entre em contato</a></li>
                    </ul>
                </div>
                <div className="col-6 col-sm-5 col-lg-4">
                    <form>
                        <h6>Deixe seu email para receber nossas ofertas!</h6>
                        <div className="d-flex w-100 gap-2">
                            <input id="newsletter1" type="text" className="form-control"
                                placeholder="Digite seu email" />
                            <button className="btn btn-light" type="button">Inscrever</button>
                        </div>
                    </form>
                </div>
            </div>

        </footer>
    )
}
