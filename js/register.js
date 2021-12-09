$(".btn-a-registro").click(function () {
    $("#page-1").fadeOut("slow");
    $("#page-2").fadeOut("slow");
    $("#page-3").fadeOut("slow");
    setTimeout(function () {
        $("#page-4").removeClass("d-none");
        $("#page-4").fadeIn("slow");
    }, 600);
});

$("#btn-form-register").click(function (e) {
    if (localStorage.getItem("Contraseña")) {
        e.preventDefault();
        const Toast = Swal.mixin({
            toast: true,
            position: "bottom",
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener("mouseenter", Swal.stopTimer);
                toast.addEventListener("mouseleave", Swal.resumeTimer);
            },
        });
        Toast.fire({
            icon: "info",
            title: `¡${localStorage.getItem("Usuario")} ya te has registrado!`,
        });
        setTimeout(() => {
            window.location.href = "index.html";
        }, 1500);
    } else {
        localStorage.setItem("Correo", $("#exampleInputEmail2").val());
        localStorage.setItem("Usuario", $("#username").val());
        localStorage.setItem("Contraseña", $("#inputPassword6").val());
        if (localStorage.getItem("Contraseña")) {
            setTimeout(() => {
                window.location.href = "index.html";
            }, 2000);
        }
    }
});
