function actualizarContador() {
    const cards = document.querySelectorAll(".card");
    const contador = [...cards].filter(card => card.classList.contains("volteada")).length;
    const elementoContador = document.getElementById("contador");

    if (elementoContador) {
        elementoContador.textContent = contador;
    }
}

function voltear(card) {
    if (!card) return;

    card.classList.toggle("volteada");
    actualizarContador();
}

let selectorDeCards = ".card";
let claseParaOcultar = "oculta";

function filtrar(tipo) {
    const cards = document.querySelectorAll(selectorDeCards);

    cards.forEach(card => {
        if (tipo === "todas") {
            card.classList.remove(claseParaOcultar);
        } else if (tipo === "vocales") {
            if (card.dataset.tipo === "vocal") {
                card.classList.remove(claseParaOcultar);
            } else {
                card.classList.add(claseParaOcultar);
            }
        }
    });
}