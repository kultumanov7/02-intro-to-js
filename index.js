// football team
const manCity = {
  name: "Manchester City",
  founded: 1894,
  wonUCL: false,
  players: [
    "Kevin De Bruyne",
    "Erling Haaland",
    "Julian Alvarez",
    "Riyad Mahrez",
    "Ruben Dias",
    "Rodri",
    "Joao Cancelo",
  ],
  "Club value": null,
  budget: undefined,  
};

manCity.players.push("Sergio Aguero");
delete manCity["Club value"];
manCity.nickname = "The Citizens";
manCity['coach'] = "Pep Guardiola";

// work with objects
const vehicle = {};
vehicle.brandName = "Hyundai";
vehicle.model = "Santa Fe";
vehicle.model = "M1";
delete vehicle.model;

// iterating the object
let salaries = {
    Ainel: 100,
    Ayaulym: 200,
    Dalida: 300,
}

let sum = 0;
for (let key in salaries) {
    console.log(`${key}: ${salaries[key]}`);
    sum += salaries[key];
}
console.log(sum);