(() => {
  class Avenger {
    constructor(public name: string, public realName: string) {
      // console.log("Constructor Avenger llamado");
    }

    protected getFullName(): string {
      return `${this.name} ${this.realName}`;
    }
  }

  class Xmen extends Avenger {
    constructor(name: string, realName: string, public isMutant: boolean) {
      super(name, realName);
      // console.log("Constructor Xmen llamado");
    }

    get fullName(): string {
      return `${this.name} - ${this.realName}`;
    }

    set fullName(name: string) {
      if (name.length <= 3) {
        throw new Error("El nombre debe de ser mayor de 3 letras");
      }
      this.name = name;
    }

    getFullNameDesdeXmen(): void {
      console.log(super.getFullName());
    }
  }

  const wolverine: Xmen = new Xmen("Lobezno", "Logan", true);
  // console.log(wolverine);
  //   wolverine.getFullNameDesdeXmen();
  // console.log(wolverine.fullName); // los getters solo se mandan a llamar, no se ejecutan
  wolverine.fullName = "Wolverine";
  //   console.log(wolverine.fullName);
})();
