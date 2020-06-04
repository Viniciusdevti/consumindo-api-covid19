import React from  "react";

import "./styles.css";

export default function Covid() {

 

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
           
          />
        </div>
      </div>

      <div className="title-countries">
        <p> </p>
      </div>

      <div className="container-center">
       
          <div  className="container">
            <div className="card">
              <div>
                <h2> </h2>
              </div>

              <div className="middle">
                <strong>Cases confimados:</strong>
                <p>555.555</p>
                <strong>Cases ativos:</strong>
                <p>588.585</p>

                <strong>Fatalidades:</strong>
                <p>276.888</p>
              </div>
            </div>
          </div>

      </div>
    </div>
  );
}
