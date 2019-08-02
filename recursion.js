// COUNTING SHEEP

const sheepJumpCount = function (numberOfSheep) {

    //base case:
    if (numberOfSheep === 0) {
        return 'All sheep have jumped over the fence. No sheep left.'
    }

    //general case:
    return 'Another sheep jumped over the fence ' + sheepJumpCount(numberOfSheep - 1);


}
console.log('sheep jump count:', sheepJumpCount(4));

//POWER CALCULATOR

const powerCalculator = function (base, exponent) {
    if (exponent < 0) {
        return 'exponent should be greater than 0.'

    }

    //base case:
    if (exponent === 1 || exponent === 0) {
        return base * 1;
    }

    //general case:
    else {
        return base * powerCalculator(base, exponent - 1);
    }

}

//REVERSE STRING
const reverseString = function (string) {
    //base case:
    if (string.length === 0) {
        return '';
    }
    const characterToEnd = string[0]
    return reverseString(string.slice(1)) + characterToEnd;

}

//NTH TRIANGULAR NUMBER

const tri = function (number) {
    if (num <= 1) {
        return num;
    }
    return num + tri(num - 1);
}

//STRING SPLITTER
const stringSplit = function (string, splitter) {
    const i = string.indexOf(splitter);

    //base case:
    if (i < 0) {
        return [string];
    }
    //recursive case
    return [sttring.slice(0, i), ...stringSplit(string.slice(i + 1), splitter)].join('');
}
console.log(stringSplit('30/30/30', '/'));