import { itemTarea } from "../../modulos/itemTarea/itemTarea.js";

export function tareas(tareasDb) {
    let divtareas = document.createElement('div');
    divtareas.className = "div-tareas";

    tareasDb.forEach((tarea, indice) => {
        let tareaItem = itemTarea(
            indice + 1, // número de tarea
            tarea.nombre, // título
            tarea.descripcion, // descripción
            tarea.estado_tarea, // estado
            tarea.fecha_asignada, // fecha asignación
            tarea.fecha_limite, // fecha entrega
            tarea.integrantes || [] // integrantes (array vacío por defecto)
        );
        divtareas.appendChild(tareaItem);
    });

    return divtareas;
}