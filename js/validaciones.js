let btnFormContacto = document.getElementById("btn-form-contact");
let textarea = document.getElementById("floatingTextarea");
let inputEmail = document.getElementById("exampleInputEmail1");

btnFormContacto.addEventListener("click", function (e) {
    if (textarea.value.length >= 10 && inputEmail.value.length !== 0) {
        return;
    } else {
        e.preventDefault();
        Swal.fire({
            icon: "error",
            title: "¡Ingresa un correo, recuerda que el mensaje debe tener más de 10 caracteres!",
            showConfirmButton: false,
            timer: 3500,
        });
    }
});
