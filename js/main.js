let cardsEscogidas = [];

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
