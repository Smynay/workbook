class Emplovee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }

  responsibilities() {}

  work() {
    return `${this.name} does ${this.responsibilities()}`;
  }

  getPaid() {
    return `${this.name} salary is ${this.salary}`;
  }
}

class Developer extends Emplovee {
  constructor(name, salary) {
    super(name, salary);
  }

  responsibilities() {
    return 'programms';
  }
}

class Tester extends Emplovee {
  constructor(name, salary) {
    super(name, salary);
  }

  responsibilities() {
    return 'testing';
  }
}

const dev = new Developer('Vlad', 100000);
console.log(dev.getPaid());
console.log(dev.work());

const tester = new Tester('Lena', 90000);
console.log(tester.getPaid());
console.log(tester.work());
