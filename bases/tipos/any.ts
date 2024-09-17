(() => {
  // prefentemente no utilizar nunca el typo 'any'
  let avenger: any = 123;
  let exists;
  let power;

  avenger = "Doctor Strange";
  //   console.log(avenger.charAt(0));
  console.log((avenger as string).charAt(0)); //casteo propio de ts

  avenger = 150.23348378;
  //   console.log(avenger.toFixed(2));
  console.log((<number>avenger).toFixed(2)); //casteo

  console.log(exists);
  console.log(power);
})();
