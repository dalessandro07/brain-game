/* DATOS */

let datoscarasNivelDificil = [];

for (let i = 1; i < 10; i++) {
    let objeto = { nombre: `cara${i}`, id: 10 + i, imagen: `./assets/img/caras/face${i}.jpg` };
    datoscarasNivelDificil.push(objeto);
}

let carasNivelDificil = [...datoscarasNivelDificil, ...datoscarasNivelDificil];

/* JUEGO */

$("#btn-dificil").click(function () {
    let temporizador = new Temporizador(360);
    temporizador.conteoSegundos();

    $(".footer-main").fadeOut();
    function shuffleArray(inputArray) {
        inputArray.sort(() => Math.random() - 0.5);
    }
    shuffleArray(carasNivelDificil);

    $(".contenedor-titulo").fadeOut();
    $(".contenedor-opciones").fadeOut();

    setTimeout(function () {
        $("#contenedor-juego").click(function (e) {
            if (e.target.classList.contains("card-dificil")) {
                clicks++;
                localStorage.setItem("clicks", clicks);
                $("#clicks").html(clicks);
                e.target.querySelector(".card-imagen").classList.remove("d-none");
                setTimeout(function () {
                    e.target.querySelector(".card-imagen").classList.add("d-none");
                }, 3500);
                cardsEscogidas.push(e.target.id);
                if (!e.target.querySelector(".card-imagen").classList.contains("d-none")) {
                    if (cardsEscogidas.length === 2) {
                        if (cardsEscogidas[0] === cardsEscogidas[1]) {
                            let contenedorCardsCaras = contenedorJuego.querySelectorAll(".card-dificil");
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
                            contenedorCardsCaras.forEach((cards) => {
                                if (cards.id === cardsEscogidas[0]) {
                                    setTimeout(function () {
                                        cards.remove();
                                    }, 500);
                                }
                            });
                            if (contenedorCardsCaras.length === 2) {
                                setTimeout(function () {
                                    window.location.reload();
                                }, 1000);
                            }
                        } else {
                            let contenedorCardsCaras = contenedorJuego.querySelectorAll(".card-dificil");
                            puntos--;
                            $("#puntos").html(puntos);
                            localStorage.setItem("puntos", puntos);

                            shuffleArray(errores);

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
                                icon: "error",
                                title: `¡${errores[0]}, -1 pto!`,
                            });

                            contenedorCardsCaras.forEach((cards) => {
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

        for (let cara of carasNivelDificil) {
            templateCardsDificil.querySelector(".card-imagen").src = cara.imagen;
            templateCardsDificil.querySelector(".card-dificil").setAttribute("id", cara.id);
            const clone = templateCardsDificil.cloneNode(true);
            fragment.appendChild(clone);
        }
        templateContenedorCardsDificil.querySelector(".contenedor-cards-dificil").appendChild(fragment);
        contenedorJuego.appendChild(templateContenedorCardsDificil);
    }, 500);
});
