"use-strict";

const operation = function (first, second, operator){
    
    first = parseInt(first);
    second = parseInt(second);
    if (operator === "add"){
        return first + second;
    }
    if (operator === "subtract"){
        return first - second;
    }
    if (operator === "multiply"){
        return first * second;
    }
    if (operator === "divide"){
        return first / second;
    }
};
module.exports = operation;