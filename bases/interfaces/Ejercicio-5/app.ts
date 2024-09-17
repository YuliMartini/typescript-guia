// Crear interfaces

// Cree una interfaz para validar el auto (el valor enviado por parametro)
interface Auto {
  encender: boolean;
  velocidadMaxima: number;
  acelerar(): void;
}

const conducirBatimovil = (auto: Auto): void => {
  auto.encender = true;
  auto.velocidadMaxima = 100;
  auto.acelerar();
};

const batimovil: Auto = {
  encender: false,
  velocidadMaxima: 0,
  acelerar() {
    console.log("...... gogogo!!!");
  },
};

conducirBatimovil(batimovil);

// Cree una interfaz con que permita utilizar el siguiente objeto
// utilizando propiedades opcionales
interface Joker {
  reir?: boolean;
  comer?: boolean;
  llorar?: boolean;
}

const guason: Joker = {
  reir: true,
  comer: true,
  llorar: false,
};

const reir = (guason: Joker): void => {
  if (guason.reir) {
    console.log("JAJAJAJA");
  }
};

reir(guason);

// Cree una interfaz para la siguiente funcion
interface CiudadGoticaFn {
  (ciudadanos: string[]): number;
}

const ciudadGotica: CiudadGoticaFn = (ciudadanos: string[]): number => {
  return ciudadanos.length;
};

// Cree una interfaz que obligue crear una clase
// con las siguientes propiedades y metodos
/*
  propiedades:
    - nombre
    - edad
    - sexo
    - estadoCivil
    - imprimirBio(): void // en consola una breve descripcion.
*/
interface I_Persona {
  nombre: string;
  edad: number;
  sexo: string;
  estadoCivil: string;
  imprimirBio(): void;
}

class Persona implements I_Persona {
  constructor(
    public nombre: string,
    public edad: number,
    public sexo: string,
    public estadoCivil: string
  ) {}

  imprimirBio(): void {
    console.log(`Mi nombre es ${this.nombre} y tengo ${this.edad} años`);
  }
}

const persona = new Persona("Giuliana", 29, "Femenino", "Soltera");
console.log(persona);
persona.imprimirBio();
