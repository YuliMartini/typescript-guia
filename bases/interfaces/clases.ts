(() => {
  interface Xmen {
    name: string;
    realName: string;
    mutantPower(id: number): string;
  }

  interface Human {
    age: number;
  }

  class Mutant implements Xmen, Human {
    // public name: string;
    // public realName: string;
    // public age: number;

    constructor(
      public name: string,
      public realName: string,
      public age: number
    ) {}

    mutantPower(id: number) {
      return `${this.name} - ${this.realName}`;
    }
  }

  const wolverine = new Mutant("Wolverine", "Logan", 45);
  console.log(wolverine);
  console.log(wolverine.mutantPower(1));
})();
