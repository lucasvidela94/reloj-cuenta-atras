const diasEl = document.querySelector('#dias'); 
const horasEl = document.querySelector('#horas');
const minutosEl = document.querySelector('#minutos');
const segundosEl = document.querySelector('#segundos');


const newYears = '1 Jan 2022';



function countdown(){
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const segundosTotales = (newYearsDate - currentDate) / 1000;

    const dias  = Math.floor(segundosTotales / 3600 / 24 );
    const horas  = Math.floor( segundosTotales / 3600) % 24;
    const minutos = Math.floor (segundosTotales / 60) % 60; 
    const segundos = Math.floor(segundosTotales) % 60
    
    diasEl.innerText = dias;
    horasEl.innerText = formatoTiempo(horas);
    minutosEl.innerText = formatoTiempo(minutos);
    segundosEl.innerText = formatoTiempo(segundos);

}

function formatoTiempo(time) {
    return time < 10 ? (`0${time}`): time;
}

//primera llamada 

countdown();

setInterval(countdown , 1000);