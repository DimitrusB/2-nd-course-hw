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
// ========================================#6
// let num = Number(prompt('Введите число'));
// function numToArray(){
//     let arr =[];
//     for ( i=0 ; i < num; i++) {
//         let num1 =  Math.floor(Math.random()*(num-0+1))+0;
//         arr.push(num1);
//         if (arr.length===num/2)
//         break;
// }
//     console.log(arr);

// }
// numToArray();
// ========================================#7
// let numFirst = Number(prompt('Введите первое число'));
// let numSecond = Number(prompt('Введите второе число'));
// function numArr(){
// let arr= [];
// for (let i = numFirst; i >=numFirst && i<=numSecond ; i++) {
//     let result =  Math.floor(Math.random()*(numSecond-numFirst+1))+numFirst;
//     arr.push(result);
//     if (arr.length === 2)
//     break;
// }
// console.log(`Первое случайное число в интервале от ${numFirst} до ${numSecond}: ${arr[0]}`);
// console.log(`Второе случайное число в интервале от ${numFirst} до ${numSecond}: ${arr[1]}`);
// }
// numArr();
// ========================================#8
// const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
// const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
// "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
// let myDate = new Date()
// let fullDate = "Сегодня: " + myDate.getDate() + " " + months[myDate.getMonth()] + " " + myDate.getFullYear() + ", " + days[myDate.getDay()]; 
// console.log(fullDate); 
// ========================================#9
// let currentDate = new Date();
// console.log(currentDate.getDate());

// currentDate.setDate(78);
// console.log(currentDate);
// ========================================#10
// let currentDate = new Date();

// function DateDisp(){
//     const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
//     const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
//     let minutes = currentDate.getMinutes();
//     let seconds = currentDate.getSeconds();
//     if (minutes < 10){
//         minutes = "0" + minutes; 
//     }
//     if (seconds < 10){
//         seconds = "0" + seconds; 
//     }
//     let fullDate = "Сегодня: " + currentDate.getDate() + " " + months[currentDate.getMonth()] + " " + currentDate.getFullYear() + " год, - это " + days[currentDate.getDay()]; 
//     let fullTime = "Время: " + currentDate.getHours() + " : " + minutes + " : " + seconds;
//     console.log(fullDate); 
//     console.log(fullTime);
// };
// DateDisp();
// ========================================#11
function fruitsGame(){
    let fruitArr = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
    let findFruitsFirst = prompt(`Введите название первого фрукта из списка ${fruitArr}`);
    let findFruitsSecond = prompt(`Введите название второго фрукта ${fruitArr}`);
    fruitArr =  fruitArr.map(i=>i.toLowerCase());
    fruitArr = fruitArr.sort(() => Math.random() - 0.5);
    findFruitsFirst = findFruitsFirst.toLowerCase();
    findFruitsSecond = findFruitsSecond.toLowerCase();
        if (fruitArr[0].includes(findFruitsFirst) && fruitArr[1].includes(findFruitsSecond) ) {
            alert('Вы угадали!!!')}
        else if (fruitArr[0].includes(findFruitsFirst) || fruitArr[1].includes(findFruitsSecond)) {
            alert('Вы были близки к победе!');}
        else
            alert ('Не угадали');
        }

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
