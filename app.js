var numeriPc = [];
var numeriUtente = [];
var InputNumero;
var bool;
function numeriRandom(min, max) {
  numeroRandom = Math.floor(Math.random() * (max - min + 1)) + min;
  return numeroRandom;
}
//push random number
var i =0;
while (numeriPc.length < 16){
    if(checkArray(numeriPc,numeriRandom(1,100))==false){
       numeriPc.push(numeroRandom);
    }
    i++;
}
console.log(numeriPc);
for(var i=0;i<4;i++){
    InputNumero = parseInt(prompt('inserisci un numero'));
    var punteggio = i+1;
    if (numeriPc.includes(InputNumero)){
        alert('Boom hai perso punteggio: '+punteggio);
        i =0;
    }else if (i  == 3){
        alert('hai vinto punteggio: '+punteggio);
        
    }
}
console.log(numeriUtente);
function checkArray(arr,num){
    for(var i=0;i<arr.length;i++){
        if(arr[i] == num){
            return true;
        }
    }
    return false;
}











