/*
1. Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
2. Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
3. Creare un array di oggetti di studenti (ossìa oggetti con le proprietà sopra descritte).
4. Ciclare su tutti gli studenti e stampare per ognuno di essi: nome e cognome.
----------
5. Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere all’array creato in precedenza, un nuovo oggetto studente inserendo nell’ ordine: nome, cognome e età.
*/



// PRENDO NOME,COGNOME,ETA DAL DOM
const userName = document.getElementById('name');
const userSurname = document.getElementById('surname');
const userAge = document.getElementById('age');
// PRENDO IL BOTTONE
const btnAdd = document.getElementById('add');

btnAdd.addEventListener('click', function () {
    const userNameValue = userName.value;
    const userSurnameValue = userSurname.value;
    const userAgeValue = userAge.value;
    // console.log(userNameValue, userSurnameValue, userAgeValue);
})

// oggetto studente (nome,cognome,eta)
const student = {
    nome: 'Matteo',
    cognome: 'Filippini',
    eta: 20
}
// for in studente
for (let key in student) {
    // console.log(`${key}: ${student[key]}`)
}

// array di oggetti studenti
const students = [
    { nome: 'Luca', cognome: 'Garda', eta: 20 },
    { nome: 'Matteo', cognome: 'Filippini', eta: 21 },
    { nome: 'Pietro', cognome: 'Fontana', eta: 43 },
    { nome: 'Davide', cognome: 'Filippini', eta: 33 }
]

// for in studente
for (let i = 0; i < students.length; i++) {
    const current = students[i];
    // console.log('STUDENTE-----------')
    for (let key in students[i]) {
        // console.log(`${key}: ${students[i][key]}`)
    }
}


// creo l oggetto
const ogg = {
    // nome: prompt('Inserisci il nome dello studente che vuoi inserire', 'Carlo').trim(),
    // cognome: prompt('Inserisci il ccognome dello studente che vuoi inserire', 'Farina').trim(),
    // eta: prompt('Inserisci l eta dello studente che vuoi inserire', 4).trim()
}

// metto nell array l oggetto
students.push(ogg);


for (let i = 0; i < students.length; i++) {
    const current = students[i];
    // console.log('STUDENTE-----------')
    for (let key in students[i]) {
        // console.log(`${key}: ${students[i][key]}`)
    }
}

