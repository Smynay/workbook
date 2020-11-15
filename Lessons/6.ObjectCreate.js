const person = Object.create(
  {
    calculateAge() {
      console.log('Age:', new Date().getFullYear() - this.birthYear);
    },
  },
  {
    name: {
      value: 'Vladilen',
      enumerable: true,
      writable: true,
      configurable: true,
    },
    birthYear: {
      value: 1993,
      enumerable: false,
      writable: false,
      configurable: false,
    },
    age: {
      get() {
        //getter
        return new Date().getFullYear() - this.birthYear;
      },
      set(value) {
        document.body.style.background = 'red';
        console.log('Set age', value);
      },
    },
  }
);

// person.name = 'Max'; // writable == false ? empty

// console.log(person);

for (let key in person) {
  //опасный for
  if (person.hasOwnProperty(key)) {
    //решение
    console.log('Key', key, ' val: ', person[key]); // empty
  }
}
