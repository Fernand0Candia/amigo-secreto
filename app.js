//Creación de array
let amigos = []

//Función para agregar amigos
function agregarAmigo() {
    const input = document.getElementById ('amigo');
    const nombre = input.value.trim();

    //Validar que el campo no este vacio
    if (nombre === '') {
        alert('Nombre no valido');
        return;
    }

    //Agrega los nombres al array
    amigos.push(nombre);

    //Actualiza la lista
    actualizarLista();

    //Limpia el campo luego de añadir un nombre 
    input.value = '';
}

//Función para actualizar la lista de nombres 
function actualizarLista() {
    const listaAmigos = document.getElementById('listaAmigos');

    
}