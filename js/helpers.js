export const value_inp = document.querySelectorAll('input');
export const texrArea = document.querySelector('textarea');


// result calc. base important to know the calculation and result will be in what form
export const result = (data, data2, op, from) => {
    let result;
    let base = parseInt(from);

    data = parseInt(data, base);
    data2 = parseInt(data2, base);

    switch (op) {

        case '+':
            result = (data + data2).toString(base);
            break;
        case '-':
            result = (data - data2).toString(base);
            break;
        case 'x':
            result = (data * data2).toString(base);
            break;
        default:
            result = (data / data2).toString(base);
    };

    return texrArea.textContent = result;
};



// check if the number is in binary form or not
export function isBinary(data) {
    let result = data.match(/^[0-1]+$/) ? true : false;
    return result;
};

export function isDec(data) {
    let result = data.match(/^[0-9]*$/) ? true : false;
    return result;
}

// check if number in hex form 
export function isHex(data) {
    let result = data.match(/^[0-9a-f]+$/i) ? true : false;
    return result;
};


// octal validation
export function isOctal(data) {
    let result = data.match(/^[0-8]+$/i) ? true : false;
    return result;
};


// check if input is in valid form for each numbers system
export function inputValidationInput(base) {

    switch (base) {
        case '16    ':
            dataCheck(isHex);
            break;
        case '8':
            dataCheck(isOctal);
        case '10':
            dataCheck(isDec);
            break;
        default:
            dataCheck(isBinary);
    }
};

function dataCheck(sysNum) {
    const valEnt = value_inp[0];
    const valEnt2 = value_inp[1];
    const getData = document.getElementById('input1');
    const getData2 = document.getElementById('input2');

    getData2.addEventListener('input', () => {
        valEnt2.setAttribute('type', 'text');

        if (sysNum(getData2.value) != true) {
            const s = getData2.value;
            getData2.value = s.substr(0, s.length - 1);
        };
    });

    getData.addEventListener('input', () => {
        valEnt.setAttribute('type', 'text');

        if (sysNum(getData.value) != true) {
            const s = getData.value;
            getData.value = s.substr(0, s.length - 1);
        };
    });

};


// conversion

let fromData = document.querySelectorAll('select');
const BtnResult = document.querySelectorAll('button');
const texArea = document.querySelectorAll('textarea');

let firstSel = fromData.item(0).value;
let firstSel1 = fromData.item(1).value;
console.log(firstSel);
console.log(firstSel1);

fromData.item(0).addEventListener('change', () => {
    let i = 0;
    firstSel = fromData.item(0).value;
    firstSel1 = fromData.item(1).value;

    console.log(firstSel);
    console.log(firstSel1);
});


BtnResult.item(0).addEventListener('click', () => {

    let i = 0;
    while (i < 4) {
        texArea.item(i).textContent = "dsf";
        i++;
    }
});


const resCon = (fromNum, toNum)=>{

};

function convBin(data, base){
    return parseInt(data, base).toString(2);
}

// console.log(convBin(10, 10));