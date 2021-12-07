let cardsEscogidas = [];
let felicidades = ["EXCELENTE", "INCREÍBLE", "MUY BIEN", "GENIAL", "ASOMBROSO", "WOOOW", "MAGNÍFICO", "LO HACES EXCELENTE", "MADRE MÍA", "¿ACASO ERES PROFESIONAL?", "ERES EL MEJOR"];
let errores = ["CASI", "ESTUVO CERCA", "YO TAMBIÉN ME CONFUNDÍ", "INTÉNTALO DE NUEVO", "ESA NO ES", "SON PARECIDAS PERO NO IGUALES", "POR POCO", "NO CLICKEES TAN RÁPIDO"];

let puntos;
let clicks;

if (localStorage.getItem("puntos")) {
    puntos = localStorage.getItem("puntos");
    $("#puntos").html(puntos);
} else {
    puntos = 0;
}

if (localStorage.getItem("clicks")) {
    clicks = localStorage.getItem("clicks");
    $("#clicks").html(clicks);
} else {
    clicks = 0;
}

const contenedorJuego = document.getElementById("contenedor-juego");

const templateContenedorCardsFacil = document.getElementById("contenedor-juego-facil").content;
const templateCardsFacil = document.getElementById("cards-facil").content;

const templateContenedorCardsIntermedio = document.getElementById("contenedor-juego-intermedio").content;
const templateCardsIntermedio = document.getElementById("cards-intermedio").content;

const templateContenedorCardsDificil = document.getElementById("contenedor-juego-dificil").content;
const templateCardsDificil = document.getElementById("cards-dificil").content;

const fragment = document.createDocumentFragment();

/* TEMPORIZADOR */
class Temporizador {
    constructor(inicio) {
        this.inicio = inicio;
        this.contador = this.inicio;
    }

    conteoSegundos = function () {
        if (this.contador < 0) {
            this.conteoSegundos = null;
            contenedorJuego.innerHTML = "";
            contenedorJuego.innerHTML = `<div class="h-100 d-flex flex-column justify-content-around align-content-center align-items-center">
                    <h2 class="titulo-tiempo">¡Se te acabó el tiempo! 😥</h2>
                    <p class="texto-tiempo">¡Estuviste cerca, no te rindas!</p>
                    <button class="btn boton-volver" id="volver">Intentarlo de Nuevo</button>
                </div>`;
            return;
        } else if (this.contador < 60 && this.contador > 25) {
            $(`#temporizador-segundos`).addClass("warning");
        } else if (this.contador < 25) {
            $(`#temporizador-segundos`).removeClass("warning");
            $(`#temporizador-segundos`).addClass("danger");
        }
        $(`#temporizador-segundos`).html(`${this.contador--} segundos`);
        setTimeout(this.conteoSegundos.bind(this), 1000);
    };
}

$(() => {
    $("#volver").click(() => {
        window.location.reload();
    });
});
