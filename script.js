// ========================================#1
// function mult(arr){
//     let res =1;
//         for (let i = 0; i < arr.length; i++) {
//             res *= arr[i] ;
//         }
//         console.log(`произведение чисел массива равно ${res}`);
// }
// function sum(arr){
//     let res =0;
//     for (let i = 0; i < arr.length; i++) {
//         res += arr[i] ;
//     }
//     console.log(`сумма чисел массива равна ${res}`);
// }

// function getResult(arr, callback){
// callback(arr);
// }

// getResult([3, 4, 1, 9], mult);
// getResult([3, 4, 1, 9], sum);
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
// function reversArr(arr){

//     arr.reverse();
//     console.log(arr)
// }

// function ifNum (arr){
    
//     arr = arr.map(Number);
//         for (let i = 0; i <= arr.length; i++) {
//             if (isNaN(arr[i])){
//             arr.splice(i, 1) ;
//         }
//     }
//     console.log(arr);
// }


// function each(arr, callback){
// callback(arr);
// }

// each([1, '4', 9, 'two'], reversArr);
// each([1, '4', false, 9, 'two'], ifNum);
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
// ========================================#5
// function calling() {
//     console.log('Звоню!')
// };
// var time =1000;
// function beeps() {
//     setTimeout(() => {
//         console.log('Идут гудки...')
//     }, time);
// }

// function talk() {
//     setTimeout(() =>{
//     console.log('Разговор')
//     }, time + 1000);
// }

// calling();
// beeps();
// talk();