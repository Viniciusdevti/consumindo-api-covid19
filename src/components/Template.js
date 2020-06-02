import React, { useEffect, useState } from "react";

import api from "../services/api";

import "./styles.css";

export default function Template() {
  
  
 
  return (
    <div>
      <header>
        <a href="#">DEVini </a>

        <ul className="menu">
          <a href="#">
            <li> Casos </li>
          </a>
          <a href="#">
            <li>Api</li>
          </a>
        </ul>
      </header>
      <div className="top-">
        <div className="top-h">
          <h1> CONSUMINDO UMA API DO COVID-19 </h1>
        </div>
        <div className="top-i">
          <h3>Digite a sigla de um país: </h3>

          <input  />
        </div>
      </div>

      <div className="container-center">
       
          <div className="container">
            <div className="card">
              <div className="top">
                <h2> Paraíba:</h2>
              </div>

              <div className="middle">
                <strong>Casos confimados:</strong>
                <p>5555</p>
                <strong>Casos ativos:</strong>
                <p>55555</p>

                <strong>Fatalidades:</strong>
                <p>5555</p>
              </div>
            </div>
          </div>
      
      </div>
    </div>
  );
}
