let number = prompt("Place a number between 100 & 999",) || 0;

let number1, number2, number3 = 0;

if (number >= 100 && number <= 999) {
    number1 = parseInt(number.substr(0, 1)); number2 = parseInt(number.substr(1, 1)); number3 = parseInt(number.substr(2, 1));


    Narcissistic = Math.pow(number1, 3) + Math.pow(number2, 3) + Math.pow(number3, 3);
    if (number == Narcissistic) {
        alert("it is Narcissistic Number");
    }
    else {
        alert("it is Not Narcissistic");
    }
}
else {
    alert("The number must be between 100 and 999");
}