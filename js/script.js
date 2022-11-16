
var dataChegadaSel = new Date("December 9, 2022 21:30").getTime();
var dias, horas, minutos, segundos;

setInterval(function () {

    var dataAtual = new Date().getTime();
    var segundosTotal = (dataChegadaSel - dataAtual) / 1000;

    dias = parseInt(segundosTotal / 86400);
    if(dias < 10) {
        dias = '0' + dias;
    }
    segundosTotal = segundosTotal % 86400;

    horas = parseInt(segundosTotal / 3600);
    if (horas < 10) {
        horas = '0' + horas;
    }
    segundosTotal = segundosTotal % 3600;

    minutos = parseInt(segundosTotal / 60);
    if (minutos < 10) {
        minutos = '0' + minutos;

    }
    segundosTotal = segundosTotal % 60;


    segundos = parseInt(segundosTotal % 60);
    if (segundos < 10) {
        segundos = '0' + segundos;
    }

    document.getElementById("dias").innerHTML = dias;
    document.getElementById("horas").innerHTML = horas;
    document.getElementById("minutos").innerHTML = minutos;
    document.getElementById("segundos").innerHTML = segundos;

    console.log(segundos);
}, 1000);




