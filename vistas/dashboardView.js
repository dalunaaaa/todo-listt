import { header } from "../componentes/header/headerComponente.js";
import { footer } from "../componentes/footer/footerComponente.js";
import { tareas } from "../componentes/tareas/tareasComponentes.js";
import { informacion } from "../componentes/informacion/informacionComponente.js";

export async function dashboard() {
    try {
        // Petición al backend
        const resultado = await fetch("https://backend-todo-dania-j066.onrender.com/tareas");

        if (!resultado.ok) {
            throw new Error(`Error en fetch: ${resultado.status} ${resultado.statusText}`);
        }

        const datos = await resultado.json();
        let tareasDb = Array.isArray(datos) ? datos : []; 
        console.log("Tareas desde backend:", tareasDb);

        // DEBUG: Ver estructura completa de la primera tarea
        if (tareasDb.length > 0) {
            console.log("Estructura de la primera tarea:", tareasDb[0]);
            console.log("Integrantes de la primera tarea:", tareasDb[0].integrantes);
        }

        // Contenedor principal
        let dashboard = document.createElement('section');
        dashboard.className = "dashboard";

        // Header
        const h = header();
        if (h instanceof Node) {
            dashboard.appendChild(h);
        }

        // Sección 1
        let seccion1 = document.createElement('section');
        seccion1.className = "seccion-1";

        const listaTareas = tareas(tareasDb);
        if (listaTareas instanceof Node) {
            seccion1.appendChild(listaTareas);
        }

        if (tareasDb.length > 0) {
            // Asegurarse de que la tarea tenga el campo integrantes
            const tareaConIntegrantes = {
                ...tareasDb[0],
                integrantes: tareasDb[0].integrantes || [] // agregar array vacío si no existe
            };
            const info = informacion(tareaConIntegrantes);
            if (info instanceof Node) {
                seccion1.appendChild(info);
            }
        }

        dashboard.appendChild(seccion1);

        // Footer
        const f = footer();
        if (f instanceof Node) {
            dashboard.appendChild(f);
        }

        return dashboard;
    } catch (error) {
        console.error("Error en dashboard():", error);
        let errorMsg = document.createElement("p");
        errorMsg.textContent = "Error cargando el dashboard.";
        return errorMsg;
    }
}

// Llamada a la función y agregar al body
dashboard().then(elemento => {
    if (elemento instanceof Node) {
        document.body.appendChild(elemento);
    }
});