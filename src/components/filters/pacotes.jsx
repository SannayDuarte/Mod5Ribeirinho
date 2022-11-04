import React, { useState, useEffect } from 'react';
import './style.css';

export default function PacotesFilter() {
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
        <section>
            <h2 className="pt-4">PACOTES</h2>
            <form>
                <div className="row pb-4">
                    <div className="col-6 col-md-4 mb-2">
                        <label htmlFor="inputCity" className="form-label">Origem</label>
                        <select id="cidades" className="form-control">
                            {municipios.map(municipio => (
                                <option key={municipio.id} value={municipio.id}>{municipio.nome} - {municipio.microrregiao.mesorregiao.UF.sigla}</option>
                            ))}
                        </select>
                    </div>
                    <div className="col-6 col-md-4 mb-2">
                        <label htmlFor="inputCity" className="form-label">Destino</label>
                        <select id="estado2" className="form-control">
                            {municipios.map(municipio => (
                                <option key={municipio.id} value={municipio.id}>{municipio.nome} - {municipio.microrregiao.mesorregiao.UF.sigla}</option>
                            ))}
                        </select>
                    </div>
                    <div className="col-6 col-md-2 mb-2">
                        <label htmlFor="inputDate" className="form-label">Ida</label> <input
                            type="date" className="form-control" id="inputDate" />
                    </div>
                    <div className="col-6 col-md-2 mb-2">
                        <label htmlFor="inputDate" className="form-label">Volta</label> <input
                            type="date" className="form-control" id="inputDate" />
                    </div>
                </div>
                <div className="row mb-4 pb-4">
                    <div className="col-6 col-md-4 mb-2">
                        <label htmlFor="inputAdult" className="form-label">Adultos a
                            partir de 18 anos</label> <input type="number" placeholder="0"
                                className="form-control" id="inputAdult" />
                    </div>
                    <div className="col-6 col-md-4 mb-2">
                        <label htmlFor="inputChildren" className="form-label">Crianças
                            entre 2 e 17 anos</label> <input type="number" placeholder="0"
                                className="form-control" id="inputChildren" />
                    </div>
                    <div className="col-md-4 mb-2 d-grid mt-4">
                        <button type="submit" className="btn btn-primary">Buscar</button>
                    </div>
                </div>
            </form>
        </section>

    )
};
