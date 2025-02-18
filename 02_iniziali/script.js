/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

let names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.
 function firstChar(arr){

  //new array with firt Character about each word
  const initials = []

  for (let i = 0; i < arr.length; i++) {
    const this_initials = arr[i];

    initials.push(this_initials[0])
  }

  //return a new array with firt Character about each word
  return initials
  
 }


// Invoca la funzione qui e stampa il risultato in console
const initials = firstChar(names);
console.log(initials);

 


//Risultato atteso: ["A", "L", "M", "A", "G", "A"]





























/* const firstChar = names.map(firstLetter => {
    return firstLetter[0]
  });
  console.log(firstChar)
 */