function enviar() {
    let nombre = document.getElementById("nombre").value;
    let mail = document.getElementById("email").value;
    let mensaje = document.getElementById("mensaje").value;
    const expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (!expr.test(mail) ){
        alert("Error: La dirección de correo electrónico '" + mail + "' es incorrecta.");
        return false;
    }
    if(nombre == "") {
        alert("El nombre se encuentra vacío.")
        return false;
    }
    else if(mensaje == "") {
        alert("No completó el mensaje.")
    }
    else {
        alert("Gracias por enviar el formulario.");
        return true;
    }
}