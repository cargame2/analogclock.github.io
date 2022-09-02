setInterval(setClock,100);

const hourHand=document.querySelector('[h]');
const minuteHand=document.querySelector('[m]');
const secondHand=document.querySelector('[s]');

function  setClock(){
    const cuurrentDate=new Date();

    const secondsRatio=cuurrentDate.getSeconds()/60;
    const minutesRatio=(secondsRatio + cuurrentDate.getMinutes())/60;
    const hoursRatio=(minutesRatio+ cuurrentDate.getHours())/12;
    setRotation(secondHand,secondsRatio);
    setRotation(minuteHand,minutesRatio);
    setRotation(hourHand,hoursRatio)
}
function setRotation(element,rotationRatio){
    element.style.setProperty('--rotation',rotationRatio*360);
}
setClock();


