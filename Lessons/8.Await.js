// link: https://jsonplaceholder.typicode.com/

const delay = (ms) => {
  return new Promise((r) => setTimeout(() => r(), ms));
};

// delay(2000).then(() => console.log('Hi'));

const url = 'https://jsonplaceholder.typicode.com/todos';

// function fetchTodos() {
//   console.log('Fetch started');
//   return delay(2000)
//     .then(() => fetch(url))
//     .then((response) => response.json());
// }

// fetchTodos()
//   .then((data) => {
//     console.log('Data:', data);
//   })
//   .catch((e) => console.error(e));

async function fetchAsyncTodos() {
  //внимание на Async!!!
  console.log('Fetch started');

  try {
    await delay(2000);
    const response = await fetch(url);
    const data = await response.json();
    console.log('Data:', data);
  } catch (e) {
    console.error(e);
  } finally {
    console.log('Vse ravno');
  }
} //возвращает Промис

// fetchAsyncTodos().then(); //можно чеинить дальше..
