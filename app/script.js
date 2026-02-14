let ctx = document.getElementById('graficoIMC').getContext('2d');

let dadosIMC = JSON.parse(localStorage.getItem("imcHistorico")) || [];

let grafico = new Chart(ctx, {
    type: 'line',
    data: {
        labels: dadosIMC.map((_, i) => "IMC " + (i+1)),
        datasets: [{
            label: 'Histórico IMC',
            data: dadosIMC,
            borderColor: '#4e73df',
            backgroundColor: 'rgba(78,115,223,0.2)',
            tension: 0.3,
            fill:true
        }]
    }
});

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
    salvarHistorico(imc.toFixed(2));
}

function salvarHistorico(valor){
    dadosIMC.push(valor);
    localStorage.setItem("imcHistorico", JSON.stringify(dadosIMC));
    atualizarGrafico();
    mostrarHistorico();
}

function atualizarGrafico(){
    grafico.data.labels = dadosIMC.map((_, i) => "IMC " + (i+1));
    grafico.data.datasets[0].data = dadosIMC;
    grafico.update();
}

function mostrarHistorico(){
    let div = document.getElementById("historico");
    div.innerHTML="";
    dadosIMC.forEach((valor, index)=>{
        div.innerHTML += `<p>${index+1}° cálculo: IMC ${valor}</p>`;
    });
}

function limparHistorico(){
    localStorage.removeItem("imcHistorico");
    dadosIMC=[];
    atualizarGrafico();
    mostrarHistorico();
}



document.querySelector("button").addEventListener("click", function(event){
    event.preventDefault();
    calcularIMC();
    atualizarGrafico();
    mostrarHistorico();
}
);
