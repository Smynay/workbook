class Human {
  _born;
  _weight;
  _name;
  _height;
  _stash;

  constructor({ born = '09.02.2019', name = 'Anonymus', height, weight } = {}) {
    this._born = new Date(Date.parse(born));
    this._name = name;
    this._height = height;
    this._weight = weight;
    this._stash = [];
  }

  get(param) {
    switch (param) {
      case 'age':
        return Math.floor((Date.now() - this._born) / 31536000000);
      default:
        const key = '_' + param;
        return this[key];
    }
  }

  say(phrase) {
    console.log(`${this._name} says: ${phrase}`);
  }

  interact(target) {
    target.interactive();
  }
}

const me = new Human({ name: 'Maxim', height: 187, weight: 60 });
