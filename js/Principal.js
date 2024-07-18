import Cl_Persona from "./Cl_Persona.js";
import Cl_Calculo from "./Cl_Calculo.js";

let Persona1=new Cl_Persona("Luisa","F");
let Persona2=new Cl_Persona("Ana","F");
let Persona3=new Cl_Persona("Jose","M");
let Persona4=new Cl_Persona("Carmen","F");
let Persona5=new Cl_Persona("Rosa","F");
let Persona6=new Cl_Persona("Jose","M");
let Persona7=new Cl_Persona("Maria","F");
let Persona8=new Cl_Persona("Luz","F");
let Persona9=new Cl_Persona("Rafael","M");
let Persona10=new Cl_Persona("Liz","F");
let Persona11=new Cl_Persona("Marcos","M");
let Persona12=new Cl_Persona("Leo","M");

let Calculo=new Cl_Calculo();


Calculo.procesarPersona(Persona1);
Calculo.procesarPersona(Persona2);
Calculo.procesarPersona(Persona3);
Calculo.procesarPersona(Persona4);
Calculo.procesarPersona(Persona5);
Calculo.procesarPersona(Persona6);
Calculo.procesarPersona(Persona7);
Calculo.procesarPersona(Persona8);
Calculo.procesarPersona(Persona9);
Calculo.procesarPersona(Persona10);
Calculo.procesarPersona(Persona11);
Calculo.procesarPersona(Persona12);


let salida = document.getElementById("salida");
salida.innerHTML+= "<br>Porcentaje de mujeres procesadas: " + Calculo.PorcentajeMujeres().toFixed(2) + "%";
salida.innerHTML+= "<br>"+ Calculo.MayorCantidad();


