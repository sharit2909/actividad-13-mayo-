function registrar(){
    let nombre = document.getElementById("name").value;
    let apellido = document.getElementById("lastname").value;
    let edad = document.getElementById("age").value;
    let correo = document.getElementById("email").value;

    edad =parseInt(edad)

    if (edad >17){
        alert(`hola ${nombre} ${apellido} has aplicado correctamente, te contactaremos en ${correo} `);
    }

    if  (edad <18) {
        alert(`hola ${nombre}${apellido} no cumples con la edad requerida`);
    }

    if (edad === "" || nombre === "" || apellido === "" || correo === ""){
        alert(`Por favor ingrese todos los campos`); 
    }

}