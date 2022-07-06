"use strict";

/*
alert(3 +
	1
	+ 2);


let username;
username = 'Denys';

alert(username);

let username0 = 'Denys', age = 16, proff = 'developer'

let user2 = 'John',
	age2 = 25,
	message2 = 'Hello';




let music = 'pop';
music = 'pooppp';
music = 'popp';
alert(music);

let qwerty = 6;
let qwertyu = qwerty;
alert(qwertyu)









let $ = 1;
let _ = 2;

alert($ + _);


const MyBD = '02.11.05'; 
alert(MyBD);








let admin = 'Jon';
let name = admin;
alert(admin);

let planet;
let onlineuser;

alert(1 / 0);
alert('qwerty' / NaN);

//Значение NaN «прилипчиво». Любая операция с NaN возвращает NaN

let str = "Привет";
let str2 = 'Одинарные кавычки тоже подойдут';
let phrase = `Обратные кавычки позволяют встраивать переменные ${str}`;

// Двойные и одинарные кавычки не имеют различий

// Обратные кавычки же имеют «расширенный функционал». Они позволяют нам встраивать
// выражения в строку, заключая их в ${…} . Например:

let tomatocolor = 'red';
alert(`Red, ${tomatocolor}`);
alert(`blablabla ${tomatocolor}`);

let result = 'resultat:';
alert(`result ${25 / 5}`);


let iread = true;
let idrink = false;
let islesser = 23 < 100;
alert(islesser);


let nothing = null;

let x;
alert(x);
let y = undefined;  //желательно не использовать
alert(y);


//страгица 35


let value = true;
alert(typeof value);
value = String(value);
alert(typeof value);

let numer = "100";
numer = Number(numer);
alert(typeof numer);

let zero = null;
zero = Number(zero);
alert(zero);

let mistake = Number;
alert(mistake);

alert(Number(true)); // 1
alert(Number(false)); // 0
alert(Number('122323')); // выводит число
alert(Number('1233123cdkjck')); //  NaN


alert(1 + '2');
alert('1' + 2);
alert(1 + 2);

let bad = 0;
alert(Boolean(bad));
alert(Boolean(10));
alert(Boolean(''));
alert(Boolean('0'));
alert(Boolean('      '));  // true


alert('qwertyyu');


alert(+false);
alert(+""); 


let two = 2;
let three = 3;
alert(+two + +three);  //the same with bottom
alert(Number(two) + Number(three));
// унарные плюсы для преобразования строк в числа, унарные - для их добавления

let a, b, c;
a = b = c = 2 + 2;
alert( a ); // 4
alert( b ); // 4
alert( c ); // 4



let huy = 1;
let kuy = 2;
let zuy = 3 - (huy = kuy + 1);  //значение хуй присваивает значение из вычисления kuy + 1
alert(huy);
alert(kuy);
alert(zuy);



// % - остаток от деленгия. например:
alert(10 % 4); //2

//Возведение в степень **
alert(5 ** 3); // 5 умноженное на себя 3 раза, то есть 125
alert( 4 ** (1/2) ); // 2
alert( 8 ** (1/3) ); // 2
	


	// Важно:
	// Инкремент/декремент можно применить только к переменной. Попытка использовать
	// его на значении, типа 5++, вернёт ошибку.

	//декремент:
let ghj = 4;
let ghjj = ++ghj;
alert(ghj); //5

	// инкремент:
let kl = 6;
kl--;
alert(kl);


// a++ a-- постфиксная форма 
// ++a --a префиксная форма 
let a = 5;
alert(++a);

let counter = 1;
let acv = counter++; // (*) меняем ++counter на counter++
alert(acv); // 1

let b = 1;
alert(b++);


let tyu = 5;
alert(5 * ++tyu);

let fgh = 10;
alert(5 * fgh++);

let asd = 7;
++asd;
alert(7 * asd);


let qwe = 3;
qwe = qwe * 3;
alert(qwe); // the same with bottom
let qwe2 = 3; 
qwe2 *= 3;     
alert(qwe2);	// 9
let qwe3 = 5;
alert(qwe3 += 5); // 10
let qwe4 = 8;
alert(qwe4 -= ++qwe4);
let qwe5 = 9;
//	qwe5++;
qwe5 /= 3;
alert(qwe5);


let cvb = 3;
++cvb;
cvb += 3 + 5;
alert(cvb);	//	12



let vbn = (3 + 4, 5 + 4);
alert(vbn);


let a = 1, b = 1;
let c = ++a; // 2
let d = b++; // 1
alert(c);	//	2
alert(d);	//	1


let a = 2;
let x = 1 + (a *= 2);
alert(x); //	5





// ОПЕРАТОРЫ СРАВНЕНИЯ

alert(6 > 5);	// true
alert(6 < 5);	//	false
alert(100 == 101);	//	false (знак ровно ==)
alert(5 != 6);	//	true (!= не равен)


let bnm = 5 == 5;
alert(bnm);	//	true



alert('a' > 'g');	//	false
alert( 'Я' > 'А' ); // true
alert( 'Кот' > 'Код' ); // true
alert('Сонный' > 'Сон'); // true



//	При сравнении значений разных типов, JavaScript приводит каждое из них к числу.

alert('dfg4566' > 'fgh622');	//	false
alert('5' < 7);	// при  сравнении строка преобразуется в число

alert('005' > 1); // '005' = 5
alert(true == 1); // true
alert(false == 0); // true



let asd = 0;
alert(Boolean(asd))
let bnm = '0';
alert(Boolean(bnm));
alert(asd == bnm);

alert(0 == false); // true   /операнды преобразовуются в числа
alert('' == false); // true

let nbm = '';
alert(Number(nbm));



//	Оператор строгого равенства === проверяет равенство без приведения типов.
alert(765 === 'ljhg'); // false
alert(99 !== 'jlk'); // true, так как операнды не преобразовуются в числа 


alert(null === undefined);	//	false Эти значения различны, так как различны их типы
alert(null == undefined); // true преобразование 0=0


alert(null > 0);	//	false
alert(null < 0);	//	false
alert(null == 0);	//	false
alert(null >= 0);	//	true
alert(null <= 0);	//	true  /null=0


//	Сравнения (1) и (2) возвращают false , потому что undefined преобразуется в
//	NaN , а NaN – это специальное числовое значение, которое возвращает false при
//	любых сравнениях.

//	Нестрогое равенство (3) возвращает false , потому что undefined равно только
//	null и ни zему больше.




alert(5 > 4); // true
alert("ананас" > "яблоко"); // false 
alert("2" > "12"); // false  посимвольное сравнение
alert(undefined == null); // true
alert(undefined === null); // false
alert(null == "\n0\n"); // false
alert(null === +"\n0\n"); // false




// PROMPT    // отмена - null
let mood = prompt('How are you?', 'Nice');
let age = prompt('How old are you?', 100);
alert('You are 100y.o.!')
let uname = prompt('What is your name?', '') // лучше всегда указывать второй параметр




// CONFIRM

let mood = confirm('Are you okay?'); // ok - true; отмена - false


// exercise
let uname = prompt('What is yor name?', 'Denys');
alert('Denys')


let today = prompt('What is day today?', '')
if (today == '12 June') {
	alert('Yes!')
}

if (today == 12.06) {
	alert('Good job')
}




let usname = prompt('What is my name?', '')

if (usname == 'Den') {
	alert('You are right!');
} else {
	alert('My name is Den!');
}



let birthday = prompt('When is my b-day?', '')

if (birthday != '2 November') {
	alert('Think better!')
} else if (birthday == '2 November')
{
	alert('Well done!')
} else (...)
	{...}




let year = prompt('В каком году появилась спецификация ECMAScript-2015?', '');
if (year < 2015) {
alert( 'Это слишком рано...' );
} else if (year > 2015) {
alert( 'Это поздновато' );
} else {
alert( 'Верно!' );
}



let data;
let age = prompt('How old are you?', '');
if (age < 18) {
	alert('You are too young..');
}
else if (age > 18) {
	alert('Welcome!');
}



let accessAllowed;
let age = prompt('Сколько вам лет?', '');
if (age > 18) {
accessAllowed = true;
} else {
accessAllowed = false;
}
alert(accessAllowed);



let age = (age > 18) ? true : false;
alert(age);



let age = prompt('How old are you?', '');

let message = (age < 10) ? 'Hello, Baby!' :
	(age < 18) ? 'Hello!' :
		(age < 100) ? 'Welcome!' :
			'Nonsense';
alert(message);	



if ("0") {
	alert( 'Привет' );
}



let officialname = prompt('What is official name of JavaScript?', '');
if (officialname == 'ECMAScript') {
	alert('Good job!')
} else {
	alert('You dont know? "ECMAScript!"')
}




let number = prompt('write number');
if (number > 0) {
	alert(1);
} else if (number < 0) {
	alert(-1);
} else if (number == 0) {
	alert(0);
}




let question = prompt('How many?', '');

let result = (a + b < 4) ? ('Little') :
	'Too much!';

alert(result);




let message;
if (login == 'Сотрудник') {
	message = 'Привет';
} else if (login == 'Директор') {
	message = 'Здравствуйте';
} else if (login == '') {
	message = 'Нет логина';
} else {
	message
}





let login = prompt('Who are you?', '');
let message = (login == 'Worker') ? 'Hello!' :
	(login == 'Boss') ? 'Hello,Boss' :
			'Who are you?';
alert(message);







// let login = prompt('Who are you')
// let message = (login == 'Сотрудник') ? 'Привет' :
// (login == 'Директор') ? 'Здравствуйте' :
// (login == '') ? 'Нет логина' :
// '';
// alert(message);








// let age = prompt('How old are you?', '');

// let message2 = (age < 10) ? 'Hello, Baby!' :
// 	(age < 18) ? 'Hello!' :
// 		(age < 100) ? 'Welcome!' :
// 			'Nonsense';
// alert(message2);	




alert(true || true);	//	true
alert(false || true);	//	true
alert(true || false);	//	true
alert(false || false);	//	false

 
if (1 || 0) {  // работает как if( true || false )
}


let hour = 6;
if (hour < 10 || hour > 20) {
	alert('Its closed')
}




let hour = 12;
let weekend = true;

if (hour < 10 || hour > 18 || weekend) {
	alert('Its closed')
}




alert(1 || 0); // 1
alert(true || 'ddddd'); // true
alert(null || 0); // 1 (первое истинное значение)
alert(null || 0 || 1); // 1 (первое истинное значение)
alert(undefined || null || 0); // 0 (поскольку все ложно, возвращается последнее значение)



let user1 = null;
let user2 = 'Den';

let user = user1 || user2 || "You are not";

alert(user);	//	Den



let x;
true || (x = 1);  
alert(x);   // undefined, потому что (x = 1) не вычисляется



let = x;
false || (x = 1);
alert(x); // 1



// В традиционном программировании И возвращает true , если оба аргумента истинны, а
// иначе – false :
alert( true && true ); // true
alert( false && true ); // false
alert( true && false ); // false
alert( false && false ); // false


let hour = 12;
let minute = 30;

if (hour == 12 && minute == 30) {
	alert('The time is 12:30')
}



if (1 && 0) {
	alert('wont work')
}


// Если первый операнд истинный,
// И возвращает второй:
alert(1 && 0); // 0
alert(1 && 5); // 5

// Если первый операнд ложный,
// И возвращает его. Второй операнд игнорируется
alert(null && 5); // null
alert(0 && 'nothing') // 0



alert(1 && 2 && null && 3); // null
alert(1 && 2 && 3); // 3


// Приоритет оператора И && больше, чем ИЛИ || , так что он выполняется раньше.
// Таким образом, код a && b || c && d по существу такой же, как если бы
// выражения && были в круглых скобках: (a && b) || (c && d) .




let x = 1;
(x > 0) && alert('Greater then zero');

let x2 = 1;
if (x2 > 0) {
	alert('greater');
}




alert(!true); // false
alert(!0); // true



alert( !!"non-empty string" ); // true
alert(!!null); // false
alert( Boolean("non-empty string") ); // true
alert(Boolean(null)); // false

// Приоритет НЕ ! является наивысшим из всех логических операторов, поэтому он всегда
// выполняется первым, перед && или || .



// EXERCICES
alert(null || 2 || undefined); // 2 gg

alert(alert(1) || 2 || alert(3)); // 1 gg


alert(1 && null && 2); // null gg

alert(alert(1) && alert(2)); // 1, undefined


alert(null || 2 && 3 || 4); //  3 gg




let falsy;
let age = prompt('How old are you?');
if (age >= 14 && age <= 90 && falsy) {
	alert(age = 'truthy');
}


let falsy;
let age = prompt('How old are you?');
if (age <= 14 || age >= 90 || falsy) {
	alert('go')
}



let falsy = null;
let age = prompt('How old are you?');
if (!(age >= 14 && age <= 90 && falsy)) {
	alert('kjnhjk');
}



let age = prompt('How old are you?', '');
if (age >= 14 && age <= 90) {
	alert(false);
} else {
	alert(true);
}




let age = prompt('How old are you?', '');
if (!(age >= 14 && age <= 90)) {
	alert(false);
} else {
	alert(true);
}



let age = prompt('age?', '');
if (age >= 14 && age <= 90) {
	alert(true);
} else {
	alert(false);
}




let age = prompt('age?', '');
if (!(age >= 14 && age <= 90)) {
	alert(false);
} else {
	alert(true);
}


let age = prompt('age?');
if (age >= 14 && age <= 90) {
	alert(true);
} else {
	alert(false);
}



let age = prompt('Age?', '');
if (age <= 14 || age >= 90) {
	alert(false);
} else {
	alert(true);
}




if (-1 || 0) alert( 'first' );	//	
if (-1 && 0) alert( 'second' );	//	
if (null || -1 && 1) alert( 'third' );	//



let whois = prompt('Who is there?', '');
if (whois == 'Admin') {
	let password = prompt('Password?', '');
	if (password == 6666) {
		alert('Welcome!')
	} 
} else {
	alert('I dont know you');
};



let a = 0;
while (a < 5) {   //0,1,2,3,4
	alert(a);
	a++;
}



let b = 5;       
while (b) {   //5	4	3	2	1
	alert(b);
	b--;
}


let c = 5;
while (c) alert(c--);

let b = 5;       
while (b) {   //5	4	3	2	1
	alert(b--);
}



do {
	// body
} while (asd);

// Цикл сначала выполнит тело, а затем проверит условие condition , и пока его значение
// равно true , он будет выполняться снова и снова.

let asd = 5;
do {
	alert(asd);	//	5	4	3	2	1	0
	asd--;
} while (asd >= 0);



for (let asd = 0; asd < 5; asd++) {   //	0	1	2	3	4	
	alert(asd);                         // переменная asd существует только внутри цикла
}



let number = 0;
for (number = 0; number < 5; number++) {
	alert(number);	//	0	1	2	3	4
}

alert(number);	//	5


let asd = 3;
for (; asd > 0; asd--) {
	alert(asd);	//	3	2	1
}


let qwerty = 5;
for (; qwerty < 8;) {
	alert(qwerty++);	//	5	6	7	
}


let cvb = 0;
for (; ;) {
	alert(cvb);	//	0	0	0	0	0	0...0
}


let sum = 0;
while (true) {
let value = +prompt("Введите число", '');
if (!value) break; // (*)
sum += value;
}
alert('Сумма: ' + sum);


let i = 0;
for (i = 0; i <10; i++) {
	if (i >= 5) { break; }
	alert("The number is " + i);	//	0	1	2	3	4	5
}


for (let i = 0; i < 10; i++) {
	if (i % 2) {
	alert( i );	//	1	3	5	7	9
	}
}


for (let i = 0; i < 3; i++) {
	for (let j = 0; j < 3; j++) {
	let input = prompt(`Значение на координатах (${i},${j})`, '');
	// Что если мы захотим перейти к Готово (ниже) прямо отсюда?
	}
	}
alert('Готово!');
	
outer : for (let i = 0; i < 3; i++) {
	for (let j = 0; j < 3; j++) {
	let input = prompt(`Значение на координатах (${i},${j})`, '');
	// если пустая строка или Отмена, то выйти из обоих циклов
	if (!input) break outer; // (*)
	// сделать что-нибудь со значениями...
	}
	}
alert('Готово!');
	
let i = 3;	//	3	2	1
while (i) {
alert( i-- );
}


let i = 0;
while (++i < 5) alert(i);


let i = 0;
while (i++ < 5) alert(i);

let asd = 5;
while (asd++ < 10) {
	alert(asd);	//	6	7	8	9	10
}


for (let i = 0; i < 5; i++) alert(i);	//	0	1	2	3	4

for (let i = 0; i < 5; ++i) alert(i); //	0	1	2	3	4





for (let a = 2; a <= 10; a++) {
	if (a % 2 == 0) {
		alert(a);
	}
} 



for (let i = 0; i < 3; i++) {
	alert( `number ${i}!` );
}

let b = 0;	//	gg
while (b < 3) {
	alert(`number ${b}!`)
	b++;
}
	


let message = prompt('Напишите число больше 100');
while (message < 100) {
	if (message === null) {
		break;
	}

	alert('Введите число больше 100!');
	message = prompt('Напишите число больше 100');
} 



let a;
for (let a = 0; a < 10; a++) {
	if (a % 2) {
		alert(a);
	}
}




let asd = 123;
let bsd = 234;
switch (asd) {
	case 'asd':
		break;
	
	case 'bsd':
		break;
	
	default:
		break;
}


let a = 2 + 2;

switch (a) {
	case 3:
		alert('little');
		break;
	
	case 4:
		alert('Right!');
		break;
	
	case 5:
		alert('Too much');
		break;
	
	default:
		alert('no words')
}


let a = 1;
let b = 0;

switch (+a) {
	case b + 1:
		alert('Выполнится, т.к. значением +a будет 1, что в точности равно b+1');
		break;
	
	default:
		alert("Это не выполнится");
}


let a = 2 + 2;

switch (a) {
	case 4:
		alert('Right!');
		break;
	
	case 3:
	case 5:
		alert('Not Right!');
		alert("Может вам посетить урок математики?");
		break;
	
	default:
		alert('Результат выглядит странновато. Честно.');
}



let asd = prompt('Введите число');

switch (asd) {
	case '0':
	case '1':
		alert('One or zero');
		break;
	
	case '2':
		alert('Two');
		break;
	
	case 3:
		alert('Никогда не выполнится!');
		break;
	
	default:
		alert('Неизвестное значение');
}


switch (browser) {
	case 'Edge':
	alert( "You've got the Edge!" );
	break;
	case 'Chrome':
	case 'Firefox':
	case 'Safari':
	case 'Opera':
	alert( 'Okay we support these browsers too' );
	break;
	default:
	alert( 'We hope that this page looks ok!' );
}



let browser = prompt('Which browser are you using?');
if (browser == 'Edge') {
	alert("You've got the Edge!");
} else if (browser == 'Chrome' || browser == 'Firefox' || browser == 'Safari') {
	alert('Okay we support these browsers too');
} else {
	alert( 'We hope that this page looks ok!' );
}




const number = +prompt('Write numeric 0-3', '');
switch (number) {
	case 0:
		alert('0')
		break;
	case 1:
		alert("1");
		break;
	case 2:
	case 3:
		alert('2 or 3');
}



















// FUNCTIONS
// function имя(параметры) {
// 	...тело...
// 	}

function showMessage() {
	alert('Hello everyone!');
}

showMessage();
showMessage();


function showMessage() {
	let message = "Hello, Im JS!";
	alert(message);
}
showMessage(); 


let username = 'Den';
function showMessage() {
	let message = 'Hello,' + username;
	alert(message);
} 
showMessage();


let username = "Den";
function showMessage() {
	username = "Rus";

	let message = 'Hello, ' + username;
	alert(message);
}

alert(username);
showMessage();
alert(username);


let userName = 'Вася';
function showMessage() {
let userName = "Петя"; // объявляем локальную переменную
let message = 'Привет, ' + userName; // Петя
alert(message);
}
// функция создаст и будет использовать свою собственную локальную переменную userName
showMessage();
alert(userName); // Вася, не изменилась, функция не трогала внешнюю переменную


function showMessage(from, text) {
	alert(from + ': ' + text);
}

showMessage('Anya', 'Hello');
showMessage('Vlad', 'Hello');


function showMessage(from, text) {
	from = '*' + from + '*'; // немного украсим "from"
	alert( from + ': ' + text );
}
	
let from = "Anya";
showMessage(from, "Hello");
alert(from);

showMessage("Anya");	//	*Anya*: undefined
//	Если параметр не указан, то его значением становится undefined


function showMessage(from, text = "text") {
	alert(from + ": " + text);
}
showMessage("Anya"); // Anya: text


function sum(a, b) {
	return a + b;
	}
	let result = sum(1, 2);
alert(result); // 3
	

function checkAge(age) {
	if (age > 18) {
		return true;
	} else {
		return confirm("А родителт разрешили?")
	}
}
let age = prompt("How old are you?", "");
if (checkAge(age)) {
	alert("Welcome!")
} else {
	alert("Poshel nahuy!")
}


function checkAge(age) {
	if (age > 18) {
	return true;
	} else {
	return confirm('А родители разрешили?');
	}
	}
	let age = prompt('Сколько вам лет?', 18);
	if ( checkAge(age) ) {
	alert( 'Доступ получен' );
	} else {
	alert( 'Доступ закрыт' );
}

let result = условие ? значение1 : значение2;


function checkAge() {
	let question = prompt("Age?");
	let answer = question > 18 ? true : alert("Do parents know?");
}
checkAge();

function checkAge() {
	let question = prompt("Age?");
	alert(question > 18 == true || "Do parents know?");
}
checkAge();


let a = 2, b = 5;
function exmin(a, b) {
	if (a < b) {
		return a;
	} else {
		return b;
	}
}


let a = 3, b = -1;
function min(a, b) {
	if (b < a) {
		return b;
	} else {
		return false;
	}
}


function pow(x = 3, n = 2) {
	alert(x ** n);
}
pow();

function pow(x, n) {
	x = prompt("x", "");
	n = prompt("n", "")
	alert(x ** n);
}
pow();


let sayHello = function() {
	alert("Hello");
}

function sayHello() {
	alert("Hello");
}
console.log(sayHello);

function a() {
	alert("Hello");
}
let b = a;
b();	//	Hello
a();	//	Hello


function ask(question, yes, no) {
	if (confirm(question)) yes()
	else no();
}
function showOk() {
	alert("You are agree");
}
function showCancel() {
	alert("You are not agree");
}
ask("Are you agree?", showOk, showCancel);
// THE SAME WITH
function ask(question, yes, no) {
	if (confirm(question)) yes()
	else no();
}
ask(
	"Are you agree?",
	function () { alert("Agree") },
	function () { alert("Disagree") });


sayHi("Den");
function sayHi(name) {
	alert(`Hello, ${name}`);
}

sayHi("Den");
let sayHi = function (name) {
	alert(`Hello, ${name}`)
};

let age = prompt("Age?", "");
if (age < 18) {
	welcome();

	function welcome() {
		alert("Hello!");
	}
} else {
	welcome();
	function welcome() {
		alert("Welcome!");
	}
}

let age = prompt("Age?");
let welcome;
if (age < 18) {
	welcome = function () {
		alert("Child");
	};
} else {
	welcome = function () {
		alert("Adult");
	}
}
welcome();


let age = prompt ("How old are you?", "");
let welcome = (age < 18) ?
	function () { alert("Child") } :
	function () { alert("Adult") };
welcome();         


let func = (arg1, arg2, ...argN) => expression

let func = function (arg1, arg2, ...argN) {
	return expression;
}


let sum = (a, b) => a + b;
alert(sum(5, 5));
// Функция-стрелка более краткая форма для:

let sum = function (a, b) {
	return a + b;
};
alert(sum(5, 5));	//	10

let umnojenie = n => n * 2;
alert(umnojenie(5));

let sayHi = () => alert("Hello!");
sayHi();

let age = prompt("Age?", "");
let greetings = (age < 18) ?
() => alert('hello') :
() => alert('welcome');
greetings();

let sum = (a, b) => {
	let result = a + b;
	return result;
}
alert(sum(5, 5));


let ask = (question, yes, no) => {
	if (confirm(question)) yes()
  else no();
}
ask(
	'Are you agree?',
	() => { alert("Вы согласились."); },
	() => { alert("Вы отменили выполнение."); }
);

function hello(name) {
	name = "John";
	let phrase = `Hello, ${name}`;
	say(phrase);
}
function say(phrase) {
	alert(`** ${phrase} **`);
};
hello(name);


for (let asd = 0; asd < 5; asd++) {
	console.log("number:", asd);
}

let user = {
	name: `John`,
	age: 30,
	"im natural": true
};
console.log(user["im natural"]);
console.log(user.age);
user.isAdmin = true;
delete user.age;

let key = "likes birds";
user[key] = true;
alert(user[key]);

let user = {
	name: `John`,
	age: `30`,
};
let key = prompt(`What do you want to know?`);
console.log(user[key]);

let fruit = prompt(`What is fruit?`, `apple`);
let bag = {
	[fruit]: 5,
}
console.log(bag[fruit]);

let clothes = `jacket`;
let magazine1 = {
	[clothes + 1]: `20dollars`
};
console.log(magazine1[clothes + 1]);

function makeUser(name, age) {
	return {
		name: name,
		age: age,
	}
}
let user = makeUser("John", 30);
alert(user.name);	//	John

function makeUser(name, age) {
	return {
	name, // то же самое, что и name: name
	age // то же самое, что и age: age
	// ...
	};
}
	
let user = {};
alert(user.noSuchProperty === undefined);	//	true

let user = {
	name: `John`,
	age: 20,
};
alert(`age` in user);	//	true
alert(`no such property` in user);	//	false

let user = {age: 30};
let key = 'age';
alert(key in user);

let obj = {
	test: undefined,
};
alert(obj.test);
alert(`test` in obj);

let user = {
	name: `John`,
	age: 30,
	isAdmin: true
};
for (let key in user) {
	alert(key);
	alert(user[key]);
}

let codes = {
	"49": "Germany",
	"41": "Switzerland",
	"44": "United Kingdom",
};
for (let code in codes) {
	alert(code);
}

let user = {
	name: "John",
	surname: "Smith",
};
user.name = "Pete";
delete user.name;
console.log(user.name);
console.log(user.surname);


function isEmpty(obj) {
	if(obj = ) {
		
	}
}
isEmpty();

let salaries = {
	John: 100,
	Ann: 160,
	Pete: 130
}
if (salaries == '') {
	console.log(0);
}
let sum = salaries.John + salaries.Ann + salaries.Pete;
console.log(sum);

let menu = {
	width: 200,
	height: 300,
	};

function multiplyNumeric(menu) {
	for (let x2 in menu) {
		x2 = menu[x2] * 2;
		console.log(x2);
	}
};
multiplyNumeric(menu);


function marry(man, woman) {
	woman.husband = man;
	man.wife = woman;

	return {
		father: man,
		mom: woman,
	}
}

let family = marry(
	{ name: "John" },
	{ name: "Ann" },
);


let id = Symbol("id");
let id1 = Symbol("id");
let id2 = Symbol("id");
alert(id1 == id2); // false

let id = Symbol("id");
alert(id); // TypeError: Cannot convert a Symbol value to a string


let id = Symbol("id");
alert(id.toString());

let id = Symbol("id");
alert(id.description); // id

let user ={
	name: "Den",
};
let id = Symbol("id");
user[id] = 1;
alert(user[id]);

let id = Symbol("id");
let user = {
	name: "Den",
	[id]: 123,
}

let id = Symbol("id");
let user = {
name: "Вася",
age: 30,
[id]: 123
};
for (let key in user) alert(key); // name, age (свойства с ключом-символом нет среди перечисленн
// хотя прямой доступ по символу работает
alert( "Напрямую: " + user[id] );


let ageP = Symbol("ageS");
let obj = {
	name: "Den",
	ageP: 16,
}
alert(obj.ageP);

let user = {
	name: "Den",
	age: 16,
};
user.sayHi = function () {	// sayHi -	метод
	alert("Hello!");
};
user.sayHi();


user = {
	sayHi: function() {
		alert("Hello!")
	}
}

user = {
	sayHi() {
		alert("hello!")
	}
}

let user = { name: "Джон" };
let admin = { name: "Админ" };
function sayHi() {
alert( this.name );
}
sayHi();

let obj = {
	name: "Den",

	showName() {
		alert("Hello," + this.name)
	}
}
obj.showName();



let calculator = {

	figure1: prompt("Figure1", '1'),
	figure2: prompt("Figure2", '2'),
	sum() {
		alert(this.sum.figure1)
	}
}
calculator.read();
calculator.sum();

let username = {
	uname: "Den",
	age: 16,
}
console.log(username);
console.log(username.uname)

let firstPart = "likes";
let userInfo = {
	name: "Den",
	age: 16,
	[firstPart + " javascript"]: true,
}
console.log(userInfo["likes javascript"]);

let firstPart = "likes";
let userInfo = {
	name: "Den",
	age: 16,
	[firstPart]: true,
}
console.log(userInfo[firstPart]);

let key = "name";
console.log(userInfo[key]);


let calculator = {

	read: {
		figure1: prompt("Figure1", '1'),
		figure2: prompt("Figure2", '2'),
	},

	
}

console.log(calculator.read["figure1"] * calculator.read["figure2"]);
console.log(calculator.read.figure1)


let calculator = {
	read() {
		figure1: prompt("Figure1", '1');
		figure2: prompt("Figure2", '2');
	},

	sum() {
		return this.read["figure1"] + this.read["figure2"];
	},
}
calculator.read();
console.log(calculator.sum());


let calculator = {
	read() {
		figure1: prompt("Figure 1", "");
		figure2: prompt("Figure2", "");
	},

	sum
	
}
calculator.read();
calculator.sum();



let calculator = {
	read() {
		figure1: +prompt("Figure1");
		figure2: +prompt("Figure2");
	},

	sum() {
		return this.read["figure1"] + this.read["figure2"];
	},
}
calculator.read();
console.log(calculator.sum());



let calculator = {
	read() {
		figure1: +prompt("1");
		figure2: +prompt("2");
	},
	sum() {
		doo: console.log(this["figure1"]);
	},
	mul() {
		dooo: console.log(this["figure1"] + this["figure2"]);
	},
};
	calculator.read();
	alert( calculator.sum() );
	alert( calculator.mul() );


let calculator = {
	read() {
		figure1: +prompt("Figure 1");
		figure2: +prompt("Figure 2");
	},
	sum() {5},

};
calculator.read();
alert(calculator.read.figure1);
alert( calculator.sum() );

let calculator = {
	read() {
		figure1: +prompt("Figure 1");
	},
};
calculator.read();

let obj1 = {
	name: "Den"
};
let obj2 = {
	age: 20,
}
let newObj = Object.assign({}, obj1, obj2);
console.log(newObj);

hello();
function hello() {
	console.log("Hello, World!");
};
let person = {
	name: 'Den',
	age: 15,
	sayhello: hello
};
console.log(person.sayhello);


let calculator = {
	read() {
		this.figure1 = +prompt("Figure1", 1);
		this.figure2 = +prompt("Figure2", 2);
	},
	sum() {
	  return this.figure1 + this.figure2;
	},
	mul() {
		return this.figure1 * this.figure2;
	},
};
calculator.read();
alert( calculator.sum() );
alert(calculator.mul());

let ladder = {
	step: 0,
	up() {
		this.step++;
		return this;
	},
	up() {
		this.step++;
		return this;
		},
	down() {
	this.step--;
	return this;
	},

	showStep: function() { // показывает текущую ступеньку
	console.log( this.step );
	}
	};
ladder.up().up().down().showStep()




let user = {
	name: "Den",
	age: 16,

	[Symbol.toPrimitive](hint) {
		alert(`hint:` ${ hint });
		return hint == "string" ? `{name: "${this.name}"}` : this.money;
	}
}
alert(user); // hint: string -> {name: "John"}
alert(+user); // hint: number -> 1000
alert(user + 500); // hint: default -> 1500
	

let user = {
	name: "John",
	money: 1000,
	[Symbol.toPrimitive](hint) {
	alert(`hint: ${hint}`);
	return hint == "string" ? `{name: "${this.name}"}` : this.money;
	}
	};
	// демонстрация результатов преобразований:
	alert(user); // hint: string -> {name: "John"}
	alert(+user); // hint: number -> 1000
	alert(user + 500); // hint: default -> 1500


let id = Symbol("asd");
alert(id.toString());

let id = Symbol("asd");
alert(id.description);

let user = {
	name: "Den",
};
let id = Symbol("description");
user[id] = 1;
alert(user[id]);


let user = {
	name: "Den",
	hi() {
		alert(this.name);
	},
	bye() {
		alert("Goodbye")
	},
}
user.hi();

let calculator = {
	read() {
		this.figure1 = +prompt("Figure1", 1);
		this.figure2 = +prompt("Figure2", 2);
	},
	sum() {
		return this.figure1 + this.figure2;
	},
	mul() {
		return this.figure1 * this.figure2;
	},
};
calculator.read();
alert( calculator.sum() );
alert(calculator.mul());

let calculator = {
	read() {
		this.figure1 = +prompt("Figure1", 1);
		this.figure2 = +prompt("Figure2", 2);
	},
	sum() {
	  return this.figure1 + this.figure2;
	},
	mul() {
		return this.figure1 * this.figure2;
	},
};
calculator.read();
alert( calculator.sum() );
alert(calculator.mul());


let user = {
	name: "den",
	age: 16,

	[Symbol.toPrimitive](hint) {
		alert(`hint: ${hint}`);
	return hint == "string" ? `{name:"${this.name}"}` : this.age;
	}
}
alert(user); // hint: string -> {name: "John"}
alert(+user); // hint: number -> 1000
alert(user + 500); // hint: default -> 1500










Math.floor(1.23); // 1 всегда округляет в меньшую сторону
Math.round(1.23); // 1 работает по правилам математики
Math.ceil(1.23) // 2 округляет в большую сторону

let num = 123.456;
console.log(num.toFixed(2)); // 123.46 указываем сколько знаков после запятой оставить

console.log(Math.random() * 100 1-100); // выводит рандомное число 0-1;  Math.random() * число, выводит рандомное число до введеного после *

console.log(Math.max(234, 4324, 234, 234234, 234)); // выводит наибольшее число

let userOne = {
	userAge: 34 
};
let userTwo = {
	userAge: 45
};
let olderUser console.log(Math.max(userOne.userAge, userTwo.userAge)); // 45

Math.min() - тоже самое только с минусом

console.log(Math.pow(2, 3)); // 2  в степени 3 = 8 (2 ** 3)

let value = "123";
let valueNumber = +value; // преобразование в число
console.log(typeof value);

let parsee = "112.65"; // if 112.65 - 112; if "112px" - 112; "px112" - NaN
console.log(parseInt(parsee));

let parsee = "112.65"; // if 112.65 - 112,65; if "112px" - 112; "px112" - NaN
console.log(parseFloat(parsee));

let num = 123;
console.log(typeof num);
console.log(typeof num.toString());

let num = NaN;
console.log(isNaN(num)); // true if its NaN
console.log(isFinite(num)); // if its NaN or +-Infinity its true





let str = `Den`;
console.log(str.toLocaleLowerCase()); // den
console.log(str.toLocaleUpperCase()); //  DEN

let str = "123456789asd";
console.log(str.length);	//	12 - its str's length

let str = "123456789asd";
console.log(str[1]);	//	2
console.log(str[6]);	//	7
console.log(str[11]);	//	d

let str = "Hello, My name is Den ";
console.log(str.slice(7, 21));	//	My name is Den
console.log(str.slice(-4, -1));	//	Den

let str = "Hello, My name is Den!";
console.log(str.indexOf(`is`));	//	15
console.log(str.indexOf(`My name is Den!`));	//	7
let str2 = `game1 word game2 word game3`;
console.log(str2.indexOf(`game`, 6));	//	11; второе значение указывает с какого индекса начинать 

let str = "Hello, My name is Den! Hello, My name is Ruslan!";
console.log(str.lastIndexOf(`M`));	//	30; ищет с конца
console.log(str.lastIndexOf(`My name is Den!`));	//	7

let str = "Hello, My name is Den! Hello, My name is Ruslan!";
console.log(str.includes(`Hello`));	// true
console.log(str.includes(`My name is Den!`));	//	true
console.log(str.includes(`My name is Anna!`));	//	false
// includes is for using in if{}else{}



let textStr = "Hello, My name is Den! Hello, My name is Ruslan!";
console.log(textStr.split(" "));	//	(10) ['Hello,', 'My', 'name', 'is', 'Den!', 'Hello,', 'My', 'name', 'is', 'Ruslan!']
// 0: "Hello,"
// 1: "My"
// 2: "name"
// 3: "is"
// 4: "Den!"
// 5: "Hello,"
// 6: "My"
// 7: "name"
// 8: "is"
// 9: "Ruslan!"
// length: 10


let textStr = "Hello, My name is Den! Hello, My name is Ruslan!";
let res = textStr.split(" "); 
console.log(res.join(` `)); // соединяем обратно

let textStr = "Hello|World|!";
let res = textStr.split("|"); 
console.log(res); // ['Hello', 'World', '!']
// 0: "Hello"
// 1: "World"
// 2: "!"
// length: 3
console.log(res.join(`|`)); // соединяем обратно; Hello|World|!

console.log([1, 2, 3].join("number"));	// 1number2number3

let hello = `Hello World`;
let showHello = hello.split(" ");
console.log(showHello.join("_")); //	Hello_World


let textStr = "   den256kop@gmail.com   ";
console.log(textStr);	//	"   den256kop@gmail.com   "
console.log(textStr.trim());	//	"den256kop@gmail.com"
*/
let textStr = "   den256kop@ gmail. com   ";
console.log(textStr);	//	"   den256kop@ gmail. com   "
console.log(textStr.trim());	//	"den256kop@ gmail. com"
// trim убирает пробелы в начале и в конце

