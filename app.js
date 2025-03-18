//Creación de array
let amigos = [];

//Función para agregar amigos
function agregarAmigo() {
    const input = document.getElementById('amigo');
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
    listaAmigos.innerHTML = '';

    //Agrega los nombres a la lista
    amigos.forEach(nombre => {
        const li = document.createElement('li');
        li.textContent = nombre;
        listaAmigos.appendChild(li);
    });
}

//Función para sortear el amigo secreto
function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Debes agregar al menos un amigo antes de sortear.');
        return;
    }
    
    //Selecciona el nombre aleatoriamente
    const amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    
    //Muestra el resultado del sorteo
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `Tu amigo secreto es: ${amigoSorteado}`;
}
 
