![HTML5](https://img.shields.io/badge/HTML5-Structure-orange)
![CSS3](https://img.shields.io/badge/CSS3-Style-blue)
![JavaScript](https://img.shields.io/badge/JavaScript-Logic-yellow)
![Docker](https://img.shields.io/badge/Docker-Containerization-blue)

# 🧮 Calculadora de IMC (v2.3)

Aplicação web simples para cálculo do **Índice de Massa Corporal (IMC)** desenvolvida com **HTML, CSS e JavaScript**, com suporte para execução via **Docker**.

🔗 Repositório:
https://github.com/Claitonok/Calculadora-IMC.---v2.3

---

## 📌 Sobre o Projeto

Esta aplicação permite que o usuário informe seu **peso (kg)** e **altura (m)** para calcular o IMC automaticamente, retornando o resultado junto com a classificação correspondente.

O projeto tem foco educacional, demonstrando:

- Estrutura básica de uma aplicação web
- Manipulação de DOM com JavaScript
- Estilização com CSS
- Containerização com Docker usando NGINX

---

## 🚀 Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript
- Docker
- NGINX (servidor estático)

---

## 📁 Estrutura do Projeto

Calculadora-IMC.---v2.3/
├── app/
├── dockerfile
├── index.html
├── informacao.html
├── styles.css
├── script.js
├── README.md


---

## 🧠 Como Funciona

1. O usuário insere o peso e a altura.
2. O JavaScript realiza o cálculo usando a fórmula:

IMC = peso / (altura * altura)


3. O sistema exibe:
   - Valor do IMC calculado
   - Classificação correspondente (abaixo do peso, normal, sobrepeso, obesidade etc.)

---

## 💻 Executando Localmente

### 1️⃣ Clonar o repositório

```bash
git clone https://github.com/Claitonok/Calculadora-IMC.---v2.3.git

2️⃣ Acessar a pasta
cd Calculadora-IMC.---v2.3

3️⃣ Abrir no navegador
Basta abrir o arquivo index.html no navegador de sua preferência.

🐳 Executando com Docker
O projeto possui um Dockerfile que utiliza a imagem oficial do NGINX para servir os arquivos estáticos.

🔨 Build da imagem
Na raiz do projeto:
docker build -t calculadora-imc .

▶️ Rodar o container
docker run -d -p 8080:8080 --name imc-app calculadora-imc

🌐 Acessar no navegador
http://localhost:8080

📄 Licença
Este projeto é voltado para fins educacionais e aprendizado.
Sinta-se livre para estudar, modificar e compartilhar.

👨‍💻 Autor
Desenvolvido por Claiton 🚀
