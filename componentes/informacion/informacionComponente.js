import { formularioTarea } from "../formulario/formularioComponente.js";

export function informacion(datos) {
    let divInformacion = document.createElement('div');
    divInformacion.className = "div-info";

    // Botones
    let contenedorBotones = document.createElement('div');
    contenedorBotones.className = "contenedor-botones";

    let btnTarea = document.createElement('button');
    btnTarea.className = "btn-tarea";
    btnTarea.textContent = "+ tarea";

    let btnArchivados = document.createElement('button');
    btnArchivados.className = "btn-archivados";
    btnArchivados.textContent = "Archivados";

    contenedorBotones.appendChild(btnTarea);
    contenedorBotones.appendChild(btnArchivados);

    // Tarjeta de información
    let tarjeta = document.createElement('div');
    tarjeta.className = "tarjeta-informacion";

    let estado = document.createElement('span');
    estado.className = "estado";
    estado.textContent = datos.estado;

    let titulo = document.createElement('h3');
    titulo.className = "titulo-tarea";
    titulo.textContent = datos.titulo;

    let descripcion = document.createElement('p');
    descripcion.className = "descripcion-tarea";
    descripcion.textContent = datos.descripcion;

    let textoIntegrantes = document.createElement('p');
    textoIntegrantes.textContent = "Integrantes";

    let contenedorIntegrantes = document.createElement('div');
    contenedorIntegrantes.className = "contenedor-integrantes";

    datos.integrantes.forEach(integrante => {
        let span = document.createElement('span');
        span.className = "emoji-integrante";
        span.textContent = integrante;
        contenedorIntegrantes.appendChild(span);
    });

    // Agregar formulario oculto
    let formulario = formularioTarea();
    formulario.style.display = "none";
    tarjeta.appendChild(formulario);

    btnTarea.addEventListener('click', () => {
        formulario.style.display = formulario.style.display === "none" ? "block" : "none";
    });

    // Armar estructura
    tarjeta.appendChild(estado);
    tarjeta.appendChild(titulo);
    tarjeta.appendChild(descripcion);
    tarjeta.appendChild(textoIntegrantes);
    tarjeta.appendChild(contenedorIntegrantes);

    divInformacion.appendChild(contenedorBotones);
    divInformacion.appendChild(tarjeta);

    return divInformacion;
}
