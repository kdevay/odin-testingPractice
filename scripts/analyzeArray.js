function getAverage(arr){
    let avg = 0;
    arr.forEach(num => avg += num);
    return avg / arr.length;
}

function getMax(arr){
    arr.slice().sort((a, b) => a < b ? -1 : 1);
    return parseInt(arr[arr.length - 1]);
}

function getMin(arr){
    arr.slice().sort((a, b) => a < b ? -1 : 1);
    return parseInt(arr[0]);
}

function analyzeArray(arr) {
    if (!arr) { return undefined }
    if (!arr.length) { return undefined }
    return {
        average: getAverage(arr),
        min: getMin(arr),
        max: getMax(arr),
        length: arr.length
    };
}

module.exports = analyzeArray;