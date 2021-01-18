interface Person {
  name: string;
  age: number;
}

type PersonKeys = keyof Person; // 'name' | 'age'

let key: PersonKeys = 'name';
key = 'age';

// key = 'job' // Person не содержит ключа job

type User = {
  _id: number;
  name: string;
  email: string;
  createdAt: Date;
};

type UserKeysNoMeta1 = Exclude<keyof User, '_id' | 'createdAt'>; // Будует доступно значение 'name' | 'email'
type UserKeysNoMeta2 = Pick<User, 'name' | 'email'>; // Идентичный результат, но указываем те поля, которые необходимо забрать

let u1: UserKeysNoMeta1 = 'name';
// u1 = 'job' //UserKeysNoMeta не содержит ключа job
