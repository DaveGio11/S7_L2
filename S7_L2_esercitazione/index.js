class User {
  constructor(firstName, lastName, age, location) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.location = location;
  }

  static isSameAge(utenteA, utenteB) {
    return utenteA.age > utenteB.age
      ? "l'utente " + utenteA.firstName + " è più grande di " + utenteB.firstName
      : "l'utente " + utenteA.firstName + " è più piccolo o ha la stessa età di " + utenteB.firstName;
  }
}

const utente1 = new User("Mario", "Rossi", 80, "Betlemme");
console.log(utente1);
const utente2 = new User("Germano", "Mosconi", 33, "Paradiso");
console.log(utente2);
console.log(User.isSameAge(utente1, utente2));

class Pet {
  constructor(petName, ownerName, species, breed) {
    this.petName = petName;
    this.ownerName = ownerName;
    this.species = species;
    this.breed = breed;
  }

  hasSameOwner(otherPet) {
    return this.ownerName === otherPet.ownerName;
  }
}

function createPet() {
  const petName = document.getElementById("petName").value;
  const ownerName = document.getElementById("ownerName").value;
  const species = document.getElementById("species").value;
  const breed = document.getElementById("breed").value;

  const newPet = new Pet(petName, ownerName, species, breed);
  displayPet(newPet);
}

function displayPet(pet) {
  const petList = document.getElementById("petList");
  const listItem = document.createElement("li");
  listItem.textContent = `Pet Name: ${pet.petName}, Owner Name: ${pet.ownerName}, Species: ${pet.species}, Breed: ${pet.breed}`;
  petList.appendChild(listItem);

  let sharesOwner = false;
  for (let i = 0; i < petList.children.length - 1; i++) {
    const previousPet = petList.children[i].petObject;
    if (pet.hasSameOwner(previousPet)) {
      sharesOwner = true;
      break;
    }
  }

  if (sharesOwner) {
    listItem.textContent += " (Questo padrone ha un altro animale)";
  }

  
  listItem.petObject = pet;
}
