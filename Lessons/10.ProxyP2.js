// Wrapper

const withDefaultValue = (target, defVal = 0) => {
  return new Proxy(target, {
    get: (obj, prop) => (prop in obj ? obj[prop] : defVal),
  });
};

const position = withDefaultValue(
  {
    x: 24,
    y: 42,
  },
  0
);

// Hidden propercies

const widthHiddenProps = (target, prefix = '_') => {
  return new Proxy(target, {
    has: (obj, prop) => prop in obj && !prop.startsWith(prefix),
    ownKeys: (obj) => Reflect.ownKeys(obj).filter((p) => !p.startsWith(prefix)),
    get: (obj, prop, receiver) => (prop in receiver ? obj[prop] : void 0),
  });
};

const data = widthHiddenProps({
  name: 'Max',
  age: 24,
  _uid: '1234',
});

// Optimization

const userData = [
  { id: 1, name: 'max', job: 'fullsa', age: 15 },
  { id: 2, name: 'vlas', job: 'smm', age: 18 },
  { id: 3, name: 'bob', job: 'duck', age: 23 },
  { id: 4, name: 'xer', job: 'dick', age: 45 },
  { id: 5, name: 'opt', job: 'chif', age: 15 },
];

const index = {};
userData.forEach((i) => (index[i.id] = i));

const IndextArray = new Proxy(Array, {
  construct(target, [args]) {
    const index = {};

    args.forEach((item) => (index[item.id] = item));

    return new Proxy(new target(...args), {
      get(arr, prop) {
        switch (prop) {
          case 'push':
            return (item) => {
              index[item.id] = item;
              arr[prop].call(arr, item);
            };
          case 'findById':
            return (id) => index[id];
          default:
            return arr[prop];
        }
      },
    });
  },
});

const users = new IndextArray([
  { id: 1, name: 'max', job: 'fullsa', age: 15 },
  { id: 2, name: 'vlas', job: 'smm', age: 18 },
  { id: 3, name: 'bob', job: 'duck', age: 23 },
  { id: 4, name: 'xer', job: 'dick', age: 45 },
  { id: 5, name: 'opt', job: 'chif', age: 15 },
]);
