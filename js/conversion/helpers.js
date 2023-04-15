const BtnResult = document.getElementById('but');
const BtnResult1 = document.getElementById('but1');
const texArea = document.querySelectorAll('textarea');


BtnResult.addEventListener('click', () => {
    const inputData = document.getElementById('inputConv').value;
    const optionVal = document.getElementById('selConv').value;
    texArea.item(0).textContent = convBin(inputData, optionVal);
    texArea.item(1).textContent = convDec(inputData, optionVal);
    texArea.item(2).textContent = convHex(inputData, optionVal);
    texArea.item(3).textContent = convOct(inputData, optionVal);
});

BtnResult1.addEventListener('click', () => {
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

function dataCheck(sysNum) {
    const valEnt = value_inp[0];
    const valEnt2 = value_inp[1];
    const getData = document.getElementById('inputConv');
    const getData2 = document.getElementById('input2');

    // getData2.addEventListener('input', () => {
    //     valEnt2.setAttribute('type', 'text');

    //     if (sysNum(getData2.value) != true) {
    //         const s = getData2.value;
    //         getData2.value = s.substr(0, s.length - 1);
    //     };
    // });

    getData.addEventListener('input', () => {
        valEnt.setAttribute('type', 'text');

        if (sysNum(getData.value) != true) {
            const s = getData.value;
            getData.value = s.substr(0, s.length - 1);
        };
    });

};
