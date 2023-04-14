// ========================================#1
// const num = [3, 4, 1, 9];
function mult(num, ){
    let res =1;
for (let i = 0; i < num.length; i++) {
    res *= num[i] ;

}
console.log(res);
}


function getResult(callback){
    console.log('произведение чисел массива равно');
    callback();
}


getResult([3, 4, 1, 9] , mult);