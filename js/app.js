import * as myFunc from "./helpers.js";

const button = document.querySelector('button');

// calc result
button.addEventListener('click', () => {
    let data = myFunc.value_inp[0].value;
    let data2 = myFunc.value_inp[1].value;

    if ((myFunc.isBinary(data) && myFunc.isBinary(data2)) == true) {
        myFunc.result_Bin(data, data2);
    };

});


// validate that input is not text, unless it's hex
const from = document.getElementById('from');

from.addEventListener('change', () => {
    myFunc.inputValidationInputOne();
    myFunc.inputValidationInputTwo();
});
