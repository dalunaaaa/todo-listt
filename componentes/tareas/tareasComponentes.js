import { itemTarea } from "../../modulos/itemTarea/itemTarea.js";



export function tareas(tareasDb) {
    let divtareas = document.createElement('div');
    divtareas.className = "div-tareas";

    tareasDb.forEach((e) => {
        let tarea = itemTarea(e.indice, e.titulo,e.descripcion, e.estado, e.fechaAsignacion, e.fechaEntrega, e.integrantes);
        divtareas.appendChild(tarea);
    });

    return divtareas;
}
