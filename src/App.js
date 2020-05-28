import React, { useEffect, useState } from "react";
import api from "./services/api";

export default function App() {
  const [casos, setCasos] = useState([]);
  const [pais, setPais] = useState("BR");

  const getInput = ({ target: { value } }) => {
    setPais(value);
    console.log(pais);
  };

  useEffect(() => {
    api.get(`countries/${pais}/confirmed`).then((response) => {
      setCasos(response.data);
    });
  }, [casos]);

  return (
    <span>
      
      <input    placeholder="escolha o país"></input>
      <button onClick={getInput}>PESQUISAR</button>

      <ul>
        {casos.map((caso) => (
          
          <li key={caso.uid}>

            <strong>País:</strong>
            <p>{caso.countryRegion}</p>

            <strong>Estado:</strong>
            <p>{caso.provinceState}</p>

            <strong>Casos confimados:</strong>
            <p>{caso.confirmed}</p>

            <strong>Casos ativos:</strong>
            <p>{caso.active}</p>

            <strong>Fatalidades:</strong>
            <p>{caso.deaths}</p>

          </li>
        ))}
      </ul>
    </span>
  );
}
