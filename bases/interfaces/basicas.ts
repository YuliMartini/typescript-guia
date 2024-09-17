(() => {
  interface Hero {
    name: string;
    age?: number;
    powers: string[];
    getName?: () => string;
  }

  let flash: Hero = {
    name: "Barry Allen",
    age: 24,
    powers: ["Super Speed", "Time Travel"],
  };

  let superman: Hero = {
    name: "Clark Kent",
    age: 60,
    powers: ["Super Strength", "Flight"],
    getName() {
      return this.name;
    },
  };

  //   console.log(flash);
  //   console.log(superman.getName?.() || "No existe el nombre");
})();
