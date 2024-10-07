const playSonido = (idElementoAudio) => {
    document.querySelector(idElementoAudio).play();
};

const listaTeclas = document.querySelectorAll(".tecla");

// forma 1
// let contador = 0;

// while (contador < listaTeclas.length) {
//     const tecla = listaTeclas[contador];
//     let idAudio = `#sonido_${tecla.classList[1]}`;
//     tecla.onclick = () => {
//         playSonido(idAudio);
//     };
//     contador++;
// }

/* forma 2

for (let i = 0; i < listaTeclas.length; i++) {
    const element = listaTeclas[i];
    element.onclick = () => {
        playSonido(`#sonido_${element.classList[1]}`);
    };
}

*/

// forma 3
// ciclo para recorrer cada tecla de sonido
for (const tecla of listaTeclas) {
    let idAudio = `#sonido_${tecla.classList[1]}`;
    // funcion anonima para reproducir sonido
    tecla.onclick = () => {
        playSonido(idAudio);
    };
    // funcion anonima para cambiar estilo de boton "Presionado"
    tecla.onkeydown = (evento) => {
        if (evento.code === "Enter" || evento.code === "Space") {
            tecla.classList.add("activa");
        }
    };
    // funcion anonima para cambiar estilo de boton "Sin pulsar"
    tecla.onkeyup = (evento) => {
        if (evento.code === "Enter" || evento.code === "Space") {
            tecla.classList.remove("activa");
        }
    };
}
