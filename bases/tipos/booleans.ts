(() => {
  let isSuperman: boolean = true;
  let isBatman: boolean = false;

  isSuperman = true && false;
  isSuperman = isBatman ? true : false;

  console.log({ isSuperman });
  console.log({ isBatman });
})();
