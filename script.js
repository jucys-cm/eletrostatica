// Adiciona evento ao botão de informação
document.getElementById("infoButton").addEventListener("click", function() {
    const infoMessage = document.getElementById("infoMessage");
    infoMessage.classList.toggle("hidden");
});

// Código para o botão de menu
const menuButton = document.querySelector('.menu-button');
const navList = document.querySelector('nav ul');

menuButton.addEventListener('click', () => {
    navList.classList.toggle('collapsed');
});

// Para o efeito de sombra no cabeçalho ao rolar
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle('scrolled', window.scrollY > 50);
});

