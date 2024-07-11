/* En una empresa se tiene personal obrero y personal administrativo.
La empresa necesita determinar cuál es el monto promedio que paga por cada tipo de personal.
Al ser consultada por la forma como desean que se presente la salida,
 la empresa suministra el siguiente formato, informando que Juan (obrero) 
 actualmente gana $100, Ana (obrero) gana $120, Lin (administrativo) 
 gana $200, Mary (obrero) gana $50 y Carlos (administrativo) gana $150:
Monto total pagado a obreros: $270
Promedio pagado a 3 obreros: $90
Monto total pagado a administrativos: $350
Promedio pagado a 2 administrativos: $175
*/
import CL_empresa from "./CL_empresa.js";
import CL_personal from "./CL_personal.js";

let personal1 = new CL_personal(100, "obrero");
let personal2 = new CL_personal(120, "obrero");
let personal3 = new CL_personal(50, "obrero");
let personal4 = new CL_personal(200, "administrativo");
let personal5 = new CL_personal(150, "administrativo");
let empresa = new CL_empresa();
empresa.procesarpersonal (personal1)
empresa.procesarpersonal (personal2)
empresa.procesarpersonal (personal3)
empresa.procesarpersonal (personal4)
empresa.procesarpersonal (personal5)

let salida = document.getElementById("salida");
salida.innerHTML = `
<h1>Resultados</h1>
<p>Monto total pagado a obreros: ${empresa.pagoObre()}</p>
<p>Promedio pagado a 3 obreros: ${empresa.promedioObre()}</p>
<p>Monto total pagado a administrativos: ${empresa.pagoADM()}</p>
<p>Promedio pagado a 2 administrativos: ${empresa.promedioADM()}</p>
`
