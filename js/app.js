import { isBinary } from "./helpers.js";

let operator;
const value_inp = document.querySelectorAll('input');
const button = document.querySelector('button');
const texrArea = document.querySelector('textarea');

button.addEventListener('click', () => {
    let data = value_inp[0].value;
    let data2 = value_inp[1].value;

    operator = document.querySelector('select').value;

    if ((isBinary(data) && isBinary(data2) ) == true) {
        result_Bin(data, data2);
    } 
    result_Bin(data, data2);
});


// binary calculations
const result_Bin = (input_1, input_2) => {
    const size_1 = input_1.length;
    const size_2 = input_2.length;
    const size = size_1 >= size_2 ? size_1 : size_2;

    if (operator == '+') {
        texrArea.textContent = (parseInt(input_1, 2) + parseInt(input_2, 2)).toString(2).padStart(size, '0');
    } else if (operator == '-'){
         texrArea.textContent = (parseInt(input_1, 2) - parseInt(input_2, 2)).toString(2).padStart(size, '0');
    } else if (operator == 'x') {
         texrArea.textContent = (parseInt(input_1, 2) * parseInt(input_2, 2)).toString(2).padStart(size, '0');
    } else {
         texrArea.textContent = (parseInt(input_1, 2) / parseInt(input_2, 2)).toString(2).padStart(size, '0');
    }
    
};