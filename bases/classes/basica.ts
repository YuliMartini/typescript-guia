(() => {
  class Avenger {
    // private name: string;
    // public team: string;
    // public realName?: string;
    static avgAge: number = 35; //!las propiedades estaticas se pueden consumir de manera global haciendo referencia a la clase, y no a una instancia de ella
    static getAvgAge() {
      return this.name;
    }
    // constructor(name: string, team: string, realName?: string) {
    //   this.name = name;
    //   this.team = team;
    //   this.realName = realName;
    // }

    //     constructor(
    //       private name: string,
    //       public team: string,
    //       public realName?: string,
    //       avgAge: number = 40
    //     ) {
    //       Avenger.avgAge = avgAge;
    //     }
    //   } //* esto es un ejemplo, no se deben de modificar las propiedades estaticas de esta manera

    constructor(
      private name: string,
      public team: string,
      public realName?: string
    ) {}

    public bio(): string {
      return `${this.name} (${this.team})`;
    }
  }

  const antMan: Avenger = new Avenger("Antman", "Capitan", "Scott Lang");
  //   console.log(antMan);
  //   console.log(Avenger.avgAge);
  //   console.log(antMan.bio());
  //   console.log(Avenger.getAvgAge());
})();
