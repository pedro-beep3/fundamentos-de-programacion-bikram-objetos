let Coche = {
    marca: "Toyota",
    modelo: "Corolla",
    matricula: "1234ABC"
};

let Casa = {
    codPostal: "28001",
    calle: "Gran Via",
    portal: 10,
    piso: 2
};

let FullStackDeveloper = {
    lenguajes: ["JavaScript", "HTML", "CSS"],
    proyectos: []
};

let Perro = {
    nombre: "Luna",
    raza: "mestiza",
    color: "marron",
    edad: 3,
    ladrar: function () {
        console.log("Guau");
    },
    popo: function () {
        return Math.random() * 3;
    }
};

let marcaPortatil = Portatil.marca;
let marcaPortatil2 = Portatil["marca"];
let grupos = Concierto.grupos;
let RGB = [Led.rojo, Led.verde, Led.azul];

Portatil.modelo = "P345";
Concierto.cartelera.push("Guns N' Roses");
Concierto.fecha = new Date();
Impresora.imprimiendo = {
    nombreArchivo: "documento.pdf",
    copias: 1,
    numPaginas: 1
};

let Noticia = {
    titular: "Noticia",
    cuerpo: "Cuerpo de la noticia"
};

let Persona = {
    nombre: "Pedro",
    apellidos: "Beep",
    edad: 30
};

let Avion = {
    numPasajeros: 0,
    despegar: function () {
        console.log("despegando");
    },
    volar: function () {
        console.log("llegando al destino");
    },
    aterrizar: function () {
        console.log("aterrizando");
    }
};

let Paquete = {
    contenido: []
};

let Pais = {
    numHabitantes: 0,
    continente: "Europa",
    gentilicio: "espanol"
};

let codError = O_Error.codigo;
let integrantes = Grupo.integrantes;
let nivelesTinta = Impresora.tinta;
let pixeles = Pantalla.pixeles;
let especificaciones = Movil["especificaciones"];

Grupo.numIntegrantes = 5;
Pantalla.dimensiones = "1920x1080";
Led.encendido = !powered;
Movil.temperatura = "20º";