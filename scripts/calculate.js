const calculate = {
    add(a, b){
        return a + b;
    },
    subtract(a, b){
        return a - b;
    },
    divide(a, b){
        if (b === 0){
            throw new Error('Error: Division by zero is not allowed')
        }
        return a / b;
    },
    multiply(a, b){
        return a * b;
    },
}

module.exports = calculate;