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
//     arr.reverse();
//     console.log(arr)
// }


function ifNum (){
    const arry = [1, '4', false, 9, 'two']
    let arr = arry.map(Number);
        for (let i = 0; i <= arr.length; i++) {
            if (arr[i] === NaN ){
            arr.splice(arr[i],1);
        }
    }
    console.log(arr);
}
ifNum();

// ifNum([1, '4', false, 9, 'two']);

// const arr = [1, '4', 9, 'two'];

// function each(arr, callback){
// callback();
// }
// each(arr, reversArr)