import React, { useState } from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/theme-dracula";
import "./style-test-layout.css";
import MainKonvaView from "./interactive-view/MainKonvaView";

export default function TestLayout() {
  const [isConsignaExpand, setConsignaExpand] = useState(false);

  const handlerConsigna = () => {
    if (isConsignaExpand) {
      setConsignaExpand(false);
    } else {
      setConsignaExpand(true);
    }
  };

  return (
    <div className="in-body">
      <nav>
        <div className="nav-div">
          <h1 className="nav-text-logo">Proyecto Final Carretero-Covelli</h1>
          <img
            className="profile-img"
            src={require("./images/avatar-photo.png")}
            alt="Foto perfil usuario"
          />
        </div>
      </nav>

      <main>
        <div className="vertical-splitter">
          <div className="div-l">
            <div
              className={
                isConsignaExpand
                  ? "div-consigna-expanded"
                  : "div-consigna-contract"
              }
            >
              <h3 className="h3-consigna">Consigna</h3>
              <img
                className="profile-img"
                src={
                  isConsignaExpand
                    ? require("./images/collapse-arrow.png")
                    : require("./images/expand-arrow.png")
                }
                alt="Boton para expandir/contraier consigna"
                onClick={handlerConsigna}
              />
            </div>
            <div
              className={
                isConsignaExpand ? "div-editor-contract" : "div-editor-expanded"
              }
            >
              <AceEditor theme="dracula" width="100%" height="100%" />
            </div>
          </div>

          <div className="div-r">
            <div className="div-interactive-view div-centralizar-contenido">
              <MainKonvaView />
            </div>

            <div className="div-contenedor-capsula">
              <div className="div-play-pause-stop">
                <img
                  className="small-icon"
                  src={require("./images/pause-icon.png")}
                  alt="Boton Play"
                />

                <img
                  className="medium-icon"
                  src={require("./images/play-icon.png")}
                  alt="Boton Play"
                />

                <img
                  className="small-icon"
                  src={require("./images/stop-icon.png")}
                  alt="Boton Play"
                />
              </div>
            </div>

            <div className="div-test-base div-centralizar-contenido">
              <h4>
                <strong>Vista Banco de Test</strong>
              </h4>
              <br />
              <p>
                Donde se presetara una lista de distintos casos de ejemplo
                especificos de la consigna, los cuales seran testeados al
                momento de ejecutar la solucion propuesta por el usuario.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
