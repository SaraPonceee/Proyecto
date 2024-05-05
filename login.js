// Validación forms

const nombre = document.getElementById('name');
const pass = document.getElementById('password');
const form = document.getElementById('form');

form.addEventListener("submit", (e) => {
    e.preventDefault()
    if (password.value.length <= 6) {
        swal('Contraseña muy corta', 'La contraseña debe tener al menos 6 carácteres. Todos los campos deben ser completados.', 'warning');
    }
    if (nombre.value == '' || nombre.value == null) {
        swal('Usuario vacío', 'Su nombre de usuario debe ser ingresado. Todos los campos deben ser completados', 'warning');
    }
})

const tituloAlbums = document.getElementById('tituloAlbum')
const descripcionAlbums = document.getElementById('descripcionAlbum');
const formAlbum = document.getElementById('formAlbum');

 formAlbum.addEventListener('submit', (e) => {
    e.preventDefault()
    if (tituloAlbums.value == '' || tituloAlbums.value == null) {
        swal('Título vacío', 'El ttítlo del album que quieres agregar se encuentra vacío, completa el nombre', 'warning');
    }

    if (descripcionAlbums.value.length <= 20) {
        swal('Descripción demasiado corta', 'La descripción del album debe ser de al menos 20 carácteres.', 'info');
    }
})

const tituloSongs = document.getElementById('tituloCancion');
const descripcionSongs = document.getElementById('descripcionCancion')
const formSongs = document.getElementById('formSong');

formSongs.addEventListener("submit", (e) => {
    e.preventDefault()
    if (tituloSongs.value == '' || tituloSongs.value == null) {
        swal('Título de canción vacío', 'El título de la canción se encuentra vacío. Por favor completa el nombre.', 'warning');
    }
    if (descripcionSongs.value == '' || tituloSongs.value == null) {
        swal('Descripción vacía', 'La descripción de la canción se encuentra vacía. Por favor completala.', 'warning');
    }
})