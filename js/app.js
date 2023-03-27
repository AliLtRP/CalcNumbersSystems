import * as myFunc from "./helpers.js";

const button = document.querySelector('button');
let from = document.getElementById('from');

// calc result
button.addEventListener('click', () => {
    let data = myFunc.value_inp[0].value;
    let data2 = myFunc.value_inp[1].value;

    let op = document.getElementById('select').value;

    // final result
    myFunc.result(data, data2, op, from.value);
});


// validate that input is not text, unless it's hex

from.addEventListener('change', () => {
    myFunc.inputValidationInput(from.value);
});
