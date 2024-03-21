let input = document.querySelector(".name");
let QR_image = document.querySelector(".QR_image");
let copyButton = document.querySelector(".copyButton");
let shareQR = document.querySelector(".share");
let submitName = document.querySelector(".submit");

submitName.addEventListener('click', () => {
    shareQR.classList.add("hide");
    QR_name = input.value;
    let imageUrl = " https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + encodeURIComponent(QR_name);
    document.getElementById("img").src = imageUrl;
    shareQR.innerText = imageUrl;
    input.value = "";
    QR_image.classList.remove("hide");
    copyButton.classList.remove("hide");
})

copyButton.addEventListener('click', () => {
    shareQR.classList.remove("hide");
    copyButton.classList.add("hide");
})
