//Crea una classe User per la creazione di oggetti di tipo “utente”.
// Il suo costruttore dovrà inizializzare ogni oggetto utente con i
//seguenti attributi:- firstName- lastName- age- location Aggiungi alla
//classe User anche un metodo che restituisca il confronto con l'età di
// un'altra persona. Ad esempio, date due istanze della classe utente “x”
// e “y” inizializzate con le proprietà sopra descritte, il metodo dovrà
//restituire una frase simile a “x è più vecchio di y” a seconda del
//risultato del confronto. Crea degli oggetti a partire dalla classe User
// e verifica che la comparazione tra le età funzioni correttamente.

class User {
  constructor(firstName, lastName, age, location) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.location = location;
  }

  //la classe user ha un costruttore che inizializza gli attributi "firstName",
  // lastname, age , location.

  compareAge(otherUser) {
    if (this.age > otherUser.age) {
      return `${this.firstName} è più vecchio di ${otherUser.firstName}.`;
    } else if (this.age < otherUser.age) {
      return `${this.firstName} è più giovane di ${otherUser.firstName}.`;
    } else {
      return `${this.firstName} ha la stessa età di ${otherUser.firstName}.`;
    }
  }

  //il metodo compareAge confronta l'età dell'istanza corrente con l'età
  // di un altro utente passato come argomento e restituisce una stringa
  //appropriata in  base al risultato del confronto
}

//creazione di due oggetti User

const utente1 = new User("Mario", "Rossi", 30, "Roma");
const utente2 = new User("Luigi", "Verdi", 25, "Milano");

// confronto l'età stampando il risultato

const risultatoConfronto = utente1.compareAge(utente2);
console.log(risultatoConfronto);
