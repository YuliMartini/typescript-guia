(() => {
  //   const numbers: (string | number | boolean)[] = [1, 2, 3, 4, 5, "6", 7, 8, 9, 10];
  //   numbers.push(true);
  //   console.log(numbers);
  const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const villains = ["Omega Rojo", "Dormammu", "Duende Verde"];

  villains.forEach((v) => console.log(v.toUpperCase()));

  numbers.forEach((num) => console.log(num));
})();
