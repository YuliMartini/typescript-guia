(() => {
  const batman: string = "Batman";
  const greenLantern: string = "Linterna Verde";
  const volcanNegro: string = `Héroe: Volcan Negro`;

  console.log(batman.toUpperCase());
  console.log(`I'm ${batman}`);
  console.log(batman[10]?.toUpperCase() || "No está presente");
})();
