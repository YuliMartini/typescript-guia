(() => {
  type Avengers = {
    nick: string;
    ironman: string;
    vision: string;
    activo: boolean;
    poder: number;
  };

  const avengers: Avengers = {
    nick: "Samuel L. Jackson",
    ironman: "Robert Downey Jr.",
    vision: "Paul Bettany",
    activo: true,
    poder: 1500,
  };
  //   const { poder, vision } = avengers;
  //   console.log(poder, vision.toUpperCase());
  const printAvenger = ({ vision, ...resto }: Avengers) => {
    console.log(vision, resto);
  };
  //   printAvenger(avengers);

  const avengersArr: string[] = ["Capitan America", "Ironman", "Hulk"];
  const [capi, ironman] = avengersArr;
  //   console.log({ capi, ironman });

  const avengerTuple: [string, boolean, number] = [
    "Capitan America",
    true,
    150.5,
  ];
  const [capitan, alive, power] = avengerTuple;
  //   console.log({ capitan, alive, power });
})();
