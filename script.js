// ========================================#1
// function mult(){
//     let res =1;
//         for (let i = 0; i < arr.length; i++) {
//             res *= arr[i] ;
//         }
//         console.log(`произведение чисел массива равно ${res}`);
// }
// function sum(){
//     let res =0;
//     for (let i = 0; i < arr.length; i++) {
//         res += arr[i] ;
//     }
//     console.log(`сумма чисел массива равна ${res}`);
// }

// function getResult(arr, callback){
// callback();
// }
// let arr = [3, 4, 1, 9];
// getResult(arr, mult);
// getResult(arr, sum);
// ========================================#2
// const users = [
// 	{name: 'Jon', age: 22},
// 	{name: 'Richard', age: 18},
// 	{name: 'Anton', age: 32},
// 	{name: 'Lida', age: 23},
// 	{name: 'Bob', age: 44}
// ];
// users.sort(function (a, b) {

//     return a.age - b.age;
// });
// console.log(users);
// ========================================#3
// function reversArr(){
//     const arr = [1, '4', 9, 'two'];
//     arr.reverse();
//     console.log(arr)
// }

// function ifNum (){
//     const arry=[1, '4', false, 9, 'two']
//     const arr = arry.map(Number);
//         for (let i = 0; i <= arr.length; i++) {
//             if (isNaN(arr[i])){
//             arr.splice(i, 1) ;
//         }
//     }
//     console.log(arr);
// }

// const arr = [];
// function each(arr, callback){
// callback();
// }

// each(arr, reversArr);
// each(arr, ifNum);
// ========================================#4
// let time = 3000;
// function timer (){
// let timerId = setInterval(() => console.log(Date()), time);
// setTimeout(() => { clearInterval(timerId); console.log('30 секунд прошло'); }, time*10);
// }
// function messDate (callback){
// console.log('Начало таймера на 30 сек.');
// callback();
// setTimeout(()=>{console.log('Таймер завершил работу')} , time*10+100 );
// }
// messDate(timer);

