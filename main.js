 
const horas = document.getElementById("horas");
const minutos = document.getElementById("minutos");
const segundos = document.getElementById("segundos");

const AMPM = document.getElementById("ampm");
const DayOrNigth = document.getElementById("DayNight")

setInterval(reloj,1000);


function reloj(){

      var HoraActual = new Date();
        var Hours = HoraActual.getHours();
        var Minutes = HoraActual.getMinutes();
        var Seconds = HoraActual.getSeconds();


if(Hours > 12){
    Hours = Hours - 12;
    horas.innerHTML = Hours;
    AMPM.innerHTML = " PM";
}else{
    horas.innerHTML = Hours;
    AMPM.innerHTML = " AM";
}

if(Minutes < 10){
    minutos.innerHTML = "0" + Minutes;
}else{
    minutos.innerHTML = Minutes;
}

if(Seconds < 10){
    segundos.innerHTML = "0" + Seconds;
}else{
    segundos.innerHTML = Seconds;
}
}
    //esto cambia el el background dependiendo de la hora    
        var CambiarFondo = new Date();
        var horasCambiar = CambiarFondo.getHours();

    if(horasCambiar > 16){
        DayOrNigth.className = ('day','nigth');
        
    }else{
        DayOrNigth.className = ('nigth','day');
    }
    



    
































