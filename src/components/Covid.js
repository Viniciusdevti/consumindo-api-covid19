import React, { useEffect, useState } from "react";

import api from "../services/api";
import  Template from "./Template";
import "./styles.css";

export default function Covid() {
  const [cases, setCases] = useState([]);
  const [countries, setCountries] = useState("BR");
  const [titleCountries, setTitleCountries] = useState();

  useEffect(
    () => {
      api.get(`countries/${countries}/confirmed`).then((response) => {

        setCases(response.data);
      });
    },[countries],[cases]);

  useEffect(() => {
    try {
      const redu = cases.reduce((a, obj) => obj.countryRegion);
      setTitleCountries(redu);
    } catch (error) {
      setTitleCountries("Nehum país encontrado.");
    }
  }, [ cases ]);

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
            onChange={(e) => setCountries(e.target.value)}
          />
        </div>
      </div>

      <div className="title-countries">
        <p> {titleCountries} </p>
      </div>

      <div className="container-center">
        {cases.map((caso) => (
          <div key={caso.uid} className="container">
            <div className="card">
              <div>
                <h2> {caso.provinceState}:</h2>
              </div>

              <div className="middle">
                <strong>Cases confimados:</strong>
                <p>{caso.confirmed.toLocaleString()}</p>
                <strong>Cases ativos:</strong>
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
