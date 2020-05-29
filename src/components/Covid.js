import React, { useEffect, useState } from 'react';

import api from "../services/api"

import "./styles.css";





export default function Covid() {
    const [casos, setCasos] = useState([]);
    const [pais, setPais] = useState("BR");

    const getInput = ({ target: { value } }) => {
        setPais(value);
        console.log(pais);
    };


    function clean() {
        setPais('');
    }




    useEffect(() => {
        api.get(`countries/${pais}/confirmed`).then((response) => {
            setCasos(response.data);
        });
    }, [casos]);



    return (
        <div>
            <header>

                <a href="#"  >DEVini </a>

                <ul className="menu">


                    <a href="#">

                        <li> Casos </li>
                    </a>
                    <a href="#">
                        <li>Api</li>
                    </a>

                </ul>

            </header>

            <section>
                <h1> CONSUMINDO UMA API DO COVID-19 </h1>
                <hr />


                <h3>Selecione a sigla de um país para a consulta </h3>

                <input onChange={getInput} placeholder="EX: BR" />
                <button >Limpar</button>
            </section>
            <div className="container-center">

                {casos.map((caso) => (
                    <div key={caso.uid} className="container">


                        <div className="card">
                            <div className="top">

                                <h2> {caso.provinceState}:</h2>


                            </div>

                            <div className="middle">

                                <strong>Casos confimados:</strong>
                                <p>{caso.confirmed}</p>
                                <strong>Casos ativos:</strong>
                                <p>{caso.active}</p>

                                <strong>Fatalidades:</strong>
                                <p>{caso.deaths}</p>





                            </div>
                        </div>



                    </div>


                ))}
            </div>










        </div >





    );

}