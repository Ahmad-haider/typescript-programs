// 1.write a ts program to find maximum between two numbers 
var num1 = 4564;
var num2 = 4575;
console.log(Math.max(num1, num2));
// 2. Write a ts program to find maximum between three numbers.
var numa = 30;
var numb = 40;
var numc = 50;
console.log(Math.max(numa, numb, numc));
// 3. Write a ts program to check whether a number is negative, positive or zero.
var number1 = 0;
if (number1 == 0) {
    console.log("number is equal to 0");
}
else if (number1 > 0) {
    console.log("number is positive");
}
else if (number1 < 0) {
    console.log("number is negative");
}
// 4. Write a ts program to check whether a number is divisible by 5 and 11 or not.
var number2 = 110;
if (number2 % 5 == 0 && number2 % 11 == 0) {
    console.log("Number is divisible by 5 and 11");
}
else {
    console.log("number is not divisible by 5 and 11");
}
// 5. Write a ts program to check whether a number is even or odd
var number3 = 3;
if (number3 % 2 == 0) {
    console.log("Number is even");
}
else {
    console.log("Number is odd");
}
// 6. Write a ts program to check whether a year is leap year or not
var number4 = 2020;
if (number4 % 100 && number4 % 4 || number4 % 400) {
    console.log("Year is leap");
}
else {
    console.log("Year is not leap");
}
// 7. Write a ts program to check whether a character is alphabet or not.
var alphabet = "f";
if (alphabet >= "a" && alphabet <= "z") {
    console.log("This is an elphabet");
}
else {
    console.log("This is not an elphabet");
}
// 8. Write a ts program to input any alphabet and check whether it is vowel or consonant.
var vowel = "f";
if (vowel == "a" || vowel == "e" || vowel == "i" || vowel == "o" || vowel == "u") {
    console.log("This is a vowel");
}
else {
    console.log("This is not a vowel");
}
// 9. Write a ts program to input any character and check whether it is alphabet, digit or special character.
var some = "1";
if (some >= "a" && some <= "z") {
    console.log("This is an elphabet");
}
else if (some >= 0) {
    console.log("This is a digit");
}
else {
    console.log("This is a special character");
}
// 10. Write a ts program to check whether a character is uppercase or lowercase alphabet.
var alphabet2 = "a";
if (alphabet2 >= "a" && alphabet2 <= "z") {
    console.log("This is a lower case alphabet");
}
else if (alphabet2 >= "A" && alphabet2 <= "Z") {
    console.log("This is a upper case alphabet");
}
// 11. Write a ts program to input week number and print week day.
var week = 1;
if (week == 1) {
    console.log("Monday");
}
else if (week == 2) {
    console.log("Tuesday");
}
else if (week == 3) {
    console.log("Wednesday");
}
else if (week == 4) {
    console.log("Thursday");
}
else if (week == 5) {
    console.log("Friday");
}
else if (week == 6) {
    console.log("Saturday");
}
else if (week == 7) {
    console.log("Sunday");
}
else {
    console.log("Enter number between 1 and 7");
}
// 12. Write a ts program to input month number and print number of days in that month.
var month = 133;
if (month == 1) {
    console.log("31 days");
}
else if (month == 2) {
    console.log("28 or 29 days");
}
else if (month == 3) {
    console.log("31 days");
}
else if (month == 4) {
    console.log("30 days");
}
else if (month == 5) {
    console.log("31 days");
}
else if (month == 6) {
    console.log("30 days");
}
else if (month == 7) {
    console.log("31 days");
}
else if (month == 8) {
    console.log("31 days");
}
else if (month == 9) {
    console.log("30 days");
}
else if (month == 10) {
    console.log("31 days");
}
else if (month == 11) {
    console.log("30 days");
}
else if (month == 12) {
    console.log("31 days");
}
else {
    console.log("Enter number between 1 and 12 ");
}
// 13. Write a ts program to count total number of notes in given amount.
var amount = 4637;
var note500 = 0;
var note100 = 0;
var note50 = 0;
var note20 = 0;
var note10 = 0;
var note5 = 0;
var note2 = 0;
var note1 = 0;
if (amount >= 500) {
    note500 = amount / 500;
    amount -= note500 * 500;
}
else if (amount >= 100) {
    note100 = amount / 100;
    amount -= note100 * 100;
}
else if (amount >= 50) {
    note50 = amount / 50;
    amount -= note50 * 50;
}
else if (amount >= 20) {
    note20 = amount / 20;
    amount -= note20 * 20;
}
else if (amount >= 10) {
    note10 = amount / 10;
    amount -= note10 * 10;
}
else if (amount >= 5) {
    note5 = amount / 5;
    amount -= note5 * 5;
}
else if (amount >= 2) {
    note2 = amount / 2;
    amount -= note2 * 2;
}
else if (amount >= 1) {
    note1 = amount / 1;
    amount -= note1 * 1;
}
console.log("500 = %d\n", note500);
console.log("100 = %d\n", note100);
console.log("50 = %d\n", note50);
console.log("20 = %d\n", note20);
console.log("10 = %d\n", note10);
console.log("5 = %d\n", note5);
console.log("2 = %d\n", note2);
console.log("1 = %d\n", note1);
// 14. Write a ts program to input angles of a triangle and check whether triangle is valid or not.
var angle1 = 80;
var angle2 = 50;
var angle3 = 50;
var sum = angle1 + angle2 + angle3;
if (sum == 180 && angle1 >= 0 && angle2 >= 0 && angle3 >= 0) {
    console.log("Triangle is valid");
}
else {
    console.log("Triangle is not valid");
}
// 15. Write a ts program to input all sides of a triangle and check whether triangle is valid or not.
var side1 = 455;
var side2 = 23;
var side3 = 44;
if (side1 + side2 <= side3 || side1 + side3 <= side2 || side2 + side3 <= side1) {
    console.log("Not valid");
}
else {
    console.log("Valid");
}
// 16. Write a ts program to check whether the triangle is equilateral, isosceles or scalene triangle.
var x = 44;
var y = 44;
var z = 43;
if (x == y && y == z) {
    console.log("Equilateral triangle");
}
else if (x == y || y == z || x == z) {
    console.log("Isosceles triangle");
}
else {
    console.log("Scalene triangle");
}
// 17. Write a ts program to find all roots of a quadratic equation.
var a = 2;
var b = -9;
var c = 4;
var determinent = b * b - 4 * a * c;
if (determinent > 0) {
    console.log("Roots are real and different");
}
else if (determinent == 0) {
    console.log("Root are real and same");
}
else if (determinent < 0) {
    console.log("Roots are complex and different");
}
// 18. Write a ts program to calculate profit or loss.
var sellingprice = 31;
var costprice = 23;
var profit = sellingprice - costprice;
var loss = costprice - sellingprice;
if (sellingprice > costprice) {
    console.log("profit", profit);
}
else if (costprice > sellingprice) {
    console.log("loss", loss);
}
else if (costprice == sellingprice) {
    console.log("No profit or loss");
}
// 19. Write a ts program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer. Calculate percentage and grade according to following:
// Percentage >= 90% : Grade A
// Percentage >= 80% : Grade B
// Percentage >= 70% : Grade C
// Percentage >= 60% : Grade D
// Percentage >= 40% : Grade E
// Percentage < 40% : Grade F
var Physics = 100;
var Chemistry = 0.5;
var Biology = 100;
var Mathematics = 100;
var Computer = 100;
var Total = Physics + Chemistry + Biology + Mathematics + Computer;
var percentage = Total / 500 * 100;
if (percentage >= 90) {
    console.log(" Grade A ");
}
else if (percentage >= 80) {
    console.log("Grade B");
}
else if (percentage >= 70) {
    console.log("Grade C");
}
else if (percentage >= 60) {
    console.log("Grade D");
}
else if (percentage >= 40) {
    console.log("Grade E");
}
else if (percentage < 40) {
    console.log("Grade F");
}
// 20. Write a ts program to input basic salary of an employee and calculate its Gross salary according to following:
// Basic Salary <= 10000 : HRA = 20%, DA = 80%
// Basic Salary <= 20000 : HRA = 25%, DA = 90%
// Basic Salary > 20000 : HRA = 30%, DA = 95%
var Basic = 23000;
var HRA = Basic;
var DA = Basic;
var Gross = Basic + DA + HRA;
if (Basic <= 10000) {
    DA = Basic * 0.8;
    HRA = Basic * 0.2;
}
else if (Basic <= 20000) {
    DA = Basic * 0.9;
    HRA = Basic * 0.25;
}
else if (Basic > 20000) {
    DA = Basic * 0.95;
    HRA = Basic * 0.3;
}
console.log("Gross salary of employee = %d", Gross);
// 21. Write a ts program to input electricity unit charges and calculate total electricity bill according to the given condition:
// For first 50 units Rs. 0.50/unit
// For next 100 units Rs. 0.75/unit
// For next 100 units Rs. 1.20/unit
// For unit above 250 Rs. 1.50/unit
// An additional surcharge of 20% is added to the bill
var unit = 34;
var charges = unit;
var surcharge = 0.2;
var Totalcharges = charges + surcharge;
if (unit <= 50) {
    charges = unit * 0.50;
}
else if (unit <= 150) {
    charges = 25 + ((unit - 50) * 0.75);
}
else if (unit <= 250) {
    charges = 100 + ((unit - 150) * 1.20);
}
else if (unit > 250) {
    charges = 220 + ((unit - 250) * 1.50);
}
console.log("electricity bill = Rs %d", Totalcharges);
