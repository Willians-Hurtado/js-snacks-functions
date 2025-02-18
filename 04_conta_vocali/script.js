/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
function vowels(arr){

    let count = 0
   const typeVowels = ['a', 'e', 'i', 'o' , 'u']

   for (let i = 0; i < arr.length; i++) {
        const this_element = arr[i];
    
        if(typeVowels.includes(this_element)){
        count ++
        }
        
    }
    return count
}

// Invoca la funzione qui e stampa il risultato in console
const numero = vowels(word)
console.log(numero);



//Risultato atteso se si passa 'javascript': 3 (a, a, i)