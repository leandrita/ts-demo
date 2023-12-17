console.log("Hola FemCoders");

//Esto es un comentario en TS

/**
 * Documentación
 * Esto es para comentarios multilínea
 */

//Declaración de Variables:
//tipado inferido = no se aclara cual es el tipo de valor de la variable 
var nombre = 'Lea';

console.log("Hola, " + nombre);
console.log("Qué tal", nombre, "?");
console.log(`Como han ido las vacaciones, ${nombre}?`);

let email = 'lea@mail.com';

console.log(`Email de ${nombre}: ${email}`);

//las const no pueden ser modificadas
const PI = 3.1416;


//tipado fuerte = se define cual es el tipo de valor que debe recibir una variable
//BuiltIn Types: string, number, boolean, void, null, undefined

var apellido: string = 'Bujhamer';
var edad: number = 31;
var error: boolean = false;
var loQueSea: any = 'lo que sea';
loQueSea = 35;

//instanciacion multiple de variables
let a: string, b: boolean, c: number;
a = "TypeScript";
b = true;
c = 8;

//tipos más complejos:
//lista de cadena de texto
let listaTareas: string[] = ['tarea 1', 'tarea 2'];

//combinacion de tipos en listas 
let valores: (string | number | boolean)[] = [false, 'hola', 3, true];

//enumerados
enum Estados {
    "Completado",
    "Incompleto",
    "Pendiente"
}

enum PuestoCarrera {
    "Primero" = 1,
    "Segundo",
    "Tercero"
}

let estadoTarea: Estados = Estados.Completado;
let puestoMaraton = PuestoCarrera.Segundo;

//interfaces
interface Tarea {
    nombre: string,
    estado: Estados,
    urgencia: number
}

//podemos crear variables que sigan la interface Tarea
let tarea1: Tarea = {
    nombre: "Tarea 1",
    estado: Estados.Pendiente,
    urgencia: 10
}
console.log(`Tarea: ${tarea1.nombre}`);

//types de typescript
type Producto = {
    precio: number,
    nombre: string
}
let coche: Producto = {
    nombre: 'Audi',
    precio: 45000
}
console.log(`Coche: ${coche.nombre}`);

//condicionales:

//operadores ternarios
console.log(coche.precio < 45000 ? `Coche: ${coche.nombre} es barato` : `Coche: ${coche.nombre} es caro`);

//If - else
if (error) {
    console.log("Hay un error");
} else {
    console.log("No hay un error");
}

//If - else if - else
if (coche.precio < 45000) {
    console.log(`Coche: ${coche.nombre} es barato`)
} else if (coche.precio === 45000) {
    console.log(`Coche: ${coche.nombre} está a buen precio`)
} else {
    console.log(`Coche: ${coche.nombre} es caro`)
}

//switch
switch (tarea1.estado) {
    case Estados.Completado:
        console.log("La tarea esta completada");
        break;
    case Estados.Incompleto:
        console.log("La tarea no esta completada");
        break;
    case Estados.Pendiente:
        console.log("La tarea esta pendiente de completarse");
        break;
    default:
        break;
}

//try catch
try {
    //
}
catch (error) {
    //
}


//bucles
let listaTareasNueva: Tarea[] = [
    {
        nombre: "Tarea 1",
        estado: Estados.Completado,
        urgencia: 2
    },
    {
        nombre: "Tarea 2",
        estado: Estados.Pendiente,
        urgencia: 0
    },
    {
        nombre: "Tarea 3",
        estado: Estados.Completado,
        urgencia: 15
    }
]

//forEach
listaTareasNueva.forEach(
    (tarea: Tarea, index: number) => {
        console.log(`${index} - ${tarea.nombre}`);
    }
);

//while
while (tarea1.estado !== Estados.Completado) {
    tarea1.urgencia++;
    if (tarea1.urgencia == 5) {
        tarea1.estado = Estados.Completado;
        break;
    } else {
        tarea1.urgencia++;
    }
}

//funciones
/**
 * Funcion que muestra un saludo por consola
 */
function saludar() {
    console.log("Hola FemCoders");
}

//invocación de la funcion
saludar();

/**
 * Funcion que muestra un saludo por consola a una persona
 * @param nombre Nombre de la persona a saludar
 */
function saludarPersona(nombre: string) {
    console.log(`Hola ${nombre}!`);
}

//se pasa parámetro por valor
saludarPersona("Ana");

const persona = "Lea";

saludarPersona(persona);

/**
 * Funcion que muestra un saludo por consola a una persona
 * @param nombre Nombre de la persona a saludar, por defecto será Pepe
 */
function despedirPersona(nombre: string = "Pepe") {
    console.log(`Adios ${nombre}!`);
}

despedirPersona(); //Adios Pepe
despedirPersona("Alba"); //Adios Alba

/**
 * Funcion que muestra un saludo por consola a una persona
 * @param nombre Nombre de la persona a saludar, por defecto será Pepe
 */
function despedidaOpcional(nombre?: string) {
    if (nombre) {
        console.log(`Adios ${nombre}!`);
    } else {
        console.log(`Adios!`);
    }
}

despedidaOpcional(); //Adios!
despedidaOpcional("Charles"); //Adios Charles!

function variosParams(nombre: string, apellidos?: string, edad: number = 18) {
    if (apellidos) {
        console.log(`${nombre} ${apellidos} tiene ${edad} años`);
    } else {
        console.log(`${nombre} tiene ${edad} años`);

    }
}

variosParams("Martina"); //Martina tiene 18 años
variosParams("Martina", "Recard"); //Martina Recard tiene 18 años
variosParams("Martina", undefined, 31); //Martina tiene 31 años
variosParams("Martina", "Recard", 31); //Martina Recard tiene 31 años


function variosTipos(a: string | number) {
    if (typeof (a) === 'string') {
        console.log("a es un string")
    } else if (typeof (a) === 'number') {
        console.log("a es un number")
    } else {
        console.log("a no es un string ni un number");
        throw Error("a no es un string ni un number")

    }
}

variosTipos("Hola");
variosTipos(3);
//variosTipos(false); //tira un error


function ejemploReturn(nombre: string, apellidos: string): string {
    return `${nombre} ${apellidos}`;
}

const nombreCompleto = ejemploReturn("Lea", "Bujh");
console.log(nombreCompleto);