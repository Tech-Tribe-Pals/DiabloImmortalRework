

const containerStory = document.getElementById("container");
const atras = document.getElementById("atras");
const adelante = document.getElementById("adelante");
const arr = [
    "Un mundo llamado Santuario, asolado por el caos y la oscuridad.Los demonios habían escapado de su prisión y se estabanextendiendo por todo el reino, sembrando terror y destrucción a supaso. Los héroes de antaño,se habían levantado para enfrentar la amenaza demoníaca, pero sus esfuerzos parecían insuficientes. En medio de este caos, un nuevo grupo de valientes guerreros emergió: los Guardianes de la Luz. Estos guerreros eran la última esperanza para salvar Santuario. Conocedores de la antigua profecía que hablaba del renacimiento de los Nephalem en tiempos oscuros, los Guardianes se entrenaron para luchar contra los demonios y restaurar el equilibrio en el mundo. El jugador toma el papel de uno de los Guardianes de la Luz. Su viaje comienza en la ciudad de Westmarch, un bastión en ruinas que alguna vez fue un faro de esperanza. Los demonios habían invadido la ciudad, y sus calles estaban infestadas de monstruos retorcidos y malvados. El jugador se encuentra con otros héroes y juntos forman una alianza para enfrentar la oscuridad. A medida que avanzan, los Guardianes de la Luz descubren que los demonios están siendo liderados por un poderoso señor demonio llamado Skarn, el Heraldo del Terror. Skarn ha descubierto una manera de invocar a los demonios desde el Infierno Ardiente y los está enviando a Santuario para sembrar el caos. Los Guardianes deben detenerlo antes de que su poder crezca aún más.",
  
    "A lo largo de la historia, los Guardianes de la Luz exploran diferentes ubicaciones del mundo de Diablo, desde las profundidades de los bosques oscuros hasta las catacumbas infernales. Se enfrentan a hordas interminables de demonios, utilizan poderosas habilidades y se equipan con armas y armaduras legendarias para fortalecer su lucha. A medida que la batalla se intensifica, el jugador descubre pistas sobre una antigua reliquia conocida como la Piedra del Alma. Se dice que esta piedra contiene un poder inmenso capaz de derrotar a Skarn y cerrar el portal que une los reinos infernales con Santuario. Los Guardianes de la Luz deben encontrar las piezas dispersas de la Piedra del Alma y reunirlas antes de que sea demasiado tarde. En su épica búsqueda, el jugador se enfrenta a jefes demoníacos descomunales, se sumerge en mazmorras llenas de trampas mortales y descubre secretos ancestrales ocultos en cada rincón de Santuario. A medida que la historia avanza, el jugador se enfrenta a una elección crucial: sacrificar su propia alma para fortalecer la Piedra del Alma y derrotar a Skarn o resistir la tentación y encontrar otra manera de vencerlo. Esta elección afecta el desenlace del juego y el destino del Santuario.",
  ];
  

let currentContentIndex = 0; // Índice del contenido actual

export const updateContent = () => {
  // Verifica el ancho de la ventana y actualiza el contenido según corresponda
  if (window.innerWidth < 768) {
    containerStory.innerHTML = arr[currentContentIndex];
  } else {
    // Si el ancho de la ventana es mayor o igual a 768px, muestra otro contenido
    containerStory.innerHTML = `<h2>Story</h2><div><p>${arr[0]}</p></div><div><p>${arr[1]}</p></div>`;
  }
};

// Función para avanzar al siguiente contenido
 const nextContent = () => {
  if (currentContentIndex < arr.length - 1) {
    currentContentIndex++;
    updateContent();
  }
};

// Función para retroceder al contenido anterior
const previousContent = () => {
  if (currentContentIndex > 0) {
    currentContentIndex--;
    updateContent();
  }
};

// Manejadores de eventos para los botones
atras.addEventListener("click", previousContent);
adelante.addEventListener("click", nextContent);

// Manejador de eventos para el evento de redimensionamiento
window.addEventListener("resize", updateContent);

// Llama a updateContent inicialmente para configurar el contenido en función del ancho inicial de la ventana
updateContent();