"use strict";
// [기본]
var count = 0; // 숫자
count += 1;
// count = '갑자기 분위기 문자열'; // 이러면 에러가 남.
var message = 'hello world'; // 문자열
// [배열]
var numbers = [1, 2, 3]; // 숫자 배열
var messages = ['hello', 'world']; // 문자열 배열
// [다중 type 지정]
var mightBeUndefined = undefined; // string 일수도 있고 undefined 일수도 있음
var nullableNumber = null; // number 일수도 있고 null 일수도 있음
// [값 범위 지정]
var color = 'red'; // red, orange, yellow 중 하나임
color = 'yellow';
// color = 'green'; // 에러 발생!
function sumArray(numbers) {
    return numbers.reduce(function (acc, current) { return acc + current; }, 0);
}
var total = sumArray([1, 2, 3, 4, 5]);
console.log(total); // 15
