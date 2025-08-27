export function itemTarea(indice, titulo, descripcion, estado, fechaAsignacion, fechaEntrega, listaIntegrantes) {
    let divItem = document.createElement('div');
    divItem.className = "item-tarea";

    // Número de la tarea
    let divNumero = document.createElement('div');
    divNumero.className = "tarea-numero";
    divNumero.textContent = indice;

    // Título
    let divTitulo = document.createElement('div');
    divTitulo.className = "tarea-titulo";
    divTitulo.textContent = titulo || "Sin título";

    // Estado
    let spanEstado = document.createElement('span');
    spanEstado.className = `tarea-estado tarea-estado-${estado?.toLowerCase() || "pendiente"}`;
    spanEstado.textContent = estado || "pendiente";

    // Fechas
    let fechaAsig = document.createElement('div');
    fechaAsig.className = "tarea-fecha-asignacion";
    fechaAsig.textContent = fechaAsignacion || "Sin fecha";

    let fechaEnt = document.createElement('div');
    fechaEnt.className = "tarea-fecha-entrega";
    fechaEnt.textContent = fechaEntrega || "Sin fecha";

    // Listado de integrantes (con manejo de undefined)
    let divIntegrantes = document.createElement('div');
    divIntegrantes.className = "tarea-integrantes";
    
    // Verificar que listaIntegrantes existe y es un array
    if (listaIntegrantes && Array.isArray(listaIntegrantes)) {
        listaIntegrantes.forEach((emoji) => {
            let spanEmoji = document.createElement('span');
            spanEmoji.className = "tarea-integrante";
            spanEmoji.textContent = emoji;
            divIntegrantes.appendChild(spanEmoji);
        });
    }

    // Botón eliminar
    let btnEliminar = document.createElement('button');
    btnEliminar.className = "tarea-eliminar";
    btnEliminar.textContent = "🗑️";

    // Añadir todos los elementos
    divItem.appendChild(divNumero);
    divItem.appendChild(divTitulo);
    divItem.appendChild(spanEstado);
    divItem.appendChild(fechaAsig);
    divItem.appendChild(fechaEnt);
    divItem.appendChild(divIntegrantes);
    divItem.appendChild(btnEliminar);

    return divItem;
}