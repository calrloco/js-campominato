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
for(var i=0;i<10;i++){
    InputNumero = parseInt(prompt('inserisci un numero'));
    if (numeriPc.includes(InputNumero)){
        alert('hai perso')
    }
}
function checkArray(arr,num){
    for(var i=0;i<arr.length;i++){
        if(arr[i] == num){
            return true;
        }
    }
    return false;
}











