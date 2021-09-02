"use strict";
/*let userName = prompt ("Как вас зовут?");
alert ("Привет, " + userName);
// userName = 555;
alert (`Привет, ${userName}`);
let a = prompt ("Введите число", "5");
let b;
b = a**2;
alert (`Квадрат числа ${a} равен ${b}`);
a = +prompt("Введите первое число");
b = +prompt ("Введите второе число");
let c = (a+b)/2;
alert ('Среднее арифметичесое равно' + c);*/

//Задание 4
//const METER_TO_MILES = 0.621371;
//let meters = +prompt ("Введите количество метров");
//let miles = meters * METER_TO_MILES;
//alert ("В милях это " + miles);

//let num = +prompt ("Введите трехзначное число");
//let secondsymbol = num % 100;
//secondsymbol = (secondsymbol- (secondsymbol % 10))/10;
//alert (secondsymbol);
//let userNumber;

//userNumber = +prompt("Введите число");
//if (userNumber < 0) {
//    alert ("число отрицательное");
//} else if (userNumber === 0) {
 //   alert ("число равно 0");
//} else alert ("число положительное");

//let userAge = +prompt("Введите число");
//if (userAge > 0 || userAge <120) {
//    alert ("Вы врёте!")
//}
let userNumber, 
    modul;
userNumber = +prompt("Введите число");
if (userNumber < 0) {
    modul = userNumber;
} else modul = userNumber;
alert ("Модуль равен " + modul);