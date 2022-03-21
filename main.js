var divLamp = document.createElement('div');
var divInt = document.createElement('div');
var lampada = document.createElement('img');
lampada.src="img/lampApagada.png";
var interruptor = document.createElement('img');
interruptor.src="img/Apagado.png";
var body = document.querySelector('body');
divLamp.appendChild(lampada);
divInt.appendChild(interruptor);
document.body.appendChild(divLamp);
document.body.appendChild(divInt);
body.style.backgroundColor="#000000";

interruptor.onclick=function(){
    if(interruptor.src.match("Apagado")){
    lampada.src="img/lampAcesa.png";
    interruptor.src="img/Aceso.png";
    body.style.backgroundColor="#ffffff";
    }else{
        lampada.src="img/lampApagada.png";
        interruptor.src="img/Apagado.png";
        body.style.backgroundColor="#000000";
    }
}



