function add(a, b){
    return ((Number)(a) + (Number)(b));
}

function subtract(a, b){
    return ((Number)(a) - (Number)(b));
}

function multiply(a, b){
    return ((Number)(a) * (Number)(b));
}

function divide(a, b){
    if(b === 0){
        return new Error("Cannot divide by zero");
    }
    return ((Number)(a) / (Number)(b));
}

export { add, subtract, multiply, divide }