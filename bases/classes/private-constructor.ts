(() => {
  // un constructor privado se puede utilizar para controlar la manera en la cual sus instancias son ejecutadas, por ejemplo manjear Singletons
  // es decir, una unica instancia a traves de toda la aplicacion

  class Apocalipsis {
    static instance: Apocalipsis;

    //el constructor privado solo puede ser llamado dentro de la misma clase
    private constructor(public name: string) {}

    static callApocalipsis(): Apocalipsis {
      if (!Apocalipsis.instance) {
        Apocalipsis.instance = new Apocalipsis("Soy Apocalipsis, el único");
      }
      return Apocalipsis.instance;
    }

    changeName(newName: string): void {
      this.name = newName;
    }
  }

  //   const apocalipsis = new Apocalipsis("Soy Apocalipsis... el único");
  const apocalipsis = Apocalipsis.callApocalipsis();
  const apocalipsis2 = Apocalipsis.callApocalipsis();
  apocalipsis.changeName("Xavier");
  console.log(apocalipsis);
  console.log(apocalipsis2);
})();
