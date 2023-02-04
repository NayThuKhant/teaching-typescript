class BaseCitizen {
  country: string

  constructor(country: string) {
    this.country = country
  }
}

class USCitizen extends BaseCitizen {
  constructor(public name: string) {
    super('United States') // Constructors for derived classes must contain a 'super' call - without a super call
  }

  shouldPayTax() {
    console.log(`${this.name} is from ${this.country} and must pay tax`) // notice that we have to access parent properties using this keyword, same as js
  }
}

const aUSCitizen = new USCitizen('ABC')
aUSCitizen.shouldPayTax()
