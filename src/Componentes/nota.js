import React, { useState, useEffect } from "react";
import { getAllNotas, guardarNota } from "../services/notaServices";
// import FormNota from "./formnota";
import ModalAgregar from "./modalAgregarAuto"

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
        tipos_especialidades: {},
        especialistas: {},
        medicamentos: [],
        imagenes: [],
    },
];

function Nota() {
    const [notas, setNotas] = useState(notaInicial);
    // const [listaNotas, setListaNotas] = useState(packageInfo.listaNotas);
    const obtenerNotas = async () => {
        setNotas(await getAllNotas());
    };
    useEffect(() => {
        obtenerNotas();
    }, []);

    const notaAgregar = async (nota) => {
        console.log("estoy en nota agregar") //este se deberia de imprimir antes de la solicitud
        await guardarNota(nota);
        setNotas(await getAllNotas());
        console.log("estoy en nota agregar2")
    };


    return (
        <>
            <div>
                    <ModalAgregar notaAgregar={notaAgregar} /> 
                    {/* <FormNota notaAgregar={notaAgregar} /> Este muestra la nota para agregar nuevas notas */}
            </div>

            {notas.map((nota, i) => (
                <li className="note">
                    <div className="details">
                        <div className="notasup">
                            <p className="lugar">"Hospital Sotero del Rio"</p>
                            <p className="sesion">{nota.numeroSesion}</p>
                        </div>
                        <div className="cuadro">{nota.diagnostico}</div>
                        <div className="notainf">
                            <p id="persona">
                                {"Dr. " +
                                    nota.especialistas.nombre +
                                    " " +
                                    nota.especialistas.apellido}
                            </p>
                            <p id="especialidad">
                                {nota.tipos_especialidades.nombreEspecialidad}
                            </p>
                        </div>
                    </div>
                    <div className="bottom-content">
                        <span>Diciembre 05, 2022</span>
                    </div>
                </li>
            ))}
        </>
    );
}
export default Nota;
