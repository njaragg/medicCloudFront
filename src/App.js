import React from "react";
import "./App.css";
import Navbar from "./Componentes/navbar";
import Nota from "./Componentes/nota.js";
import FormNota from "./Componentes/formnota.js";
import packageInfo from "./listaNotas.json";







class App extends React.Component {
    render() {

        
        return (
            <div className="App">
                <div className="container-fluid">
                    <Navbar />
                    <div className="col 9">
                        <div className="wrapper">
                            {/* Si la nota no tiene la conexion con el especilista y el tipo des especialidad, no muestra nada */}
                            <Nota/> 
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
