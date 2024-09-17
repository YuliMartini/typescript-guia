(() => {
  const hero: string = "Flash";

  function returnName(): string {
    return hero;
  }

  const activateBatiSignal = (): string => {
    return "BatiSignal activated!";
  };

  console.log(typeof activateBatiSignal);

  const heroName = returnName();
})();
