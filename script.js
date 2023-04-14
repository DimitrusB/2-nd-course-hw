// ========================================#1
function mult(){
    let res =1;
        for (let i = 0; i < arr.length; i++) {
            res *= arr[i] ;
        }
        console.log(`произведение чисел массива равно ${res}`);
}
function sum(){
    let res =0;
    for (let i = 0; i < arr.length; i++) {
        res += arr[i] ;
    }
    console.log(`сумма чисел массива равна ${res}`);
}

function getResult(arr, callback){
callback();
}
let arr = [3, 4, 1, 9];
getResult(arr, mult);
getResult(arr, sum);
// ========================================#2