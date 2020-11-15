// function createCalcFunction(n) {
//   return function () {
//     console.log(1000 * n);
//   };
// }

// const calc = createCalcFunction(42);

// calc();

// function createIncrementor(n) {
//   return function (num) {
//     return n + num;
//   };
// }

// const addOne = createIncrementor(1);
// const addTen = createIncrementor(10);

// console.log(addOne(41));
// console.log(addTen(41));

// function urlGenerator(domain) {
//   return function (url) {
//     return `https://${url}.${domain}`;
//   };
// }

// const comUrl = urlGenerator('com');
// const ruUrl = urlGenerator('ru');

// console.log(ruUrl('yandex'));
// console.log(ruUrl('vk'));

// ======================================================
// Написать свою функцию Bind
// Пример работы:

// function logPerson() {
//   console.log(`Person: ${this.name}, ${this.age}, ${this.job}`);
// }

// const person1 = {name: 'Micael', age: 22, job: 'SEO'}
// const person2 = {name: 'Julia', age: 32, job: 'SMM'}

// bind(person1, logPerson)
// bind(person2, logPerson)

function logPerson() {
  console.log(`Person: ${this.name}, ${this.age}, ${this.job}`);
}

function bind(obj, func) {
  return function (...args) {
    func.apply(obj, args);
  };
}

const person1 = { name: 'Micael', age: 22, job: 'SEO' };

console.log(bind(person1, logPerson)());
