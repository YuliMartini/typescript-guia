import powers from "../data/Powers";

export class Hero {
  constructor(
    public name: string,
    public powerId: number,
    public age: number
  ) {}

  get power(): string {
    return (
      powers.find((power) => power.id === this.powerId)?.description ||
      "power not found"
    );
  }
}

export class Hero2 {
  constructor(
    public name: string,
    public powerId: number,
    public age: number
  ) {}
}

export class Hero3 {}
