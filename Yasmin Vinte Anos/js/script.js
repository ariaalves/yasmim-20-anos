document.getElementById("galeria").addEventListener("click", function() {
    window.location.href = "galeria.html";
});

function openFullScreen(imageSrc) {
    const fullScreenImage = document.getElementById('full-screen-image');
    fullScreenImage.src = imageSrc;
    const fullScreen = document.querySelector('.full-screen');
    fullScreen.style.display = 'flex';
}

function closeFullScreen() {
    const fullScreen = document.querySelector('.full-screen');
    fullScreen.style.display = 'none';
}

if (localStorage.getItem('fullScreenViewed') !== 'true') {
    // Se não foi ativada, oculte a visualização em tela cheia
    const fullScreen = document.querySelector('.full-screen');
    fullScreen.style.display = 'none';}