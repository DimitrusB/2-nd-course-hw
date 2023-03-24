// ---------------------------------------- 1
let a = 10;
alert (a);
a = 20;
alert (a);
// ---------------------------------------- 2
let yearIphone = 2007;
alert(`Год выпуска первого Iphone, ${yearIphone} год`);
// ----------------------------------------
let nameJava = "Брендан Эйк";
alert(`Имя создателя языка программирования JavaScript ${nameJava}`);
// ---------------------------------------- 3
let x = 10;
let y = 2;
alert(`сумма ${x+y}, разность ${x-y}, произведение ${x * y} и частное ${x / y}`);
// ----------------------------------------
let result = 2**5;
alert(`Два в пятой степени, равно ${result}`);
// ---------------------------------------- 4
a = 9;
let b = 2;
res = 9 % 2;
alert(`Остаток от деления ${a} на  ${b} равен ${res}`);
// ---------------------------------------- 5
let num = 1;
num += 5;
num -= 3;
num *=7;
num /=3;
num++;
num--;
alert (num);
// ----------------------------------------6
let age = Number(prompt("Сколько вам лет?"));
alert(`Вам ${age} лет`);
// ---------------------------------------- 7
user = {
    name: `Dima`,
    age: 37,
    isAdmin: true
}
console.log(user.name, user.age, user.isAdmin);
// ---------------------------------------- 8
user ['city of residence'] = 'SPb';

console.log(user.name, user.age, user.isAdmin, user ['city of residence']);
// ---------------------------------------- 9
user.age = 22;

console.log(user.name, user.age, user.isAdmin, user ['city of residence']);
// ---------------------------------------- 10
delete user ['city of residence'];

console.log(user.name, user.age, user.isAdmin, user ['city of residence']);
// ---------------------------------------- 11

let info = prompt(`Какую информацию хотите узнать о пользователе?, name, age, isAdmin`);
alert(`${user[info]} - результат вашего запроса`);

let whaIsName = String(prompt('Как тебя зовут?'));
alert(`Приятно познакомиться ${whaIsName}, меня зовут ${user.name}`);