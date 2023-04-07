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
// =====================================#4
// let arr=[];
// for (let i=1; i<=3; i++ ) {
//     arr[i] =[];
//     for(var j = 0; j < 3; ++j){
//         arr[i][j] = 1;
//       }
// }
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
// =====================================#10
// function red(){
//     let arr = [1,3,5,4,2,5,6];
//     for (let i = 0; i < arr.length-1; i++) {
//         sum= arr[i]+arr[i+1];
//         console.log(`сумма текущего и следующего элемента массива равна ${sum}`);
//     }
// }
// red();
// =====================================#11
// let arr = [1, 2, 3, 4, 5];
// function square(){
// arr = arr.map(el => el **2);
// console.log(arr);
// }
// square();
// =====================================#12
// const arr = ['слово', '', 'слог', 'длинное предложение', 'буква']
// function wordFar(){
// var lenFar = arr.map((far) => {
//      return far.length;
//   })
//   console.log(lenFar);
// }
// wordFar();
// calcLetter();
// =====================================#13
// let arr =[1, 2, 3, -4, 5, -6];
// function negative(){
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i]<0){
// 	console.log(`Отрицательное значение массива ${arr[i]}`);
// }
// }
// }
// negative();