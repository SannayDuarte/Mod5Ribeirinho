import React from 'react'

const Carrossel = (props) => {
    return (
        <section>
            <h4>{props.title}</h4>
            <div>
                <div id="carouselExampleCaptions" className="carousel slide bgred mb-3"
                    data-bs-ride="false">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions"
                            data-bs-slide-to="0" className="active" aria-current="true"
                            aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions"
                            data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions"
                            data-bs-slide-to="2" aria-label="Slide 3"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions"
                            data-bs-slide-to="3" aria-label="Slide 4"></button>
                    </div>
                    <div className="carousel-inner text-center">
                        <div className="carousel-item active">
                            <img src={props.img1} alt="..." />
                            <div className="carousel-caption d-md-block bg-opacity-50 bg-black">
                                <h5 className="text-white">{props.t1}</h5>
                                <p>{props.des1}</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={props.img2} alt="..." />
                            <div className="carousel-caption d-md-block bg-opacity-50 bg-black">
                                <h5 className="text-white">{props.t2}</h5>
                                <p>{props.des2}</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={props.img3} alt="..." />
                            <div className="carousel-caption d-md-block bg-opacity-50 bg-black">
                                <h5 className="text-white">{props.t3}</h5>
                                <p>{props.des3}</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={props.img4} alt="..." />
                            <div className="carousel-caption d-md-block bg-opacity-50 bg-black">
                                <h5 className="text-white">{props.t4}</h5>
                                <p>{props.des4}</p>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button"
                        data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button"
                        data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Carrossel