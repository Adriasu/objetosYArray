// // EJERCICIO 1

// const firstArray = [];

// // EJERCICIO 2

// const secondArray = [3, "nana", true];

// // EJERCICIO 3.1

// const animalArray = [];

// animalArray.push("dog");
// animalArray.push("cat");
// animalArray.unshift("fish");
// animalArray.unshift("lizard");

// animalArray.pop();
// animalArray.shift();

// console.log(animalArray.length);

// // EJERCICIO 3.2

// const classNames = ["Gabriela", "Adriana", "Jesus Raad", "Andrea", "Javmir", "Roger", "Jesus Aleman"];
// console.log(classNames[1]);

// // EJERCICIO 4

// const names = ["Carlos", "María", "Isidro", "Elizondo", "Molina"];
// console.log(names.slice(1,3));

// names.splice(3,1,"Parma");
// console.log(names);

// // EJERCICIO 5

// console.log(names.join(" "));

// // EJERCICIO 6

// const sentence = "El perro de San Roque no tiene rabo"
// console.log(sentence.split(" "));
// console.log(sentence.split(""));

// // EJERCICIO 7

// const numbersArray = [];

// function readNumbers() {
//   while (true) {
//     let enteredNumber = prompt("Ingresa número");
//     numbersArray.push(enteredNumber);
//     if (isNaN(enteredNumber) || enteredNumber == 0) break;
//   }
//   numbersArray.pop();
//   console.log(numbersArray);

//   let evenCount = 0;
//   let oddCount = 0;
//   for (let i = 0; i < numbersArray.length; i++) {
//     if (i % 2 === 0) {
//       evenCount += 1;
//     } else {
//       oddCount += 1;
//     }
//   }
//   return `Hay ${evenCount} números pares y hay ${oddCount} números impares.`;
// }
// console.log(readNumbers());

// // EJERCICIO 8

// const serviceDay = prompt(
//   "Ingrese el día de la semana que quiere el servicio"
// ).toLocaleLowerCase();
// const weeklyShifts = [
//   ["lunes", "maria"],
//   ["martes", "luis"],
//   ["miercoles", "antonia"],
//   ["jueves", "pedro"],
//   ["viernes", "marisa"],
//   ["sabado", "sin servicio"],
//   ["domingo", "sin servicio"],
// ];

// function customerService(serviceDay) {
//   for (let i = 0; i < weeklyShifts.length; i++) {
//     if (serviceDay === weeklyShifts[i][0]) {
//       return `Este dia se encarga ${weeklyShifts[i][1]}`;
//     }
//   }
//   return "Dato no válido";
// }

// console.log(customerService(serviceDay));
