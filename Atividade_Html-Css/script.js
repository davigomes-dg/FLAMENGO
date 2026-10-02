function verificarFrete() {

    let valor = Number(document.getElementById("valor").value);

    let resultado = document.getElementById("resultado");

    if (valor >= 200) {
        resultado.textContent = "Você ganhou frete grátis!";
    } else {
        resultado.textContent = "Você não ganhou frete grátis.";
    }
}