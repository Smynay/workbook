//Objects

const person = {
  name: 'Max',
  age: 26,
  job: 'Full',
};

const op = new Proxy(person, {
  get(target, prop) {
    // console.log(`Get prop ${prop}`);
    // console.log('Target', target);
    // console.log('Prop', prop);

    if (!(prop in target)) {
      return prop
        .split('_')
        .map((p) => target[p])
        .join(' ');
    }

    return target[prop];
  },
  set(target, prop, value) {
    if (prop in target) {
      target[prop] = value;
    } else {
      throw new Error(`No ${prop} field`);
    }
  },
  has(prop) {
    return ['age', 'job'].includes(prop);
  },
  deleteProperty(target, prop) {
    console.log('Delete', prop);
    return delete target[prop];
  },
});

// Functions
const log = (text) => `log: ${text}`;

const fp = new Proxy(log, {
  apply(target, thisArg, args) {
    console.log('Calling fn');

    return target.apply(thisArg, args).toUpperCase();
  },
});

// Classes

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const PP = new Proxy(Person, {
  construct(target, args) {
    console.log('Construct...');

    return new Proxy(new target(...args), {
      get(t, prop) {
        console.log(`Getting prop ${prop}`);
        return t[prop];
      },
    });
  },
});

// const p = new PP('Max', 30);
