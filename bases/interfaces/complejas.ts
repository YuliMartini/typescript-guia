(() => {
  // las interfaces no crean instancias

  interface Client {
    name: string;
    age?: number;
    address: Address;
    getFullAddress(id: string): string;
  }

  interface Address {
    id: number;
    zipcode: string;
    city: string;
  }

  const client: Client = {
    name: "Giuliana",
    age: 29,
    address: {
      id: 125,
      zipcode: "KY2 SUD",
      city: "Ottawa",
    },
    getFullAddress(id: string) {
      return this.address.city;
    },
  };

  const client2: Client = {
    name: "Melissa",
    age: 30,
    address: {
      id: 120,
      zipcode: "K2S U2A",
      city: "Toronto",
    },
    getFullAddress(id: string) {
      return this.address.city;
    },
  };
})();
