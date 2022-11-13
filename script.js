
number = prompt("введи + - / *");

while (number !== "+" && number !== "-" && number !== "/" && number !== "*") {
    alert("Не верно");

    number = prompt("введи + - / *");
}
alert("Супер");

ansver = parseInt(prompt("сколько операндов хочешь использовать? Можно от 1 до 7"));

while ((ansver < 2) || (ansver > 6)) {
    alert("Это должно быть ЧИСЛО больше 1 и меньше 7");

    ansver = +prompt("сколько операндов он хочет использовать. От 1 до 7");
}

alert(`Теперь введи ${ansver} операндов`);
plus = 0;

for (i = 1; i <= ansver; i++) {
    if (i === 1) {

        operand1 = parseInt(prompt("Введи первый операнд"));
        while (isNaN(operand1)) {
            alert("Это не число");
            operand1 = parseInt(prompt("Введи первый операнд"));
        }
        
    } if (i === 2) {

        operand2 = parseInt(prompt("Введи второй операнд"));
        while (isNaN(operand2)) {
            alert("Это не число");
            operand2 = parseInt(prompt("Введи второй операнд"));
        }

        if (number === "+") {
            plus = operand1 + operand2;
        } else if (number === "-") {
            plus = operand1 - operand2;
        } else if (number === "*") {
            plus = (operand1 * operand2);
        } else if (number === "/") {
            plus = operand1 / operand2;
        }

    } if (i === 3) {
        operand3 = parseInt(prompt("Введи третий операнд"));
        while (isNaN(operand3)) {
            alert("Это не число");
            operand3 = parseInt(prompt("Введи третий операнд"));
        }
        if (number === "+") {
            plus = operand1 + operand2 + operand3;
        } else if (number === "-") {
            plus = operand1 - operand2 - operand3;
        } else if (number === "*") {
            plus = (operand1 * operand2 * operand3);
        } else if (number === "/") {
            plus = operand1 / operand2 / operand3;
        }

    } if (i === 4) {
        operand4 = parseInt(prompt("Введи четвертый операнд"));

        while (isNaN(operand4)) {
            alert("Это не число");
            operand4 = parseInt(prompt("Введи четвертый операнд"));
        }
        if (number === "+") {
            plus = operand1 + operand2 + operand3 + operand4;
        } else if (number === "-") {
            plus = operand1 - operand2 - operand3 - operand4;
        } else if (number === "*") {
            plus = operand1 * operand2 * operand3 * operand4;
        } else if (number === "/") {
            plus = operand1 / operand2 / operand3 / operand4;
        }

    } if (i === 5) {
        operand5 = parseInt(prompt("Введи пятый операнд"));

        while (isNaN(operand5)) {
            alert("Это не число");
            operand5 = parseInt(prompt("Введи пятый операнд"));
        }
        if (number === "+") {
            plus = operand1 + operand2 + operand3 + operand4 + operand5;
        } else if (number === "-") {
            plus = operand1 - operand2 - operand3 - operand4 - operand5;
        } else if (number === "*") {
            plus = operand1 * operand2 * operand3 * operand4 * operand5;
        } else if (number === "/") {
            plus = operand1 / operand2 / operand3 / operand4 / operand5;
        }

    } if (i === 6) {
        operand6 = parseInt(prompt("Введи шестой операнд"));

        while (isNaN(operand6)) {
            alert("Это не число");
            operand6 = parseInt(prompt("Введи шестой операнд"));
        }
        if (number === "+") {
            plus = operand1 + operand2 + operand3 + operand4 + operand5 + operand6;
        } else if (number === "-") {
            plus = operand1 - operand2 - operand3 - operand4 - operand5 - operand6;
        } else if (number === "*") {
            plus = operand1 * operand2 * operand3 * operand4 * operand5 * operand6;
        } else if (number === "/") {
            plus = operand1 / operand2 / operand3 / operand4 / operand5 / operand6;
        }

    }
}

alert(plus);




// do {
// deystvie = prompt("Введи действие (+ - / *)");
// } while(deystvie !== "+" && deystvie !== "-" && deystvie !== "/" && deystvie !== "*");

// do {
// answerNumber = parseInt(prompt("Сколько чисел будем использовать, от 2 до 6? "));
// } while (answerNumber <= 1 || answerNumber >= 7 || isNaN(answerNumber) || answerNumber === null);

// result = 0;

// for(i = 1; i <= answerNumber; i++) {
//     do {
// lubayaCifra = parseInt(prompt(`Введи абсолютно любое ${i}-e число`).replaceAll(" ", ""))
//     } while(lubayaCifra === null || isNaN(lubayaCifra));

//     switch(deystvie) {
// case "+":
//     result = i === 1 ? lubayaCifra : result + lubayaCifra;
//     break;
//     case "-":
//         result = 1 === 1 ? lubayaCifra : result - lubayaCifra;
//         break;
// case "/":
//     result = i === 1 ? lubayaCifra : result / lubayaCifra;
//     break;
//     case "*":
//         result = i === 1 ? lubayaCifra : result * lubayaCifra;
//         break;
    
//     }
// }
// alert(result);


















