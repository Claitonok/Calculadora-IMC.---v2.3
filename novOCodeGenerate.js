let qr;

function gerarQRCode() {
    const link = document.getElementById("link").value;
    const qrDiv = document.getElementById("qrcode");

    if (!link) {
        alert("Informe um link!");
        return;
    }

    qrDiv.innerHTML = "";
    qrDiv.classList.remove("show");

    qr = new QRCode(qrDiv, {
        text: link,
        width: 250,
        height: 250
    });

    setTimeout(() => {
        qrDiv.classList.add("show");
    }, 100);
}



// /* DARK MODE */
// function toggleDarkMode() {
//     document.body.classList.toggle("dark");
// }
