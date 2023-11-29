/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* function numeroMaggiore(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}
console.log(numeroMaggiore (10,20));*/

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/


/*function nonUguale(a, b) {
  if (a===5) {
    return "equal"
  } else {
    return "not equal"
  }
}

console.log(nonUguale(3));*/


/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisible by 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/*function divisibleFive(number) {
  if (number % 5 === 0) {
    return "divisible by 5";
  } else {
    return "not divisible by 5";
  }
}

console.log(divisibleFive(15));*/



/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

 

/*function numeriInteri(number1, number2) {
  if (number1 === 8 || number2 === 8 || number1 + number2 === 8 || number1 - number2 === 8) {
    return "il risultato è 8"
  } else {
    return "il risultato non è 8"
  }
}

console.log(numeriInteri(4, 4));*/




/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/


/*function totalCheckout(totalShoppingCart) {
  if (totalShoppingCart >= 50) {
    return "Hai diritto alla Spedizione Gratuita! Il totale da pagare è " + (totalShoppingCart + " euro")
  } else {
    let costoFisso = 10;
    let costoTotale = (totalShoppingCart + costoFisso);
    return "La spedizione ha un costo fisso pari a 10 euro. Il totale da pagare è " + (costoTotale + " euro");
  }
}

let totalShoppingCart = 50;

console.log(totalCheckout(49));*/



/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.


function totalCheckout(totalShoppingCart) {
  let discount = totalShoppingCart * 0.8;
  if (discount >= 50) {
    return "Hai diritto alla Spedizione Gratuita! Il totale - scontato del 20% - da pagare è " + (Math.round(discount*100)/100) + " euro"
  } else {
    let costoFisso = 10;
    let costoTotale = (discount + costoFisso);
    return "La spedizione ha un costo fisso pari a 10 euro. Il totale da pagare - con i prodotti scontati del 20% -  è " + (Math.round(costoTotale*100)/100) + " euro";
  }
}

let totalShoppingCart = 50;

console.log(totalCheckout(49));

*/

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* ESERCIZIO FATTO CON SORT()
let variabile1 = 12
let variabile2 = 3
let variabile3 = 25

let numbers = [variabile1, variabile2, variabile3]

numbers.sort(function (a, b) {
  return b - a;
});

console.log(numbers);*/



/* ESERCIZIO 8
  Crea un algoritmo per verificare che un numero fornito sia un intero oppure no (suggerimento: cerca su un motore di ricerca "typeof").


function intero(numero) {
  if (Number.isInteger(numero) === true) {
    return "il numero è intero"
  } else {
    return "il numero non è intero"
  }
}

console.log(intero(0.04));

*/
/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)


function pariDispari(n) {
  if (n % 2 == 0) {
    return "il numero è pari"
  } else {
    return "il numero è dispari"
  } 
} 

console.log(pariDispari(5));
*/
/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

function esercizioDieci(valore) {
  if (valore < 5) {
    return "Meno di 5";
  } else if (valore < 10) {
    return "Meno di 10";
  } else {
    return "Uguale a 10 o maggiore";
  }
}

console.log(esercizioDieci(7));



/*
ESERCIZIO 11
  Crea un blocco condizionale if/else annidato su più livelli per mostrare in console il messaggio corretto in ogni condizione.

  num < 5 - mostra in console "Tiny"
  num < 10 - mostra in console "Small"
  num < 15 - mostra in console "Medium"
  num < 20 - mostra in console "Large"
  num >= 20 - mostra in console "Huge"
*/

function numeriNumeri(num) {
  if (num < 5) {
    return "Tiny"
  } else if (num < 10) {
    return "Small"
  } else if (num < 15) {
    return "Medium"
  } else if (num < 20) {
    return ("Large")
  } else {
    return "Huge (YUUUUUGE!)"
  }
}

console.log(numeriNumeri(21))

/*  ESERCIZIO 12
  Usa un operatore ternario per assegnare ad una variabile chiamata "gender" i valori "male" o "female".
  La scelta deve essere basata sul valore di un'altra variabile chiamata isMale.
  
  (The conditional (ternary) operator is the only JavaScript operator that takes three operands: a condition followed by a question mark (?), then an expression to execute if the condition is truthy followed by a colon (:), and finally the expression to execute if the condition is falsy. This operator is frequently used as an alternative to an if...else statement.)
*/

function gender(isMale) {
  return isMale ? "male" : "female";
}

console.log(gender(true));
console.log(gender(false));
console.log(gender(null));


/* ESERCIZIO 13
  Mostra i numeri da 0 a 5 (incluso) in ordine ascendente utilizzando un ciclo while.


let i = 0;

while (i <= 5) {
  console.log(i);
  i++;
}
*/

/* ESERCIZIO 14
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente utilizzando un ciclo for.
*/

/* 
for (let i = 0; i <= 10; i++) {
  console.log(i);
}
*/

/* ESERCIZIO 15
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente, ma evitando di mostrare i numeri 3 e 8.
*/

/*  for (let i = 0; i <= 10; i++) {
      if (i===3 || i===8) {
      continue;
      }
      console.log(i);
    } 
    
    */

/* ESERCIZIO 16
  Scrivi un ciclo in JavaScript per iterare da 0 a 15. Per ciascun elemento, il ciclo deve controllare the il valore corrente sia pari o dispari, e mostrare il risultato in console.
*/

/* 
    for (let i = 0; i <= 15; i++) {
      if (i % 2 === 0) {
    console.log(i + " è pari");
    } else {
    console.log(i + " è dispari");
    }
      console.log(i);
    } 

*/

/* ESERCIZIO 17
  Scrivi un algoritmo che iteri i numeri da 1 a 100, stampandoli in console. Se un valore tuttavia è multiplo di 3, stampa al suo posto la parola "Fizz" e se il numero è multiplo di 5, stampa "Buzz". Se le condizioni si verificano entrambe, stampa "FizzBuzz".
*/

/*
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(i + " FizzBuzz");
  } else if (i % 3 === 0) {
    console.log(i + " Fizz");
  } else if (i % 5 === 0) {
    console.log(i + " Buzz");
  } else {
    console.log(i);
  }
}
*/

/* ESERCIZIO 18
  Scrivi un algoritmo per controllare il giorno della settimana. Usa uno switch-case sulla variabile "day", che può avere un valore da 1 a 7.
  Ad esempio, se il valore di "day" è 1, stampa in console "Lunedì"; se il valore fosse 3, in console dovrebbe comparire "Mercoledì".
*/
let day = 3;
switch (day) {
  case 1:
    console.log("Lunedì");
    break;
  case 2:
    console.log("Martedì");
    break;
  case 3:
    console.log("Mercoledì");
    break;
  case 4:
    console.log("Giovedì");
    break;
  case 5:
    console.log("Venerdì");
    break;
  case 6:
    console.log("Sabato");
    break;
  case 7:
    console.log("Domenica");
    break;
  default:
    console.log("Valore non valido");
}


