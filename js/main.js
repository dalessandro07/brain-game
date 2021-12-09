/* BIENVENIDA */

if (localStorage.getItem("Contraseña")) {
    $(".contador-puntos").html(" ");
    $(".contador-puntos").append(
        `<div class="d-flex">
            <span class="mt-4 contador-puntos-texto w-100 d-flex justify-content-start">Tiempo: <b class="ms-3 me-2" id="temporizador-segundos">¡Inicia el juego!</b></span>
            <span class="mt-4 contador-puntos-texto w-100 d-flex justify-content-end">Puntos: <b class="mx-4" id="puntos">0</b></span>
        </div>
        <span class="contador-puntos-texto w-100 d-flex justify-content-end">Clicks: <b class="mx-4" id="clicks">0</b></span>`
    );
}

/* INICIAR JUEGO */

$("#jugar").click(function (e) {
    e.preventDefault();
    $("#page-1").fadeOut("slow");
    $("#page-2").fadeOut("slow");
    $("#page-3").removeClass("d-none");
    if (!$("#page-4").hasClass("d-none")) {
        $("#page-4").fadeOut("slow");
        $("#page-3").fadeIn("slow");
    }
});

/* SCROLL */

$(window).scroll(function () {
    if ($(".navbar").offset().top > 825) {
        $(".navbar").addClass("visually-hidden");
    } else {
        $(".navbar").removeClass("visually-hidden");
    }
});

/* DATOS */

let cardsEscogidas = [];
let felicidades = ["EXCELENTE", "INCREÍBLE", "MUY BIEN", "GENIAL", "ASOMBROSO", "WOOOW", "MAGNÍFICO", "LO HACES EXCELENTE", "MADRE MÍA", "¿ACASO ERES PROFESIONAL?", "ERES EL MEJOR"];
let errores = ["CASI", "ESTUVO CERCA", "YO TAMBIÉN ME CONFUNDÍ", "INTÉNTALO DE NUEVO", "ESA NO ES", "SON PARECIDAS PERO NO IGUALES", "POR POCO", "NO CLICKEES TAN RÁPIDO"];

let puntos;
let clicks;

/* LOCAL STORAGE */

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

/* CONSTANTES DEL JUEGO */

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
