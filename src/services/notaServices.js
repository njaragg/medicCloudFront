// axios
import axios from 'axios';
//establer la ruta por default
const rutaBase = "http://localhost:8080";

// funcion de llamado
const getNota = async (id) => {
    const respuesta = await axios.get(rutaBase + "/obtenerdato/notamedica?id=" + id);
    console.log(respuesta.data);
    return respuesta.data;
};
const getAllNotas = async()=>{
    const respuesta = await axios.get(rutaBase + "/listar/notamedica");
    console.log(respuesta.data);
    return respuesta.data;
};

const guardarNota = async(nota)=>{
    //peticion con valor desde body
    const res = await axios.post(rutaBase+"/guardar/notamedica",nota)
    return res.data;
}

// const guardarAuto = async(auto) => {
//     const respuesta = await axios.post(rutaBase + "/guardar/auto?usuarioId=" + usuarioId, auto)
//     return respuesta.data;
// }


export {getNota,getAllNotas, guardarNota}
