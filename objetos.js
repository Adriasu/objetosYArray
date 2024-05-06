// EJERCICIO 1

const citizen1 = {
  name: "Adriana",
  lastName: "Suarez",
  age: 33,
};

// EJERCICIO 2

citizen1.city = "Bucaramanga";
citizen1.age = 34;

console.log(citizen1);

// EJERCICIO 3

function checkCitizenship(objeto) {
  for (let key in citizen1) {
    if (key === "age") {
      if (citizen1[key] > 18) {
        return (citizen1.canVote = true);
      } else return (citizen1.canVote = false);
    }
  }
}

checkCitizenship(citizen1);
console.log(citizen1);

// EJERCICIO 4

// const userName = prompt("Ingrese su nombre");
// const userLastName = prompt("Ingrese su apellido");
// const userAge = prompt("Ingrese su edad");

const citizenArray = [];

function createCitizen(nombre, apellido, edad) {
  if (
    typeof nombre === "string" &&
    typeof apellido === "string" &&
    typeof edad === "string"
  ) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    return;
  } else return console.log("tipo de dato no valido");
}

function newObjet(userName, userLastName, userAge) {
  let objetName = new createCitizen(userName, userLastName, userAge);
  console.log(objetName);
  citizenArray.push(objetName);
  console.log(citizenArray);
  return;
}

newObjet("adriana", "suárez", "33");
newObjet("pepto", "juan", "30")


