// ========================================#1
// const num = [3, 4, 1, 9];
function mult(){

    let res =1;
        for (let i = 0; i < arr.length; i++) {
            res *= Array[i] ;
        }
        console.log(`произведение чисел массива равно ${res}`);
}

function sum(){
    let res =0;
    for (let i = 0; i < arr.length; i++) {
        res += Array[i] ;
    }
    console.log(`сумма чисел массива равна ${res}`);
}
// sum([3, 4, 1, 9]);

let arr =[];
function getResult(arr, callback){

callback();
}


getResult([3, 4, 1, 9], mult);
getResult([3, 4, 1, 9], sum);