module.exports = function reverse(number) {
    let result = '';
    number = String(Math.abs(number));
    for (let i = number.length - 1; i >= 0; i--) {
        result += number[i];
    }
    return Number(result);
}