let numbers = document.querySelectorAll('.number')
let operation = document.querySelectorAll('.operation')
let equal = document.querySelector('.equal')
let clearAll = document.querySelector('.all-clear')
let resultWindow = document.querySelector('.calculator__window')
let numberToString = '';
let operationToString = '';
let testResult = '';
let result = 0;
let operArr = ['+', '-', 'mod', '*', '÷', '+/-'];
let operMinusArr = ['+', 'mod', '*', '÷', '+/-'];
numbers.forEach(value => {
    value.addEventListener('click', () => {
        //when adding multiple "." to the number
        if (value.textContent == '.' && numberToString.includes('.')) return;
        //when adding another input number to the result, result will be removed
        if(testResult !== '' && testResult == numberToString) numberToString = '';
        //when input of first number is '.' it returns '0.';
        if(value.textContent == '.' && numberToString == '') numberToString = '0'
        
        numberToString += value.textContent;
        resultWindow.textContent = numberToString;
        
    })
})

operation.forEach(value => {
    value.addEventListener('click', () => {
         
        if(operationToString !== ''){
            calc();
        }
        if (!numberToString.startsWith("-")) {
            for (let i = 0; i < operArr.length; i++) {
                if (numberToString == '' || numberToString.includes(operArr[i])) return
            }
        }
        for (let i = 0; i < operArr.length; i++) {
            if (numberToString.includes(operMinusArr[i])) return
        } 

        if(value.textContent == '+/-'){
            for (let i = 0; i < operArr.length; i++) {
                if (numberToString.includes(operArr[i])) return
            }
            numberToString = '-' + numberToString
            resultWindow.textContent = numberToString
        }else{
            operationToString += value.textContent
            numberToString += operationToString
            resultWindow.textContent = numberToString
        }

       

        
    })
}) 

clearAll.addEventListener('click', ()=>{
    numberToString = "";
    operationToString =  "";
    resultWindow.textContent = "";
})

equal.addEventListener('click', () => {
    calc();
}); 

function calc(){
    let arr = numberToString.split(operationToString);
    
    let firstNumber = Number(arr[0]);
    let secondNumber = Number(arr[1]);
    if(secondNumber == 0) return
    switch (operationToString) {
        case '+':
            result = firstNumber + secondNumber;
            resultWindow.textContent = result;
            break;

        case '-':
            result = firstNumber - secondNumber;
            resultWindow.textContent = result;
            break;
        
        case 'mod':
            result = firstNumber % secondNumber;
            resultWindow.textContent = result;
            break;
        case '*':
            result = firstNumber * secondNumber;
            resultWindow.textContent = result;
            break;
        case '÷':
            result = firstNumber / secondNumber;
            resultWindow.textContent = result;
            break;
        default: 
        return;
    } 
        testResult = result.toString();
        numberToString = result.toString();
        operationToString = ""
}