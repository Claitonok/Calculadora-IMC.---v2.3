
function calcularIMC(){
    let peso = parseFloat(document.getElementById("peso").value);
    let altura = parseFloat(document.getElementById("altura").value);
    let resultado = document.getElementById("resultado");

    if(!peso || !altura){
        resultado.style.display="block";
        resultado.className="resultado obesidade";
        resultado.innerHTML="⚠️ Preencha todos os campos!";
        return;
    }

    let imc = peso / (altura * altura);
    let classificacao = "";

    if(imc < 18.5){
        classificacao = "Abaixo do peso";
        resultado.className="resultado baixo";
    } 
    else if(imc < 25){
        classificacao = "Peso normal";
        resultado.className="resultado normal";
    } 
    else if(imc < 30){
        classificacao = "Sobrepeso";
        resultado.className="resultado sobrepeso";
    } 
    else{
        classificacao = "Obesidade";
        resultado.className="resultado obesidade";
    }

    resultado.style.display="block";
    resultado.innerHTML = `
        Seu IMC é <strong>${imc.toFixed(2)}</strong><br>
        Classificação: ${classificacao}
    `;
}

document.querySelector("form").addEventListener("submit", function(event){
    event.preventDefault();
    calcularIMC();
}
);
