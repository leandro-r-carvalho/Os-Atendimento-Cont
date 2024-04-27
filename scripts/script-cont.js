const verMais = document.getElementById('verMais');
const saida = document.querySelector(".saida");

function contForm() {
    if (saida.style.display === "block") {
        saida.style.display = "none";
    } else {
        saida.style.display = "block"
    }
}

verMais.addEventListener ("click", contForm);