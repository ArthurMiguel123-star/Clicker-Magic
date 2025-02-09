document.addEventListener('DOMContentLoaded', function() {
    const click = document.getElementById('click');
    const clicks = document.getElementById('clicks');
    const rebirths = document.getElementById('rebirths');
    const reset = document.getElementById('reset');
    const message = document.getElementById('message'); // Adicionei o elemento de mensagem
    let counter = 0;
    let rebirthCounter = 0;

    click.addEventListener('click', function() {
        counter++;
        clicks.textContent = counter;
    });

    reset.addEventListener('click', function() {
        if (counter < 50) {
            message.textContent = 'Você não tem pontos suficientes';
        } else {
            counter = 0;
            clicks.textContent = counter;
            rebirthCounter += 1;
            rebirths.textContent = rebirthCounter;
            message.textContent = ''; // Limpa a mensagem
        }
    });
});
