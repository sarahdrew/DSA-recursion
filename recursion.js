// COUNTING SHEEP
//sheep with given mumber

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
// base to the power of exponent

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

const tri = function (num) {
    if (num <= 1) {
        return num;
    }
    return num + tri(num - 1);
}

//STRING SPLITTER
//don't use JS split function
const stringSplit = function (string, splitter) {
    const i = string.indexOf(splitter);

    //base case:
    if (i < 0) {
        return [string];
    }
    //recursive case
    return [sttring.slice(0, i), ...stringSplit(string.slice(i + 1), splitter)].join('');
}
console.log(stringSplit('30/30/3030', '/'));

//FIBONNACCI
const fibonnacci = function (number) {
    //base case:
    if (number === 1) {
        return [0, 1];
    }
    //recursive:
    else {
        let result = fibonnacci(number - 1);
        result.push(result[result.length - 1] + result[result.length - 2]);

        return result;
    }
}
console.log(fibonnacci(31))

//FACTORIAL
const factorial = function (number) {
    //base case:
    if (number === 1) {
        return number * 1;
    }
    //recursive:
    return num * factorial(number - 1)
}

console.log(factorial(8))

// MAZE QUESTIONS
let mazeArr = [
    [' ', ' ', ' ', '*', ' ', ' ', ' '],
    ['*', '*', ' ', '*', ' ', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ', '*', '*', '*', '*', '*', ' '],
    [' ', ' ', ' ', ' ', ' ', ' ', 'e']]

function outOfMaze(maze) {
    const path = function (column, row) {
        let pathTaken = [];
        //base case:
        if (maze[column][row] === 'e') {
            console.log(pathTaken);
            return `You have made it out of the maze at column ${column} and row ${row}`;
        }
        // recursive case:
        else if (maze[column][row] === '') {
            console.log('You are at column ' + column + ' and row ' + row);
        }
    }

    if (column < maze.length - 1 && maze[column][row] !== '*') {
        console.log('path R');
        pathTaken.push('R');
        path(column + 1, row);
    }
    if (row < maze[column].length - 1) {
        console.log('path D');
        pathTaken.push('D');
        path(column, row + 1);
    }
    if (maze[column][row] === '*' && maze[column - 1][row + 1] !== '*') {
        console.log('path LD');
        pathTaken.push('LD');
        path(column - 1, row + 1);
    }
    if (maze[column][row] === '*' && pathTaken[pathTaken.length - 1] === 'D') {
        console.log('path U');
        pathTaken.push('U');
        path(column, row - 1);
    }
}


//ANAGRAMS
const anagrams = function (word) {
    let results = [];
    //base case:
    if (word.length <= 1) {
        return [word];
    }
    //recursive case:
    const stringArray = word.split('');
    stringArray.forEach((letter, index) => {
        let charactersLeft = [...stringArray.slice(0, index), ...stringArray.slice(index + 1)].join('');
        const innerArrangements = anagrams(charactersLeft);
        innerArrangements.forEach(arrangement => {
            results.push(letter + arrangement);
        })
    })
    return results;

}
console.log(anagrams('example'));

//ORG CHART
//create org chart with hierarchy of whose boss is who

const facebook = [
    { name: 'Zuckerbug', boss: null },
    { name: 'Schroepfer', boss: 'Zuckerbug' },
    { name: 'Schrage', boss: 'Zuckerbug' },
    { name: 'Sandberg', boss: 'Zuckerbug' },
    { name: 'Bosworth', boss: 'Schroepfer' },
    { name: 'Zhao', boss: 'Schroepfer' },
    { name: 'Steve', boss: 'Bosworth' },
    { name: 'Kyle', boss: 'Bosworth' },
    { name: 'Andra', boss: 'Bosworth' },
    { name: 'Richie', boss: 'Zhao' },
    { name: 'Sofia', boss: 'Zhao' },
    { name: 'Jen', boss: 'Zhao' },
    { name: 'VanDyck', boss: 'Schrage' },
    { name: 'Sabrina', boss: 'VanDyck' },
    { name: 'Michelle', boss: 'VanDyck' },
    { name: 'Josh', boss: 'VanDyck' },
    { name: 'Swain', boss: 'Schrage' },
    { name: 'Blanch', boss: 'Swain' },
    { name: 'Tom', boss: 'Swain' },
    { name: 'Joe', boss: 'Swain' },
    { name: 'Goler', boss: 'Sandberg' },
    { name: 'Eddie', boss: 'Goler' },
    { name: 'Julie', boss: 'Goler' },
    { name: 'Annie', boss: 'Goler' },
    { name: 'Hernandez', boss: 'Sandberg' },
    { name: 'Rowi', boss: 'Hernandez' },
    { name: 'Inga', boss: 'Hernandez' },
    { name: 'Morgan', boss: 'Hernandez' },
    { name: 'Moissinac', boss: 'Sandberg' },
    { name: 'Amy', boss: 'Moissinac' },
    { name: 'Chuck', boss: 'Moissinac' },
    { name: 'Vinni', boss: 'Moissinac' },
    { name: 'kelly', boss: 'Sandberg' },
    { name: 'Eric', boss: 'kelly' },
    { name: 'Ana', boss: 'kelly' },
    { name: 'Wes', boss: 'kelly' }]

const orgChart = function (arr, boss, level) {
    let string = '';
    arr.filter(person => person.boss === boss).forEach(person => {
        string = string + ' ' + ' '.repeat(level * 4) + person.name + orgChart(arr, person.name, level + 1);
    });
    return string;
}

//BINARY REPRESENTATION
// write a function that prints out binary representation of a given number

const binaryConversion = function (number) {
    //base case:
    if (number < 1) {
        return '';
    }
    //recursive case:
    return binaryConversion(number / 2) + Math.floor(number % 2)
}