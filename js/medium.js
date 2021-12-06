/* DATOS */

let datosEsculturasNivelIntermedio = [
    { nombre: "Coliseo", id: 5, imagen: "./assets/img/esculturas/coliseo.jpg" },
    { nombre: "Disney", id: 6, imagen: "./assets/img/esculturas/disney.jpg" },
    { nombre: "Big Ben", id: 7, imagen: "./assets/img/esculturas/big-ben.jpg" },
    { nombre: "Machu Picchu", id: 8, imagen: "./assets/img/esculturas/machu.jpg" },
    { nombre: "Torre Eiffel", id: 9, imagen: "./assets/img/esculturas/paris.jpg" },
    { nombre: "Arco de Tito", id: 10, imagen: "./assets/img/esculturas/tito.jpg" },
];

let esculturasNivelIntermedio = [...datosEsculturasNivelIntermedio, ...datosEsculturasNivelIntermedio];

/* JUEGO */

$("#btn-intermedio").click(function () {
    function shuffleArray(inputArray) {
        inputArray.sort(() => Math.random() - 0.5);
    }
    shuffleArray(esculturasNivelIntermedio);

    $(".contenedor-titulo").fadeOut();
    $(".contenedor-opciones").fadeOut();

    setTimeout(function () {
        $("#contenedor-juego").click(function (e) {
            if (e.target.classList.contains("card-intermedio")) {
                e.target.querySelector(".card-imagen").classList.remove("d-none");
                setTimeout(function () {
                    e.target.querySelector(".card-imagen").classList.add("d-none");
                }, 1000);
                cardsEscogidas.push(e.target.id);
                if (!e.target.querySelector(".card-imagen").classList.contains("d-none")) {
                    if (cardsEscogidas.length === 2) {
                        if (cardsEscogidas[0] === cardsEscogidas[1]) {
                            let contenedorCardsEsculturas = contenedorJuego.querySelectorAll(".card-intermedio");
                            puntos++;
                            localStorage.setItem("puntos", puntos);
                            $("#puntos").html(puntos);
                            contenedorCardsEsculturas.forEach((cards) => {
                                if (cards.id === cardsEscogidas[0]) {
                                    setTimeout(function () {
                                        cards.remove();
                                    }, 500);
                                }
                            });
                            if (contenedorCardsEsculturas.length === 2) {
                                setTimeout(function () {
                                    window.location.reload();
                                }, 1000);
                            }
                        } else {
                            let contenedorCardsEsculturas = contenedorJuego.querySelectorAll(".card-intermedio");
                            contenedorCardsEsculturas.forEach((cards) => {
                                setTimeout(function () {
                                    let imagenesCards = cards.children;
                                    for (let imagen of imagenesCards) {
                                        if (!imagen.classList.contains("d-none")) {
                                            imagen.classList.add("d-none");
                                        }
                                    }
                                }, 500);
                            });
                        }
                        cardsEscogidas = [];
                    }
                }
                console.log(`- cardsEscogidas`, cardsEscogidas);
            } else if (e.target.classList.contains("card-imagen")) {
                e.target.classList.toggle("d-none");
                if (e.target.classList.contains("d-none")) {
                    cardsEscogidas.pop();
                }
            }
        });

        $("#contenedor-juego").fadeIn();

        for (let escultura of esculturasNivelIntermedio) {
            templateCardsIntermedio.querySelector(".card-imagen").src = escultura.imagen;
            templateCardsIntermedio.querySelector(".card-intermedio").setAttribute("id", escultura.id);
            const clone = templateCardsIntermedio.cloneNode(true);
            fragment.appendChild(clone);
        }
        templateContenedorCardsIntermedio.querySelector(".contenedor-cards-intermedio").appendChild(fragment);
        contenedorJuego.appendChild(templateContenedorCardsIntermedio);
    }, 500);
});