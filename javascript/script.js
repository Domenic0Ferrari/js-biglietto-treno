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
Chiedere numero di km da percorrere
Chiedere età del passeggero
*/ 

const userKm = parseInt(prompt("Quanti km vuoi percorrere?"))
const userAge = parseInt(prompt("Quanti anni hai?"))