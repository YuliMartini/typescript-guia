// los decoradores son functiones que se ejecutan al momento de compilacion o transpilacion
// class decorator
function printToConsole(constructor: Function) {
  console.log(constructor);
}

// factory decorator: no es más que una function que retorna otra funcion. Se llaman con ()
const printToConsoleConditional = (print: boolean = false): Function => {
  if (print) {
    return printToConsole;
  } else {
    return () => {};
  }
};

const blockPrototype = function (constructor: Function) {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
};

// method decorator. Solo en estos decoradores se recibe la prop 'descriptor'
function checkValidPokemonId() {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    // console.log({ target, propertyKey, descriptor });
    const originalMethod = descriptor.value;

    descriptor.value = (id: number) => {
      if (id < 1 || id > 800) {
        return console.error("El id del Pokemon debe estar entre 1 y 800");
      } else {
        return originalMethod(id);
      }
    };
  };
}

// property decorators
function readOnly(isWritable: boolean = true): Function {
  return function (target: any, propertyKey: string) {
    const descriptor: PropertyDescriptor = {
      get() {
        console.log(this, "getter");
        return "Yuli";
      },
      set(this, v) {
        Object.defineProperty(this, propertyKey, {
          value: v,
          writable: !isWritable,
          enumerable: false,
        });
      },
    };
    return descriptor;
  };
}

@blockPrototype
@printToConsoleConditional(false)
export class Pokemon {
  @readOnly()
  public publicApi: string = "https://pokeapi.co";

  constructor(public name: string) {}

  @checkValidPokemonId()
  savePokemonToDB(id: number) {
    console.log(`Pokemon guardado en DB: ${id}`);
  }
}
