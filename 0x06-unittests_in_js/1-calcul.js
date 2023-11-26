// round a and b and perform 1 of three operations [SUM, SUBTRACT, DIVIDE]
function calculateNumber(type, a, b) {
    let value;
    if (type == "SUM") {
        value = ((Math.round(a)) + (Math.round(b)))
    }
    if (type == "SUBTRACT") {
        value = ((Math.round(a)) - (Math.round(b)))
    }
    if (type == "DIVIDE") {
        //if b rounds to 0 the values is set to Error
        value = Math.round(b) !== 0 ? ((Math.round(a)) / (Math.round(b))) : "Error";
    }
    return value;
}
module.exports = calculateNumber;
