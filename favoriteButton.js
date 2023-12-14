const btnSelector = document.querySelector("#button1")
const messageElement = document.querySelector("#message");

btnSelector.addEventListener('click', () => {
    btnSelector.classList.toggle('clicked');
    messageElement.classList.toggle('visible');
    setTimeout(() => {
        messageElement.classList.remove('hidden');
    }, 20);

    setTimeout(() => {
        messageElement.style.opacity = 0;
    }, 2000);
});