// // ========================================#1
// let str = 'js';
// str = str.toUpperCase();
// console.log(str);
// ========================================#2
const searchStart = ['Кошка', 'Кит', 'Комар', 'Носорог'];
const search = prompt('введите начало строки для поиска слов') ;
function startSearch(){
let arr=[];
searchStart.forEach((searchStart) => {
	if (searchStart.toLowerCase().startsWith(search.toLowerCase())) {
		arr.push(searchStart);
	}
});
alert( `искомые слова ${arr}`);
}
startSearch();
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
