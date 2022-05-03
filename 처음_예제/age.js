function calc() {

var currentYear = 2022;
var birthYear = prompt("몇 년생이에요?","YYYY");
var age = currentYear - birthYear + 1;

document.querySelector("#result").innerHTML = "당신의 나이는 " + age + "세입니다.";

}


