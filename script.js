const bot = document.getElementById("boton");


function saludar() {
    alert("Hola! Soy el div.");
}

bot.addEventListener("click", () => {
    saludar();
})