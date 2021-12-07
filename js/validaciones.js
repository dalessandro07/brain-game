let btnFormContacto = document.getElementById("btn-form-contact");
let textarea = document.getElementById("floatingTextarea");
let inputEmail = document.getElementById("exampleInputEmail");
let validarCorreo = "@";

btnFormContacto.addEventListener("click", function (e) {
    if (textarea.value.length >= 10) {
        return;
    } else {
        e.preventDefault();
        Swal.fire({
            icon: "error",
            title: "¡El mensaje debe tener más de 10 caracteres!",
            showConfirmButton: false,
            timer: 1500,
        });
    }
    if (inputEmail.value.length >= 6) {
        return;
    } else {
        e.preventDefault();
        Swal.fire({
            icon: "error",
            title: "¡Debes ingresar un correo válido!",
            showConfirmButton: false,
            timer: 1500,
        });
    }
});
