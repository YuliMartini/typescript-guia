// import { Hero, Hero2 as SuperHero } from "./classes/Hero";
// const ironman = new Hero("Ironman", 1, 45);
// console.log(ironman.power);

// import * as HeroClasses from "./classes/Hero";
// import powers from "./data/Powers";
// const ironman = new HeroClasses.Hero("Ironman", 1, 45);
// const capitan = new HeroClasses.Hero2("Capitan America", 2, 36);

//generics
import {
  printObject,
  genericFunction,
  genericArrowFunction,
} from "../generics/Generics";
import { Villain, Hero } from "../interfaces";

// printObject(123);
// printObject(new Date());
// printObject([1, 2, 3, 4, 5]);
// printObject("Hola Mundo");

// const name: string = "Giuliana";

// console.log(genericFunction(3.141618).toFixed(2));
// console.log(genericFunction(name).toUpperCase());
// console.log(genericArrowFunction(3.141618).toFixed(2));
// console.log(genericArrowFunction(name).toUpperCase());

const deadpool = {
  name: "Deadpool",
  realName: "Wade Winston Wilson",
  dangerLevel: 130,
};

console.log(genericArrowFunction<Villain>(deadpool).dangerLevel);

import { getPokemon } from "../generics/getPokemon";

getPokemon(4)
  .then((pokemon) => console.log(pokemon.name))
  .catch((error) => console.log(error))
  .finally(() => console.log("fin de getPokemon()"));
