import React from 'react'

export default function card(props) {
  return (
    <li className="me-5 mb-4">
                <div className="card">
                    <img src={props.img}
                        className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{props.cidade}</h5>
                        <p className="card-text">{props.descricao}</p>
                        <div className="d-flex justify-content-between">
                            {/* OFERTAS */}
                            <div>
                                <button className="btn btn-primary" type="button"
                                    data-bs-toggle="offcanvas"
                                    data-bs-target="#offcanvasWithBothOptions"
                                    aria-controls="offcanvasWithBothOptions">Pacotes</button>

                                <div className="offcanvas offcanvas-start" data-bs-scroll="true"
                                    tabIndex="-1" id="offcanvasWithBothOptions"
                                    aria-labelledby="offcanvasWithBothOptionsLabel">
                                    <div className="offcanvas-header">
                                        <h5 className="offcanvas-title"
                                            id="offcanvasWithBothOptionsLabel">CURITIBA</h5>
                                        <button type="button" className="btn-close"
                                            data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                    </div>
                                    <div className="offcanvas-body">
                                        {/* Pacotes */}
                                        <div>
                                            {/* Pac01 */}
                                            <div className="card mb-3">
                                                <img
                                                    src="./assents/img/curitiba/jardim-botanico-de-curitiba.jpg"
                                                    className="card-img-top" alt="..." />
                                                <div className="card-body">
                                                    <h5 className="card-title">Nacional Inn Curitiba Torres</h5>
                                                    <p className="card-text">
                                                        A partir de <strong>Qua 17 Ago</strong> At� <strong>
                                                            Sex 19 Ago</strong>
                                                    </p>
                                                    <p className="card-text">
                                                        <small className="text-muted">Voo direto BSB - CWB</small>
                                                    </p>
                                                    <p className="card-text">
                                                        <small className="text-muted">Pre�o por pessoa</small>
                                                    </p>
                                                    <p className="card-text">
                                                        <small>R$</small><big>767</big>
                                                    </p>
                                                    <p className="card-text">
                                                        <small className="text-muted">Taxas e impostos n�o
                                                            inclusos</small>
                                                    </p>
                                                </div>
                                            </div>
                                            {/* Pac01 */}
                                            {/* Pac02 */}
                                            <div className="card mb-3">
                                                <img src="./assents/img/curitiba/memorial-ucraniano.jpg"
                                                    className="card-img-top" alt="..." />
                                                <div className="card-body">
                                                    <h5 className="card-title">Nacional Inn Curitiba Torres</h5>
                                                    <p className="card-text">
                                                        A partir de <strong>Qua 17 Ago</strong> At� <strong>
                                                            Sex 19 Ago</strong>
                                                    </p>
                                                    <p className="card-text">
                                                        <small className="text-muted">Voo direto BSB - CWB</small>
                                                    </p>
                                                    <p className="card-text">
                                                        <small className="text-muted">Pre�o por pessoa</small>
                                                    </p>
                                                    <p className="card-text">
                                                        <small>R$</small><big>767</big>
                                                    </p>
                                                    <p className="card-text">
                                                        <small className="text-muted">Taxas e impostos n�o
                                                            inclusos</small>
                                                    </p>
                                                </div>
                                            </div>
                                            {/* Pac02 */}
                                            {/* Pac03 */}
                                            <div className="card mb-3">
                                                <img
                                                    src="./assents/img/curitiba/museu-oscar-niemeyer.jpg"
                                                    className="card-img-top" alt="..." />
                                                <div className="card-body">
                                                    <h5 className="card-title">Nacional Inn Curitiba Torres</h5>
                                                    <p className="card-text">
                                                        A partir de <strong>Qua 17 Ago</strong> At� <strong>
                                                            Sex 19 Ago</strong>
                                                    </p>
                                                    <p className="card-text">
                                                        <small className="text-muted">Voo direto BSB - CWB</small>
                                                    </p>
                                                    <p className="card-text">
                                                        <small className="text-muted">Pre�o por pessoa</small>
                                                    </p>
                                                    <p className="card-text">
                                                        <small>R$</small><big>767</big>
                                                    </p>
                                                    <p className="card-text">
                                                        <small className="text-muted">Taxas e impostos n�o
                                                            inclusos</small>
                                                    </p>
                                                </div>
                                            </div>
                                            {/* Pac03 */}
                                        </div>
                                        {/* Pacotes */}
                                    </div>
                                </div>
                            </div>
                            {/* OFERTAS */}
                            {/* MODAL */}
                            <div>
                                {/* Button trigger modal */}
                                <button type="button" className="btn btn-primary"
                                    data-bs-toggle="modal" data-bs-target="#exampleModal">
                                    Saiba mais</button>

                                {/* Modal  */}
                                <div className="modal fade" id="exampleModal" tabIndex="-1"
                                    aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title" id="exampleModalLabel">CURITIBA
                                                </h5>
                                                <button type="button" className="btn-close"
                                                    data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div className="modal-body">
                                                {/* CARROSSEL */}
                                                <div id="carouselExampleDark"
                                                    className="carousel carousel-dark slide"
                                                    data-bs-ride="carousel">
                                                    <div className="carousel-indicators">
                                                        <button type="button"
                                                            data-bs-target="#carouselExampleDark"
                                                            data-bs-slide-to="0" className="active"
                                                            aria-current="true" aria-label="Slide 1"></button>
                                                        <button type="button"
                                                            data-bs-target="#carouselExampleDark"
                                                            data-bs-slide-to="1" aria-label="Slide 2"></button>
                                                        <button type="button"
                                                            data-bs-target="#carouselExampleDark"
                                                            data-bs-slide-to="2" aria-label="Slide 3"></button>
                                                        <button type="button"
                                                            data-bs-target="#carouselExampleDark"
                                                            data-bs-slide-to="3" aria-label="Slide 4"></button>
                                                    </div>
                                                    <div className="carousel-inner text-center">
                                                        <div className="carousel-item active"
                                                            data-bs-interval="10000">
                                                            <img
                                                                src="./assents/img/curitiba/centro-historico-de-curitiba.jpg"
                                                                alt="..." />
                                                            <div
                                                                className="carousel-caption d-md-block bg-black bg-opacity-50">
                                                                <h5 className="text-white">Centro Hist�rico</h5>
                                                            </div>
                                                        </div>
                                                        <div className="carousel-item" data-bs-interval="2000">
                                                            <img
                                                                src="./assents/img/curitiba/jardim-botanico-de-curitiba.jpg"
                                                                alt="..." />
                                                            <div
                                                                className="carousel-caption d-md-block bg-black bg-opacity-50">
                                                                <h5 className="text-white">Jardim Bot�nico</h5>
                                                            </div>
                                                        </div>
                                                        <div className="carousel-item">
                                                            <img
                                                                src="./assents/img/curitiba/memorial-ucraniano.jpg"
                                                                alt="..." />
                                                            <div
                                                                className="carousel-caption d-md-block bg-black bg-opacity-50">
                                                                <h5 className="text-white">Memorial Ucraniano</h5>
                                                            </div>
                                                        </div>
                                                        <div className="carousel-item">
                                                            <img
                                                                src="./assents/img/curitiba/museu-oscar-niemeyer.jpg"
                                                                alt="..." />
                                                            <div
                                                                className="carousel-caption d-md-block bg-black bg-opacity-50">
                                                                <h5 className="text-white">Museu Oscar Niemeyer</h5>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <button className="carousel-control-prev" type="button"
                                                        data-bs-target="#carouselExampleDark"
                                                        data-bs-slide="prev">
                                                        <span className="carousel-control-prev-icon"
                                                            aria-hidden="true"></span> <span
                                                                className="visually-hidden">Previous</span>
                                                    </button>
                                                    <button className="carousel-control-next" type="button"
                                                        data-bs-target="#carouselExampleDark"
                                                        data-bs-slide="next">
                                                        <span className="carousel-control-next-icon"
                                                            aria-hidden="true"></span> <span
                                                                className="visually-hidden">Next</span>
                                                    </button>
                                                </div>
                                                {/* CARROSSEL */}
                                                <div>
                                                    <p className="mt-4">O dia a dia de Curitiba reflete a
                                                        mistura de imigrantes com que a cidade foi formada.
                                                        Esse � s� um dos motivos pelo qual ela recebe bem os
                                                        forasteiros. A cultura curitibana � um mix de
                                                        ucranianos, poloneses, alem�es e italianos. Tudo com
                                                        uma boa pitada dos tropeiros que passavam pela regi�o
                                                        quando Curitiba ainda era a Vila de Nossa Senhora da
                                                        Luz dos Pinhais. Fundada em 1693, a capital paranaense
                                                        se mant�m aberta a novas culturas e est� sempre de
                                                        bra�os abertos para o mundo. Os curitibanos se enchem
                                                        de orgulho por viverem em um dos melhores destinos do
                                                        pa�s e adoram dividir essa experi�ncia com quem deseja
                                                        curtir alguns dias na cidade.</p>
                                                </div>
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-primary">Comprar
                                                    pacotes</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Modal  */}
                            </div>
                            {/* MODAL */}
                        </div>
                    </div>
                </div>
            </li>
  )
}
