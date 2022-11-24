//ejercicio 1

    let op = prompt("ingrese numero del (1 al 6):");//prompt -> ventana de ingreso de datos de tipo texto 
    op = parseInt(op);//convertir op en valor numero 
    if (op>6){
    alert("esto es un error")
        }else {
    alert("bienvenido al sistema")
     }
//ejercicio 2
let nomTrabajador = "";
let DiasTrabajados= 0;
let Sueldobasico = 0;
let bono =0;
let neto =0;


nomTrabajador = prompt("Ingrese Nombre del Trabajador");
DiasTrabajados= prompt("Ingrese Dias Trabajados");
DiasTrabajados =parseInt(DiasTrabajados);
//CALCULOS DE LA PLANILLA
Sueldobasico=DiasTrabajados*40;
if(DiasTrabajados>15){
    bono =Sueldobasico*0.2;
}
neto =Sueldobasico+bono ;


alert("Trabajador : " + nomTrabajador + " el sueldo a recibir es : " + neto);






