var numeriPc = [];
var numeriUtente = [];
var InputNumero;
var bool;
function numeriRandom(min, max) {
  numeroRandom = Math.floor(Math.random() * (max - min + 1)) + min;
  return numeroRandom;
}
//push random number
var i = 0;
while (numeriPc.length < 3) {
  if (checkArray(numeriPc, numeriRandom(1, 100)) == false) {
    numeriPc.push(numeroRandom);
  }
  i++;
}
console.log(numeriPc);
/// inserisci e confronta numeri
for (var i = 0; i < 85; i++) {
  InputNumero = parseInt(prompt("inserisci un numero sempre diverso fra 1 e 100"));
  if (checkArray(numeriUtente, InputNumero) == false && isNaN(InputNumero)== false) {
    numeriUtente.push(InputNumero);
  } else {
    alert('Iserire un Numero sempre diverso');
    location.reload();
    break;
}
// punteggio var
var punteggio = i;
  if (numeriPc.includes(InputNumero)) {
    alert("Boom hai perso punteggio: " + punteggio);
    location.reload();
    break;
  } else if (numeriUtente.length == 85) {
    alert("hai vinto punteggio: " + punteggio);
    location.reload();
    break;
  }
}
console.log(numeriUtente);
// controllo array per push
function checkArray(arr, num) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == num) {
      return true;
    }
  }
  return false;
}
