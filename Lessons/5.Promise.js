console.log('Request data');

// setTimeout(() => {
//   console.log('Preparing data');

//   const bData = {
//     server: 'aws',
//     port: 3000,
//     status: 'work',
//   };

//   setTimeout(() => {
//     bData.modified = true;
//     console.log('Recieve data', bData);
//   }, 2000);
// }, 2000);

// const prom = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log('Preparing data');

//     const bData = {
//       server: 'aws',
//       port: 3000,
//       status: 'work',
//     };

//     resolve(bData);
//   }, 2000);
// });

// prom
//   .then((data) => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         data.modified = true;
//         resolve(data);
//       }, 2000);
//     });
//   })
//   .then((clientData) => {
//     console.log('Recieve data', clientData);
//     clientData.fromPromise = true;
//     return clientData;
//   })
//   .then((data) => {
//     console.log(`Modified: ${data}`);
//   })
//   .catch((err) => {
//     console.error('Error: ', err);
//   })
//   .finally(() => {
//     console.log('Finnaly');
//   });

const sleep = (ms) =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });

// sleep(2000).then(() => {
//   console.log('after 2 sec');
// });

// sleep(3000).then(() => {
//   console.log('after 3 sec');
// });

Promise.all([sleep(2000), sleep(5000)]).then(() => {
  console.log('All prom');
});

Promise.race([sleep(2000), sleep(5000)]).then(() => {
  console.log('Race prom');
});
