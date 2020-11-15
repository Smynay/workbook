function hello() {
  console.log('helo', this);
}

const person = {
  name: 'Vasya',
  age: 34,
  sayHello: hello,
  sayHelloWindow: hello.bind(window),
  logInfo: function (job, phone) {
    console.group(`${this.name} info:`);
    console.log(`Name is: ${this.name}`);
    console.log(`Age is: ${this.age}`);
    console.log(`Job is: ${job}`);
    console.log(`Phone is: ${phone}`);
    console.groupEnd();
  },
};

const lena = {
  name: 'Lenka',
  age: 23,
};

// person.logInfo.bind(lena, 'Frontend', '8999123124314')();
// person.logInfo.call(lena, 'Frontend', '8999123124314');
// person.logInfo.apply(lena, ['Frontend', '8999123124314']);

// =============================

const array = [1, 2, 3, 4, 5];

// function multBy(arr, n) {
//   return arr.map((i) => {
//     return i * n;
//   });
// }

Array.prototype.multBy = function (n) {
  return this.map((i) => {
    return i * n;
  });
};

console.log(array.multBy(4));
