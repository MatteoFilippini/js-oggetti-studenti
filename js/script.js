/*
1. Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
2. Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
3. Creare un array di oggetti di studenti (ossìa oggetti con le proprietà sopra descritte).
4. Ciclare su tutti gli studenti e stampare per ognuno di essi: nome e cognome.
5. Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere all’array creato in precedenza, un nuovo oggetto studente inserendo nell’ ordine: nome, cognome e età.
*/

// oggetto studente (nome,cognome,eta)
// for in studente

// array di oggetti studenti
// for in studente
const student = {
    nome: 'Matteo',
    cognome: 'Filippini',
    eta: 20
}

for (let key in student) {
    console.log(`${key}: ${student[key]}`)
}

// console.log(student)