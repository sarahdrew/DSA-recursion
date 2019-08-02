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