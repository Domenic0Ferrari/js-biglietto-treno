/*
Il programma dovrà chiedere all'utente:
1) Numero di chilometri che vuole percorrere;
2) Età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
1) Il prezzo del biglietto è definito in base ai km (0.21 € al km);
2) Va applicato uno sconto del 20% per i minorenni;
3) Va applicato uno sconto del 40% per gli over 65;
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).
*/

/*
Fare un prompt dove chiedo i kilometri che vuole percorrere
Fare un prompt dove chiedo l'età della persona
Calcolare il prezzo totale del viaggio
Applicare sconto a seconda dell'età delle persone
Stampare l'output con massimo due decimali
*/ 

const userKm = parseInt(prompt("Quanti km vuoi percorrere?"));
const userAge = parseInt(prompt("Quanti anni hai?"));

const prezzoAlKm = 0.21;

const calcolaPrezzoTotale = (userKm * prezzoAlKm).toFixed(2);

console.log(calcolaPrezzoTotale);

const scontoVenti = (calcolaPrezzoTotale - (calcolaPrezzoTotale / 100 * 20)).toFixed(2);

console.log(scontoVenti);

const scontoQuaranta = (calcolaPrezzoTotale - (calcolaPrezzoTotale / 100 * 40)).toFixed(2);

console.log(scontoQuaranta);

if (userAge < 18){
    document.getElementById("price").innerHTML = scontoVenti;
} else if (userAge > 65){
    document.getElementById("price").innerHTML = scontoQuaranta;
} else{
    document.getElementById("price").innerHTML = calcolaPrezzoTotale;
}