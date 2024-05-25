let parcial1; 
let parcial2; 
let parcial3;
let examenFinal; 
let trabajoFinal;


    parcial1=Number(prompt("digite nota del parcial 1"));
    parcial2=Number(prompt("digite nota del parcial 2"));
    parcial3=Number(prompt("digite nota del parcial 3"));
    examenFinal=Number(prompt("digite nota del examen final"));
    trabajoFinal=Number(prompt("digite nota del trabajo final"));


   

const promedioParciales = (parcial1+parcial2+parcial3)/3;
const calificacionfinal = (promedioParciales*0.55)+(examenFinal*0.30)+(trabajoFinal*0.15);

alert('su calificacion final es de : '+calificacionfinal);

