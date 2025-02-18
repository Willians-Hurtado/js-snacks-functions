/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
function findStr(arr, char){
    
    const word = []
    for (let i = 0; i < arr.length; i++) {
        const this_element = arr[i];
        
        const initials = this_element[0].toLowerCase()

        if(initials == char.toLowerCase()){
            word.push(this_element)
        }
    }

    return word
    
    
}

// Invoca la funzione qui e stampa il risultato in console
const filterNames = findStr(names, 'a');

console.log(filterNames);




//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]