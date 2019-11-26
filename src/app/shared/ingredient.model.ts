export class Ingredient {
  public name: string;
  public amount: number;

  constructor(name: string, amount: number) {
    this.name = name;
    this.amount = amount;
  }

  // In place of code above, we can also set everything up in the constructor
  
  /* 
  
  constructor(public name: string, public amount: number) {}

  */
}