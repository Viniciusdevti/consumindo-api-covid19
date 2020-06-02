import React, { useEffect, useState } from "react";

import api from "../services/api";

import "./styles.css";

export default function Covid() {
  const [casos, setCasos] = useState([]);
  const [pais, setPais] = useState("BR");

  useEffect(() => {
    api.get(`countries/${pais}/confirmed`).then((response) => {
      setCasos(response.data);
    });
  }, [casos, pais]);

  return (
    <div>
      <nav>
        <a href="#">DEVini </a>
        <ul className="menu">
          <a href="#">
            <li> Casos </li>
          </a>
          <a href="#">
            <li>Api</li>
          </a>
        </ul>
      </nav>
      <div className="top">
        <div className="top-h">
          <h1> CONSUMINDO UMA API DO COVID-19 </h1>
        </div>
        <div className="top-i">
          <h3>Digite a sigla de um país: </h3>
          
            <input
            placeholder=" 🔎 ex: 'br' "
            onChange={(e) => setPais(e.target.value)}
          /> 
        </div>
      </div>

      <div className="container-center">
        {casos.map((caso) => (
          <div key={caso.uid} className="container">
            <div className="card">
              <div>
                <h2> {caso.provinceState}:</h2>
              </div>

              <div className="middle">
                <strong>Casos confimados:</strong>
                <p>{caso.confirmed.toLocaleString()}</p>
                <strong>Casos ativos:</strong>
                <p>{caso.active.toLocaleString()}</p>

                <strong>Fatalidades:</strong>
                <p>{caso.deaths.toLocaleString()}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}