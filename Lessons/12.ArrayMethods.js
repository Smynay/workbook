const people = [
  { name: 'Vlas', age: 25, budget: 1000000 },
  { name: 'Num', age: 21, budget: 999 },
  { name: 'Num', age: 21, budget: 999 },
  { name: 'Fad', age: 13, budget: 1000 },
  { name: 'VGocha', age: 17, budget: 50000 },
  { name: 'VTrip', age: 33, budget: 3000 },
  { name: 'Djod', age: 27, budget: 999999 },
];

// for (let i = 0; i < people.length; i++) {
//   console.log(people[i]);
// }

// for (let person of people) {
//   console.log(person);
// }

// ForEach
// people.forEach((person, index, parr) => {
//   // 1 - item, 2 - itemIndex, 3 - arr (people)
//   console.log(person);
//   console.log(index);
//   console.log(parr);
// });

//Map - преобразует в другой массив
// const newPeople = people.map((person, index, parr) => `${person.age * 3}`);
// console.log(newPeople);

// Filter - составляет массив из true элементов
// const alcoable = people.filter((person) => person.age >=  18);
// console.log(alcoable);

// Reduce - собирает элементы в одну "коробку" total
// const money = people.reduce(
//   (total, person) => total + person.budget,
//   (start = 0)
// );
// console.log(money);

// Find - находит первый вхождящий true элемент
// const searched = people.find((person) => person.name == 'Num');
// console.log(searched);

// FindIndex - находит индекс true элемента
// const searched = people.findIndex((person) => person.name == 'Num');
// console.log(searched);

// task =================

const newPeople = people
  .filter((person) => person.budget > 3000)
  .map((person) => {
    return {
      info: `${person.name} (${person.age})`,
      budget: person.budget,
    };
  })
  .reduce((total, person) => total + person.budget, 0);

console.log(newPeople);
