const arrayOfNumbers: Array<number> = [1, 2, 3, 4, 5, 6];
const arrayOfStrings: Array<string> = ['Hello', 'my', 'friend'];

function reverse<T>(array: T[]): T[] {
  // Т адаптируется под тип входного значения
  return array.reverse();
}

console.log(reverse(arrayOfNumbers), reverse(arrayOfStrings));
