const car = {
  wheels: 4,

  init() {
    console.log(`У меня есть ${this.wheels} колеса, мой хозяин ${this.owner}`);
  },
};

const carWithOwner = Object.create(car, {
  owner: {
    value: 'Dimas',
  },
});

carWithOwner.init();
