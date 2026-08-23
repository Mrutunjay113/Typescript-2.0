/**
 * TOPICS COVERED — Object-oriented TypeScript (classes)
 * ------------------------------------------------------
 * 1. Classes, constructors, and creating instances with `new`
 * 2. Access modifiers: public, private, protected
 * 3. Inheritance with extends
 * 4. True JS private fields (#field)
 * 5. readonly properties
 * 6. Getters and setters with validation
 * 7. Static members (belong to the class, not instances)
 * 8. Parameter properties in constructors
 * 9. Abstract classes and required method implementations
 * 10. Composition (has-a) vs inheritance (is-a)
 */

// Declares a class named ChaiMaker (blueprint for chai-maker objects)
class ChaiMaker {
  // Instance property flavour must be a string (assigned in the constructor)
  flavour: string;

  // Constructor runs when you create an instance with `new`
  constructor(flavour: string) {
    // Stores the constructor argument on the instance
    this.flavour = flavour;
  }
}

// Creates an instance of ChaiMaker with flavour "masala"
const masalaChai = new ChaiMaker("masala");

// Access modifiers control where properties/methods can be used

class ChaiMaker2 {
  // public: accessible from anywhere (default if you omit the modifier)
  public flavour: string = "masala";
  // private: only usable inside this class body
  private secretIngredients = "Cardamom";

  // Method that can still read the private field (same class)
  reveal() {
    // Allowed: private members are visible inside the declaring class
    return this.secretIngredients;
  }
}

// Base class with a protected field
class Shop {
  // protected: visible in this class and subclasses, not from outside
  protected shopName = "Chai Wala";
}

// Branch inherits from Shop (gets Shop's members)
class Branch extends Shop {
  // Public method that exposes the protected shop name safely
  getShopName() {
    // Allowed: subclass can read protected members from the parent
    return this.shopName;
  }
}

// Creates a Branch instance
const branch = new Branch();
// Calls the public method; protected shopName itself is not accessed here directly
branch.getShopName();

class Wallet {
  // #balance is a true JS private field (hard privacy, not just TypeScript)
  #balance = 100;
  // Public method that exposes the private balance safely
  getBalance() {
    // Only code inside Wallet can read #balance
    return this.#balance;
  }
}

// Creates a Wallet instance
const w = new Wallet();
// References the getBalance method (note: not calling it — missing ())
w.getBalance;

// readonly: can be set in the declaration/constructor, not reassigned later
class Cup5 {
  // Initial default capacity; still overridable in the constructor
  readonly capacity: number = 250;
  // Constructor accepts a capacity override
  constructor(capacity: number) {
    // Allowed: readonly can be assigned inside the constructor
    this.capacity = capacity;
  }
}

// Creates a Cup5 with capacity 300
const c = new Cup5(300);
// Would error: cannot assign to a readonly property after construction
// c.capacity = 300;

// Getters and setters: property-like access with custom logic

class ModernChai {
  // Backing field (private) stores the real sugar value
  private _sugar = 2;

  // Getter: reading m.sugar runs this method
  get sugar() {
    // Returns the current private sugar amount
    return this._sugar;
  }
  // Setter: writing m.sugar = x runs this method with x as sugar
  set sugar(sugar: number) {
    // Rejects negative amounts
    if (sugar < 0) throw new Error("Sugar cannot be negative");

    // Rejects amounts above 10
    if (sugar > 10) throw new Error("Too much sugar");

    // Stores the validated value
    this._sugar = sugar;
  }
}

// Creates a ModernChai instance (default _sugar is 2)
const m = new ModernChai();
// Uses the setter to set sugar to 10
m.sugar = 10;
// Uses the getter to read and print sugar
console.log(m.sugar);

// Static members belong to the class itself, not each instance

class EkChai {
  // Static property: accessed as EkChai.shopName, not instance.shopName
  static shopName = "chai wala";

  // Parameter property: `public flavour` creates and assigns this.flavour automatically
  constructor(public flavour: string) {}
}

// Reads the static property from the class (not from an instance)
console.log(EkChai.shopName);

// Abstract classes cannot be instantiated directly; they define a contract for subclasses

abstract class Drinks {
  // Abstract method: subclasses must implement make()
  abstract make(): void;
}

// Concrete subclass that implements the abstract make method
class Mychai extends Drinks {
  // Required implementation of Drinks.make
  make() {
    // Logs that this concrete drink is being made
    console.log("Making my chai");
  }
}

// Composition over inheritance: build behavior by combining objects

// Small helper class that knows how to heat
class Heater {
  // Empty heat method (placeholder for heating logic)
  heat() {}
}
// Machine that depends on a Heater (has-a relationship) instead of extending it
class ChaiMakerMachine {
  // Constructor injects a private heater dependency (also creates this.heater)
  constructor(private heater: Heater) {}
  // Public method that uses the heater then makes chai
  makeChai() {
    // Delegates heating to the composed Heater instance
    this.heater.heat();
    // Then logs that chai is being made
    console.log("Making chai");
  }
}
