// function calculate(operation) {
//     var num1 = parseFloat(document.getElementById('num1').value);
//     var num2 = parseFloat(document.getElementById('num2').value);

//     if (isNaN(num1) || isNaN(num2)) {
//         document.getElementById('result').value = "Please enter valid numbers";
//         return;
//     }

//     // var result;
//     // switch (operation) {
//     //     case 'add':
//     //         result = num1 + num2;
//     //         break;
//     //     case 'subtract':
//     //         result = num1 - num2;
//     //         break;
//     //     case 'multiply':
//     //         result = num1 * num2;
//     //         break;
//     //     case 'divide':
//     //         if (num2 === 0) {
//     //             document.getElementById('result').value = "Cannot divide by zero";
//     //             return;
//     //         }
//     //         result = num1 / num2;
//     //         break;
//     //     default:
//     //         document.getElementById('result').value = "Invalid operation";
//     //         return;
//     // }

//     document.getElementById('result').value = result;
// }




function caculate(){
    let num1 = document.getElementById("num1").value
    let num2 = document.getElementById("num2").value
    let sign = document.getElementById("sign").value
    if(sign=="+"){
        result = parseFloat(num1) +  parseFloat(num2)
    }
    if(sign=="-"){
        result = parseFloat(num1) -  parseFloat(num2)
    }
    if(sign=="*"){
        result = parseFloat(num1) *  parseFloat(num2)
    }
    if(sign=="/"){
        result = parseFloat(num1) /  parseFloat(num2)
    }
    document.getElementById("result").value = result
}
