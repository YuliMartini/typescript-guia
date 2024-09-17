(() => {
  const addNumbers = (a: number, b: number) => a + b;
  const greet = (name: string) => `Hola ${name}`;
  const saveTheWorld = () => `El mundo está salvado!`;

  //   let myFunction: Function;

  //   myFunction = 10;
  //   console.log(myFunction);

  let myFunction: (y: number, z: number) => number;
  myFunction = addNumbers;
  console.log(myFunction(1, 2));

  let myFunction2: (y: string) => string;
  myFunction2 = greet;
  console.log(myFunction2("Yuli"));

  let myFunction3: () => string;
  myFunction3 = saveTheWorld;
  console.log(myFunction3());
})();
