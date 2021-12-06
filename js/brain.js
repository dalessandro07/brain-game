let datos = [
    {
        id: "concentracion",
        titulo: "Mejora la concentración",
        info: "<b>Es difícil superar este desafío si no existe un nivel alto de atención.</b> Es decir, concentrarse en el objetivo principal y así alejarse de otras distracciones e interrupciones que le distancian de este propósito.",
        imagen: "./assets/img/cerebro/concentracion.jpg",
    },
    {
        id: "pensar-rapido",
        titulo: "Nos acostumbra a pensar más rápido",
        info: "<b>Para estos juegos, se debe ser más eficiente y perceptivo</b>; de esta forma, se acostumbra a generar respuestas intelectuales rápidas. En resumen, se trabaja el proceso de aprendizaje y resolución de problemas.",
        imagen: "./assets/img/cerebro/cerebro-corriendo.jpg",
    },
    {
        id: "cognitivas",
        titulo: "Potencian las habilidades cognitivas",
        info: "Es importante practicar deporte y ejercicio físico para estar en forma. <b>Pero también es necesario poner en forma el cerebro</b>. Y este tipo de pasatiempo incrementa la agudeza mental, la rapidez, el ingenio y la implicación. Existen habilidades de distinto tipo. Las sociales también tienen importancia en este contexto, ya que los niños se relacionan a través del juego. Los procesos mentales están muy presentes en este reto.",
        imagen: "./assets/img/cerebro/cognitivas.jpg",
    },
    {
        id: "inteligencia-emocional",
        titulo: "Potencian el desarrollo de la inteligencia emocional",
        info: "Cada juego está acompañado por la expectativa concreta de lograr un objetivo. Pero en este camino hacia la meta se producen distintas situaciones posibles. Tal vez el jugador no logre el fin previsto. Y, en ese caso, afronta la frustración que este hecho le produce. Por tanto, los juegos de memoria también potencian el autoconocimiento y la inteligencia emocional.",
        imagen: "./assets/img/cerebro/inteligencia-emocional.jpg",
    },
    {
        id: "memoria-corto-plazo",
        titulo: "Aumenta la memoria a corto plazo",
        info: "Existen distintos tipos de memoria. Y <b>este juego pone en valor la capacidad de recordar una información concreta durante un breve plazo de tiempo</b>. Las características de este juego hacen que para los niños sea todo un reto lograr el objetivo principal.",
        imagen: "./assets/img/cerebro/memoria-corto-plazo.jpg",
    },
    {
        id: "memoria-visual",
        titulo: "Entrenan la memoria visual",
        info: "Cuando hacemos esta actividad, <b>se incrementa considerablemente la memorización</b> que se produce mediante la vista. La percepción se agudiza y las asociaciones visuales son internalizadas.",
        imagen: "./assets/img/cerebro/memoria-visual.jpg",
    },
];

let count = 1;
let count2 = 1;

for (let dato of datos) {
    $(`#${dato.id}`).attr("data-bs-toggle", "modal");
    $(`#${dato.id}`).attr("data-bs-target", `#exampleModal${count2++}`);
    $(".p2-contenedor").append(
        `<div class="modal fade" id="exampleModal${count++}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title text-center text-capitalize" id="exampleModalLabel">
                            ${dato.titulo}
                        </h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <img class="w-100" height="250" src="${dato.imagen}" style="object-fit:cover;">
                        <p class="modal-text" style="padding-top: 1.5rem">${dato.info}</p>
                    </div>
                </div>
            </div>
        </div>`
    );
}
