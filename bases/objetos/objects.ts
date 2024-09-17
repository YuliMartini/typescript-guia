(() => {
  let flash: {
    name: string;
    age?: number;
    powers: string[];
    getName?: () => string;
  } = {
    name: "Barry Allen",
    age: 24,
    powers: ["Super Speed", "Time Travel"],
  };

  flash = {
    name: "Clark Kent",
    // age: 60,
    powers: ["Super Strength"],
    getName() {
      return this.name;
    },
  };
  //   console.log(flash.getName()); --> esto da el siguiente error: Cannot invoke an object which is possibly 'undefined'
  console.log(flash.getName?.() || "No existe el método"); //aqui verificamos primero si existe el metodo

  // al crear un nuevo objeto con la misma firma, el codigo se vuelve repetitivo, dificil de leer y de hacer cambios en sus propiedades
  let superman: {
    name: string;
    age?: number;
    powers: string[];
    getName?: () => string;
  } = {
    name: "Clark Kent",
    age: 60,
    powers: ["Super Strength", "Flight"],
  };
})();
