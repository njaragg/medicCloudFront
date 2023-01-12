import React from "react";
import logo from '../assets/redondo.png';

class Navbar extends React.Component {
    render() {
        return (
            <nav id="menu" className="navbar navbar-expand-lg bgn-nav ">
            <div className="container-fluid">
                <a className="navbar-brand" href="/#">
                    <img id="logo" src={logo} alt="logo"></img>
                </a>
                <button id="holaaa2" className="navbar-toggler " type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse  " id="navbarSupportedContent">
                    <ul id="hola3" className="navbar-nav me-auto mb-2 mb-lg-0 ">
                        {/* <li className="nav-item">
                            <a className="nav-link" href="/#">Documentos</a>
                        </li> */}
                    
                        <li className="nav-item dropdown ">
                            <a className="nav-link dropdown-toggle" href="/#" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                Mi perfil
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="/perfilU.html">Perfil/Ficha medica</a></li>
                                <li><a className="dropdown-item" href="/#">Editar ficha medica</a></li>

                            </ul>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>

        );
    }
}
export default Navbar;
