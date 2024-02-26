//Crea un form per la creazione di oggetti “Pet” (animali domestici).
//La classe Pet dovrà essere dotata delle seguenti proprietà:- petName-
// ownerName- species // (cane, gatto, coniglio etc.)- breed // (labrador,
// soriano, nano etc.) Nella classe che utilizzerai per creare questi
//oggetti aggiungi anche un metodo che restituisca true se due animali
//condividono lo stesso padrone. Crea, raccogliendo i dati dal form,
//diverse istanze della classe Pet e mostrane i dati in una lista
// sottostante.

let petNameField = document.getElementById("petName-field");
let ownerNameField = document.getElementById("ownerName-field");
let speciesField = document.getElementById("species-field");
let breedField = document.getElementById("breed-field");

let petList = document.getElementById("petList");
let addButton = document.getElementById("add");

let pets = [];

//qui vengono dichiarate variabili per gli elementi del documento HTML che verranno manipolati
// dallo script. In particolare, ci sono variabili per i campi di input (petNameField, ownerNameField,
// speciesField, breedField ), la lista petList, il pulsante aggiungi (addButton) e un array vuoto
//pets che conterrà gli oggetti pet

class Pet {
  constructor(petName, ownerName, species, breed) {
    this.petName = petName;
    this.ownerName = ownerName;
    this.species = species;
    this.breed = breed;
  }

  checkSameOwner(anotherPet) {
    if (this.ownerName === anotherPet.ownerName) {
      return true;
    } else {
      return false;
    }
  }
}

//viene definita una classe pet con un costruttore che inizializza le proprietà dell'animale
// la classe ha anche un metodo checkSameOwner che restituisce true se due animali hanno
//lo stesso proprietario, altrimenti restituisce false.

const renderList = function () {
  petList.innerHTML = ""; // <-- svuota la lista all'inizio
  pets.forEach((pet) => {
    const newLi = document.createElement("li");
    newLi.innerText =
      "Nome: " +
      pet.petName +
      ", proprietario: " +
      pet.ownerName +
      ", specie:" +
      pet.species +
      ", razza:" +
      pet.breed;
    petList.appendChild(newLi);
  });
};

// const renderList = function () {
//     petList.innerHTML = ""; // <-- svuota la lista all'inizio
//     pets.forEach((pet) => {
//       const newLi = document.createElement("li");
//       newLi.innerText =
//         "Nome: " +  pet.petName;

//la funzione renderList svuota la lista (ul) nel documento HTML
//itera (cioè esegue una serie di istruzioni ripetutamente per esempio in un ciclo,
//per esaminare o manipolare una sequenza di elementi(for e forEach) la fumzione for each in questo
//caso si sta iterando sull'array pets; per ogni animale(pet) nell'array, viene eseguito il
//blocco di codice all'interno delle graffe
//nel codice vengono eseguite le seguenti operazioni
//viene creato un nuovo elemento li (elemento lista)
//il testo interno dell'elemento li viene impostato con le informazioni sull'animale, come il
//nome dell'animale (pet.petName) e il nome del poprietario (pet.ownerName)
// l'elemento li viene quindi aggiunto alle lista ul nel documento html
//Quindi, l'iterazione qui sta percorrere ogni animale nell'array pets e creare un elemento
//di lista HTML per ciascuno di essi, aggiungendolo alla lista visualizzata nella pagina web.

addButton.onclick = function () {
  let newPet = new Pet(
    petNameField.value,
    ownerNameField.value,
    speciesField.value,
    breedField.value
  );
  pets.push(newPet);
  renderList();
  petNameField.value = ""; // <-- svuota l'input field alla fine
  ownerNameField.value = ""; // <-- svuota l'input field alla fine
  speciesField.value = ""; // <-- svuota l'input field alla fine
  breedField.value = ""; // <-- svuota l'input field alla fine
};

//quando il pulsante aggiungi viene cliccato, viene creato un nuovo oggetto pet utilizzando i
//valori di input.
// l'oggetto pet viene quindi aggiunto all'array pets
// viene chiamata la funzione renderList per aggiornare la viasualizzazione della lista
// gli input vengono svuotati alla fine del processo
