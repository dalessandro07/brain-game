/* DATOS */

let datosAnimalesNivelFacil = [
    { nombre: "Leon", id: 1, imagen: "./assets/img/animales/leon.jpg" },
    { nombre: "Koalas", id: 2, imagen: "./assets/img/animales/koalas.jpg" },
    { nombre: "Pinguinos", id: 3, imagen: "./assets/img/animales/pinguinos.jpg" },
    { nombre: "Elefantes", id: 4, imagen: "./assets/img/animales/elefantes.jpg" },
];

let animalesNivelFacil = [...datosAnimalesNivelFacil, ...datosAnimalesNivelFacil];

/* JUEGO */

$("#btn-facil").click(function () {
    $(".footer-main").fadeOut();
    function shuffleArray(inputArray) {
        inputArray.sort(() => Math.random() - 0.5);
    }
    shuffleArray(animalesNivelFacil);

    $(".contenedor-titulo").fadeOut();
    $(".contenedor-opciones").fadeOut();

    setTimeout(function () {
        $("#contenedor-juego").click(function (e) {
            if (e.target.classList.contains("card-facil")) {
                clicks++;
                localStorage.setItem("clicks", clicks);
                $("#clicks").html(clicks);
                e.target.querySelector(".card-imagen").classList.remove("d-none");
                setTimeout(function () {
                    e.target.querySelector(".card-imagen").classList.add("d-none");
                }, 5500);
                cardsEscogidas.push(e.target.id);
                if (!e.target.querySelector(".card-imagen").classList.contains("d-none")) {
                    if (cardsEscogidas.length === 2) {
                        if (cardsEscogidas[0] === cardsEscogidas[1]) {
                            let contenedorCardsAnimales = contenedorJuego.querySelectorAll(".card-facil");
                            puntos++;
                            localStorage.setItem("puntos", puntos);
                            $("#puntos").html(puntos);
                            shuffleArray(felicidades);
                            const Toast = Swal.mixin({
                                toast: true,
                                position: "top-start",
                                showConfirmButton: false,
                                timer: 1500,
                                timerProgressBar: true,
                                didOpen: (toast) => {
                                    toast.addEventListener("mouseenter", Swal.stopTimer);
                                    toast.addEventListener("mouseleave", Swal.resumeTimer);
                                },
                            });
                            Toast.fire({
                                icon: "success",
                                title: `¡${felicidades[0]}, +1 pto!`,
                            });
                            contenedorCardsAnimales.forEach((cards) => {
                                if (cards.id === cardsEscogidas[0]) {
                                    setTimeout(function () {
                                        cards.remove();
                                    }, 500);
                                }
                            });
                            if (contenedorCardsAnimales.length === 2) {
                                setTimeout(function () {
                                    window.location.reload();
                                }, 1000);
                            }
                        } else {
                            let contenedorCardsAnimales = contenedorJuego.querySelectorAll(".card-facil");
                            contenedorCardsAnimales.forEach((cards) => {
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

        for (let animal of animalesNivelFacil) {
            templateCardsFacil.querySelector(".card-imagen").src = animal.imagen;
            templateCardsFacil.querySelector(".card-facil").setAttribute("id", animal.id);
            const clone = templateCardsFacil.cloneNode(true);
            fragment.appendChild(clone);
        }
        templateContenedorCardsFacil.querySelector(".contenedor-cards-facil").appendChild(fragment);
        contenedorJuego.appendChild(templateContenedorCardsFacil);
    }, 500);
});
