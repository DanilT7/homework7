// 1.Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….).

// for(let i = 20;i <= 30;i += 0.5) {
//     console.log(i);
// }

// 2.Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів.

// for(let i = 10;i <= 100;i += 10) {
//     console.log(`${i}$ is ${i*27}grn`);
// }

// 3.Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N.

// let N = prompt('Enter your number');

// for(let i = 1;i <= N;i++) {
//     if(i ** 2 <= N) {
//         console.log(`${i}(square is ${i ** 2})`)
//     }
// }

// 4.Дане ціле число. З'ясувати, чи є воно простим (простим називається число, більше 1, які не мають інших дільників крім 1 і себе).

let N = Number(prompt('Enter your number'));
let isPrime = true;

if (Number.isInteger(N)) {
    if (N <= 0) {
        console.log('Number is non-positive')
    } if (N == 1) {
        console.log('Number is 1')
    }
    else if (N > 1) {
        for (let i = 2; i < N; i++) {
            if (N % i === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            console.log(`${N} is a prime number`)
        } else {
            console.log(`${N} is a non-prime number`)
        } 
    } 
} else {
    console.log('Number is non-integer')
}

// 5.Дане деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь. (Наприклад, числа 9, 81 можна отримати, а 13 - не можна).



