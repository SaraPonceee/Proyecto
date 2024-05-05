// Saludo con span
let usuarioNombre = prompt("¿Cuál es tu nombre?");
const span = document.getElementById("welcome");
const i = document.querySelector("i");

while (usuarioNombre.length == 0) {
    alert("Por favor, ingrese su nombre.");
    usuarioNombre = prompt("¿Cuál es tu nombre?");
}

while (usuarioNombre.length < 3) {
    alert("Demasiado corto, el nombre debe tener mínimo 3 letras.");
    usuarioNombre = prompt("¿Cuál es tu nombre?");
}

span.textContent = "Hola, " + usuarioNombre.toUpperCase() + "."
i.setAttribute("class", "fa fa-ticket");


// Edad usuario (tickets desactivados si es menor)

function menorEdad() {
    let edadUsuario = parseInt(prompt("¿Cuántos años tenés?"));
    if (edadUsuario < 18) {
        swal("¡Oh no!", "Parece que sos menor de edad, no podés comprar tickets.", "warning");
        let botonesTickets = document.querySelectorAll(".botonesTickets");
        botonesTickets.forEach(function (boton) {
            boton.disabled = true;
            boton.style.backgroundColor = "#f55d3e";
        })
    }
}

menorEdad();


// Función getTickets

let tickets = {
    "Melbourne": 2,
    "Sidney": 1,
    "Miami": 3,
    "Londres": 3,
    "Moscu": 0,
    "Yokohama": 4,
}

function getTickets(location, id_button) {
    if (tickets[location] > 0) {
        swal("¡Ticket comprado!", "Compraste tickets para el concierto de " + location, "success");
        tickets[location]--;
    } else {
        swal("¡Oh no!", "Parece que ya no quedan tickets para " + location, "warning");
    }
    disableSoldOutButtons(id_button);
}

function disableSoldOutButtons() {
    for (let location in tickets) {
        let button = document.getElementById(location.replace(/\s+/g, '-').toLowerCase() + '-boton');
        if (tickets[location] == 0) {
            button.disabled = true;
            button.innerText = "SOLD OUT";
            button.style.backgroundColor = "#f55d3e";
            button.style.color = "#b1a7a6";
        }
    }
}

disableSoldOutButtons();