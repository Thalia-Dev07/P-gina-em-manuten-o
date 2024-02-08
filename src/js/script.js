
// CONTAGEM REGRESSIVA DO RELOGIO DE HOJE ATÉ O DIA 9 DE MARÇO DE 2024

const diasEl = document.getElementById('dias');
const horasEl = document.getElementById('horas');
const minutosEl = document.getElementById('minutos');
const segundosEl = document.getElementById('segundos');

const novoDia = "9 mar 2024";

function contagemRegressiva() {

    const novoDiaDate = new Date(novoDia);
    const dataHoje = new Date();

    const totalSegundos = (novoDiaDate - dataHoje) / 1000;

    const dias = Math.floor(totalSegundos / 3600 / 24);
    const horas = Math.floor(totalSegundos / 3600) % 24;
    const minutos = Math.floor(totalSegundos / 60) % 60;
    const segundos = Math.floor(totalSegundos) % 60;

    diasEl.innerHTML = dias;
    horasEl.innerHTML = formatoTempo(horas);
    minutosEl.innerHTML = formatoTempo(minutos);
    segundosEl.innerHTML = formatoTempo(segundos);

}

function formatoTempo(time) {
    return time < 10 ? `0${time}` : time;
}

contagemRegressiva();

setInterval(contagemRegressiva, 1000);
