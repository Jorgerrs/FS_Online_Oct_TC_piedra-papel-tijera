const opciones = ["piedra", "papel", "tijera"];

let puntosUsuario = 0;
let puntosOrdenador = 0;

const botones = document.querySelectorAll(".boton-jugada");

botones.forEach(boton => {
  boton.addEventListener("click", () => {
    const jugadaUsuario = boton.dataset.jugada;
    jugar(jugadaUsuario);
  });
});

const resultadoDiv = document.getElementById("resultados");
const contadorUsuario = document.getElementById("contador-usuario");
const contadorOrdenador = document.getElementById("contador-ordenador");

function jugadaOrdenador() {
  const indiceAleatorio = Math.floor(Math.random() * opciones.length);
  return opciones[indiceAleatorio];
}

function obtenerResultado(jugadaUsuario, jugadaOrdenador) {
  if (jugadaUsuario === jugadaOrdenador) {
    return "Empate";
  } else if (
    (jugadaUsuario === "piedra" && jugadaOrdenador === "tijera") ||
    (jugadaUsuario === "papel" && jugadaOrdenador === "piedra") ||
    (jugadaUsuario === "tijera" && jugadaOrdenador === "papel")
  ) {
    return "Has ganado";
  } else {
    return "Has perdido";
  }
}

function mostrarResultado(resultado, jugadaUsuario, jugadaOrdenador) {
  resultadoDiv.textContent = `Usuario: ${jugadaUsuario} - Ordenador: ${jugadaOrdenador} => ${resultado}`;
}

function actualizarPuntuacion(resultado) {
  if (resultado === "Has ganado") {
    puntosUsuario++;
    contadorUsuario.textContent = `Tus puntos: ${puntosUsuario}`;
  } else if (resultado === "Has perdido") {
    puntosOrdenador++;
    contadorOrdenador.textContent = `Puntos de la máquina: ${puntosOrdenador}`;
  }
}

function jugar(jugadaUsuario) {
  const jugadaDelOrdenador = jugadaOrdenador();
  const resultado = obtenerResultado(jugadaUsuario, jugadaDelOrdenador);
  mostrarResultado(resultado, jugadaUsuario, jugadaDelOrdenador);
  actualizarPuntuacion(resultado);
}
