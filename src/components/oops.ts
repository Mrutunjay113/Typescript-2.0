/**
 * TOPICS — Classes (object-oriented TypeScript)
 * ---------------------------------------------
 * A class is a blueprint. `new` creates an instance. Access modifiers
 * control who can read a field. Inheritance (extends) is "is-a".
 * Composition is "has-a": a machine holds a heater instead of being one.
 *
 * What you practice here:
 * - Constructors and instances
 * - public / private / protected
 * - #private fields (real JS privacy)
 * - readonly, getters/setters, static members
 * - Parameter properties
 * - Abstract classes
 * - Composition
 *
 * EXAMPLE USES
 * - new ChaiMaker("masala") → one machine set to masala
 * - Shop / Branch → branch can read protected shopName
 * - Wallet.#balance → money hidden; only getBalance() shows it
 * - ModernChai.sugar = 10 → setter blocks invalid sugar
 * - EkChai.shopName → one shop name shared by the whole class
 * - ChaiMakerMachine(heater) → reuse Heater without inheriting it
 */

// What I did: declared a class that stores one flavour.
class ChaiMaker {
  // What I did: said every instance has a string flavour (set in the constructor).
  flavour: string;

  // What I did: ran this setup code whenever someone writes `new ChaiMaker(...)`.
  constructor(flavour: string) {
    // What I did: saved the argument onto the instance.
    this.flavour = flavour;
  }
}

// What I did: created one ChaiMaker instance with flavour "masala".
const masalaChai = new ChaiMaker("masala");

class ChaiMaker2 {
  // What I did: marked flavour public (anyone can read/write it).
  public flavour: string = "masala";
  // What I did: hid the recipe string so only this class can use it.
  private secretIngredients = "Cardamom";

  // What I did: added a method that can still read the private field.
  reveal() {
    // What I did: returned the private ingredient from inside the class.
    return this.secretIngredients;
  }
}

// What I did: made a base shop class with a protected name.
class Shop {
  // What I did: allowed this class and subclasses to read shopName, not outsiders.
  protected shopName = "Chai Wala";
}

// What I did: made Branch inherit Shop (it is-a Shop).
class Branch extends Shop {
  // What I did: exposed the protected name through a public method.
  getShopName() {
    // What I did: read shopName from the parent (allowed because of protected).
    return this.shopName;
  }
}

// What I did: created a Branch instance.
const branch = new Branch();
// What I did: called the public getter (I did not read shopName directly).
branch.getShopName();

class Wallet {
  // What I did: used a real JS private field so even JS outside cannot see it.
  #balance = 100;
  // What I did: added a public method to read the hidden balance.
  getBalance() {
    // What I did: returned #balance from inside Wallet only.
    return this.#balance;
  }
}

// What I did: created a Wallet.
const w = new Wallet();
// What I did: referenced getBalance but did not call it (missing ()).
w.getBalance;

class Cup5 {
  // What I did: set a default capacity that can still be overwritten in the constructor.
  readonly capacity: number = 250;
  // What I did: accepted a capacity when creating the cup.
  constructor(capacity: number) {
    // What I did: assigned capacity here — allowed because we are still in the constructor.
    this.capacity = capacity;
  }
}

// What I did: created a cup with capacity 300.
const c = new Cup5(300);
// What I did: left a later assignment commented — readonly would error.
// c.capacity = 300;

class ModernChai {
  // What I did: stored sugar in a private backing field, default 2.
  private _sugar = 2;

  // What I did: added a getter so `m.sugar` reads _sugar.
  get sugar() {
    // What I did: returned the current sugar amount.
    return this._sugar;
  }
  // What I did: added a setter so `m.sugar = x` validates then stores x.
  set sugar(sugar: number) {
    // What I did: rejected negative sugar.
    if (sugar < 0) throw new Error("Sugar cannot be negative");

    // What I did: rejected sugar above 10.
    if (sugar > 10) throw new Error("Too much sugar");

    // What I did: saved the valid amount.
    this._sugar = sugar;
  }
}

// What I did: created a ModernChai (starts at 2 spoons).
const m = new ModernChai();
// What I did: used the setter to set sugar to 10.
m.sugar = 10;
// What I did: used the getter and printed sugar.
console.log(m.sugar);

class EkChai {
  // What I did: put shopName on the class itself, not on each instance.
  static shopName = "chai wala";

  // What I did: used a parameter property — `public flavour` creates this.flavour.
  constructor(public flavour: string) {}
}

// What I did: read the static shop name from the class.
console.log(EkChai.shopName);

// What I did: declared an abstract drink type that cannot be `new`ed directly.
abstract class Drinks {
  // What I did: forced every subclass to implement make().
  abstract make(): void;
}

// What I did: wrote a concrete drink that implements make().
class Mychai extends Drinks {
  // What I did: provided the required make() body.
  make() {
    // What I did: logged that this chai is being made.
    console.log("Making my chai");
  }
}

// What I did: wrote a small helper that only knows how to heat.
class Heater {
  // What I did: left heat() empty as a placeholder.
  heat() {}
}
// What I did: built a machine that has-a Heater instead of extending Heater.
class ChaiMakerMachine {
  // What I did: injected heater as a private constructor property.
  constructor(private heater: Heater) {}
  // What I did: added makeChai to use the heater, then log.
  makeChai() {
    // What I did: asked the composed heater to heat.
    this.heater.heat();
    // What I did: logged that chai is being made.
    console.log("Making chai");
  }
}
