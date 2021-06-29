console.log("Hello World!");

const materias = {
 nombre: " Aplicaciones Web",
 horario:"/:00 - 9:00"
};
Object.freeze(materias);
 console.log(materias.nombre);
 materias.nombre = "Base de datos";
 console.log(materias.nombre);

 // Arrow functions
var suma =(a, b) =>{
    return a+b;
}
console.log(suma (3,5));

var unsaludo = (nombre = "Jose", edad="29") => {
   console.log(`Hola soy ${nombre} y mi edad es ${edad} años`);
}
 console.log("=======================");
unsaludo();
console.log("=======================");
unsaludo("Liz");
console.log("=======================");
unsaludo("Liz",21);

var num1 = 2;
var num2 = 34;
console.log(`La suma de ${num1} + ${num2} es ${num1+num2+`oh la la`}`);

console.log("Hola lala vamos a dar un salto de linea \n ya di uno \n ya di otro");

console.log("Hola lala ")

/*
const nombre ="Aplicaciones web";
if(true){
     nombre="Base de datos";
    console.log(nombre);
}
console.log(nombre);
*/

var curso= {
    nombre:"",
    descripcion:"",
    docente:{
        nombre:"",
        cursos:0
    }
};

function actualizar(){
   curso.nombre = document.getElementById("nombre").value;
   curso.descripcion = document.getElementById("descripcion").value;
   curso.docente.nombre = document.getElementById("docente").value;
   curso.docente.cursos = document.getElementById("cursos").value;
   actualizarFicha();
}

function actualizarFicha(){
    document.getElementById("titulo").innerHTML = curso.nombre;
    document.getElementById("descrip").innerHTML = curso.descripcion;
    document.getElementById("nombre-docente").innerHTML = curso.docente.nombre;
    document.getElementById("total").innerHTML = curso.docente.cursos;
}
var btnCambiar = document.querySelector(".btn-cambiar");
console.log(btnCambiar);
btnCambiar.addEventListener("click",()=>{
    document.querySelector(".btn-success").innerHTML="Update";
});
