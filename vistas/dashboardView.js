import { header } from "../componentes/header/headerComponente.js";
import { footer } from "../componentes/footer/footerComponente.js";
import { tareas } from "../componentes/tareas/tareasComponentes.js";
import { informacion } from "../componentes/informacion/informacionComponente.js";


export function dashboard(){

    let tareasDb = [
        {
            indice: 1,
            titulo: "Título de la asignación",
            descripcion: "Descripcion",
            estado: "completado",
            fechaAsignacion: "17/05/2025",
            fechaEntrega: "30/07/2025",
            integrantes: ["🧑🏻‍🎓", "👩🏼‍🎓", "👨🏽‍🎓"]
        },
    
        {
            indice: 2,
            titulo: "Trabajo de Ciencias",
            descripcion: "Descripcion",
            estado: "pendiente",
            fechaAsignacion: "25/07/2025",
            fechaEntrega: "05/08/2025",
            integrantes: ["👨🏾‍🎓", "🧑🏽‍🎓"]
        }
    ];
    
    
    let dashboard = document.createElement('section');
    dashboard.className ="dashboard";

    //header
    dashboard.appendChild(header());

    //Seccion NUmero 1
    let secccion1 = document.createElement('section');
    secccion1.className = "seccion-1"
    secccion1.appendChild(tareas(tareasDb));
    secccion1.appendChild(informacion(tareasDb[0]));
    dashboard.appendChild(secccion1);

    //footer
    dashboard.appendChild(footer());

    

    return dashboard;
}

document.body.appendChild(dashboard());