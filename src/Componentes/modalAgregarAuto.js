import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

// const tipos_especialidades = {
//     "id": 2,
//     "nombreEspecialidad": "Oftalmologia adulto",
//     "tipo": "Profesional"
// }

// const especialistas= {
//     "id": 1,
//     "nombre": "Nicolas",
//     "apellido": "Jara",
//     "titulo_profesional": "doctorado"
// }

const notaInicial = [
    {
        id: 1,
        fecha: null,
        descripcion: "",
        tratamiento: "",
        proximaFechaAtencion: null,
        examenesSolicitados: "",
        numeroSesion: "",
        diagnostico: "",
        usuarios: null,
        tipos_especialidades: {
            "id": 2,
            "nombreEspecialidad": "Oftalmologia adulto",
            "tipo": "Profesional"
        },
        especialistas: {
            "id": 1,
            "nombre": "Nicolas",
            "apellido": "Jara",
            "titulo_profesional": "doctorado"
        },
        medicamentos: [],
        imagenes: [],
    },
];



function ModalAgregarAuto({ notaAgregar }) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // const tipos_especialidades = {
    //     id: 2,
    //     nombreEspecialidad: "Oftalmologia adulto",
    //     tipo: "Profesional",
    // };

    // const especialistas = {
    //     id: 1,
    //     nombre: "Nicolas",
    //     apellido: "Jara",
    //     titulo_profesional: "doctorado",
    // };



    const [notaNueva, setNota] = useState(notaInicial);

    const { diagnostico, numeroSesion,descripcion } = notaNueva;

    const handleSubmit = (e) => {
        notaNueva.especialistas = {
            id: 1,
            nombre: "Nicolas",
            apellido: "Jara",
            titulo_profesional: "Doctorado",
        }
        notaNueva.tipos_especialidades = {
            id: 1,
            nombreEspecialidad: "Oftalmologia adulto",
            tipo: "Profesional",
        } //agrega la conexion a tipo de especialidad y especialistas para que no se caiga
        console.log(notaNueva);
        e.preventDefault(); //Esto es para evitar que la pagina se actualize al presionar el button

        notaAgregar(notaNueva);
    };

    const handleInputChange = (e) => {
        //...autoNuevo-> es una condicional para que el contenido de autoNuevo se mantenga
        setNota({ ...notaNueva, [e.target.name]: e.target.value }); //Aqui el event.target.name toma el name de cada input para añadirle datos
    };

    return (
        <div>
            <li className="addnote" onClick={handleShow}>
                <div className="icon">
                    <i className="uil uil-plus"></i>
                </div>
                <p>Agregar nueva nota</p>
            </li>

            {/* <Button>
                <i class="bi bi-plus-lg" variant="success" onClick={handleShow}>
                    {" "}
                    Agregar Auto
                </i>
            </Button> */}

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Agrega un auto</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={handleSubmit}>
                    <div className="form-group">
                            <label>Descripcion</label>
                            <input
                                type="text"
                                className="form-control"
                                id="Descripcion"
                                placeholder="Descripcion"
                                value={descripcion}
                                name="descripcion"
                                onChange={handleInputChange}
                            />
                            <br/>
                        </div>
                        <div className="form-group">
                            <label>Diagnostico</label>
                            <input
                                type="text"
                                className="form-control"
                                id="Diagnostico"
                                placeholder="Diagnostico"
                                value={diagnostico}
                                name="diagnostico"
                                onChange={handleInputChange}
                            />
                            <br/>
                        </div>
                        <div className="form-group">
                            <label>Numero Sesion</label>
                            <input
                                type="text"
                                className="form-control"
                                id="NumeroSesion"
                                placeholder="NumeroSesion"
                                value={numeroSesion}
                                name="numeroSesion"
                                onChange={handleInputChange}
                            />
                            <br />
                        </div>
                        {/* <div className="form-group">
                            <label>Especialista</label>
                            <input
                                type="text"
                                className="form-control"
                                id="Especialista"
                                placeholder="Especialista"
                                value={especialistas}
                                name="especialistas"
                                onChange={handleInputChange}
                            />
                            <br/>
                        </div>
                        <div className="form-group">
                            <label>tipos especialidades</label>
                            <input
                                type="text"
                                className="form-control"
                                id="Especialidad"
                                placeholder="Especialidad"
                                value={tipos_especialidades}
                                name="especialidad"
                                onChange={handleInputChange}
                            />
                            <br/>
                        </div>
                        <br /> */}
                        <button
                            type="submit"
                            className="btn btn-outline-primary me-2"
                            onClick={handleClose}
                        >
                            Agregar
                        </button>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cerrar
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
export default ModalAgregarAuto;
