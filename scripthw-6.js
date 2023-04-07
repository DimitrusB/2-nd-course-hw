// =====================================#1
// let arr =[1, 5, 4, 10, 0, 3];
// for (let i = 0; i < arr.length; i++) {
// 	if (arr[i] == 10) break;
// 	console.log(arr[i]);
// }
// =====================================#2
// let numb = [1, 5, 4, 10, 0, 3];
//     numb.forEach((el, index) => {
//         if (el===4){
//             console.log(` элемента ${el} в массиве, расположен под индексом ${index}:`); 
//         }
//     })
// =====================================#3
// let numbs =[1, 3, 5, 10, 20];
// numbs=numbs.join(' ');
// console.log(numbs)
// =====================================#4!!!
// let arr=[];
// arr.push[1, 1, 1];
// console.log(arr);
// =====================================#5
// let mas = [1, 1, 1];
// mas.push(2, 2, 2);
// console.log(mas);
// =====================================#6
// let sortArr = [9, 8, 7, 'a', 6, 5];
// sortArr = sortArr.sort();
// console.log(sortArr);
// sortArr.pop();
// console.log(sortArr);
// =====================================#7
// let arrSearch = [9, 8, 7, 6, 5];
// searchNum = Number(prompt('введите число для поиска в массиве'));
// search = arrSearch.includes(searchNum);
// if (search===true) {
//     alert(`Искомый элемент ${searchNum} есть в массиве`);
// } else {
//     alert(`Элемент ${searchNum} отсутствует в массиве `);
// }
// =====================================#8
// let word = 'abcdef';
// word=word.split('');
// console.log(word);
// word.reverse();
// console.log(word);
// word=word.join('');
// console.log(word);
// =====================================#9
// let arr = [
//     [1, 2, 3,],
//     [4, 5, 6]
// ];
// let arrAll = [];
// for (let i = 0;i< arr[0].length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//         arrAll.push(arr[j] [i]);
//         arrAll=arrAll.sort();
//     }
// }
// console.log(arr);
// console.log(arrAll);
// =====================================#10!!

// function red(){
//     let arr = [1,3,5,3,2,5,6];
// const sum=arr.reduce((a,b) => a+b);
// console.log(sum);
// }
//     console.log(red);
// =====================================#11

let arr = [1, 2, 3, 4, 5];
function square(){
arr = arr.map(el => el **2);
console.log(arr);
}
square();
// =====================================#12
// const array = ['слово', '', 'слог', 'длинное предложение', 'буква']
// const calcLength = array => {
//   const map = new Map();
//     for (let str of array) {
//         map.set(str, `${str.replace(/[^а-я]/gi, "").length}`)
//     }
//     return [...map.values()]
// }
//     const result = calcLength(array)

//     console.log(result)