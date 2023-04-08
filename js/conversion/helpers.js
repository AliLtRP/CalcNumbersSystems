const BtnResult = document.querySelectorAll('button');
const texArea = document.querySelectorAll('textarea');


BtnResult.item(0).addEventListener('click', () => {
    const inputData = document.getElementById('inputConv').value;
    const optionVal = document.getElementById('selConv').value;
    texArea.item(0).textContent = convBin(inputData, optionVal);
    texArea.item(1).textContent = convDec(inputData, optionVal);
    texArea.item(2).textContent = convHex(inputData, optionVal);
    texArea.item(3).textContent = convOct(inputData, optionVal);
});

BtnResult.item(1).addEventListener('click', () => {
    texArea.item(0).textContent = '';
    texArea.item(1).textContent = '';
    texArea.item(2).textContent = '';
    texArea.item(3).textContent = '';
});

const resCon = (fromNum, toNum)=>{

};

function convBin(data, base){
    return parseInt(data, base).toString(2);
}

function convDec(data, base){
    return parseInt(data, base).toString(10);
}

function convHex(data, base){
    return parseInt(data, base).toString(16);
}

function convOct(data, base){
    return parseInt(data, base).toString(8);
}