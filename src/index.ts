// NOTE: This code has not been converted to TypeScript yet
import { addArr, concatArr, cut3, lgNum } from './utilities/arrays';
import numbers from './utilities/numbers';
import strings from './utilities/strings';

const numArr: number[] = [3, 4, 5, 6];
const wordArr: string[] = ['cat', 'dog', 'rabbit', 'bird'];
const arrSum: number = addArr(numArr);
const mixArr: (number | string)[] = concatArr(numArr, wordArr);
const myNum = <number>(<unknown>'15') % 2;

// results of function calls
console.log(myNum);
console.log(cut3(mixArr));
console.log(numbers.sum(arrSum, myNum));
console.log(strings.capitalize('the quick brown fox'));
console.log(numbers.multiply(<number>(<unknown>'5'), 8));
console.log(lgNum(mixArr));
