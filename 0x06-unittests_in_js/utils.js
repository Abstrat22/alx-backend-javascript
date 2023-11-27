// utils.js
class Utils {
    static calculateNumber(type, a, b) {
        switch (type) {

            case "SUM":
                return ((Math.round(a)) + (Math.round(b)));
            case "SUBTRACT":
                return ((Math.round(a)) - (Math.round(b)));
    
            case "DIVIDE":
                //if b rounds to 0 return Error
                return Math.round(b) !== 0 ? ((Math.round(a)) / (Math.round(b))) : "Error";
        }
    }
}

module.exports = Utils;