function calcularIMC(peso, altura) {
    const imc = peso / (altura * altura);
    return imc.toFixed(2);
}

function limparCampos() {
    document.getElementById("magreza").classList.remove("classificacao");
    document.getElementById("normal").classList.remove("classificacao");
    document.getElementById("sobrepeso").classList.remove("classificacao");
    document.getElementById("obesidade").classList.remove("classificacao");
}

document.getElementById("form").addEventListener("submit", (e) => {
    e.preventDefault();
    limparCampos();

    const peso = document.getElementById("peso").value;
    const altura = document.getElementById("altura").value;
    const imc = calcularIMC(peso, altura);

    if (imc < 18.5) {
        document.getElementById("magreza").classList.add("classificacao");
    } else if (imc >= 18.5 && imc < 29.9) {
        document.getElementById("normal").classList.add("classificacao");
    } else if (imc >= 29.9 && imc <= 30) {
        document.getElementById("sobrepeso").classList.add("classificacao");
    } else if (imc > 30) {
        document.getElementById("obesidade").classList.add("classificacao");
    }
});