var numeriPc = [];
var numeriUtente = [];
var InputNumero;
var difficolta = prompt("iserire difficolta 0=facile 1=media 2=diffcile");
var numeroDifficolta;
// seleziona difficolta
switch (difficolta) {
  case "0":
    numeroDifficolta = 100;
    alert("Difficolta facile selezionata");
    break;
  case "1":
    numeroDifficolta = 80;
    alert("Difficolta media selezionata");
    break;
  case "2":
    numeroDifficolta = 50;
    alert("Difficolta difficile selezionata");
    break;

  default:
    numeroDifficolta = 100;
    alert(
      "Difficolta non selezionata selezionata automaticamete dal Pc difficolta facile"
    );
}
while (numeriPc.length < 16) {
  if (checkArray(numeriPc, numeriRandom(1, numeroDifficolta)) == false) {
    numeriPc.push(numeroRandom);
  }
}
/// inserisci e confronta numeri
for (var i = 1; i < 85; i++) {
  InputNumero = parseInt(
    prompt("inserisci un numero sempre diverso fra 1 e 100")
  );
  if (
    checkArray(numeriUtente, InputNumero) == false &&
    isNaN(InputNumero) == false && InputNumero > 0 && InputNumero <= 100
  ) {
    numeriUtente.push(InputNumero);
  } else {
    alert("Iserire un Numero sempre diverso fra 1 e 100");
    location.reload();
    break;
  }
  // punteggio var
  var punteggio = i;
  if (checkArray(numeriPc, InputNumero) == true) {
    alert("Boom hai perso con tentativi: " + punteggio);
    location.reload();
    break;
  } else if (numeriUtente.length == 84) {
    alert("hai vinto con tentativi: " + punteggio);
    location.reload();
    break;
  }
}
// controllo array per push
function checkArray(arr, num) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == num) {
      return true;
    }
  }
  return false;
}
function numeriRandom(min, max) {
  numeroRandom = Math.floor(Math.random() * (max - min + 1)) + min;
  return numeroRandom;
}
