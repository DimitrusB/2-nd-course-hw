// // ========================================#1
// let str = 'js';
// str = str.toUpperCase();
// console.log(str);
// ========================================#2
// const searchStart = ['Кошка', 'Кит', 'Комар', 'Носорог'];
// const search = prompt('введите начало строки для поиска слов') ;
// function startSearch(){
// let arr=[];
// searchStart.forEach((searchStart) => {
// 	if (searchStart.toLowerCase().startsWith(search.toLowerCase())) {
// 		arr.push(searchStart);
// 	}
// });
// alert( `искомые слова ${arr}`);
// }
// startSearch();
// ========================================#3
// let num = 32.58884;
// let flo = Math.floor(num);
// alert(`округление ${num} до меньшего целого ${flo}`)
// let ceil = Math.ceil(num);
// alert(`округление ${num} до большего целого ${ceil}`)
// let rou = Math.round(num);
// alert(`округление ${num} до ближайшего целого ${rou}`)
// ========================================#4
//  let arr = [52, 53, 49, 77, 21, 32];
//     console.log("максимальное число :",  Math.max(...arr));
//     console.log("минимальное число :",  Math.min(...arr));
// ========================================#5
// function getRandomInt(minValue, maxValue) {
//         return Math.round(Math.random()*(maxValue)) + minValue;
//     }
// console.log(getRandomInt(1,10));
// ========================================#6!!!
let num = Number(prompt('Введите число'));
function numToArray(){
    let arr =[];
    for ( i=0 ; i <= num; ++i) {
        num =  Math.floor(Math.random()*(num-0+1))+0;
        arr.push(num);
}
    console.log(arr);

}
numToArray();

function timeYear(mounth) {
    mounth = Number(prompt('Введите порядковый номер месяца'));
    if (mounth>=3 && mounth<=5) {
        alert('Сейчас весна');
    } else 
    if (mounth>=6 && mounth<=8) {
        alert('Сейчас лето');
    }
    else
    if (mounth>=9 && mounth<=11 ) {
        alert('Сейчас осень');
    }    
    else
    if (mounth===12 || mounth===1 || mounth===2) {
        alert('Сейчас зима');
    }
    else
    alert('Ошибка ввода, попробуйте ещё раз');
}
