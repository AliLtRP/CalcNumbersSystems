export const value_inp = document.querySelectorAll('input');
export const texrArea = document.querySelector('textarea');


// check if the number is in binary form or not
export function isBinary(num) {
    let result = false;

    for(let i=0; i< num.length; i++){
        if (num[i] == "0" || num[i] == "1") {
            result = true;
        } else {
            result = false;
        }
    }

    return result;
}


// get the operator
export let operator = document.getElementById('select').value;

// binary calculations
export const result_Bin = (input_1, input_2) => {
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


// check if number in hex form 
export function isHex(data) {
    let result = data.match(/^[0-9a-f]+$/i) ? true:false;
    return result;
}



export function inputValidationInputOne(){
    const valEnt = value_inp[0];

    if (from.value === 'Hex') {
        // get input tag
        let inp_1 = document.getElementById('input1');

        // if input field get change
        inp_1.addEventListener('input', () => {

            // change type of input from number to text
            valEnt.setAttribute('type', 'text');

            // ensure the text is in hex numbers range 0-f
            if (isHex(inp_1.value) != true) {
                const s = inp_1.value;
                inp_1.value = s.substr(0, s.length - 1);
            };

        });
    };
};


export function inputValidationInputTwo(){

    const valEnt2 = value_inp[1];

    if (from.value === 'Hex') {
        const getData = document.getElementById('input2');

        getData.addEventListener('input', ()=>{
            valEnt2.setAttribute('type', 'text');

            if (isHex(getData.value) != true) {
                const s = getData.value;
                getData.value = s.substr(0, s.length - 1);
            };
            
        });   
    
    };
};