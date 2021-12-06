let cardsEscogidas = [];
let felicidades = ["EXCELENTE", "INCREÍBLE", "MUY BIEN", "GENIAL", "ASOMBROSO", "WOOOW", "MAGNÍFICO", "LO HACES EXCELENTE", "MADRE MÍA", "¿ACASO ERES PROFESIONAL?", "ERES EL MEJOR"];
let errores = ["CASI", "ESTUVO CERCA", "YO TAMBIÉN ME CONFUNDÍ", "INTÉNTALO DE NUEVO", "ESA NO ES", "SON PARECIDAS PERO NO IGUALES", "POR POCO", "NO CLICKEES TAN RÁPIDO"];

let puntos;

if (localStorage.getItem("puntos")) {
    puntos = localStorage.getItem("puntos");
    $("#puntos").html(puntos);
} else {
    puntos = 0;
}

const contenedorJuego = document.getElementById("contenedor-juego");

const templateContenedorCardsFacil = document.getElementById("contenedor-juego-facil").content;
const templateCardsFacil = document.getElementById("cards-facil").content;

const templateContenedorCardsIntermedio = document.getElementById("contenedor-juego-intermedio").content;
const templateCardsIntermedio = document.getElementById("cards-intermedio").content;

const templateContenedorCardsDificil = document.getElementById("contenedor-juego-dificil").content;
const templateCardsDificil = document.getElementById("cards-dificil").content;

const fragment = document.createDocumentFragment();
