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

// check if number in hex form 
function isHex() {

}