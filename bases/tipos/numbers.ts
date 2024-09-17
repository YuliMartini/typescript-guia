(() => {
  let avengers: number = 10;

  console.log(avengers);

  const villains: number = 20;

  if (avengers < villains) {
    console.log("Estamos en problemas D:");
  } else {
    console.log("Estamos salvados!!");
  }

  // avengers = Number("55");
  avengers = Number("123A"); // this converts to NaN, which is considered to be of type number

  console.log({ avengers });
})();
