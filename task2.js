/*Шахматная доска. Напишите программу, создающую строку, содержащую решётку 8х8, в которой линии разделяются символами новой строки. На каждой позиции либо пробел, либо #. В результате должна получиться шахматная доска.

   Источник: http://www.itmathrepetitor.ru/zadachi-po-javascript-iz-knigi-vyrazitelnyjj-javascript/ */

var i;
var x="# # # # ";
var y=" # # # #";

for (i=1; i<=8; i++) {
    if (i%2===0){
        console.log(y);
    }
    else {
        console.log(x);
    }
}