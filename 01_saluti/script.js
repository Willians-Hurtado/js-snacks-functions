/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const userName = prompt("Write your name");
console.log(userName);


// Dichiara la funzione qui.
function hiName() {
    console.log(`Hi ${userName}`);
    
}

// Invoca la funzione qui e stampa il risultato in console
hiName()


//Risultato atteso se si passa 'Mario': // ciao Mario
