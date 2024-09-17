(() => {
  // las clases abstractas no sirven para crear instancias
  // sirven para que otras clases extiendan de ella
  abstract class Mutante {
    constructor(public name: string, public realName: string) {}
  }

  class Xmen extends Mutante {
    salvarMundo(): string {
      return "Mundo salvado!";
    }
  }
  class Villain extends Mutante {
    conquistarMundo(): string {
      return "Mundo conquistado!";
    }
  }

  const wolverine: Xmen = new Xmen("Wolverine", "Logan");
  const magneto: Villain = new Villain("Magneto", "Magnus");

  //   console.log(wolverine.salvarMundo());
  //   console.log(magneto.conquistarMundo());
  const printName = (character: Mutante): void => {
    console.log(character.realName);
  };
  //   printName(wolverine);
  //   printName(magneto);
})();
